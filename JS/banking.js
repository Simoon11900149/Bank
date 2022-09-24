// handle deposite button event

document.getElementById('deposit-button').addEventListener('click', function(){
        
    //    get deposit amount
    const depositInput = document.getElementById('deposit-input');

    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    

    // get total deposit amount
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount ;

    depositTotal.innerText = newDepositTotal ;

        //  update balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositTotal ;
    balanceTotal.innerText = newBalanceTotal;

    // clear deposit field
    depositInput.value = '';
})

// handle withdreaw button event

document.getElementById('withdraw-button').addEventListener('click', function(){
        
    //    get Withdraw amount
    const withdrawInput = document.getElementById('withdraw-input');

    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    

    // get total Withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount ;

    withdrawTotal.innerText = newWithdrawTotal ;


    //  update balance total
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText);
const newBalanceTotal = previousBalanceTotal - newWithdrawTotal ;
balanceTotal.innerText = newBalanceTotal;


    // clear Withdraw field
    withdrawInput.value = '';
})

