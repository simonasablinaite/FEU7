import shopCard from "./shop-card.js";

function shopList() {
   const shopsList = document.createElement('div');
   shopsList.classList.add('shops-list');

   shopsList.append(shopCard(), shopCard(), shopCard(), shopCard())
   return shopsList;
}

export default shopList;