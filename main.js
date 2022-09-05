window.onload = function(){
   
    /*画像*/
    var images =['url(images-2/aqua1.jpg)',
                 'url(images-2/aqua2.jpg)',
                 'url(images-2/aqua4.jpg)']

    var target = document.getElementById('slide');
    var right = document.getElementById('right');
    var left = document.getElementById('left');

    var count = 0;

   function change(){
       target.style.backgroundImage = images[count];
    }

   function goNext(){
       if(count == 2){
           count = 0;
       }else{
           count++;
       }
       change();
   }
   
   function goBack(){
       if(count == 0){
           count = 2;
       }else{
           count--;
       }
       change();
   }

   right.addEventListener('click',goNext,false);
   left.addEventListener('click',goBack,false);
};

