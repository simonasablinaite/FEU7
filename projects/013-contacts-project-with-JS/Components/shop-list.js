import shopCard from "./shop-card.js";

function shopList() {
   const shopsList = document.createElement('div');
   shopsList.classList.add('shops-list');

   shopsList.append(shopCard)
   return shopsList;
}

export default shopList();