// script.js
$(document).ready(function() {
    $("#show").click(function() {
        $(".main-links-mobile").css("display","block"); 
        $("#show").css("display","none"); 
        $("#hide").css("display","block"); 
       
    

    });
    $("#hide").click(function() {
        $(".main-links-mobile").css("display","none"); 
        $("#show").css("display","block"); 
        $("#hide").css("display","none"); 
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.skillbox');

    setInterval(() => {
        // Reset scale for all boxes
        boxes.forEach(box => box.style.transform = 'scale(1)');

        // Select a random box
        const randomIndex = Math.floor(Math.random() * boxes.length);
        const randomBox = boxes[randomIndex];

        // Apply scale transformation
        randomBox.style.transform = 'scale(1.1)';
    }, 500);
});
