console.log('hello world');


let diceBtn  = document.getElementById('dice-btn');


roll= () => {
        let dice = Math.ceil(Math.random() * 7);
        document.getElementById('ans').innerHTML = dice
        

}
function myfunction() {
  
    diceBtn.disabled = true

    document.getElementById('rotate').style.transform = 'rotate(360deg)'

    setTimeout(()=>{
        roll();
        diceBtn.disabled = false
        document.getElementById('rotate').classList.remove('transition')
    },1000)




    // let myInterval = setInterval(()=>{
    //     document.getElementById('rotate').style.transform = `rotate(${temp}deg)`;
    //     temp=temp+1;
    //     if(temp>=360){
    //         clearInterval(myInterval)
    //         roll();
    //         diceBtn.disabled = false
    //     }
    // },1)
   
 //  document.getElementById('rotate').style.transform = "rotate(20deg)";

}


diceBtn.addEventListener('click',myfunction)