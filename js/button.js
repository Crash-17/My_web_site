var count = 0;
document.getElementById("myButton").onclick = function () {
    count++;
    if (count % 2 == 0){
        document.getElementById("demo").innerHTML = "";
    }
    else {
        //Cоздаем элемент image
        var img = document.createElement("img");
        //Устанавливаем источник изображения
        img.src = "https://wp-s.ru/wallpapers/0/2/small/433595566302539.jpg"
        //Добавляем картинку в параграф
        document.getElementById("demo").appendChild(img);
    }
    
}