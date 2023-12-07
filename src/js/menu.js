
function addMenuBurg(){
    
    let burgerMenu = document.querySelector('.header__burger-menu')

    let div = document.createElement('div');
    div.className = "header__burger-menu__item"

    let a = document.createElement('a');
    a.innerHTML = "Главная"
    a.setAttribute("href", "#")
    div.append(a)

    let a2 = document.createElement('a');
    a2.innerHTML = "Недвижимость"
    a2.setAttribute("href", "#")
    div.append(a2)

    let a3 = document.createElement('a');
    a3.innerHTML = "Новости"
    a3.setAttribute("href", "#")
    div.append(a3)

    burgerMenu.append(div)
}