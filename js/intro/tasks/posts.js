const posts = [
   {
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
   },
   {
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
   },
   {
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
   },
   {
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
   },
   {
      title: "nesciunt quas odio",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
   },
   {
      title: "dolorem eum magni eos aperiam quia",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
   },
   {
      title: "magnam facilis autem",
      body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
   },
   {
      title: "dolorem dolore est ipsam",
      body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
   },
   {
      title: "nesciunt iure omnis dolorem tempora et accusantium",
      body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
   },
   {
      title: "optio molestias id quia eum",
      body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
   },
   {
      title: "et ea vero quia laudantium autem",
      body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
   },
   {
      title: "in quibusdam tempore odit est dolorem",
      body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
   },
   {
      title: "dolorum ut in voluptas mollitia et saepe quo animi",
      body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
   },
   {
      title: "voluptatem eligendi optio",
      body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
   },
   {
      title: "eveniet quod temporibus",
      body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
   },
   {
      title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
      body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
   },
   {
      title: "fugit voluptas sed molestias voluptatem provident",
      body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
   },
   {
      title: "voluptate et itaque vero tempora molestiae",
      body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
   },
   {
      title: "adipisci placeat illum aut reiciendis qui",
      body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
   },
   {
      title: "doloribus ad provident suscipit at",
      body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
   },
   {
      title: "asperiores ea ipsam voluptatibus modi minima quia sint",
      body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
   },
   {
      title: "dolor sint quo a velit explicabo quia nam",
      body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
   },
   {
      title: "maxime id vitae nihil numquam",
      body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
   },
   {
      title: "autem hic labore sunt dolores incidunt",
      body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
   },
   {
      title: "rem alias distinctio quo quis",
      body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
   }
];

/*
7. Naudojant posts masyvą, atlikti žemiau nurodytas užduotis ir atsakymus išvesti į konsolę. Visoms užduotis kurti funkciją ir jai, kaip parametrą, paduoti nurodytą masyvą.
7.1. Gauti pirmo masyvo nario reikšmę.
7.2. Gauti paskutinio masyvo nario reikšmę.
7.3. Gauti 15 masyvo nario reikšmę.
7.4. Gauti 13 masyvo nario reikšmę skaičiuojant nuo galo.
7.5. Gauti vidurinio masyvo nario reikšmę.
7.6. Gauti pirmų keturių masyvo narių reikšmes.
7.7. Gauti paskutinių penkių masyvo narių reikšmes.
7.8. Gauti nuo penkto iki penkiolikto masyvo narių reikšmes.
7.9. Gauti kas antro masyvo nario reikšmes.
7.10. Gauti pirmo ir paskutinio masyvo narių reikšmes.
*/

// 7.1:
// const firstPost = posts[0]; // vienas budas

function task71(postsData) { //kitas budas
   // console.log(postsData[0]); //vienas budas;
   console.log(postsData.at(0)); //kitas budas;
}
// task71(posts);

function task72(postsData) {
   console.log(postsData.at(-1));
}
// task72(posts);

function task73(postsData) {
   console.log(postsData.at(14));
}
// task73(posts);

function task74(postsData) {
   console.log(postsData[postsData.length - 14]);
}
// task74(posts);

function task75(postsData) {
   const middlePosts = Math.floor(postsData.length / 2);
   console.log(postsData[middlePosts]);
}
// task75(posts);

function task76(postsData) {
   console.log(postsData.slice(0, 4));
}
// task76(posts);

function task77(postsData) {
   console.log(postsData.slice(-5));
}
// task77(posts);

function task78(postsData) {
   console.log(postsData.slice(4, 15));
}
// task78(posts);

function task79(postsData) {
   postsData.map((post, index) => {
      if (index % 2 == 0) {
         console.log(post);
      }
   })
}
// task79(posts);

function task710(postsData) {
   task71(postsData);
   task72(postsData);
}
task710(posts);

/*
7.11. Gauti pirmo masyvo narį ir į konsolę išvesti jo property "title" reikšmę.
7.12. Gauti antro masyvo narį ir į konsolę išvesti jo property "body" reikšmę.
7.13. Gauti trečią masyvo narį ir į konsolę išvesti jo property "title" ir "body" reikšmes tokiu formatu: Post title is: 'post title' and the content is: 'post content'.
7.14. Išvesti visus masyvo narius į konsolę.
7.15. Išvesti visų masyvo narių property "title" į konsolę.
7.16. Išvesti visų masyvo narių property "body" į konsolę.
7.17. Išvesti visų masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
7.18. Išvesti pirmų keturių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
7.19. Išvesti paskutinių septynių masyvo narių property "title" ir "body" į konsolę tokiu formatu: Title: "post title". Content: "post content".
*/

function task711(postData) {
   console.log(postData[0].title);
}
// task711(posts);

function task712(postData) {
   console.log(postData[1].body);
}
// task712(posts);

function task713(postsData) {
   console.log(`Post title is: '${postsData[2].title}' and the content is: '${postsData[2].body}'.`);
}
// task713(posts);

function task714(postsData) {
   for (let i = 0; i < postsData.length; i++) {
      console.log(postsData[i]);
   }
}
// task714(posts);

function task715(postsData) {
   postsData.map(post => console.log(post.title));
}
// task715(posts);

function task716(postsData) {
   postsData.forEach(post => console.log(post.body));
}
// task716(posts);

function task717(postsData) {
   postsData.map(post => console.log(`Title: "${post.title}". Content: "${post.body}".`));
}
// task717(posts);

function task718(postsData) {
   const firstForEl = postsData.slice(0, 4);
   firstForEl.map(element => console.log(`Title: "${element.title}". Content: "${element.body}".`));
}
// task718(posts);

function task719(postsData) {
   const lastSevenEl = postsData.slice(-7);
   lastSevenEl.map(element => console.log(`Title: "${element.title}". Content: "${element.body}".`));
}
task719(posts);

/*
7.20. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" reikšmę, kaip li elementą, išvesti į ul elementą. 
7.21. HTML faile sukurti ul elementą ir kiekvieną masyvo nario property "title" ir "body" išvesti tokiu formatu: Title: "post title". Content: "post content".
*/

function task720(postsData) {
   const ul720DOM = document.querySelector('.task720');
   postsData.map(el => {
      const liEl = `<li>${el.title}</li>`
      ul720DOM.innerHTML += liEl;
   })
}
// task720(posts);

function task721(postsData) {
   const ul721DOM = document.querySelector('.task721');
   postsData.map(el => {
      const liEl = `<li>Title: "${el.title}". Content: "${el.body}"</li>`
      ul721DOM.innerHTML += liEl;
   })
}
task721(posts);

/*
7.22. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas prasideda raide "s".
7.23. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas baigiasi "t" arba "m".
7.24. HTML faile sukurti ul elementą ir tokiu pačiu formatu, kaip ankstesnėje užduotyje, išvesti tik tuos masyvo narius, kurių pavadinimas turi daugiau simbolių nei 15.
*/

function task722(postsData) {
   const ul722DOM = document.querySelector('.task722');
   postsData.map(el => {
      if (el.title.startsWith('s')) {
         const liEl = `<li>Title: "${el.title}". Content: "${el.body}"</li>`
         ul722DOM.innerHTML += liEl;
      }
   })
}
// task722(posts);

function task723(postsData) {
   const ul723DOM = document.querySelector('.task723');
   postsData.map(el => {
      if (el.title.endsWith('t') || el.title.endsWith('m')) {
         const liEl = `<li>Title: "${el.title}". Content: "${el.body}"</li>`
         ul723DOM.innerHTML += liEl;
      }
   })
}
// task723(posts);

function task724(postsData) {
   const ul723DOM = document.querySelector('.task723');
   const filteredPosts = postsData.filter(post => {
      if (post.title.length > 15) {
         const filteredPosts = `<li>Title: "${post.title}". Content: "${post.body}"</li>`
         ul723DOM.innerHTML += filteredPosts;
      }
   })
}
task724(posts);
