$('#left h1').textillate({ in: { effect: 'fadeInUp ' } });
$('#left h2 ').textillate({ in: { effect: 'fadeInUp ' } });


// gsap.to("#left p",{
//     left:"-30%",
// })

gsap.from("#para",{
    ease:Expo.easeInOut,
    left:"-109%",
    stagger:.3,
    duration:2,
    opacity:"100px"
  })
gsap.from("#btn",{
    ease:Expo.easeInOut,
    left:"-80%",
    stagger:.3,
    duration:2,
    opacity:"100px"
  })
gsap.from("#right",{
    ease:Expo.easeInOut,
    right:"-50%",
    stagger:.3,
    duration:2,
    opacity:"100px"
  })
  
   var tl=gsap.timeline({
    scrollTrigger:{
      trigger:"#three",
      start:"60% 100%",
      end:"70% 75%",
      scrub:2,
    }
   });
   tl.from("#three h1",{
    scale:1.3,
    opacity:0.7,
    duration:5
   })
   tl.from("#ingri",{
    scale:1.5,
    opacity:0,
    duration:5
   })
   tl.to("#remove",{
    opacity:0,delay:"30",
    duration:30
   })
   tl.to("#allimg",{
    left:"50%",
    transform:"translate(-50%,0%)",
    ease:Circ.easeIn,
    transition:"5s"
   })
   tl.to(".go",{
    left:"-70%",
    ease:Circ.easeOut,
   })
   

   var tl1=gsap.timeline({
    scrollTrigger:{
      trigger:"two",
      start:"100% 80%",
      end:"70% 30%",
      // markers:true,
      scrub:2
    }
   });
   tl1.from("#img1",{
    scale:1.2,  
    duration:5,
    opacity:0,
    delay:10
    
   })
   tl1.from("#img2",{
    scale:1.2,  
    duration:4,
    delay:2,
    opacity:0
    
   })
   tl1.from("#img3",{
    scale:1.2,  
    duration:2,
    opacity:0,
    delay:3,
    // onComplete(){
    //   $('#two p').textillate({ in: { effect: 'fadeInUp ' } });
    // }
   })


   var tl2=gsap.timeline({
    scrollTrigger:{
      trigger:"#four",
      start:"70% 60%",
      end:"40% 30%",
      scrub:2,
      // markers:true
    }
   })
   tl2.from("#five h5",{
     scale:1.3,
     duration:2,
     opacity:0,
     delay:1
   })
   tl2.from("#five h1",{
    scale:1.3,
    duration:5,
    opacity:0,
    delay:1
   })
  //  tl1.from("#img2",{
  //   bottom:'10%',
  //   ease:Expo.easeInOut,
  //   duration:1,
  //   stagger:.2
  //  })
   
  