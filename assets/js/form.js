$('form').submit(function(event) {
      // Check if the form is valid
      if ($("#submit-form").valid()) {
        $("#submit-form").submit((e)=>{
          e.preventDefault()
          $.ajax({
              url:"https://script.google.com/macros/s/AKfycbyIgZwkIBgktnE4iOhM_KkNkyXXwnemGvODJ-nT6FJdr4pbp4b7kfBKFGD31pfjUxGYjA/exec",
              data:$("#submit-form").serialize(),
              method:"post",
              success:function (response){
                  alert("Form submitted successfully")
                  window.location.reload()
                  //window.location.href="https://google.com"
              },
              error:function (err){
                  alert("Something Error")
  
              }
          })
      })
          // Form is valid, continue with submission
      } else {
          // Form is not valid, prevent submission
          event.preventDefault();
      }
  });
});
