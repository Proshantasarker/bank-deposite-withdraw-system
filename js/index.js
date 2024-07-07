document.getElementById("btn-deposite").addEventListener("click" , () => {

const depositeInputString = document.getElementById("deposite-input").value; 
const depositeInput = parseFloat(depositeInputString)

const olddepositeamount = document.getElementById("deposite-amount");
const depositeamountString = olddepositeamount.innerText
const depositeAmountNumber = parseFloat(depositeamountString)

const totaldeposite = depositeInput + depositeAmountNumber

   olddepositeamount.innerText = totaldeposite;


const totalamountString = document.getElementById("total-amount");
const totalamountnumber = totalamountString.innerText
const totalamountnumbernew = parseFloat(totalamountnumber)

const balance = depositeInput + totalamountnumbernew
totalamountString.innerText = balance;
depositeInput = "";



})

document.getElementById("btn-withdraw").addEventListener("click" , () => {

    const withdrawInputString = document.getElementById("withdraw-input").value;
    const withdrawInput = parseFloat(withdrawInputString)

    const oldwithdrawamount = document.getElementById("withdraw-amount");
const withdrawamountString = oldwithdrawamount.innerText
const withdrawAmountNumber = parseFloat(withdrawamountString)

const totalwithdraw = withdrawInput + withdrawAmountNumber

oldwithdrawamount.innerText = totalwithdraw;

const totalamountString = document.getElementById("total-amount");
const totalamountnumber = totalamountString.innerText
const totalamountnumbernew = parseFloat(totalamountnumber)

const balance = totalamountnumbernew - withdrawInput

totalamountString.innerText = balance;

})
