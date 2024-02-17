const value = document.getElementById('value');
    const btn =  document.querySelectorAll('.btn');
 

 
    btn.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            const style = e.currentTarget.classList;
            if(style.contains('increase')){
                m++
            }
            else if(style.contains('decrease')){
                m--;
            }
            else {
                m = 0;
            }
            value.textContent =  m ;
        })
    })
        
