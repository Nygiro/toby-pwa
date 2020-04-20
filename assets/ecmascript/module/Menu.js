export default (el) => {
    let menuName = '.menu-' + el.getAttribute('data-menu'),
        menuTarget = document.querySelector(menuName),
        menuAll = document.querySelectorAll('.menu'),
        submenuAll = document.querySelectorAll('.submenu')
    console.log(menuName);
    menuAll.forEach((menu) => {
        if(menu.classList.contains('triggered'))
            menu.classList.remove('triggered');
    });
    submenuAll.forEach((menu) => {
        if(menu.classList.contains('triggered'))
            menu.classList.remove('triggered');
    });
    menuTarget.classList.add('triggered');
    if(document.querySelector('.btn-balle').classList.contains('triggered')){
        document.querySelector('.btn-balle').classList.remove('triggered')
    }
};