let quoteWriter=document.getElementById('type-new-task');
let entryBtn=document.getElementById('new-task');
let list=document.getElementById('task-list-container');



entryBtn.addEventListener('click',function(){
    let entry=document.createElement('div');
    entry.classList.add('task');

    let task=document.createElement('li');
    task.innerText=quoteWriter.value;
    entry.appendChild(task);

    let doneBtn=document.createElement('Button');
    doneBtn.innerHTML='<i class="fa-solid fa-check"></i>';
    doneBtn.classList.add('check');
    entry.appendChild(doneBtn);

    let discardBtn=document.createElement('Button');
    discardBtn.innerHTML='<i class="fa-solid fa-trash"></i>';
    discardBtn.classList.add('discard');
    entry.appendChild(discardBtn);

    if(quoteWriter.value===""){
        alert('Input field empty!!');
    }
    else{
        list.appendChild(entry);
    }
    quoteWriter.value='';





    
    doneBtn.addEventListener('click',function(){
        task.style.textDecoration="line-through";
    })
    discardBtn.addEventListener('click',function(e){
        // let target=e.target;
        // console.log(target.parentElement.parentElement);
        // target.parentElement.parentElement.remove();
        // console.log(this.parentElement);
        this.parentElement.remove();
    })
})


