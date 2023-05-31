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

      const shopTitle = document.createElement('h2');
      shopTitle.textContent = oneShopData.title;

      const references = document.createElement('a');
      references.href = '#';

      const phone = document.createElement('span');
      phone.innerHTML = `<span style="color: black; font-weight: 900">Phone: </span>` + oneShopData.phone;

      const email = document.createElement('span');
      email.innerHTML = `<span style="color: black; font-weight: 900">Email: </span>` + oneShopData.email;

      const address = document.createElement('span');
      address.innerHTML = `<span style="color: black; font-weight: 900">Address: </span>` + oneShopData.address;

      references.append(phone, email, address)

      shopContent.append(shopTitle, references)

      shopCard.append(shopContent)
   })
   return shopCard;
}

export default shopCard;