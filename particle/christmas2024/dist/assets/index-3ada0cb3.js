(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();var C=typeof Float32Array<"u"?Float32Array:Array;Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});function V(){var e=new C(16);return C!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function le(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e}function ue(e,t,i){var r=t[0],n=t[1],a=t[2],o=t[3],s=t[4],f=t[5],m=t[6],g=t[7],v=t[8],h=t[9],M=t[10],_=t[11],b=t[12],P=t[13],B=t[14],O=t[15],d=i[0],l=i[1],u=i[2],c=i[3];return e[0]=d*r+l*s+u*v+c*b,e[1]=d*n+l*f+u*h+c*P,e[2]=d*a+l*m+u*M+c*B,e[3]=d*o+l*g+u*_+c*O,d=i[4],l=i[5],u=i[6],c=i[7],e[4]=d*r+l*s+u*v+c*b,e[5]=d*n+l*f+u*h+c*P,e[6]=d*a+l*m+u*M+c*B,e[7]=d*o+l*g+u*_+c*O,d=i[8],l=i[9],u=i[10],c=i[11],e[8]=d*r+l*s+u*v+c*b,e[9]=d*n+l*f+u*h+c*P,e[10]=d*a+l*m+u*M+c*B,e[11]=d*o+l*g+u*_+c*O,d=i[12],l=i[13],u=i[14],c=i[15],e[12]=d*r+l*s+u*v+c*b,e[13]=d*n+l*f+u*h+c*P,e[14]=d*a+l*m+u*M+c*B,e[15]=d*o+l*g+u*_+c*O,e}function fe(e,t,i){var r=i[0],n=i[1],a=i[2],o,s,f,m,g,v,h,M,_,b,P,B;return t===e?(e[12]=t[0]*r+t[4]*n+t[8]*a+t[12],e[13]=t[1]*r+t[5]*n+t[9]*a+t[13],e[14]=t[2]*r+t[6]*n+t[10]*a+t[14],e[15]=t[3]*r+t[7]*n+t[11]*a+t[15]):(o=t[0],s=t[1],f=t[2],m=t[3],g=t[4],v=t[5],h=t[6],M=t[7],_=t[8],b=t[9],P=t[10],B=t[11],e[0]=o,e[1]=s,e[2]=f,e[3]=m,e[4]=g,e[5]=v,e[6]=h,e[7]=M,e[8]=_,e[9]=b,e[10]=P,e[11]=B,e[12]=o*r+g*n+_*a+t[12],e[13]=s*r+v*n+b*a+t[13],e[14]=f*r+h*n+P*a+t[14],e[15]=m*r+M*n+B*a+t[15]),e}function pe(e,t,i){var r=Math.sin(i),n=Math.cos(i),a=t[4],o=t[5],s=t[6],f=t[7],m=t[8],g=t[9],v=t[10],h=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*n+m*r,e[5]=o*n+g*r,e[6]=s*n+v*r,e[7]=f*n+h*r,e[8]=m*n-a*r,e[9]=g*n-o*r,e[10]=v*n-s*r,e[11]=h*n-f*r,e}function me(e,t,i,r,n){var a=1/Math.tan(t/2),o;return e[0]=a/i,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,n!=null&&n!==1/0?(o=1/(r-n),e[10]=(n+r)*o,e[14]=2*n*r*o):(e[10]=-1,e[14]=-2*r),e}var ge=me;function ve(){var e=new C(3);return C!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function he(e,t,i){var r=new C(3);return r[0]=e,r[1]=t,r[2]=i,r}(function(){var e=ve();return function(t,i,r,n,a,o){var s,f;for(i||(i=3),r||(r=0),n?f=Math.min(n*i+r,t.length):f=t.length,s=r;s<f;s+=i)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}})();const I=`var<private> rand_seed : vec2<f32>;

fn init_rand(invocation_id : u32, seed : vec4<f32>) {
  rand_seed = seed.xz;
  rand_seed = fract(rand_seed * cos(35.456+f32(invocation_id) * seed.yw));
  rand_seed = fract(rand_seed * cos(41.235+f32(invocation_id) * seed.xw));
}

fn rand() -> f32 {
  rand_seed.x = fract(cos(dot(rand_seed, vec2<f32>(23.14077926, 232.61690225))) * 136.8168);
  rand_seed.y = fract(cos(dot(rand_seed, vec2<f32>(54.47856553, 345.84153136))) * 534.7645);
  return rand_seed.y;
}


struct RenderParams {
  modelViewProjectionMatrix : mat4x4<f32>,
  right : vec3<f32>,
  up : vec3<f32>
}
@binding(0) @group(0) var<uniform> render_params : RenderParams;

struct VertexInput {
  @location(0) position : vec3<f32>,
  @location(1) color : vec4<f32>,
  @location(2) quad_pos : vec2<f32>, 
}

struct VertexOutput {
  @builtin(position) position : vec4<f32>,
  @location(0) color : vec4<f32>,
  @location(1) quad_pos : vec2<f32>, 
}

@vertex
fn vs_main(in : VertexInput) -> VertexOutput {
  var quad_pos = mat2x3<f32>(render_params.right, render_params.up) * in.quad_pos;
  var position = in.position + quad_pos * 0.01;
  var out : VertexOutput;
  out.position = render_params.modelViewProjectionMatrix * vec4<f32>(position, 1.0);
  out.color = in.color;
  out.quad_pos = in.quad_pos;
  return out;
}


@fragment
fn fs_main(in : VertexOutput) -> @location(0) vec4<f32> {
  var color = in.color;
  color.a = color.a * max(1.0 - length(in.quad_pos), 0.0);
  return color;
}

struct SimulationParams {
  deltaTime : f32,
  seed : vec4<f32>,
}

struct Particle {
  position : vec3<f32>,
  lifetime : f32,
  color    : vec4<f32>,
  velocity : vec3<f32>,
}

struct Particles {
  particles : array<Particle>,
}

@binding(0) @group(0) var<uniform> sim_params : SimulationParams;
@binding(1) @group(0) var<storage, read_write> data : Particles;
@binding(2) @group(0) var texture : texture_2d<f32>;

@compute @workgroup_size(64)
fn simulate(@builtin(global_invocation_id) global_invocation_id : vec3<u32>) {
  let idx = global_invocation_id.x;

  init_rand(idx, sim_params.seed);

  var particle = data.particles[idx];

  particle.velocity.z = particle.velocity.z - sim_params.deltaTime * 0.5;
  particle.position = particle.position + sim_params.deltaTime * particle.velocity;
  particle.lifetime = particle.lifetime - sim_params.deltaTime;
  particle.color.a = smoothstep(0.0, 0.5, particle.lifetime);

  if (particle.lifetime < 0.0) {
    var coord : vec2<i32>;
    for (var level = u32(textureNumLevels(texture) - 1); level > 0; level--) {
      let probabilites = textureLoad(texture, coord, level);
      let value = vec4<f32>(rand());
      let mask = (value >= vec4<f32>(0.0, probabilites.xyz)) & (value < probabilites);
      coord = coord * 2;
      coord.x = coord.x + select(0, 1, any(mask.yw)); // x  y
      coord.y = coord.y + select(0, 1, any(mask.zw)); // z  w
    }
    let uv = vec2<f32>(coord) / vec2<f32>(textureDimensions(texture));
    particle.position = vec3<f32>((uv - 0.5) * 3.0 * vec2<f32>(1.0, -1.0), 0.0);
    particle.color = textureLoad(texture, coord, 0);
    particle.velocity.x = (rand() - 0.5) * 0.1;
    particle.velocity.y = (rand() - 0.5) * 0.1;
    particle.velocity.z = rand() * 0.3;
    particle.lifetime = 0.5 + rand() * 3.0;
  }

  data.particles[idx] = particle;
}
`,J=`struct UBO {
  width : u32,
}

struct Buffer {
  weights : array<f32>,
}

@binding(0) @group(0) var<uniform> ubo : UBO;
@binding(1) @group(0) var<storage, read> buf_in : Buffer;
@binding(2) @group(0) var<storage, read_write> buf_out : Buffer;
@binding(3) @group(0) var tex_in : texture_2d<f32>;
@binding(3) @group(0) var tex_out : texture_storage_2d<rgba8unorm, write>;

@compute @workgroup_size(64)
fn import_level(@builtin(global_invocation_id) coord : vec3<u32>) {
  _ = &buf_in;
  let offset = coord.x + coord.y * ubo.width;
  buf_out.weights[offset] = textureLoad(tex_in, vec2<i32>(coord.xy), 0).w;
}

@compute @workgroup_size(64)
fn export_level(@builtin(global_invocation_id) coord : vec3<u32>) {
  if (all(coord.xy < vec2<u32>(textureDimensions(tex_out)))) {
    let dst_offset = coord.x    + coord.y    * ubo.width;
    let src_offset = coord.x*2u + coord.y*2u * ubo.width;

    let a = buf_in.weights[src_offset + 0u];
    let b = buf_in.weights[src_offset + 1u];
    let c = buf_in.weights[src_offset + 0u + ubo.width];
    let d = buf_in.weights[src_offset + 1u + ubo.width];
    let sum = dot(vec4<f32>(a, b, c, d), vec4<f32>(1.0));

    buf_out.weights[dst_offset] = sum / 4.0;

    let probabilities = vec4<f32>(a, a+b, a+b+c, sum) / max(sum, 0.0001);
    textureStore(tex_out, vec2<i32>(coord.xy), probabilities);
  }
}
`,_e="/assets/ChristmasCard2024_1-181ff7d0.png";const xe=async()=>{const e=document.body,t=document.createElement("canvas");e.appendChild(t);const i=await navigator.gpu.requestAdapter();if(!i)return;const r=await i.requestDevice(),n=t.getContext("webgpu");if(!n)return;t.width=window.innerWidth,t.height=window.innerHeight;const a=navigator.gpu.getPreferredCanvasFormat(),o=5e4,s=0,f=4*4,m=3*4,g=1*4,v=4*4,h=3*4,M=1*4,_=0,b=m+g+v+h+M+_;n.configure({device:r,format:a,alphaMode:"opaque"});const P=r.createBuffer({size:o*b,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.STORAGE}),B=r.createRenderPipeline({layout:"auto",vertex:{module:r.createShaderModule({code:I}),entryPoint:"vs_main",buffers:[{arrayStride:b,stepMode:"instance",attributes:[{shaderLocation:0,offset:s,format:"float32x3"},{shaderLocation:1,offset:f,format:"float32x4"}]},{arrayStride:2*4,stepMode:"vertex",attributes:[{shaderLocation:2,offset:0,format:"float32x2"}]}]},fragment:{module:r.createShaderModule({code:I}),entryPoint:"fs_main",targets:[{format:a,blend:{color:{srcFactor:"src-alpha",dstFactor:"one",operation:"add"},alpha:{srcFactor:"zero",dstFactor:"one",operation:"add"}}}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!1,depthCompare:"less",format:"depth24plus"}}),O=r.createTexture({size:[t.width,t.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT}),d=4*4*4,l=3*4,u=3*4,c=4,Q=d+l+c+u+c+_,F=r.createBuffer({size:Q,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),Z=r.createBindGroup({layout:B.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:F}}]}),A=r.createBuffer({size:6*2*4,usage:GPUBufferUsage.VERTEX,mappedAtCreation:!0}),ee=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1];new Float32Array(A.getMappedRange()).set(ee),A.unmap();let L,E=1,z=1,R=1;{const G=document.createElement("img");G.src=new URL(_e,import.meta.url).toString(),await G.decode();const w=await createImageBitmap(G);for(;E<w.width||z<w.height;)E*=2,z*=2,R++;L=r.createTexture({size:[w.width,w.height,1],mipLevelCount:R,format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),r.queue.copyExternalImageToTexture({source:w},{texture:L},[w.width,w.height])}{const G=r.createComputePipeline({layout:"auto",compute:{module:r.createShaderModule({code:J}),entryPoint:"import_level"}}),w=r.createComputePipeline({layout:"auto",compute:{module:r.createShaderModule({code:J}),entryPoint:"export_level"}}),S=1*4,x=3*4,ce=S+x+_,Y=r.createBuffer({size:ce,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),j=r.createBuffer({size:E*z*4,usage:GPUBufferUsage.STORAGE}),k=r.createBuffer({size:E*z*4,usage:GPUBufferUsage.STORAGE});r.queue.writeBuffer(Y,0,new Int32Array([E]));const q=r.createCommandEncoder();for(let U=0;U<R;U++){const X=E>>U,$=z>>U,de=U==0?G.getBindGroupLayout(0):w.getBindGroupLayout(0),K=r.createBindGroup({layout:de,entries:[{binding:0,resource:{buffer:Y}},{binding:1,resource:{buffer:U&1?j:k}},{binding:2,resource:{buffer:U&1?k:j}},{binding:3,resource:L.createView({format:"rgba8unorm",dimension:"2d",baseMipLevel:U,mipLevelCount:1})}]});if(U==0){const T=q.beginComputePass();T.setPipeline(G),T.setBindGroup(0,K),T.dispatchWorkgroups(Math.ceil(X/64),$),T.end()}else{const T=q.beginComputePass();T.setPipeline(w),T.setBindGroup(0,K),T.dispatchWorkgroups(Math.ceil(X/64),$),T.end()}}r.queue.submit([q.finish()])}const te={simulate:!0,deltaTime:.04},re=1*4,ne=3*4,ie=4*4,ae=re+ne+ie+_,N=r.createBuffer({size:ae,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),D=r.createComputePipeline({layout:"auto",compute:{module:r.createShaderModule({code:I}),entryPoint:"simulate"}}),oe=r.createBindGroup({layout:D.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:N}},{binding:1,resource:{buffer:P,offset:0,size:o*b}},{binding:2,resource:L.createView()}]}),se=t.width/t.height,W=V(),y=V(),p=V();ge(W,2*Math.PI/5,se,1,100);const H=()=>{r.queue.writeBuffer(N,0,new Float32Array([te.deltaTime,0,0,0,Math.random()*100,Math.random()*100,1+Math.random(),1+Math.random()])),le(y),fe(y,y,he(0,0,-3)),pe(y,y,Math.PI*-.2),ue(p,W,y),r.queue.writeBuffer(F,0,new Float32Array([p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8],p[9],p[10],p[11],p[12],p[13],p[14],p[15],y[0],y[4],y[8],0,y[1],y[5],y[9],0]));const w={colorAttachments:[{view:n.getCurrentTexture().createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:O.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}},S=r.createCommandEncoder();{const x=S.beginComputePass();x.setPipeline(D),x.setBindGroup(0,oe),x.dispatchWorkgroups(Math.ceil(o/64)),x.end()}{const x=S.beginRenderPass(w);x.setPipeline(B),x.setBindGroup(0,Z),x.setVertexBuffer(0,P),x.setVertexBuffer(1,A),x.draw(6,o,0,0),x.end()}r.queue.submit([S.finish()]),requestAnimationFrame(H)};window.addEventListener("resize",()=>{t.width=window.innerWidth,t.height=window.innerHeight}),H()};window.addEventListener("load",xe);
