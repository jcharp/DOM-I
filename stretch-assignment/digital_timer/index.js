let seconTen = 0;
let secondOne = 0;
let msHun = 0;
let msTen = 0;

function timer() {

    msTen ++;

    if (msTen /10 ===1) {
        msTen = 0;
        msHun++;

        if(msHun/10 === 1) {
            msHun =0;
            secondOne++;

            if(secondOne/10 ===1){
                secondOne = 0;
                seconTen++;

            }
        }
    }
}

document.getElementById("secondTens").innerHTML = seconTen;
document.getElementById("secondOnes").innerHTML = secondOne;
document.getElementById("msHundreds").innerHTML = msHun
document.getElementById("msTens").innerHTML= msTen;

document.setInterval(timer, 1);