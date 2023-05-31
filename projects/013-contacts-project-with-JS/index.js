import mapContainer from "./Components/map-container.js";
import shopsContainer from "./Components/shops-container.js";


function init() {
   const mainContainer = document.createElement('main');
   mainContainer.classList.add('container');

   document.body.append(mainContainer);
   mainContainer.append(shopsContainer(), mapContainer())

}

export default init();