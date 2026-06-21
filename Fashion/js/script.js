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
            translate: ['0 100vh', '0 0', '0 -100vh'] //translateプロパティ
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

