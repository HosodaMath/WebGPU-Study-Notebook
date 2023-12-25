import { mat4, vec3 } from "gl-matrix";
import ParticleShader from "./shader/particle.wgsl?raw";
import ProbabilityMapShader from "./shader/probabilityMap.wgsl?raw"
import TextureImage from "./assets/ChristmasCard2024_1.png";
import "./sanitize.css";
import "./main.css";
/**
 * baseCode https://github.com/webgpu/webgpu-samples/tree/main
 * @returns 
 */
const main = async () => {
  const mainBody = document.body;
  const canvas = document.createElement("canvas");
  mainBody.appendChild(canvas);
  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    return;
  }

  const device = await adapter.requestDevice();
  const gl = canvas.getContext("webgpu");
  if (!gl) {
    return;
  }

  // const devicePixelRatio = window.devicePixelRatio;
  // canvas.width = canvas.clientWidth * devicePixelRatio;
  // canvas.height = canvas.clientHeight * devicePixelRatio;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const presentationFormat = navigator.gpu.getPreferredCanvasFormat();
  const numParticles = 50000;
  const particlePositionOffset = 0;
  const particleColorOffset = 4 * 4;
  const position = 3 * 4;
  const lifeTime = 1 * 4;
  const color = 4 * 4;
  const velocity = 3 * 4;
  const padding1 = 1 * 4;
  const zero = 0;
  const particleInstanceByteSize = position + lifeTime + color + velocity + padding1 + zero;
  gl.configure({
    device,
    format: presentationFormat,
    alphaMode: "opaque",
  });

  const particlesBuffer = device.createBuffer({
    size: numParticles * particleInstanceByteSize,
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE,
  });

  const renderPipeline = device.createRenderPipeline({
    layout: "auto",
    vertex: {
      module: device.createShaderModule({
        code: ParticleShader,
      }),
      entryPoint: "vs_main",
      buffers: [
        {
          arrayStride: particleInstanceByteSize,
          stepMode: "instance",
          attributes: [
            {
              // position
              shaderLocation: 0,
              offset: particlePositionOffset,
              format: "float32x3"
            },
            {
              // color
              shaderLocation: 1,
              offset: particleColorOffset,
              format: "float32x4",
            }
          ]
        },
        {
          arrayStride: 2 * 4,
          stepMode: "vertex",
          attributes: [
            {
              shaderLocation: 2,
              offset: 0,
              format: "float32x2"
            },
          ],
        }
      ],
    },
    fragment: {
      module: device.createShaderModule({
        code: ParticleShader,
      }),
      entryPoint: "fs_main",
      targets: [
        {
          format: presentationFormat,
          blend: {
            color: {
              srcFactor: "src-alpha",
              dstFactor: "one",
              operation: "add"
            },
            alpha: {
              srcFactor: "zero",
              dstFactor: "one",
              operation: "add",
            }
          }
        },
      ],
    },
    primitive: {
      topology: "triangle-list",
    },

    depthStencil: {
      depthWriteEnabled: false,
      depthCompare: "less",
      format: "depth24plus",
    }
  });

  const depthTexture = device.createTexture({
    size: [canvas.width, canvas.height],
    format: "depth24plus",
    usage: GPUTextureUsage.RENDER_ATTACHMENT,
  });

  const modelViewProjectionMatrix = 4 * 4 * 4;
  const right = 3 * 4;
  const up = 3 * 4;
  const padding2 = 4;
  const uniformBufferSize = modelViewProjectionMatrix + right + padding2 + up + padding2 + zero;
  const uniformBuffer = device.createBuffer({
    size: uniformBufferSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  const uniformBindGroup = device.createBindGroup({
    layout: renderPipeline.getBindGroupLayout(0),
    entries: [
      {
        binding: 0, resource: {
          buffer: uniformBuffer
        },
      },
    ],
  });



  const quadVertexBuffer = device.createBuffer({
    size: 6 * 2 * 4,
    usage: GPUBufferUsage.VERTEX,
    mappedAtCreation: true,
  });

  const vertexData = [
    -1.0, -1.0, +1.0, -1.0, -1.0, +1.0, -1.0, +1.0, +1.0, -1.0, +1.0, +1.0,
  ];
  new Float32Array(quadVertexBuffer.getMappedRange()).set(vertexData);
  quadVertexBuffer.unmap();

  let texture: GPUTexture;
  let textureWidth = 1;
  let textureHeight = 1;
  let numMipLevels = 1;
  {
    const img = document.createElement('img');
    img.src = new URL(TextureImage, import.meta.url).toString();
    await img.decode();
    const imageBitmap = await createImageBitmap(img);

    while (
      textureWidth < imageBitmap.width ||
      textureHeight < imageBitmap.height
    ) {
      textureWidth *= 2;
      textureHeight *= 2;
      numMipLevels++;
    }

    texture = device.createTexture({
      size: [imageBitmap.width, imageBitmap.height, 1],
      mipLevelCount: numMipLevels,
      format: 'rgba8unorm',
      usage:
        GPUTextureUsage.TEXTURE_BINDING |
        GPUTextureUsage.STORAGE_BINDING |
        GPUTextureUsage.COPY_DST |
        GPUTextureUsage.RENDER_ATTACHMENT,
    });

    device.queue.copyExternalImageToTexture(
      { source: imageBitmap },
      { texture: texture },
      [imageBitmap.width, imageBitmap.height]
    );
  }

  {
    const probabilityMapImportLevelPipeline = device.createComputePipeline({
      layout: 'auto',
      compute: {
        module: device.createShaderModule({ code: ProbabilityMapShader }),
        entryPoint: 'import_level',
      },
    });
    const probabilityMapExportLevelPipeline = device.createComputePipeline({
      layout: 'auto',
      compute: {
        module: device.createShaderModule({ code: ProbabilityMapShader }),
        entryPoint: 'export_level',
      },
    });

    const stride = 1 * 4;
    const padding3 = 3 * 4;
    const probabilityMapUBOBufferSize = stride + padding3 + zero;
    const probabilityMapUBOBuffer = device.createBuffer({
      size: probabilityMapUBOBufferSize,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    const buffer_a = device.createBuffer({
      size: textureWidth * textureHeight * 4,
      usage: GPUBufferUsage.STORAGE,
    });

    const buffer_b = device.createBuffer({
      size: textureWidth * textureHeight * 4,
      usage: GPUBufferUsage.STORAGE,
    });

    device.queue.writeBuffer(
      probabilityMapUBOBuffer,
      0,
      new Int32Array([textureWidth])
    );
    const commandEncoder = device.createCommandEncoder();
    for (let level = 0; level < numMipLevels; level++) {
      const levelWidth = textureWidth >> level;
      const levelHeight = textureHeight >> level;
      const pipeline =
        level == 0
          ? probabilityMapImportLevelPipeline.getBindGroupLayout(0)
          : probabilityMapExportLevelPipeline.getBindGroupLayout(0);
      const probabilityMapBindGroup = device.createBindGroup({
        layout: pipeline,
        entries: [
          {
            binding: 0,
            resource: { buffer: probabilityMapUBOBuffer },
          },
          {
            // buf_in
            binding: 1,
            resource: { buffer: level & 1 ? buffer_a : buffer_b },
          },
          {
            binding: 2,
            resource: { buffer: level & 1 ? buffer_b : buffer_a },
          },
          {
            binding: 3,
            resource: texture.createView({
              format: 'rgba8unorm',
              dimension: '2d',
              baseMipLevel: level,
              mipLevelCount: 1,
            }),
          },
        ],
      });

      if (level == 0) {
        const passEncoder = commandEncoder.beginComputePass();
        passEncoder.setPipeline(probabilityMapImportLevelPipeline);
        passEncoder.setBindGroup(0, probabilityMapBindGroup);
        passEncoder.dispatchWorkgroups(Math.ceil(levelWidth / 64), levelHeight);
        passEncoder.end();
      } else {
        const passEncoder = commandEncoder.beginComputePass();
        passEncoder.setPipeline(probabilityMapExportLevelPipeline);
        passEncoder.setBindGroup(0, probabilityMapBindGroup);
        passEncoder.dispatchWorkgroups(Math.ceil(levelWidth / 64), levelHeight);
        passEncoder.end();
      }
    }

    device.queue.submit([commandEncoder.finish()]);
  }

  const simulationParams = {
    simulate: true,
    deltaTime: 0.04,
  };

  const deltaTime = 1 * 4;
  const padding = 3 * 4;
  const seed = 4 * 4;
  const simulationUBOBufferSize = deltaTime + padding + seed + zero;
  const simulationUBOBuffer = device.createBuffer({
    size: simulationUBOBufferSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  const computePipeline = device.createComputePipeline({
    layout: 'auto',
    compute: {
      module: device.createShaderModule({
        code: ParticleShader,
      }),
      entryPoint: 'simulate',
    },
  });

  const computeBindGroup = device.createBindGroup({
    layout: computePipeline.getBindGroupLayout(0),
    entries: [
      {
        binding: 0,
        resource: {
          buffer: simulationUBOBuffer,
        },
      },
      {
        binding: 1,
        resource: {
          buffer: particlesBuffer,
          offset: 0,
          size: numParticles * particleInstanceByteSize,
        },
      },
      {
        binding: 2,
        resource: texture.createView(),
      },
    ],
  });

  const aspect = canvas.width / canvas.height;
  const projectionMatrix = mat4.create();
  const viewMatrix = mat4.create();
  const mvpMartix = mat4.create();
  mat4.perspective(projectionMatrix, (2 * Math.PI) / 5, aspect, 1, 100.0);

  const draw = () => {
    device.queue.writeBuffer(
      simulationUBOBuffer,
      0,
      new Float32Array([
        simulationParams.simulate ? simulationParams.deltaTime : 0.0,
        0.0,
        0.0,
        0.0,
        Math.random() * 100,
        Math.random() * 100,
        1 + Math.random(),
        1 + Math.random(),
      ])
    );

    mat4.identity(viewMatrix);
    mat4.translate(viewMatrix, viewMatrix, vec3.fromValues(0, 0, -3));
    mat4.rotateX(viewMatrix, viewMatrix, Math.PI * -0.2);
    mat4.multiply(mvpMartix, projectionMatrix, viewMatrix);

    device.queue.writeBuffer(
      uniformBuffer,
      0,
      new Float32Array([
        mvpMartix[0], mvpMartix[1], mvpMartix[2], mvpMartix[3],
        mvpMartix[4], mvpMartix[5], mvpMartix[6], mvpMartix[7],
        mvpMartix[8], mvpMartix[9], mvpMartix[10], mvpMartix[11],
        mvpMartix[12], mvpMartix[13], mvpMartix[14], mvpMartix[15],
        viewMatrix[0], viewMatrix[4], viewMatrix[8],
        0,
        viewMatrix[1], viewMatrix[5], viewMatrix[9],
        0,
      ])
    );

    const swapChainTexture = gl.getCurrentTexture();
    const renderPassDescriptor: GPURenderPassDescriptor = {
      colorAttachments: [
        {
          view: swapChainTexture.createView(),
          clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
          loadOp: "clear",
          storeOp: "store",
        },
      ],
      depthStencilAttachment: {
        view: depthTexture.createView(),
        depthClearValue: 1.0,
        depthLoadOp: "clear",
        depthStoreOp: "store",
      },
    };

    const commandEncoder = device.createCommandEncoder();
    {
      const passEncoder = commandEncoder.beginComputePass();
      passEncoder.setPipeline(computePipeline);
      passEncoder.setBindGroup(0, computeBindGroup);
      passEncoder.dispatchWorkgroups(Math.ceil(numParticles / 64));
      passEncoder.end();
    }
    {
      const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
      passEncoder.setPipeline(renderPipeline);
      passEncoder.setBindGroup(0, uniformBindGroup);
      passEncoder.setVertexBuffer(0, particlesBuffer);
      passEncoder.setVertexBuffer(1, quadVertexBuffer);
      passEncoder.draw(6, numParticles, 0, 0);
      passEncoder.end();
    }

    device.queue.submit([commandEncoder.finish()]);

    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  })

  draw();
}

window.addEventListener("load", main);