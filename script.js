const input = document.querySelector('input')
const p = document.querySelector('p')

const debounce = (fn, ms) => {
    let timeout;
    return function () {
        const fnCall = () => { fn.apply(this, arguments) }
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms)
    };
}

const changeP = debounce(() => {
    p.textContent = input.value
}, 300)

input.addEventListener('input', changeP)


