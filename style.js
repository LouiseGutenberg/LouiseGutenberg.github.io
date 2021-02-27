/* resume.html */

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


/* contact.html */

function flipcard () {
  let flip = document.getElementById("business-card");
  if (flip.innerHTML === <div class="row align-items-center justify-content-center">
							<div class="col-6">
								<img class="business-card-photo align-items-center" src="IMG_5791.jpg" alt="Photo of Louise Gutenberg">
							</div>
							<div class="col-6">
								<p class="h5 text-center">Louise Gutenberg</p>
								<p class="text-styling text-center">386.984.1083<br><span class="font-italic">louise.gutenberg@me.com</span></p>
							</div> 

						</div>) {
    flip.innerHTML = "Swapped text!";
  } else {
    flip.innerHTML = <div class="row align-items-center justify-content-center">
							<div class="col-6">
								<img class="business-card-photo align-items-center" src="IMG_5791.jpg" alt="Photo of Louise Gutenberg">
							</div>
							<div class="col-6">
								<p class="h5 text-center">Louise Gutenberg</p>
								<p class="text-styling text-center">386.984.1083<br><span class="font-italic">louise.gutenberg@me.com</span></p>
							</div> 

						</div>;
  }
}
