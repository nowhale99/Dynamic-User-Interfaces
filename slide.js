const slides = document.querySelectorAll('div.slide')

let currentSlide

let ids=1
slides.forEach((slide)=>{
    slide.id=ids
    ids+=1
})

for(let i = 0; i<slides.length; i++){
    if(slides[i].classList.contains('active')){
        currentSlide=slides[i]
        document.getElementById(`radio${slides[i].id}`).checked=true
    }
}

const frame = document.getElementById('frame')

const defTransorm = 750
let transform = defTransorm

function right(){
    if(currentSlide.id<slides.length){
        for(let i = 0; i<slides.length; i++){
            if(slides[i].classList.contains('active')){
                slides[i].classList.remove('active')
                slides[i+1].classList.add('active')
                transform-=300
                frame.style=`transform: translateX(${transform}px)`
                currentSlide=slides[i+1]
                document.getElementById(`radio${slides[i+1].id}`).checked=true
                return
            }
        }
    } else {
        slides[0].classList.add('active')
        slides[slides.length-1].classList.remove('active')
        transform=defTransorm
        frame.style=`transform: translateX(${transform}px)`
        currentSlide=slides[0]
        document.getElementById(`radio1`).checked=true
    }
}



function left(){
    if(currentSlide.id>1){
        for(let i = 0; i<slides.length; i++){
            if(slides[i].classList.contains('active')){
                slides[i].classList.remove('active')
                slides[i-1].classList.add('active')
                transform+=300
                frame.style=`transform: translateX(${transform}px)`
                currentSlide=slides[i-1]
                document.getElementById(`radio${slides[i-1].id}`).checked=true
                return
            }
        }
    } else {
        slides[slides.length-1].classList.add('active')
        slides[0].classList.remove('active')
        transform=-defTransorm
        frame.style=`transform: translateX(${transform}px)`
        currentSlide=slides[slides.length-1]
        document.getElementById(`radio6`).checked=true
    }
}

document.getElementById('right').addEventListener('click', ()=>{right()})

document.getElementById('left').addEventListener('click', ()=>{left()})

function radio(btnId){
    const transformStep = 300

    slides.forEach(slide=>slide.classList.remove('active'))
    slides[btnId-1].classList.add('active')
    transform = defTransorm - (transformStep*(btnId-1))
    frame.style=`transform: translateX(${transform}px)`
    currentSlide=slides[btnId-1]
    console.log(btnId)
}

document.querySelectorAll('input').forEach(btn=>{
    const btnId = btn.id.slice(-1)
    btn.addEventListener('click', ()=>{radio(btnId)})
})

setInterval(()=>right(), 5000)