var inventory1 = document.querySelector("#qnty1");
var inventory2 = document.querySelector("#qnty2");
var totalItems = 2;
var btnClick = document.getElementById("btn");

btnClick.addEventListener('click', (event) => {
    var finalCost = 0;
    for(var i = 0; i <= totalItems; i++){
        if(event.target.id == 'btn'){
            finalCost = ((Number(inventory1.dataset.price) * inventory1.value) + (Number(inventory2.dataset.price) * inventory2.value));
        }
    }
    document.getElementById("totalPrice").innerHTML = "$" + finalCost;/**/
});

/*I'm gonna hop in the study group Saturday to see if there's a way to call id prefixes
to cut out most of line 10. Shouldn't have to create functions for each item when they're all
basically the same. Google/coding sites aren't giving me definitive answers, but
the few examples I did find are showing it's possible. Just none of my methods are working :( */