window.revelar = ScrollReveal({
    reset:true
})
//texto ritmos do sul
revelar.reveal('.efeito-txt-sobre',{
    duration:2000,
    distance:'900px',
    origin:'left',
})
let delay = 0
for (let index = 1; index < 5; index++) {
    delay +=1000
    revelar.reveal(`.card${index}`, {
     duration: delay, // 2000 + 100
     distance: '300px'
    });
 }

 revelar.reveal('.slide', {
    duration: delay, // 2000 + 100
    distance: '900px'
   });
 
