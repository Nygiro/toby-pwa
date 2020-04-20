export default (el) => {
    let menuName = '.submenu-' + el.getAttribute('data-target'),
        menuTarget = document.querySelector(menuName),
        menuAll = document.querySelectorAll('.submenu');
    console.log(menuName);
    menuAll.forEach((menu) => {
        if(menu.classList.contains('triggered'))
            menu.classList.remove('triggered');
    });
    menuTarget.classList.add('triggered');
}