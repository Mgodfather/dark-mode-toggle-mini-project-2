const btn = document.querySelector('button')

// let darkMode;

// let currentMode = localStorage.getItem('theme') || true
// btn.addEventListener('click', () => {
    
//     document.body.classList.toggle('dark-theme')
    
//     if (document.body.classList.contains('dark-theme')) {
//         // console.log('dark');
//         darkMode = true
//     } else {
//         // console.log('light');
//         darkMode = false
//     }
    
//     localStorage.setItem('theme', darkMode)
    
    
//     console.log(currentMode);
    
// })


// if (currentMode === 'true') {
//     document.body.classList.add('dark-theme')
// }


let mode = JSON.parse(localStorage.getItem('theme'))

if (mode) {
    document.body.classList.add('dark-theme')
}

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', true)
    } else {
        localStorage.setItem('theme', false)
    }
})