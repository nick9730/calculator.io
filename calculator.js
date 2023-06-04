var previous_operand
      var current_operand ; 
      var  current_operation ; 
    const button_number = document.querySelectorAll('[data-number]');
   const button_operators = document.querySelectorAll('[data-operator]');
   const button_delete = document.querySelector('[data-delete]');
   const button_clear = document.querySelector('[data-clear]');
   const button_equal = document.querySelector('[data-equal]');
    const current_text = document.querySelector('.current') ;
    const previous_text = document.querySelector('.previous');

    // prosthhkh arithmwn 
    function showNumbers(number_par){
    button_number.forEach(number_par=> {
        number_par.addEventListener('click',()=>{
        if(number_par.textContent ==='.' && current_text.textContent.includes('.')) return
        current_text.textContent += number_par.innerHTML;
    current_operand = current_text.textContent;
        
        console.log(current_operand );
        });
    })
   }
     showNumbers();

    
 var result;
     //pra3eis
      button_operators.forEach(operator_show =>{
          operator_show.addEventListener('click',()=>{
        current_text.textContent += operator_show.textContent; 
        
        if(previous_text.textContent.includes('/') || previous_text.textContent.includes('+') || previous_text.textContent.includes('-') ||previous_text.textContent.includes('*')){
           let result;
           switch(current_operation){
               case '+' :
                   result = parseFloat(current_operand) +  parseFloat(previous_operand);
                   break

              case '-' :
                result = parseFloat(previous_operand) - parseFloat(current_operand);
                break  

               case '*' :
               result = parseFloat(current_operand) *  parseFloat(previous_operand);
               break
               
               case '/' :
                result = parseFloat(current_operand) / parseFloat(previous_operand);
               break     
           }

           console.log('to current operand' , current_operand,'to previous',previous_operand ,'result',result);
           previous_text.textContent = previous_operand + operator_show.textContent;
           current_text.textContent = '';
           current_operand = '';
           previous_operand = result;
           current_operation=operator_show.textContent;
           
      }
        else{
            previous_operand = current_operand;
            current_operation = operator_show.textContent;
           previous_text.textContent = previous_operand + operator_show.textContent;
           current_text.textContent = '';
        }
    });
        });  
    



 

       // diagrafh kathe noymero      
     button_delete.addEventListener('click',()=>{ 
        current_operand =  current_operand.toString().slice(0,-1);
        current_text.textContent = current_operand;
         console.log(current_operand)});
             
    // diagragh olwn twn timwn 
    button_clear.addEventListener('click',()=>{
        current_operand = '';
        current_text.textContent = current_operand.textContent = previous_operand.textContent=previous_text.textContent='';
        console.log(current_operand);
    })            
     
    //equal 
    button_equal.addEventListener('click',()=>{
        if(previous_text.textContent.includes('/') || previous_text.textContent.includes('+') || previous_text.textContent.includes('-') ||previous_text.textContent.includes('*')){
           let result;
           switch(current_operation){
               case '+' :
                   result = parseFloat(current_operand) +  parseFloat(previous_operand);
                   break

              case '-' :
                result = parseFloat(previous_operand) - parseFloat(current_operand);
                break  

               case '*' :
               result = parseFloat(current_operand) *  parseFloat(previous_operand);
               break
               
               case '/' :
                result = parseFloat(current_operand) / parseFloat(previous_operand);
               break     
           }

           console.log('to current operand' , current_operand,'to previous',previous_operand ,'result',result);
             current_text.textContent = result ; 
             current_operand = result;
             previous_text.textContent = '';
        }
        else {
            return
        }

    })