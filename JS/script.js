let music=document.querySelector("audio");
let play=document.getElementById("play");
let prev=document.getElementById("prev");
let next=document.getElementById("next");
let image=document.querySelector("img");
let artist=document.querySelector(".artist");
let title=document.querySelector(".title");
let volume=document.querySelector("#vol")
let isplaying=false;
const songs=[
    {
        name:"s1",
        title: "Rasiya",
        artist:"Arjit Singh",
        img: "img1"
    },
    {
        name:"s2",
        title:"Raatan Lambiyan",
        artist:"Jubin Nautiyal, Asees Kaur",
        img: "img2"
    },
    {
        name:"s3",
        title:"Srivalli",
        artist:"Javed Ali",
        img: "img3"
    }
    ];
const playMusic=()=>{
    isplaying=true;
    music.play();
    play.children[0].classList.replace("fa-play","fa-pause");
    image.classList.add("animate")
};

const pauseMusic=()=>{
    isplaying=false;
    music.pause();
    play.children[0].classList.replace("fa-pause","fa-play");
    image.classList.remove("animate")
};
play.addEventListener("click",()=>{
    console.log("i am called ");
if(isplaying){
    pauseMusic();
}
else{
    playMusic();
}


});

const loadsong=(songs)=>{
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="/assets/"+ songs.name+ ".mp3";
    image.src="/assets/"+songs.img+".jpg"
    console.log("he");
    };

let songNo=0;
loadsong(songs[songNo]);

next.addEventListener("click",()=>{
    console.log(songNo + " " +songs.length);
      if(songNo >= songs.length-1){
                songNo=0;
      }
      else{
        songNo++;
        
      }
      loadsong(songs[songNo]);
      if(isplaying){
        playMusic();
    }
    else{
       pauseMusic();  
    }
       
      
      console.log(isplaying);
});

prev.addEventListener("click",()=>{
    console.log(songNo + " " +songs.length);
      if(songNo == 0 ){
                songNo= songs.length-1;
      }
      else{
        songNo--;
        
      }
    
      loadsong(songs[songNo]);

      if(isplaying){
        playMusic();
    }
    else{
       pauseMusic();  
    }
       
});
volume.addEventListener("input",()=>{
    music.volume= (volume.value/100) * 1;
})
music.addEventListener("ended",()=>{
    next.click();
})

