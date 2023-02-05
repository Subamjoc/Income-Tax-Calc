const form = document.querySelector('#income-dettail-form')

const taxableIncomeValue = document.querySelector('.taxable-income .value');
const incomeTaxAfterValue = document.querySelector('.Income-tax-after .value');
const healthCssValue = document.querySelector('.health-css .value');
const netTaxValue = document.querySelector('.Net-tax .value');

function calclculatorIncomeTax(income){
    let tax= 0;
    if(income <=700000){
        tax = 0;
    }else if(income >700000 && income <=900000){
        income = income - 50000
        tax = (300000) * 0.05 + (income - 600000) * 0.10
        health = (tax) * 0.04
        netTax = tax + health
    }else if(income > 900000 && income <= 1200000){
        income = income - 50000
        tax = (300000) * 0.05 + (300000) * 0.10 + (income - 900000) * 0.15
        health = (tax) * 0.04
        netTax = tax + health
    }else if(income > 1200000 && income <= 1500000){
        income = income - 50000
        tax = (300000) * 0.05 + (300000) * 0.10 + ( 300000) * 0.15 + (income - 1200000) * 0.20
        health = (tax) * 0.04
        netTax = tax + health
    }else{
        income = income - 50000
        tax = (300000 * 0.05) + (300000 * 0.10) +  (300000 * 0.15) + (300000 * 0.20) + (income - 1500000) * 0.30
        health = (tax) * 0.04
        netTax = tax + health
    }
    return netTax;
}

const updateData = (netTax) => {
    taxableIncomeValue.innerHTML = Math.round(income);

    let incomeTax = Math.round(tax);
    incomeTaxAfterValue.innerHTML = incomeTax;

    let healthCss = Math.round(health);
    healthCssValue.innerHTML = healthCss;

    let netIncomeTax = Math.round(netTax);
    netTaxValue.innerHTML = netIncomeTax;
}

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const income = Number(form.income.value);
    const netTax = calclculatorIncomeTax(income);

    alert(`The income tax of your Annual Income is: ${netTax}`);
})

const init = () => {
    let netTax = updateData(netTax);
};