/*
ローディングからの画面遷移
=============================*/

//loadingの要素を取得
const loadingAreaGray = document.querySelector('#loading');

//loading-screenの要素を取得
const loadingAreaGreen = document.querySelector('#loading-screen');

//Loading pの要素を取得
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
    //ローディング中
    loadingAreaGray.animate(
        {
            opacity: [1, 0],  //不透明度を１から０にする
            visibility: 'hidden',  //アニメーション終了時に要素を非表示
        },
        {
            duration: 2000, //アニメーションの再生時間 2000ミリ秒（２秒）
            delay: 1200, //アニメーションの開始を遅らせる時間 1200ミリ秒（１.２秒）
            easing: 'ease', //アニメーションが変化するタイミング。開始、終了で緩やかに変化
            fill: 'forwards', //アニメーションの再生前後の状態。
        }
    );

    //ローディング中（薄緑色スクリーン）
    loadingAreaGreen.animate(
        {
            translate: ['0 100vh', '0 0', '0 -100vh'] //translateプロパティ、下から上に出したり、横から出したり指定。
        },
        {
            duration: 2000, //アニメーションの再生時間 2000ミリ秒（２秒）
            delay: 800, //アニメーションの開始を遅らせる時間 800ミリ秒（0.8秒）
            easing: 'ease', //アニメーションが変化するタイミング。開始、終了で緩やかに変化
            fill: 'forwards', //アニメーションの再生前後の状態。
        }
    )

    //ローディング中テキスト
    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8
            },
            {
                opacity: 0,
                offset: 1
            },
        ],
        {
            duration: 1200, //アニメーションの再生時間 1200ミリ秒（1.2秒）
            easing: 'ease', //アニメーションが変化するタイミング。開始、終了で緩やかに変化
            fill: 'forwards', //アニメーションの再生前後の状態。
        }
    )
});

/*
画像ギャラリー
================================= */
//大きい画像の要素を取得
const mainImage = document.querySelector('.gallery-image img');

//サムネイル画像の要素を取得
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');

// for(let i = 0; i < thumbImages.length; i++) {
//     thumbImages[i].addEventListener('mouseover', (event) => {
//         //console.log(event.target.src);
//         mainImage.src = event.target.src;
//         mainImage.animate({opacity: [0, 1]}, 500);
//     })
//}

thumbImages.forEach((thumbImage) => {
    //console.log(thumbImage);
        thumbImage.addEventListener('mouseover', (event) => {
        mainImage.src = event.target.src;
        mainImage.animate({opacity: [0, 1]}, 500);
    });
});

// const animals = ['猫', '🐂', '虎', 'うさぎ'];

// // animals.forEach((animal) => {
// //     console.log(animal);
// // })

// const showAnimals = (animal) => {
//     console.log(animal);
// }

// animals.forEach(showAnimals);

/*
メニューボタン
=======================*/
//HTMLの各要素を取得
const menuOpen = document.querySelector('#menu-open');
const menuClose = document.querySelector('#menu-close');
const menuPanel = document.querySelector('#menu-panel');
const menuItems = document.querySelectorAll('#menu-panel li');
//メニューボタンの動きの詳細
const menuOptions = {
    duration: 1400, //アニメーションの再生時間 1400ミリ秒（1.4秒）
    easing: 'ease', //アニメーションが変化するタイミング。開始、終了で緩やかに変化
    fill: 'forwards', //アニメーションの再生前後の状態。
}



//メニューを開く
menuOpen.addEventListener('click', () => {
    //console.log('メニューを開く');
    //
    menuPanel.animate({translate: ['100vw', 0]}, menuOptions);//translateプロパティ、下から上に出したり、横から出したり指定。

    //リンクを一つ一つ順に表示
    menuItems.forEach((menuItem, index) => {
        console.log(`${index}番目のリスト`);
        menuItem.animate(
            {
                opacity: [0, 1],
                translate: ['2rem', 0],
            },
            {
                duration: 2400, //アニメーションの再生時間 2400ミリ秒（2.4秒）
                delay: 300 * index,
                easing: 'ease', //アニメーションが変化するタイミング。開始、終了で緩やかに変化
                fill: 'forwards', //アニメーションの再生前後の状態。
            }
        );
    });
});

//メニューを閉じる
menuClose.addEventListener('click', () => {
    menuPanel.animate({translate: [0, '100vw']}, menuOptions);
    menuItems.forEach((menuItem) => {
        menuItem.animate({opacity: [1, 0]}, menuOptions);
    })
})