// 2) используя рекурсию необходимо заставить блок двигаться по странице. Создайте один большой блок и один маленький внутри него. 
// Задайте большому блоку position: relative, а малому absolute. Используя addEventListener изменяйте параметр позиции малого блока 
// (.style.left=`${переменная}px`). 

let change = 0
const elementToMove = document.querySelector('.the-small-one')

let positionChange = () => {
    change += 10
    elementToMove.style.left = `${change}px`
    elementToMove.style.top = `${change}px`
    if(change < 800) {
        positionChange()
    }
}

elementToMove.addEventListener('click',positionChange)