# scrolltotop.js

<b>scrolltotop.js</b> is a lightweight interactive scroll to top button which requires the calling of just a function: ```scrolltotop()```.

```scrolltotop()``` has four parameters:
* ```text```
* ```backimage```
* ```backcolor```
* ```cornerround``` (the border radius)

```scrolltotop(text, image, backcolor, cornerround)```

Include the library by either downloading the full version [here](https://raw.githubusercontent.com/khalby786/scrolltotop.js/master/script.js) or by including 

```<script src= 'https://raw.githubusercontent.com/khalby786/scrolltotop.js/master/script.js'></script>```

and call the function ```scrolltotop('Hello', 'image.jpg', 'red', '50%')``` (for example).

Typing the word _default_ enclosed in apostrophes for the first three parameters can invoke default values and design for the ScrollToTop button.

## More

* Calling the function ```backtotopHeightWidth(h, w)``` can change the height (```h```) and width (```w```) of the ScrollToTop button.

* For smooth transitions, include jQuery and add the following code:
  ```$(function() { $("#totop").on('click', function() { $("HTML, BODY").animate({ scrollTop: 0 }, 1000); }); });```

* To remove ScrollToTop.js, just type ```removescrolltotop()```.

* After removing, you might find many errors in the console, which you should ignore. (Just a side effect of removing the element.)

## Demo


  