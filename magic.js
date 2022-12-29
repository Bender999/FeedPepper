


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
const picture = document.getElementById('picture');



let count = 0;


button.addEventListener('click', function(){
    picture.style.transform = 'translatey(1000%)';
    picture.style.opacity = '0';
    

})








button.addEventListener('click', function(){
    count ++;   

    document.getElementById('counter').innerHTML = count; 
                   
        if (count >= 1 && count < 5) {
            document.body.style.borderColor = "green";
            message.style.display= "block";
            message.innerHTML="Shes a hungry pup";
        }else if (count >= 5 && count <10) {
            document.body.style.borderColor = "blue";
            message.style.display = "block";
            message.innerHTML = "She loves to eat";
        }else if (count >=10 && count <25){
            document.body.style.borderColor = "orange";
            message.style.display = "block";
            message.innerHTML = "Ok, shes had enough"
        }else if (count >=25 && count <50){
            document.body.style.borderColor = "yellow";
            message.style.display = "block";
            message.innerHTML = "Looks like shes sick"
        }else if (count >=50 && count <75){
            document.body.style.borderColor = "blueviolet";
            message.style.display = "block";
            message.innerHTML = "Shes very sick"
        }else if (count >=75 && count <100){
            document.body.style.borderColor = "pink";
            message.style.display = "black";
            message.innerHTML = "Shes not moving, stop it!"
        }else if (count >=100 && count <105){
            document.body.style.borderColor = "red";
            message.style.display = "block";
            message.innerHTML = "STOOOOOOOOOP!!"
        }else if (count === 105){
            location.reload()
        }
                        
           
    
    
    });
        
    
    