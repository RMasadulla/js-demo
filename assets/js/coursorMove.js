const cursorOuter = document.getElementById("cursor-outer");
const cursorInner = document.getElementById("cursor-inner");
const linksAndButtons = document.querySelectorAll("a, button");

// Cursor move effect
document.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;

  // Make the small cursor faster
  cursorInner.style.transform = `translate(${clientX - 5}px, ${clientY - 5}px)`;

  // Make the big cursor slower (trailing effect)
  setTimeout(() => {
    cursorOuter.style.transform = `translate(${clientX - 30}px, ${
      clientY - 30
    }px)`;
  }, 50);
});

// Hover effect to increase inner circle size
linksAndButtons.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursorInner.style.width = "20px";
    cursorInner.style.height = "20px";
  });
  element.addEventListener("mouseleave", () => {
    cursorInner.style.width = "10px";
    cursorInner.style.height = "10px";
  });
});
