/**Slider track progress */
const slider = document.querySelector(".range__slider");
const rangeLabel = document.querySelector(".range__label"); 
const rangePrice = document.querySelector(".range__price");

slider.oninput = function() {
  let trackValue = (this.value-this.min)/(this.max-this.min)*100;
  this.style.background = 
  'linear-gradient(to right, var(--slider-bar) 0%, var(--slider-bar) ' + trackValue 
  + '%, var(--empty-slider-bar) ' + trackValue + '%, var(--empty-slider-bar) 100%)'
};

slider.onchange = function(){
    if(slider.value >= 10000 && slider.value < 50000){
        rangeLabel.textContent = "10K";
        rangePrice.textContent = 8;
    }else if(slider.value >= 50000 && slider.value < 100000){ 
        rangeLabel.textContent = "50K";
        rangePrice.textContent = 12;
    }else if(slider.value >= 100000 && slider.value < 500000){
        rangeLabel.textContent = "100K";
        rangePrice.textContent = 16;
    }else if(slider.value >= 500000 && slider.value < 1000000){
        rangeLabel.textContent = "500K";        
        rangePrice.textContent = 24;
    }else{
        rangeLabel.textContent = "M";
        rangePrice.textContent = 36;
    } 
}