const circle = document.querySelector('.circle')
const wrapper = document.querySelector('.wrapper')
const pause = document.getElementById('pause')
const reset = document.getElementById('reset')
let idAnimation
let count = 20
let check = true


const changeCircle = () => {
    if (count < 300) {
        circle.style.width = count + 'px'
        circle.style.height = count + 'px'
        count += 1
    } else if (count < 580) {
        circle.style.width = 600 - count + 'px'
        circle.style.height = 600 - count + 'px'
        count += 1
    } else if (count = 580) {
        count = 20
    }
    idAnimation = requestAnimationFrame(changeCircle)


}

pause.addEventListener('click', function () {
    if (check) {
        cancelAnimationFrame(idAnimation)
        this.textContent = 'Start'
        check = false

    } else {
        idAnimation = requestAnimationFrame(changeCircle)
        this.textContent = 'Pause'
        check = true
    }

})

reset.addEventListener('click', function () {
    cancelAnimationFrame(idAnimation)
    check = false
    count = 20
    pause.textContent = 'Start'
    circle.style.width = ''
    circle.style.height = ''
})

changeCircle()





