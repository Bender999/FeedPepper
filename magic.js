


document.getElementById('passwordForm').addEventListener('submit',function(event){
    event.preventDefault();

    const enteredPassword = document.getElementById('password').value;
    if (enteredPassword === '123'){
        document.getElementById('mainContent').style.display = 'block';
        document.getElementById('passwordForm').style.display = 'none';


    }else{
        alert('Incorrect password');
    }
})




const button = document.getElementById('button');
let countdown = document.getElementById("countdown")
let message = document.getElementById("message")

let count = 0;



button.addEventListener('click', function(){
    count ++;
    
    document.getElementById('counter').innerHTML = count; 
                   
        if (count >= 1 && count < 5) {
            
            message.style.display= "block";
            message.innerHTML="Shes a hungry pup";
        }else if (count >= 5 && count <10) {
            
            message.style.display = "block";
            message.innerHTML = "She loves to eat";
        }else if (count >=10 && count <25){
            clearInterval(this);
            message.style.display = "block";
            message.innerHTML = "Ok, shes had enough"
        }else if (count >=25 && count <50){
            clearInterval(this);
            message.style.display = "block";
            message.innerHTML = "Looks like shes sick"
        }else if (count >=50 && count <75){
            clearInterval(this);
            message.style.display = "block";
            message.innerHTML = "Shes very sick"
        }else if (count >=75 && count <100){
            clearInterval(this);
            message.style.display = "block";
            message.innerHTML = "Shes not moving, stop it!"
        }else if (count >=100 && count <105){
            clearInterval(this);
            message.style.display = "block";
            message.innerHTML = "STOOOOOOOOOP!!"
        }else if (count === 105){
            location.reload()
        }
                        
           
    
    
    });
        
    
    