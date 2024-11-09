const demoElement = document.getElementById("demo");
let i = 0;
test = "" ;
function startCounting() {
  
  if (!demoElement.counting) {
    demoElement.counting = setInterval(function() {
    
      if (i < 101) {
        test = + i;
        i++;
        demoElement.innerHTML =  test ;
        
      } else {
        stopCounting(); 
      }
    }, 300);
  }
}

function stopCounting() {
  
  clearInterval(demoElement.counting);
  demoElement.counting = null; 
}
