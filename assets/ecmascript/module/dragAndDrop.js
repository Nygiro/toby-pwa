export default (el) => {
    let draggableElems = document.querySelectorAll('.btn-food');

    for ( let i=0; i < draggableElems.length; i++ ) {
        let draggableElem = draggableElems[i],
            draggie = new Draggabilly( draggableElem, {}),
            monster = document.querySelector('.img-monster'),
            target = draggableElem.getAttribute('data-target');

        draggie.on( 'dragMove', function( event, pointer, moveVector ) {
            if(target == 'monstre'){
                monster.classList.add('happyMonstre');
            } else {
                monster.classList.add('sadMonstre')
            }

            document.querySelector("#trash-recycle").classList.add('triggered');
            document.querySelector("#trash-not-recycle").classList.add('triggered');
        })
        draggie.on( 'dragEnd', function( event, pointer ) {
            let dropZoneQuery = "";

            switch(target){
                case 'monstre':
                    dropZoneQuery = "#visage"
                    break
                case 'recycle':
                    dropZoneQuery = "#trash-recycle"
                    break
                case 'not-recycle':
                    dropZoneQuery = "#trash-not-recycle"
                    break
            }

            let drop = document.querySelector(dropZoneQuery).getBoundingClientRect();

            if(target == 'monstre'){
                monster.classList.remove('happyMonstre');
            } else {
                monster.classList.remove('sadMonstre');
            }
            if(pointer.x > drop.left && pointer.x < drop.right && pointer.y > drop.top && pointer.y < drop.bottom){
                draggableElem.style ="display:none;";

                if(target == 'monstre'){
                    monster.classList.add('zoom');
                    monster.style="position:relative; z-index:50;";
                    setTimeout(function(){
                        monster.style = "";
                        document.querySelector('.video').style = "display:block;z-index:50;";
                        document.querySelector('video').play();
                    }, 300);
                    setTimeout(function(){
                        document.querySelector('.video').style="display:none;";
                        monster.style="position:relative; z-index:50;";
                        monster.classList.remove('zoom');
                        monster.style = "";
                    }, 3000);
                }

                if(target == 'recycle'){
                    document.querySelector('.flower').classList.add('triggered');
                }
            } else {
                draggableElem.style = "position: relative; touch-action: none;";

                let monsterPos = monster.getBoundingClientRect();

                if(target == "not-recycle" && pointer.x >  monsterPos.left && pointer.x < monsterPos.right && pointer.y > monsterPos.top && pointer.y < monsterPos.bottom){
                    document.querySelector('.pop-up').classList.add('triggered');
                }
            }
            document.querySelector("#trash-recycle").classList.remove('triggered');
            document.querySelector("#trash-not-recycle").classList.remove('triggered');          
        })
    }
}