export default function decorate(block) {
  /* change h1 and link to header with link*/
  const testBlock = document.querySelector(".test.block");
  if (testBlock) {
    const divs = testBlock.querySelectorAll("div");
    if (
      divs.length >= 2 &&
      divs[0].querySelector("p") &&
      divs[1].querySelector("p.button-container")
    ) {
      const firstDivParagraph = divs[0].querySelector("p")?.textContent || "";
      const secondDivLink = divs[1].querySelector("a");
      if (secondDivLink) {
        // Create the new div
        const newDiv = document.createElement("div");
        newDiv.className = "test-header-with-link";

        // Create the <h1> element
        const h1 = document.createElement("h1");

        // Create the <a> element and set its attributes
        const link = document.createElement("a");
        link.href = secondDivLink.href; // Use the href from the second div's <a>
        link.textContent = firstDivParagraph; // Set the text from the first div's <p>

        // Append the <a> to the <h1>
        h1.appendChild(link);

        // Append the <h1> to the new div
        newDiv.appendChild(h1);

        // Replace the first two divs with the new div
        testBlock.replaceChild(newDiv, divs[1]);
        testBlock.replaceChild(newDiv, divs[0]);
      }
    }
  }
}
