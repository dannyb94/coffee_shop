var inventory1 = document.querySelector("#qnty1");
var inventory2 = document.querySelector("#qnty2");
var inventory3 = document.querySelector("#qnty3");
var inventory4 = document.querySelector("#qnty4");
var totalItems = 4;
var btnClick = document.getElementById("btn");

btnClick.addEventListener('click', (event) => {
    var finalCost1 = 0;
    var finalCost2 = 0;
    //console.log(inventory1.classList.value, inventory2.classList.value, inventory3.classList.value, inventory4.classList.value)
    for(var i = 0; i <= totalItems; i++){
        if(event.target.id == 'btn'){
            finalCost1 = ((Number(inventory1.classList.value) * inventory1.value) + (Number(inventory2.classList.value) * inventory2.value));
            finalCost2 = ((Number(inventory3.classList.value) * inventory3.value) + (Number(inventory4.classList.value) * inventory4.value));
        }
    } //console.log(finalCost1 + finalCost2)
    document.getElementById("totalPrice").innerHTML = "$" + (finalCost1 + finalCost2);/**/
});