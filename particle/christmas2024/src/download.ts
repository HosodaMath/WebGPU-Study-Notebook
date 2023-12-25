export const download = (mainBody: HTMLElement, canvas: HTMLCanvasElement) => {
  const button = document.createElement("a");
  button.className = "fullScreenButton";
  button.textContent = "ダウンロード";
  button.download = "canvas.png";
  mainBody.appendChild(button);
  button.addEventListener("click", () => {
    const base64 = canvas.toDataURL("image/png");
    button.href = base64;
  });
}