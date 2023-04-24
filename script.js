const decrementBtn = document.getElementById("DecrementBtn");
const incrementBtn = document.getElementById("IncrementBtn");
const resetBtn = document.getElementsById("resetBtn");
const displayValue = document.getElementById("displayValuee");

//for decrement btn
decrementBtn.addEventListener("click", () =>{
    const value = Number(displayValue.innerText);
    if(value > 0){
        displayValue.innerText = value - 1;
    } else {
        alert("Negative value are not allowed")
    }
});

incrementBtn.addEventListener("click", () =>{
    const value = Number(displayValue.innerText);
    if (value >= 10){
        alert("Values above 10 are allowed");
    } else {
        displayValue.innerText = value + 1;
    }
});

resetBtn.addEventListener("click", () => {
    displayValue.innerText = 0;
})