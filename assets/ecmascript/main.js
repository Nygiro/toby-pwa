import Menu from './module/Menu'
import Submenu from './module/Submenu'
import DragAndDrop from './module/DragAndDrop'

(function () {
    'use strict'


    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./service-worker.js')
            .then(function() { console.log('Service Worker Registered'); });
    }

    DragAndDrop()

    document.addEventListener('click', (e) => {
        let el = e.target;

        if(el.classList.contains('btn-nav')){
            Menu(el);
        }

        if(el.classList.contains('btn-wear')){
            Submenu(el);
        }

        if(el.classList.contains('btn-item')){
            let wear = el.getAttribute('data-target');
            console.log(wear);
            document.querySelector('.img-monster').classList.toggle(wear);
        }

        if(el.classList.contains('close-popup')){
            document.querySelector('.pop-up').classList.remove('triggered');
        }

        if(el.classList.contains('btn-toy')){
            document.querySelector(".btn-balle").classList.toggle('triggered');
        }

    })
    
})()