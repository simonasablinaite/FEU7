
import shopsContainer from "./shops-container.js";
import mapContainer from "./map-container.js";

function main() {
   const mainContainer = document.createElement('main');
   mainContainer.classList.add('container');

   document.body.append(mainContainer);
   mainContainer.append(shopsContainer, mapContainer)

}

export default main();