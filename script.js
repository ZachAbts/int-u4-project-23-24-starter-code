let favnumtextbox=document.querySelector(".favnum");
let dateplacetextbox=document.querySelector(".dateplace");
let button=document.querySelector("button");
button.addEventListener("click", function() {
    let favnumValue = parseInt(favnumtextbox.value);
    let datevalue=dateplacetextbox.value;

    console.log(favnumValue);
    console.log(datevalue);


let resultsH4 = document.querySelector(".result");

if (favnumValue === 7 && datevalue==="coffee") {
    resultsH4.innerHTML="You got Monica!";
}
    else if (favnumValue===7 && datevalue==="shopping") {
        resultsH4.innerHTML="You got Rachel!"
}
 else if (favnumValue !==7 && datevalue==="coffee") {
        resultsH4.innerHTML="You got Chandler!"
} else {
     resultsH4.innerHTML="You got Joey!"
}
})
