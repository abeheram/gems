import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  let headerText = ''; // Variable to store the header text

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);

    while (row.firstElementChild) li.append(row.firstElementChild);

    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'cards-card-image';
      } else {
        div.className = 'cards-card-body';

        // Check if the div contains a <p> tag and extract its text
        const pTag = div.querySelector('p');
        if (pTag) {
          headerText = pTag.textContent.trim(); // Store the text content as the header
        }
      }
    });

    // If the current <li> does not have a header, prepend the headerText
    if (!li.querySelector('.cards-card-body p')) {
      const header = document.createElement('h3');
      header.textContent = headerText;
      li.prepend(header);
    }

    ul.append(li);
  });

  ul.querySelectorAll('picture > img').forEach((img) => {
    const optimizedPic = createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }]);
    moveInstrumentation(img, optimizedPic.querySelector('img'));
    img.closest('picture').replaceWith(optimizedPic);
  });

  block.textContent = '';
  block.append(ul);
}
