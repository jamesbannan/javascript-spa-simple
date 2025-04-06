import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const view = readFileSync(join(process.cwd(), 'src/view/home.html'), 'utf-8');

export default () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = view;

  const btnClick = divElement.querySelector("#btnClick");
  btnClick.addEventListener("click", () => {
    alert("clicked");
  });

  return divElement;
};
