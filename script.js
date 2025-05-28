function bright(){
    var range=document.getElementById("bright").value;
    var image=document.getElementById("pic");
    image.style.filter="brightness("+range+"%)";
    val=range-100;
    document.getElementById("val1").innerHTML=val;
    

}
function contrast(){
    var range=document.getElementById("contrast").value;
    var image=document.getElementById("pic");
    image.style.filter="contrast("+range+"%)";
    val=range-100;
    document.getElementById("val2").innerHTML=val;


}
function saturate(){
    var range=document.getElementById("saturate").value;
    var image=document.getElementById("pic");
    image.style.filter="saturate("+range+"%)";
    val=range-100;
    document.getElementById("val3").innerHTML=val;


}
function upload(){
    var upload=document.getElementById("upload").value.replace("C:\\fakepath\\","");
    document.getElementById("pic").style.display="inline";
    document.querySelector("header").style.height="110vh";
    document.getElementById("pic").src="./images/"+upload;
    
}
function download(){
    var upload=document.getElementById("pic").src.replace("http://127.0.0.1:5500",".");
   alert(upload);
   document.getElementById("download").href=upload;
   document.getElementById("download").download=upload;

}