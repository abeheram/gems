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
      const secondDivLink = divs[1].querySelector("a");
    if (secondDivLink) {
      // Create the new div
        const newDiv = block.createElement("div");
        newDiv.className = "test-header-with-link";

        // Create the <h1> element
        const h1 = block.createElement("h1");

        // Create the <a> element and set its attributes
        const link = block.createElement("a");
        link.href = secondDivLink.href; // Use the href from the second div's <a>
        link.textContent = firstDivParagraph; // Set the text from the first div's <p>

        // Append the <a> to the <h1>
        h1.appendChild(link);

        // Append the <h1> to the new div
        newDiv.appendChild(h1);

        // Replace the first two divs with the new div
        block.replaceChild(newDiv, divs[1]);
        block.replaceChild(newDiv, divs[0]);
    }
    }
}
