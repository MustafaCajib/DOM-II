// Your code goes here
const body = document.querySelector('body');
body.addEventListener('dblclick', (event) => {
  body.style.backgroundColor = "cornflowerblue";
});





const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseenter", function(){
    logo.style.transform = "scale(2.0)";
    logo.style.transiton = "transform 1s";
    logo.style.color = "dodgerblue";
  });
  logo.addEventListener("mouseleave", function(){
      logo.style.transform = "scale(1.0)";
      logo.style.transiton =  "transform 1s";
  });
  

  const funBus = document.querySelector(".img-content img");
funBus.addEventListener("keyup", function(){
   funBus.style.transform = "scale(1.5)";
    funBus.style.transiton = "transform 1s";
});

funBus.addEventListener("mouseout", function(){
    funBus.style.transform = "scale(1.0)";
    funBus.style.transiton =  "transform 1s";
});


  const foot = document.querySelector('footer');
foot.addEventListener("scroll", function(){
    foot.style.backgroundColor = 'hotpink';
});



  const bottomHeading = document.querySelector('.content-destination h2');
  bottomHeading.addEventListener('contextmenu', (event) => {
   event.preventDefault();
   event.target.textContent = 'dnd';
  });

  const bigimg = document.querySelector('.intro');
  bigimg.addEventListener('click', function(){
      bigimg.style.color = 'hotpink'

  });

  const stopNav = document.querySelector('destination');
  stopNav.addEventListener('click', (event) => {
     alert('stop clicking me!');
      event.preventDefault();
  })

  const size = document.querySelector("btn");
  size.addEventListener("load", function(){
      size.style.transform = 'scale (2.0)';
     size.style.transiton = 'transform 1s';
  
  });
