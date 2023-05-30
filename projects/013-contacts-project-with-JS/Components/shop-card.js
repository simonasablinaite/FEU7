function shopCard() {
   const shopCard = document.createElement('div');
   shopCard.classList.add('shop-card');

   const shopContent = document.createElement('div');
   shopContent.classList.add('shop-content');


   const shopCardData = [
      {
         title: 'Parduotuve 1',
         phone: '+3706666666',
         email: 'shop1@parduotuve1.lt',
         address: 'Rotušės aikštė 1, Kaunas'
      },
      {
         title: 'Parduotuve 2',
         phone: '+3706666666',
         email: 'shop1@parduotuve2.lt',
         address: 'Rotušės aikštė 1, Kaunas'
      },
      {
         title: 'Parduotuve 3',
         phone: '+3706666666',
         email: 'shop1@parduotuve3.lt',
         address: 'Rotušės aikštė 1, Kaunas'
      },
      {
         title: 'Parduotuve 4',
         phone: '+3706666666',
         email: 'shop1@parduotuve4.lt',
         address: 'Rotušės aikštė 1, Kaunas'
      }
   ];

   shopCardData.forEach(oneShopData => {
      console.log(oneShopData);

      shopContent.append(oneShopData)
   })

   shopCard.append(shopContent);

   return shopCard;
}

export default shopCard();