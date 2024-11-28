// Subscribe Checking function 1
function subscribe() {
    var x = document.getElementById("subscribe_input").value;
   if (x.length==0)
   {
   alert("Please Enter Your Email");
   }
   else
   {
   alert("You Subscribed!");
   document.getElementById("subscribe_input").value= "";
   } 
  }
  // Form Validation Checking 02 on submit
  function checkform() {
    var message = ""; 
    if (document.contactForm.name.value.length == 0) {
    message = message + "Please enter Your Name\n";
    }
    
    if (document.contactForm.email.value.length < 10) {
    message = message + "Email must be at least 10 characters\n";
    }
    
    if (document.contactForm.subject.value.length ==0) { 
    message = message + "Please Enter Subject You want to talk about\n";
    }
    
    else if (document.contactForm.txt_area.value < 20 ) { 
    message = message + "Message must be longer than 20 words\n";
    }
    
    if ( message.length > 0 ) { 
    alert( message ); 
    return false; 
    }
    else {
    return true; 
    }
    } // end of the function checkform()

    // onfocus input 03
    function myFunction(x) 
    {
        x.style.background = "#29ab87";
        x.style.color="white";
        x.style.border= "1px solid #4b494911";
    }
    // on change Input 04
    function change_function(x)
    {
        x.style.background="#4b494911";
        x.style.color="dodgerblue"
        x.style.border= "1px solid #4b494911";
    }

    // Big image fucntion 05
    function bigImg(x) {
        x.style.height = "22vh";
        x.style.width = "105%";
    }
    // Normal image fucntion 06
    function normalImg(x) {
        x.style.height = "20vh";
        x.style.width = "100%";
    }
    
//   Icons Change Color 07
function icons(x){
    x.style.color="blue";
    x.style.width="15%";
  }
  //   Icons Change Color 08
  function icons1(x){
    x.style.color="black";
    x.style.width="10%";
  }
    