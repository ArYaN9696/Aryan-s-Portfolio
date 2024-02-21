function openMenu()
{
    const nav=document.querySelector('nav');
    nav.classList.toggle('open');
}

var typingEffect=new Typed(".multiText",{
    strings:["Competitive Coder","Software Developer"],
    loop:true,
    typeSpeed:100,
    backSpeed:90,
    backDelay:1500
  })