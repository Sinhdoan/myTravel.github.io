    const menuBars = document.querySelector('.menu-bars')
    const listItemHeader = document.querySelector('#header .nav .nav-list')
    const itemsHeader = document.querySelectorAll('.nav-item')
    isOpen = false
function start(){
    openListHeader()
    hideListHeader()
}

start()

function openListHeader(){
        if(menuBars){   
            menuBars.onclick = function(){
                isOpen = !isOpen 
                if(isOpen){
                    listItemHeader.style.display = 'block'
                   
                }else{
                    listItemHeader.style.display = 'none'
                }
            }
        }
}

function hideListHeader(){
    itemsHeader.forEach(function(itemHeader){
        itemHeader.onclick = function(){
           setTimeout(function(){
            isOpen = false
            listItemHeader.style.display = 'none'
           },200)
        }
    })
}