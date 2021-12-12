$(document).ready(function () {
    var currentFloor = 2; // переменная, где хранится значение текущего этажа
    var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
    var counterUp = $(".counter-up");  /* кнопка увеличения этажа, стрелка */
    var counterDown = $(".counter-down");

    //функция при наведении мышью на этаж
    floorPath.on("mouseover", function () {
        floorPath.removeClass("current-floor");  //удаляем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
        $(".counter").text(currentFloor); //записываем значение этажа в счетчик справа
    });

    // отслеживаем клик по кнопке вверх
    counterUp.on("click", function () {  
        if (currentFloor < 18) { // проверяем значение этажа
            currentFloor++; // прибавляем один этаж
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, 
            useGrouping: false}); // форматируем переменную с этажом, чтобы было 01, а не 1
            $(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа
            floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
        }
      });

      // отслеживаем клик по кнопке вниз
      counterDown.on('click', function () {
          if (currentFloor > 2) {  // проверяем значение этажа
              currentFloor--; // отнимаем один этаж
              usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, 
              useGrouping: false}); // форматируем переменную с этажом, чтобы было 01, а не 1
              $(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа
              floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
              $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
              
          }
      })
});