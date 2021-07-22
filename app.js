const menu = document.querySelectorAll('.menu-topo a[href^="#"] ')
const topo = document.getElementById('topo')
const menuTopo = document.getElementById('topoMenu')  
console.log(topo)


const scrollTo = e => {
    e.preventDefault()
    const elemento = e.target
    const id = elemento.getAttribute('href')
    const to = document.querySelector(id).offsetTop

    window.scroll({
        top: to,
        behavior: "smooth"
    })
}

menu.forEach(item => {
    item.addEventListener('click', scrollTo)
})

topo.addEventListener('click', e => {
console.log(menuTopo.offsetTop)
window.scroll({
    top: 0,
    behavior: "smooth"
})
//console.log(menuTopo)
})
