# module_slider
1. Для использования модуля необходимо установить npm пакеты:
   - npm init -y
   - npm install webpack webpack-cli --save-dev

2. Важно обращать внимания на пути в файле webpack.config.js

3. Так же в проекте должен лежать файл script.js с содержимым:

```javascript
   "use strict";
   
   import slider from './slider';
   
   window.addEventListener('DOMContentLoaded', () =>{
      slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
	  });
   });
```
  - В файле slider.js в главную функцию передаются объект где
    + container - контейнер слайдера;
	+ slide - каждый слайд;
	+ nextArrow - клавиша следующего элемента;
	+ prevArrow - клавиша предыдущего элемента;
	+ totalCounter - количество слайдов;
	+ currentCounter - порядковый номер;
	+ wrapper - обертка для добавления стилей; 
	+ field - обертка для добавления стилей;
	
4. Чтобы собрать с помощью webpack, использовать команду: npx webpack.
