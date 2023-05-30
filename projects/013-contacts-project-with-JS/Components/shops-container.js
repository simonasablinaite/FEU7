import shopList from "./shop-list.js";
import title from "./title.js";

function shopsContainer() {
   const shopContainer = document.createElement('div');
   shopContainer.classList.add('shops-container');


   shopContainer.append(title, shopList)

   return shopContainer;
}

export default shopsContainer();