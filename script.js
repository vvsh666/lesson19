const circle = document.querySelector('.circle')
const wrapper = document.querySelector('.wrapper')
let idAnimation


const changeCircle = () => {
    if (circle.clientWidth < wrapper.clientWidth && circle.clientHeight < wrapper.clientHeight) {
        circle.style.width = circle.clientWidth + 1 + 'px'
        circle.style.height = circle.clientHeight + 1 + 'px'
        console.log(circle.clientWidth);
    }
    console.log(circle.clientWidth);
    idAnimation = requestAnimationFrame(changeCircle)
}

changeCircle()





