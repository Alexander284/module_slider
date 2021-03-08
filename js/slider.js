function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    // Slider
    
    const btnNext = document.querySelector(nextArrow),
          btnPrev = document.querySelector(prevArrow),
          arrSlide = document.querySelectorAll(slide),
          slider = document.querySelector(container),
          numSlide = document.querySelector(currentCounter),
          totalSlide = document.querySelector(totalCounter),
          slidesWrapper = document.querySelector(wrapper),
          slidesFild = document.querySelector(field),
          width = window.getComputedStyle(slidesWrapper).width;

    let offset = 0;

    totalSlide.textContent = arrSlide.length;
    if(+totalSlide.textContent < 10){
        totalSlide.textContent = `0${totalSlide.textContent}`
    };
    
    slidesFild.style.cssText = `
        width: ${100 * arrSlide.length}%;
        display: flex;
        transition: 0.5s all;
    `;
    slidesWrapper.style.overflow = 'hidden';
    slidesFild.style.display = 'flex';
    
    arrSlide.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';
    const indicators = document.createElement('ol'),
          dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);
    
    for (let i = 0; i < arrSlide.length; i++){
        const dot = document.createElement('li');
        dot.classList.add('dot');
        dot.setAttribute('data-slide-to', i + 1);
        
        if(i == 0){
            dot.style.opacity = 1;
        };

        indicators.append(dot);
        dots.push(dot);
    }

    function opacityDots() {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[+numSlide.textContent - 1].style.opacity = 1;
    }

    function numberSlideConversion() {
        if(+numSlide.textContent < 10){
            numSlide.textContent = `0${numSlide.textContent}`
        };
    }

    function removeNotNum(str) {
        return +str.replace(/\D/g, ''); 
    }

    btnNext.addEventListener('click', () => {
        if(offset == removeNotNum(width) * (arrSlide.length - 1)){
            offset = 0;
        }else {
            offset += removeNotNum(width);
        }
        slidesFild.style.transform = `translateX(-${offset}px)`;

        if (+numSlide.textContent === +totalSlide.textContent){
            numSlide.textContent = '01';
        }else {
            +numSlide.textContent++;
            numberSlideConversion();
        }
        opacityDots();
    });

    btnPrev.addEventListener('click', () => {
        if(offset == 0){
            offset = removeNotNum(width) * (arrSlide.length - 1);
        }else {
            offset -= removeNotNum(width)
        }
        slidesFild.style.transform = `translateX(-${offset}px)`;

        if (+numSlide.textContent === 1){
            numSlide.textContent = totalSlide.textContent;
        }else {
            +numSlide.textContent--;
            numberSlideConversion();
        }
        opacityDots();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            numSlide.textContent = slideTo;
            offset = removeNotNum(width) * (slideTo - 1);

            slidesFild.style.transform = `translateX(-${offset}px)`;

            opacityDots();

            numberSlideConversion();
        });
    });
}

export default slider;