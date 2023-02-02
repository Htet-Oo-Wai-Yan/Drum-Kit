function playsound(e) {
        
        // connect keycode with audio
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // console.log(audio);
    
        const key = document.querySelector(`.key-btn[data-key="${e.keyCode}"]`);
        // console.log(key);
    
        if(!audio) return;//stop the function from running all together
        
        audio.currentTime = 0;//rewind to the start
        
        audio.play();//play the audio
    
        key.classList.add('key-playing');//add css style    
}

// this function remove playing effect from the key 
function removeTransition(e){
    if(e.propertyName !== 'transform') return;//skip it if it not a transform
    this.classList.remove('key-playing');
}

const keys = document.querySelectorAll('.key-btn');

keys.forEach(key => key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown',playsound);
