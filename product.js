//Select ting side nav bar

var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

var search=document.getElementById("search")
var productcontainer=document.getElementById("productcontainer")
var h1=productcontainer.querySelectorAll("div")

// search.addEventListener("keyup",function(){
//     var productcontainer=event.target.value.toUpperCase()
    
//     for(i=0;i<h1.length;i++){
//         if(h1[i].textContent.toUpperCase().indexOf(productcontainer) < 0){
//             h1[i].style.display="none"
//         }
//         else{
//             h1[i].style.display="block"
//         }
//     }
// })

search.addEventListener("keyup",function(){
    var entervalue=event.target.value.toUpperCase()

    for(i=0;i<h1.length;i++){

        var productname=h1[i].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(entervalue)<0){
            h1[i].style.display="none"

        }
        else{
            h1[i].style.display="block"
        }


    }
})

search