
const calculator=document.querySelector('.calculator');
const screen=document.querySelector('.screen');
// console.log(calculator);
// console.log(screen);

calculator.addEventListener('click', (e)=>{

//   console.log(e.target.innerText)
       if(!e.target.classList.contains('button')){
        //    console.log("clicked")
         return;
       }
       switch(e.target.innerText){
           case 'AC': 
               screen.innerText="";
               break;
           case '=':
               let result=eval(screen.innerText).toString();
               if(result.indexOf('.')!==-1){
                  result=result.substring(0,result.indexOf('.')+4)
               }
               screen.innerText=result;
               break;
           default:
                screen.innerText += e.target.innerText;   
                break;      
       }
})