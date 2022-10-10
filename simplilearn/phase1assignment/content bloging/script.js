document.addEventListener('DOMContentLoaded',function(){
     const forms=document.forms
     const addform=forms['addform'];

     addform.addEventListener('submit',function(e){
          e.preventDefault();
          //add 
         const value=addform.querySelector('.text').values;
         //createElement 
         const p=document.createElement('p');
         //add the text content to new createElement
         p.textContent=value;
        //add classList or classes to get style feature  
         p.classList.add('read');
         p.classList.add('demo');
         //append to the DOM
       // const element1=document.getElementsByClassName('demo');
         //element.appenChild(p);



     });
})

