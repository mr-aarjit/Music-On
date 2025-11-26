let header_logo = document.getElementById('header-logo');
let home_btn =  document.getElementById("first-anchor");


document.addEventListener("click", function(){
    const music = this.getElementById("bg-song");
    music.play()
})


header_logo.onclick  = header_logo_onclick;



function header_logo_onclick(){
    var audio = new Audio('ipl.mp3');
    audio.play();
}




function Home_btn_onclick(){
    window.scrollTo({top: 0, behavior:"smooth"})
}

