
let billamount = document.getElementById('bill')
let peoplenumber = document.getElementById('people')
let custom = document.getElementById('cus')
let radios5 = document.getElementById('5')
let radios10 = document.getElementById('10')
let radios15 = document.getElementById('15')
let radios25 = document.getElementById('25')
let radios50 = document.getElementById('50')
let resetbtn = document.getElementById('reset')

let tipamount = document.getElementById('tipamount')
let totalamount = document.getElementById('total')


// the values of inputs must  be inside the function when I need them in a function




//////////////////////////////// people number Can't be zero
function PeopleNumCantBeZero(){
    let warnzero = document.getElementById("ch")
    function checkifpnumiszero(){
        let penum = parseFloat(peoplenumber.value) 
        if(penum == 0){
            
            warnzero.style.cssText = "visibility: visible;"
            peoplenumber.style.border = "2px solid red"
        }
        else{
            warnzero.style.cssText = ""
            peoplenumber.style.border = ""
        }
    }
    peoplenumber.addEventListener("keyup", function(){checkifpnumiszero()})  
}

///////////////////////////// function to active reset button when inputs start or one of radios clicked
function ActiveResetButton(){
    resetbtn.disabled = true
    
    function ActivatingReset(){
        resetbtn.disabled = false
        resetbtn.style.cssText = "background-color:hsl(172, 67%, 45%);cursor:pointer"

    }
    
    billamount.addEventListener("keydown", function(){ActivatingReset()})
    peoplenumber.addEventListener("keydown",function(){ActivatingReset()})
    custom.addEventListener("keydown", function(){ActivatingReset()})
    radios5.addEventListener("click", function(){ActivatingReset()})
    radios10.addEventListener("click", function(){ActivatingReset()})
    radios15.addEventListener("click", function(){ActivatingReset()})
    radios25.addEventListener("click", function(){ActivatingReset()})
    radios50.addEventListener("click", function(){ActivatingReset()})
}

///////////////////////// function to reset all values of inputs for null 
/////////////////////////and uncheck radios and disable reset buttun if clicked
function ResetAllValues(){

    resetbtn.addEventListener("click", function () {
        
        billamount.value = ""
        peoplenumber.value = ""
        document.getElementById("ch").style.cssText = ""
        peoplenumber.style.cssText = ""
        custom.value = ""
        radios5.checked = false
        radios10.checked = false
        radios15.checked = false
        radios25.checked = false
        radios50.checked = false
        tipamount.textContent = "$0.00"
        totalamount.textContent = "$0.00"
        resetbtn.style.cssText = ""
        resetbtn.disabled = true 
    })
}
///////////////////////// function to unclick radios if we started writing value on custom
///////////////////////// and earsing value on custom if one of radios is clicked
function CustomRadiosRelationship(){
    custom.addEventListener("keydown",function(){
        radios5.checked = false
        radios10.checked = false
        radios15.checked = false
        radios25.checked = false
        radios50.checked = false
    })
    function erasevalueoncustom(){
        custom.value = ""
    }
    radios5.addEventListener("click", function(){erasevalueoncustom()})
    radios10.addEventListener("click", function(){erasevalueoncustom()})
    radios15.addEventListener("click", function(){erasevalueoncustom()})
    radios25.addEventListener("click", function(){erasevalueoncustom()})
    radios50.addEventListener("click", function(){erasevalueoncustom()})

}
/////////////////////////// calculate tip amount / peson and total bill / person
/*
make the calculations if one of the iputs is just has a value (keyup) and alway set the
value of tipamount and totalamount to "$0.00" if one of the input doesnt have value
and if peoplenumber input is zero


*/ 
function percentvalue(){
    var result;
    if (radios5.checked == true){
        result = 5
        return result
    }
    else if(radios10.checked == true){
        result = 10
        return result
    }
    else if(radios15.checked == true){
        result = 15
        return result
    }
    else if(radios25.checked == true){
        result = 25
        return result
    }
    else if(radios50.checked == true){
        result = 50
        return result
    }
    else if(custom.value !=""){
        result = parseFloat(custom.value)
        return result
    }
    else{
        result = ""
        return result
    }
    

}
billamount.onclick = function(){
    console.log(percentvalue())
} 

function calculate(){
    
    function numFormatter(num) {
        if(num >= 1000 && num < 1000_000){
            return `${(num/1000).toFixed(3)}K`; 
        }else if(num >= 1000_000 && num < 1000_000_000){
            return `${(num/1000_000).toFixed(3)}M`;  
        }else if(num >= 1000_000_000 && num < 1000_000_000_000){
            return `${(num/1000_000_000).toFixed(3)}B`;
        }else if(num >= 1000_000_000_000){
            return `${(num/1000_000_000_000).toFixed(3)}T`;
        }
        else if(num < 1000){
            return `${num.toFixed(2)}`; 
        }
    }

    function makecalculations(){
        if (billamount.value !="" && percentvalue() !== "" && peoplenumber.value != "" && parseFloat(peoplenumber.value)  != 0){
            let bill_value = parseFloat(billamount.value)
            let people_number = parseFloat(peoplenumber.value)
            let Tip_Amount = ((bill_value * percentvalue())/ 100) /people_number
            let Total_Amount = Tip_Amount + bill_value / people_number

            tipamount.textContent = `$${numFormatter(Tip_Amount)}`
            totalamount.textContent = `$${numFormatter(Total_Amount)}`

        }
        
        else{
            tipamount.textContent = `$0.00`
            totalamount.textContent =`$0.00`
        }
    }
    billamount.addEventListener("keyup", function(){makecalculations()})
    peoplenumber.addEventListener("keyup", function(){makecalculations()})
    custom.addEventListener("keyup", function(){makecalculations()})
    radios5.addEventListener("click", function(){makecalculations()})
    radios10.addEventListener("click", function(){makecalculations()})
    radios15.addEventListener("click", function(){makecalculations()})
    radios25.addEventListener("click", function(){makecalculations()})
    radios50.addEventListener("click", function(){makecalculations()})
    
}




calculate()
CustomRadiosRelationship()
PeopleNumCantBeZero()
ResetAllValues()
ActiveResetButton()