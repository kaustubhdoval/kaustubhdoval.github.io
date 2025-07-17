/* Makes it easier to dynamically import images */
const images = import.meta.glob(
  "/src/assets/**/*.{png,jpg,jpeg,gif,svg,webp}",
  {
    eager: true,
    import: "default",
  }
);

export const getImageUrl = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // Try different possible paths
  const possiblePaths = [
    `/src/assets/${cleanPath}`,
    `/src/assets/${path}`, // if path already includes leading slash
  ];

  for (const possiblePath of possiblePaths) {
    if (images[possiblePath]) {
      return images[possiblePath];
    }
  }

  console.warn(`Image not found: ${path}`);
  return null; // or a fallback image
};

/* Mouse Glow Effect */
document.addEventListener("mousemove", (e) => {
  const cursor = document.getElementById("glow-cursor");

  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  cursor.style.transform = "translate(-50%, -50%)";
});
