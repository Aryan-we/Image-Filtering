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
function upl(){
    document.getElementById("img").style.display="inline";
  const preview = document.getElementById("img");
  const file = document.getElementById("upload").files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {

    preview.src = reader.result;
    
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  
}
    
}
function download(){
    var image=document.getElementById("upload");
     if(image.files.length > 0){
        document.title="img";
    window.print();
     }else{
    alert("Please upload an image for Filtering!");
    return;
     }
  
}
// Fade out loader and show content
    window.addEventListener("load", function () {
      setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";
        setTimeout(() => {
          document.getElementById("loader").style.display = "none";
         
        }, 1000);
      }, 4500); // Show loader for 3s
    });
