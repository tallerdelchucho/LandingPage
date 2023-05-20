window.addEventListener('load',function(){
    const header = document.getElementById('header');
    const main = document.getElementById('main');

    function setMainPaddingTop(){
        const headerHeight = header.offsetHeight;
        main.style.paddingTop = headerHeight + 'px';
    }

    setMainPaddingTop();
    window.addEventListener('resize',setMainPaddingTop);
});