// Search logic

function searchProducts() { 
  let input = document.getElementById('search-input').value 
  input=input.toLowerCase(); 
  let x = document.querySelectorAll('.card'); 
    
  for (i = 0; i < x.length; i++) {  
      if (!x[i].textContent.toLowerCase().includes(input)) { 
          x[i].style.display="none"; 
      } 
      else { 
          x[i].style.display="inline-block";                  
      } 
  } 
} 

// let x = document.querySelectorAll('.card .card-text');
// console.log(x)