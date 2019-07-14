function openImg(imgs) {
  
  var expandImg = document.getElementById("expandedImg");
  var lineDiv = document.getElementById("line");
  var imgText = document.getElementById("imgtext");
  
  expandImg.src = imgs.src;
  
  imgText.innerHTML = imgs.alt;
  
  expandImg.parentElement.style.display = "block";
$(function() {
    //animate on scroll
    new WOW().init(); 
});

}
//
//$(document).ready(function({
//    $("line").show();
////}));
//$(document).ready(function(){
//    function openImg(imgs) {
//  
//  var expandImg = document.getElementById("expandedImg");
//  var lineDiv = document.getElementById("line");
//  var imgText = document.getElementById("imgtext");
//  
//  expandImg.src = imgs.src;
//  
//  imgText.innerHTML = imgs.alt;
//  
//  expandImg.parentElement.style.display = "block";
//        lineDiv.style.display = "block";
//   
//}
//    
//});