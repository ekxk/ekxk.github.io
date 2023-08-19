var imageThumbs = document.getElementById("image-thumbs");
var currentImage = document.getElementById("current-image");

for (var i = 1; i <= 16; i++) {
  var thumb = document.createElement("img");
  thumb.src = "sobaek" + i + ".jpg";
  thumb.alt = "Image " + i;
  thumb.classList.add("thumb");
  imageThumbs.appendChild(thumb);
  function reset() {
  for(var i = 0; i < imageThumbs.length; i++)
      {
        imageThumbs[i].style.backgroundColor = '#fff';
      }
  }
  thumb.addEventListener(
    "click", function() {
      currentImage.src = this.src;
      reset();this.style.backgroundColor='#00f';
    }
  );
}

function init()
{
    imageThumbs.firstChild.style.backgroundColor='#00F';
}
window.onload = init;



var width = currentImage.clientWidth;
var height = currentImage.clientHeight;




function changeImage(current) {
  var imagesNumber = 7;
  for (i=1; i<=imagesNumber; i++) {
    if (i == current) {
        document.getElementById("imag" + current).style.display = "block";
    } else {
        document.getElementById("imag" + i).style.display = "none";
    }
}
}
