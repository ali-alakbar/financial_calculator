

// Find The Value of The Sum
let myInputs = document.querySelectorAll(".input");
let sum = (params) =>{
    var sum = 0;
    params.forEach( input => {
        sum += +(input.value) ;
    });
    return sum
}


// Call The Hidden Section
const myResultSection = document.querySelector(".result")
function click(btn){
            // Find The Result of 
            let unlimited  =  sum (myInputs)  *  1.1 ;
            let lifetime   =  sum (myInputs)  *  1.2 ;
            let brex       =  sum (myInputs)  *  0.3 ;
            let amex       =  sum (myInputs)  *  1.3 ;
            let stripe     =  sum (myInputs)  *  2.9 ;
            // Activate The Hidden Section
            myResultSection.classList.add('active')
            // Re-intilize The Lables
            document.querySelector(".unlimited")       .innerHTML = 'Unlimited Rewards'
            document.querySelector(".lifetime")        .innerHTML = 'LIFETIME REWARDS'
            // Re-intilize The Values
            document.querySelector(".unlimitedResult") .innerHTML  =  '$'+unlimited
            document.querySelector(".lifetimeResult")  .innerHTML  =  '$'+lifetime
            if(btn == 'btn-brex'){
                document.querySelector(".label")       .innerHTML  =  'Brex Business Card'
                document.querySelector(".myResult")    .innerHTML  =  '<span>$'+brex+'</span>'
            }else if(btn == 'btn-stripe'){
                document.querySelector(".label")       .innerHTML  =  'Stripe Business Card'
                document.querySelector(".myResult")    .innerHTML  =  '<span>$'+stripe+'</span>'
            }else if(btn == 'btn-amex'){
                document.querySelector(".label")       .innerHTML  =  'Amex Business Card'
                document.querySelector(".myResult")    .innerHTML  =  '<span>$'+amex+'</span>'
            }
}

// Generate The Code
function start() {
    const myBtns = document.querySelectorAll("button");
    myBtns.forEach( btn => {
        if (btn.className === "btn-brex") {
            btn.onclick = ()=>click(btn.className)
        }else if (btn.className === "btn-stripe") {
            btn.onclick = ()=> click(btn.className)
        }else if(btn.className === "btn-amex"){
            btn.onclick = ()=> click(btn.className)
        }
    });
}

start()