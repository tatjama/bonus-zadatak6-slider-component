
const slider = document.querySelector(".range__slider");
const rangeLabel = document.querySelector(".range__label"); 
const rangePrice = document.querySelector(".range__price");
const toggleDiscountBtn = document.querySelector(".toggle__slider");
toggleDiscountBtn.addEventListener("click", toggleDiscount);

const updatePrice = (price) => {
    rangePrice.textContent = (toggleDiscountBtn.classList.contains("active"))? 3*price/4 : price;
}

slider.oninput = function(){
  let trackValue = (this.value-this.min)/(this.max-this.min)*100;
  this.style.background = 
  'linear-gradient(to right, var(--slider-bar) 0%, var(--slider-bar) ' + trackValue 
  + '%, var(--empty-slider-bar) ' + trackValue + '%, var(--empty-slider-bar) 100%)'
};

slider.onchange = () => {
    if(slider.value < 50000){
        rangeLabel.textContent = "10K";
        updatePrice(8);
    }else if(slider.value >= 50000 && slider.value < 100000){ 
        rangeLabel.textContent = "50K";
        updatePrice(12);
    }else if(slider.value >= 100000 && slider.value < 500000){
        rangeLabel.textContent = "100K";
        updatePrice(16);
    }else if(slider.value >= 500000 && slider.value < 1000000){
        rangeLabel.textContent = "500K";
        updatePrice(24);
    }else{
        rangeLabel.textContent = "1M";
        updatePrice(36);
    } 
}

function toggleDiscount(){    
    rangePrice.textContent = (this.classList.toggle("active"))? 
    3 * rangePrice.textContent*1 / 4 : 4 * rangePrice.textContent*1 / 3;
}


