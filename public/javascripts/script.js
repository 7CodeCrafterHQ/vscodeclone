var filecreate = document.querySelector("#filecreate");
var foldercreate = document.querySelector("#foldercreate")
var inputfile = document.querySelector("#formfile");
var editpen = document.querySelector("#editpen")
var overlay = document.querySelector("#popup")
var files = document.querySelector('#paramentfiles');
var poppen = document.querySelector("#poppen");
var inputfolder = document.querySelector("#formfolder");
var overlayform = document.querySelector("#popup>form")
var  flag = 0
filecreate.addEventListener("click",function(){
   
    if(flag===0){
        inputfile.style.display = "block";
        inputfolder.style.display = "none";
        flag = 1;
    }
  else{
    inputfile.style.display = "none";
    flag=0;
  }
});
foldercreate.addEventListener("click",function(){
    if(flag===0){
        inputfolder.style.display = "block";
        inputfile.style.display = "none";  
        flag = 1;
    }
  else{
    inputfolder.style.display = "none";
    flag=0;
  }
})

//  var kite = 0;
//  editpen.addEventListener("click",function(){
  
//   if(kite===0){
//     overlay.style.display='block'; 
//     kite = 1;
//   } 
//   else{
//     overlay.style.display='none';
//     kite = 0;
//   }
  
// })

 files.addEventListener("click",function(dets){
 if(dets.target.id==="editpen"){
  //  console.log(dets.srcElement)
 var update = dets.srcElement.parentElement.parentElement.textContent.trim();
 poppen.value = update;
 overlay.style.display="block";
console.log(update);
 overlayform.setAttribute('action',`/edit/${update}`)
 }
 })