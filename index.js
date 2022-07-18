const tabLinkEl = document.querySelectorAll('.tab-links')
const tabContentEl = document.querySelectorAll('.tab-content')
function openTab(tabname) {
    tabname.preventDefault
    for(let tabLink of tabLinkEl){
        // tabLink.classList.remove('active-link')
    }
    for(let tabContent of tabContentEl){
        tabContent.classList.remove('active-tab')
    }
    document.getElementById(tabname).classList.add('active-tab')
}

const sideMenuEl = document.getElementById('sidemenu')
function openmenu() {
    sideMenuEl.style.right = '0'
}

function closemenu() {
    sideMenuEl.style.right = '-200px'
}

