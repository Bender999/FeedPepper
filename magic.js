


const button = document.getElementById('button');
let countdown = document.getElementById("countdown")
let message = document.getElementById("message")

let count = 0;




button.addEventListener('click', function(){
    count ++;
    
    document.getElementById('counter').innerHTML = count;
    let timer = 10;
    
    
    
    setInterval(function(){
        countdown.innerHTML = timer;
        timer --;

        if (count >= 5 && timer > 0) {
            
            message.style.display= "block";
            message.innerHTML="Pepper is now Full. Thank you!";
        }else if (count < 5 && timer === 0) {
            
            message.style.display = "block";
            message.innerHTML = "Pepper starved to death!";
        if (timer < 0){
            clearInterval(this);
            }
            setTimeout(function() {
                location.reload();
            });
        }
    
    }, 1000);


})