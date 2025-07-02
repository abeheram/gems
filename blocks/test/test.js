export default function decorate(block) {
   const firstDiv = block.querySelector("div"); // Select the first <div> inside the block
    if (firstDiv) {
      firstDiv.classList.add("headertest"); // Add the class 'headertet' to the first <div>
    }
  const divs = block.querySelectorAll("div");
  if (
      divs.length >= 2 &&
      divs[0].querySelector("p") &&
      divs[1].querySelector("p.button-container")
    ) {
      const firstDivParagraph = divs[0].querySelector("p")?.textContent || "";
      console.log(firstDivParagraph);
    }
}
