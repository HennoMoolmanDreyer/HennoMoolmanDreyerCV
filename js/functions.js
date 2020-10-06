$(document).ready(function() {
    // Set the percentage off
    loading();
  });
  
function loading(){
    var num = 0;
  
    for(i=0; i<=100; i++) {
      setTimeout(function() { 
        $('.loader span').html(num+'%');
  
        if(num == 100) {
          loading();
        }
        num++;
      },i*120);
    };
  
  }