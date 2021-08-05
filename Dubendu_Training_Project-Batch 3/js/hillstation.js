let img_array_leh=["img/leh1.jfif","img/leh2.jfif","img/leh3.jfif","img/leh4.jfif"];
let index_leh=0;
let img_array_nainital=["img/nainital1.jfif","img/nainital2.jfif","img/nainital3.jfif","img/nainital4.jfif"];
let index_nainital=0;
let img_array_darjeeling=["img/darjeeling1.jfif","img/darjeeling2.jfif","img/darjeeling3.jfif","img/darjeeling4.jfif"];
let index_darjeeling=0;
let timer;
$(document).ready(function(){
    $('#leh').mouseenter(function(){
       $('.blog-post-content').not('#leh').fadeOut();
       timer=setInterval(function(){slide1();},2000);
       function slide1(){
           $('#changeimage').attr('src',function(){
                if(index_leh>=(img_array_leh.length)){
                    index_leh=0;
                }else{
                    index_leh++;
                }
                return img_array_leh[index_leh-1];
           });
       }
    });
    $('#leh').mouseleave(function(){
        $('.blog-post-content').fadeIn(function(){
            clearInterval(timer);
        });
    });

    $('#nainital').mouseenter(function(){
        $('.blog-post-content').not('#nainital').fadeOut();
        timer=setInterval(function(){slide2();},2000);
        function slide2(){
            $('#changeimage').attr('src',function(){
                 if(index_nainital>=(img_array_nainital.length)){
                     index_nainital=0;
                 }else{
                     index_nainital++;
                 }
                 return img_array_nainital[index_nainital-1];
            });
        }
     });
     $('#nainital').mouseleave(function(){
         $('.blog-post-content').fadeIn(function(){
             clearInterval(timer);
         });
     });

     $('#darjeeling').mouseenter(function(){
        $('.blog-post-content').not('#darjeeling').fadeOut();
        timer=setInterval(function(){slide3();},2000);
        function slide3(){
            $('#changeimage').attr('src',function(){
                 if(index_darjeeling>=(img_array_darjeeling.length)){
                     index_darjeeling=0;
                 }else{
                     index_darjeeling++;
                 }
                 return img_array_darjeeling[index_darjeeling-1];
            });
        }
     });
     $('#darjeeling').mouseleave(function(){
         $('.blog-post-content').fadeIn(function(){
             clearInterval(timer);
         });
     });
});