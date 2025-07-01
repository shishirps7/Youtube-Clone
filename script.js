let leftnav1=document.querySelector(".navleft1")
let sidebar=document.querySelector(".leftmain")
let altsidebar=document.querySelector(".altleftmain")

leftnav1.addEventListener('click',()=>{
    
    if(sidebar.style.display!="none"){
        // leftnav1.style.transform="rotate(360deg)";
       
        if( leftnav1.style.transform="scale(1)"){
             leftnav1.style.transform="scale(1.2)"
        
        }
        else{
            leftnav1.style.transform="scale(1)"
        }
        leftnav1.style.transition="transform 0.02s ease"
       
     sidebar.style.display="none"
     altsidebar.style.display="flex"
    }
    else{
        leftnav1.style.transform="scale(1)"
        leftnav1.style.transition="transform 0.02s ease"
        sidebar.style.display="flex"
        altsidebar.style.display="none"
    }
})