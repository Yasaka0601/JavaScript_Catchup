const getScrollPercent = () => {
    // scrollHeight でページ全体の高さを取得 
    const pageHeight = document.documentElement.scrollHeight;

    // clientHeight 表示領域の高さを取得
    const viewHeight = document.documentElement.clientHeight;  

    // スクロール量
    const scrolled = window.scrollY;

    // スクロールされた割合
    const percentage = scrolled / (pageHeight - viewHeight) * 100;

    document.querySelector('#bar').style.width = `${percentage}%`;
};

window.addEventListener('scroll', getScrollPercent);