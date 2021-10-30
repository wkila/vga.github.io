const burger = document.getElementById("burger"),
    background = document.getElementById("background-handler"),
    burgerMenu = document.getElementById("tab-menu")

burger.addEventListener("click", burgerClick)

function burgerClick(event) {
    let item = event.target
    
    if(item.classList.contains("burger-block") || item.classList.contains("line")) {
        burger.classList.toggle("handleActive")
        background.classList.toggle("handleActive")
        burgerMenu.classList.toggle("handleActive")
    }
}



const contactForm = document.getElementById("form-1"),
    btnsForm = document.querySelectorAll(".btn-contact")

contactForm.addEventListener("click", event => {
    let item = event.target

    if (item.classList.contains("cross-block") || item.classList.contains("cross")) {
        contactForm.classList.toggle("activeHandler")
    }
})

btnsForm.forEach(element => {
    element.addEventListener("click", (event) => {
        if (element.dataset.form === contactForm.id) {
            contactForm.classList.toggle("activeHandler")
            background.classList.toggle("activeHandler")
        }
    })
})


const links = document.querySelectorAll("li"),
    line = document.querySelector(".line-cross"),
    containerLins = document.querySelector("ul")

line.style.width = `${links[0].getBoundingClientRect().width}px`
line.style.transform = `translate(${links[0].offsetLeft - line.offsetLeft}px, 5px)`

containerLins.addEventListener("click", switcherLine)

function switcherLine(event) {
    const activeLink = event.target
    const widthActive = activeLink.getBoundingClientRect().width

    if (activeLink.nodeName === 'A') {
        line.style.width = `${widthActive}px`

        const width = activeLink.offsetLeft - line.offsetLeft
        line.style.transform = `translate(${width}px, 5px)`
    }
}

const App = {
    data() {
      return {
        isActive: false
      }
    }
}
  
  Vue.createApp(App).mount('#app')