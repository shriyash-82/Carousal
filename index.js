const slider = document.querySelectorAll(".carousel");
const nextBtn = document.querySelector(".btn-next");
const previousBtn = document.querySelector(".btn-prev");
slider.forEach(
    (image, index) => (image.style.transform = `translateX(${index * 100}%)`)
  );
  let currindx = 0;
  let maxindx = slider.length-1;
  function nextButtonClickHandler() {
    if (currindx === maxindx) {
      currindx = 0; // going back to the first image
    } else {
      currindx++;
    }
  
    slider.forEach(
      (image, index) =>
        (image.style.transform = `translateX(${(index - currindx) * 100}%)`)
    );
    console.log(currindx);
  }

  function previousButtonClickHandler () {
    if( currindx === 0 ){
        currindx = maxindx;
    }
    else {
        currindx--;
    }
    slider.forEach( 
        (image,index) => 
        ( image.style.transform = `translateX(${(index-currindx) * 100 }%)`)
        );
    console.log(currindx);
  }
  nextBtn.addEventListener("click",nextButtonClickHandler);
  previousBtn.addEventListener("click",previousButtonClickHandler);