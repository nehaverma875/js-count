const  receive= document.getElementById('counter');

function  inc(){
//get value ui
    let value=parseInt(receive.innerText);
    value= value+ 1;
    //set value ui
    receive.innerText=value;

    


};

function dec(){
   // get value ui

    let value=parseInt(receive.innerText);
    value=value- 1;
    //set value  ui 
    receive.innerText=value;

};