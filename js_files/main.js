let open= document.getElementsByClassName("fa-bars")[0];

let close = document.getElementsByClassName("fa-xmark")[0];

let list = document.getElementsByTagName("aside")[0];



open.onclick = function(){
    list.classList.add("open");
}
close.onclick = function(){
    list.classList.remove("open");
}


let form = document.getElementsByTagName("form")[0];
let input1 = document.querySelector(".input");
let inpu = document.getElementById("name")
let message = document.createElement("span");

message.className = "danger";
message.innerHTML = `<span>!</span> there can't be any numbers in your name`;


form.onsubmit = function(e){

    let a = true ;
    let given = inpu.value;

    for(let i=0; i<given.length;i++){
        if( isNaN(parseInt((given.split("")[i]))) === false ){
            a = false;
            break;
        }
    }

    console.log(a)
    if (a === false ){  
        e.preventDefault();
        input1.append(message);
        setTimeout(function (){message.remove()},3000);
    }

}

