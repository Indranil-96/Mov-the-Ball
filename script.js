let target=document.getElementById("body");
let box=document.getElementById("container");
// target.style.background="red";
let up=0;
let down=0;
let left=0;
let right=0;
function haldleEvent(ev){
    console.log(ev.key);

    if(ev.key=="w"){
        up+=10;
        console.log(up);
        box.style.marginTop=`${up}px`;
    }
    else if(ev.key=="a"){
        console.log(2);
        left+=10;
        box.style.marginLeft=`${left}px`;
    }

    else if(ev.key=="s"){
        console.log(3);
        up-=10;
        box.style.marginTop=`${up}px`;
    }

    else if(ev.key=="d"){
        console.log(4);
        left-=10;
        box.style.marginLeft=`${left}px`;

    }
}

target.addEventListener("keydown",haldleEvent);