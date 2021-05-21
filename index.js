// theme
const icons = [...document.querySelectorAll('.theme-icon i')];

icons.forEach(icon=> {
  if(icon){
    icon.addEventListener('click', ()=>{
document.body.classList.toggle('dark');

  if(document.body.classList.contains('dark')){
    icon.classList.remove('fas', 'fa-moon');
    icon.classList.add('far', 'fa-sun');
    icon.style.color = 'white';
  }else{
    icon.classList.add('fas', 'fa-moon');
    icon.classList.remove('far', 'fa-sun');
        icon.style.color = '#222'
  }
})
  }
})

// Navigation
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-list')

hamburger.addEventListener('click', ()=>{
  menu.classList.toggle('open')
})

// Colors
const widget = document.querySelector('.widget');
const control = document.querySelector('.control');

widget.addEventListener('click', ()=>{
  control.classList.toggle('open')
})

const colors = [...document.querySelectorAll('.colors span')]
document.querySelector(':root').style.setProperty('--customColor', '#0044FF')

colors.forEach(color => {
  color.addEventListener('click', ()=>{
    const currentColor = color.dataset.id;
    document.querySelector(':root').style.setProperty('--customColor', currentColor)
  })
})

window.addEventListener('scroll', ()=>{
  control.classList.remove('open')
})




