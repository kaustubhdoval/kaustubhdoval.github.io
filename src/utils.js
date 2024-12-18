/* Makes it easier to dynamically import images */
export const getImageUrl = (path) => `/assets/${path}`;

document.addEventListener("mousemove", (e) => {
  const cursor = document.getElementById("glow-cursor");

  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  cursor.style.transform = "translate(-50%, -50%)";
});
