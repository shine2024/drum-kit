


for(let i=0;i<document.querySelectorAll('button').length;i++){
    document.querySelectorAll('button')[i].addEventListener('click',function (){
        let butt=this.innerHTML;
        console.log(butt);
        let song;
        switch(butt){
            case 'w': song=new Audio('./sounds/crash.mp3');
                      song.play();
                     break;

            case 'a':
             song=new Audio('./sounds/kick-bass.mp3');
            song.play();
            
            break;
            case 's':
             song=new Audio('./sounds/snare.mp3');
            song.play();
                    break;
            case 'd':song=new Audio('./sounds/tom-1.mp3');
                song.play();
                    break;
            case 'j':song=new Audio('./sounds/tom-2.mp3');
                    song.play();
                break;
            case 'k':song=new Audio('./sounds/tom-3.mp3');
                        song.play();
                    break;
            case 'l':song=new Audio('./sounds/tom-4.mp3');
                            song.play();
                        break;
            default:
                    alert("hello");
}

    });
}
   
