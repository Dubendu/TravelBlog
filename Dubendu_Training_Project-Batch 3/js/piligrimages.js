let img_array_kedarnath=["img/kedar1.jfif","img/kedar2.jfif","img/kedar3.jfif"];
let index_kedarnath=0;
let img_array_gaya=["img/gaya1.jpg","img/gaya2.jfif","img/gaya3.jpg"];
let index_gaya=0;
let img_array_somnath=["img/somnath1.jfif","img/somnath2.jfif","img/somnath3.jpg"];
let index_somnath=0;
let timer;
$(document).ready(function(){
    $('#kedarnath').mouseenter(function(){
       $('.blog-post-content').not('#kedarnath').fadeOut();
       timer=setInterval(function(){slide1();},2000);
       function slide1(){
           $('#changeimage').attr('src',function(){
                if(index_kedarnath>=(img_array_kedarnath.length)){
                    index_kedarnath=0;
                }else{
                    index_kedarnath++;
                }
                return img_array_kedarnath[index_kedarnath-1];
           });
       }
    });
    $('#kedarnath').mouseleave(function(){
        $('.blog-post-content').fadeIn(function(){
            clearInterval(timer);
        });
    });

    $('#gaya').mouseenter(function(){
        $('.blog-post-content').not('#gaya').fadeOut();
        timer=setInterval(function(){slide2();},2000);
        function slide2(){
            $('#changeimage').attr('src',function(){
                 if(index_gaya>=(img_array_gaya.length)){
                     index_gaya=0;
                 }else{
                     index_gaya++;
                 }
                 return img_array_gaya[index_gaya-1];
            });
        }
     });
     $('#gaya').mouseleave(function(){
         $('.blog-post-content').fadeIn(function(){
             clearInterval(timer);
         });
     });

     $('#somnath').mouseenter(function(){
        $('.blog-post-content').not('#somnath').fadeOut();
        timer=setInterval(function(){slide3();},2000);
        function slide3(){
            $('#changeimage').attr('src',function(){
                 if(index_somnath>=(img_array_somnath.length)){
                     index_somnath=0;
                 }else{
                     index_somnath++;
                 }
                 return img_array_somnath[index_somnath-1];
            });
        }
     });
     $('#somnath').mouseleave(function(){
         $('.blog-post-content').fadeIn(function(){
             clearInterval(timer);
         });
     });
});