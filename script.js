  /* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

      // prints "hi" in the browser's dev tools console
      function backtotop (text, backimage, backcolor, cornerround) {
        var scrolldiv = document.createElement('div');
        scrolldiv.setAttribute("id", "totop")
        document.body.appendChild(scrolldiv);
        var scrollDiv = document.getElementById("totop");
        scrollDiv.style.position = "fixed";
        scrollDiv.style.bottom = "20px";
        scrollDiv.style.right = "30px";
        scrollDiv.style.zIndex = "99";
        scrollDiv.style.backgroundColor = backcolor;
        scrollDiv.style.cursor = "pointer";
        scrollDiv.style.padding = "15px";
        scrollDiv.style.borderRadius = cornerround;
        scrollDiv.textContent = text;
        scrollDiv.style.backgroundImage = backimage;
        scrollDiv.style.backgroundRepeat = "no-repeat";
        scrollDiv.style.backgroundPosition = "50% 50%";
        scrollDiv.backgroundColor = "transparent";
        scrollDiv.style.backgroundSize = "100%";
        scrollDiv.style.height = "20px";
        scrollDiv.style.width = "20px";
        scrollDiv.setAttribute("onclick", "topFunction()");
      }
      
      function backtotopHeightWwidth(h, w) {
        var scrollDiv = document.getElementById("totop");
        scrollDiv.style.height = h;
        scrollDiv.style.width = w;
      }

      window.onscroll = (function(){ 
        scrollFunction() 
      });

      function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          var totopEl = document.getElementById("totop");
          totopEl.style.display = "block";
        } else {
          var totopEll = document.getElementById("totop");
          totopEll.style.display = "none";
        }
      }

      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      }

      //h, back, cornerround