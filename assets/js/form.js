$(document).ready(function(){
  $("#submit-form").validate({
    rules:{
      fname:{
        required:true
        
      },
      gemail:{
        required:true,
        email:true
      },
      subject:{
        required:true
      },
      message:{
        required:true
      }

    },

    messages:{
      fname:"Enter your name"
    }
    
  })
})