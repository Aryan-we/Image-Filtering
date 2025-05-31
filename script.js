function bright(){
    var range=document.getElementById("bright").value;
    var image=document.getElementById("img");
    image.style.filter="brightness("+range+"%)";
    val=range-100;
    document.getElementById("val1").innerHTML=val;
    

}
function contrast(){
    var range=document.getElementById("contrast").value;
    var image=document.getElementById("img");
    image.style.filter="contrast("+range+"%)";
    val=range-100;
    document.getElementById("val2").innerHTML=val;


}
function saturate(){
    var range=document.getElementById("saturate").value;
    var image=document.getElementById("img");
    image.style.filter="saturate("+range+"%)";
    val=range-100;
    document.getElementById("val3").innerHTML=val;


}
var a="";
function upl(){
   /* var upload=document.getElementById("upload").value.replace("C:\\fakepath\\","");
    document.getElementById("pic").style.display="inline";
    document.querySelector("header").style.height="110vh";
    document.getElementById("pic").src="./images/"+upload;*/
  const preview = document.getElementById("img");
 
  const file = document.getElementById("upload").files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;
    a=reader.result
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  
}
    
}
function download(){
    var image=document.getElementById("upload");
     if(image.files.length > 0){
        document.title=a;
    window.print();
     }else{
    alert("Please Select the Image for Filtering!");
    return;
     }
  
}
