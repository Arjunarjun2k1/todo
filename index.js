let btns = document.getElementById('btn');
console.log(btns);

let inputvalue = document.getElementById('one');
console.log(inputvalue);

let adddiv = document.getElementById('kk');
console.log(adddiv);

console.log('arjun')
 
btns.addEventListener('click',division);

function division(){
    console.log(inputvalue.textContent);
    if(inputvalue.value == ''){
        alert('Please enter the task to add');
    }
    else{
    console.log('clicked');
    let creatediv = document.createElement('div');
    creatediv.classList.add('style','delete');
    let para = document.createElement('h2');
    para.innerHTML=inputvalue.value;
    console.log( para.textContent);
    creatediv.appendChild(para);
    let but = document.createElement('button');
    but.textContent='X';
    but.classList.add('deletable')
    creatediv.appendChild(but);
    but.addEventListener('click',removedisplay)
console.log(creatediv);
 
adddiv.appendChild(creatediv);
inputvalue.value='';
    }

}

function removedisplay(e){
    if(e.target.classList.contains('deletable')){
        if(confirm('Do you want to delete this task')){
        this.parentElement.style.display = 'none';
        }
    }
    console.log('removed');
    
}

