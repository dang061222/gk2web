// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    document.getElementById("navbar").style.padding = "0px 0px";
    document.getElementById("logo").style.fontSize = "0px";
    document.getElementById("navbar").style.transition = "0.8s";
  } else {
    document.getElementById("navbar").style.padding = "100px 100px";
    document.getElementById("logo").style.fontSize = "35px";

  }
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700){
        document.getElementById("navbar").style.backgroundColor = "#f1f1f1";
        document.getElementById("navbar").style.transition = "0.2s";
        document.getElementById("navbar").style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
        document.getElementById("hide1").style.display = "block";
        document.getElementById("hide2").style.display = "block";
        document.getElementById("hide3").style.display = "block";
        document.getElementById("hide4").style.display = "block";
        document.getElementById("hide5").style.display = "block";
        document.getElementById("hide6").style.display = "block";
        document.getElementById("hide7").style.display = "block";
  } else {
        document.getElementById("navbar").style.backgroundColor = "";
        document.getElementById("navbar").style.boxShadow = "none";
        document.getElementById("hide1").style.display = "none";
        document.getElementById("hide2").style.display = "none";
        document.getElementById("hide3").style.display = "none";
        document.getElementById("hide4").style.display = "none";
        document.getElementById("hide5").style.display = "none";
        document.getElementById("hide6").style.display = "none";
        document.getElementById("hide7").style.display = "none";
  }
}

