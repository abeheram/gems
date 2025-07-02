export default function decorate(block) {
   const firstDiv = block.querySelector("div"); // Select the first <div> inside the block
    if (firstDiv) {
      firstDiv.classList.add("headertest"); // Add the class 'headertet' to the first <div>
    }
}
