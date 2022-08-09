$(document).ready(function () {
    var currentFloor = 7; //переменная где хранится текущий этаж
    var contertUp =$(".contor-up");//кнопка увеличение этажа
    var contertDown =$(".contor-down");//кнопка уменьшение этажа
    var modal =$(".modal");
    var floorPath =$(".home-path");
    var modalCloseButton = $(".modal-close-button");
    var buttonPrimeri = $(".button-primeri");
    const  modalKarter =$(".modal-karter");
    var contor =$(".contor")
      
    
   
    


    //функция при наведении курсорам на этаж
   $(".home-image path").on("mouseover",function () { 
    $(".home-image path").removeClass("current-flor");//удаление активного класса у этажей
    currentFloor = $(this).attr ('data-floor');//получам значение текущегоэтажа
   $(".contor").text( currentFloor);//записывем значение этажа в щетчик справоа
   });
 
   floorPath.on("click", function () {
   modal.toggleClass("is-open");
    modalClearClass()   
   });

   
   function modalClearClass(){
    modalCloseButton.on("click" , ()=>{
        modal.removeClass("is-open");
    })
   }


   contertUp.on("click", function () { //отслежевание клик по кнопке вверх
   if(currentFloor <18){ //проверяем значение этажа ,должно быть <18
    currentFloor++;//прибовляем один знак
    usCurrentFloor =  currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2 , 
    useGrouping: false});//форматируем чтобы было 01 а не 1
    $(".contor").text( usCurrentFloor);//записывем значение этажа в щетчик справоа
    $(".home-image path").removeClass("current-flor");//удаление активного класса у этажей
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-flor");//подсвечиваем этаж
   }
   });
   contertDown.on("click", function(){
       if(currentFloor >2){
        currentFloor--;
        usCurrentFloor =  currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2 , 
            useGrouping: false});
            $(".contor").text( usCurrentFloor);
            $(".home-image path").removeClass("current-flor");
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-flor");
       }
   });
});

