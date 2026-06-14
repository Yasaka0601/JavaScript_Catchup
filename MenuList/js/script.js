const menu = document.querySelector('#menu');

const lists = [
    {
        name : 'いちご',
        img : 'strawberry.jpg',
        price :  450,
    },
    {
        name : 'ライム',
        img : 'lime.jpg',
        price :  400,
    },
    {
        name : 'マンゴー',
        img : 'mango.jpg',
        price :  500,
    },
    {
        name : 'レモン',
        img : 'lemon.jpg',
        price :  400,
    },
    {
        name : 'イチジク',
        img : 'fig.jpg',
        price :  500,
    },
    {
        name : 'リンゴ',
        img : 'apple.jpg',
        price :  400,
    },
];

//console.log(lists[0].name);

//console.log(lists);
for(let i = 0; i < lists.length; i++){
    // const name = lists[i].name;
    // const img = lists[i].img;
    // const price = lists[i].price;
    const {name, img, price} = lists[i];

    const content = `<div><img src="images/${img}" alt="">
    <h2>${name}</h2><p>${price}円</p></div>`;
    menu.insertAdjacentHTML('beforeend', content);
}

//for(let i = 1; i <= 10; i++){
//  console.log(`${i}回目のこんにちは`);
//}
