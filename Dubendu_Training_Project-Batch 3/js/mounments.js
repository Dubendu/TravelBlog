let img_array_taj=["img/taj1.jfif","img/taj2.jfif","img/taj4.jfif"];
let index_taj=0;
let img_array_hawa=["img/hawa1.jfif","img/hawa2.jfif","img/hawa3.jfif"];
let index_hawa=0;
let img_array_mysore=["img/mysore1.jfif","img/mysore2.jfif","img/mysore3.jfif"];
let index_mysore=0;
let timer;
$(document).ready(function(){
    $('#tajmahal').mouseenter(function(){
       $('.blog-post-content').not('#tajmahal').fadeOut();
       timer=setInterval(function(){slide1();},2000);
       function slide1(){
           $('#changeimage').attr('src',function(){
                if(index_taj>=(img_array_taj.length)){
                    index_taj=0;
                }else{
                    index_taj++;
                }
                return img_array_taj[index_taj-1];
           });
       }
    });
    $('#tajmahal').mouseleave(function(){
        $('.blog-post-content').fadeIn(function(){
            clearInterval(timer);
        });
    });

    $('#hawamahal').mouseenter(function(){
        $('.blog-post-content').not('#hawamahal').fadeOut();
        timer=setInterval(function(){slide2();},2000);
        function slide2(){
            $('#changeimage').attr('src',function(){
                 if(index_hawa>=(img_array_hawa.length)){
                     index_hawa=0;
                 }else{
                     index_hawa++;
                 }
                 return img_array_hawa[index_hawa-1];
            });
        }
     });
     $('#hawamahal').mouseleave(function(){
         $('.blog-post-content').fadeIn(function(){
             clearInterval(timer);
         });
     });

     $('#mysore').mouseenter(function(){
        $('.blog-post-content').not('#mysore').fadeOut();
        timer=setInterval(function(){slide3();},2000);
        function slide3(){
            $('#changeimage').attr('src',function(){
                 if(index_mysore>=(img_array_mysore.length)){
                     index_mysore=0;
                 }else{
                     index_mysore++;
                 }
                 return img_array_mysore[index_mysore-1];
            });
        }
     });
     $('#mysore').mouseleave(function(){
         $('.blog-post-content').fadeIn(function(){
             clearInterval(timer);
         });
     });
});