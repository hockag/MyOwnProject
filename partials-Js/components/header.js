document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    
    function getHeaderHeight() {
        if (header) {
            return header.offsetHeight;
        }
        return 0;
    }
    
    function setFixedHeader() {
        if (header) {
            header.classList.add('header--fixed');
            document.body.style.paddingTop = getHeaderHeight() + 'px';
        }
    }
    
    setFixedHeader();
    
    window.addEventListener('resize', () => {
        if (header) {
            document.body.style.paddingTop = getHeaderHeight() + 'px';
        }
    });
});