let nav = document.getElementById('ul');
let menu = document.getElementById('menu');
menu.addEventListener('click',(e)=>{
  e.preventDefault()
  nav.classList.toggle('active');
  menu.classList.toggle('active');
})

let links = document.querySelectorAll('#na-bar #ul li a');
links.forEach((link)=>{
  link.addEventListener('click',()=>{
    nav.classList.remove('active')
    menu.classList.remove('active');
  })
})
/*nav show end*/

let header = document.querySelector('#na-bar');
window.addEventListener('scroll',()=>{
  if(window.scrollY > 100){
    header.style.backgroundColor = '#1F242D';
  } else {
    header.style.backgroundColor = 'transparent';
  }
})
//active header bg end
//active href start
let item = document.querySelectorAll('#na-bar #ul li a');
let section = document.querySelectorAll('section');
window.addEventListener('scroll',()=>{
  section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    
    
    if (top >= offset &&  top < offset + height) {
      item.forEach(link =>{
        link.classList.remove('active');
        let cl = document.querySelector(`#na-bar #ul li a[href="#${id}"]`).classList.add('active')
        
      })
    }
  })
})
//active href end
//form send

document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault(); // পেজ রিফ্রেশ বন্ধ

  const formData = {
    name: this.name.value,
    email: this.email.value,
    message: this.message.value
  };

  try {
    const res = await fetch('/send_email', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    if (data.success) {
      alert(data.message);   // একই পেজে এলার্ট দেখাবে
      this.reset();          // ফর্ম খালি করতে চাইলে
    } else {
      alert('Email failed!');
    }
  } catch (err) {
    alert('Server error: ' + err.message);
  }
});
