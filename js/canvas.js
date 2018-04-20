window.onload = function () {
    var canvas = document.getElementById("canvas");
    console.log(canvas.width+"  "+canvas.height);
    var context = canvas.getContext("2d");
    // context.font = "38pt Arial";
    // context.fillStyle="cornflowerblue";
    // context.strokeStyle = "blue";
    // context.fillText("hello world", canvas.width / 2 - 150, canvas.height / 2 + 150);
    // context.strokeText("hello world", canvas.width / 2 - 150, canvas.height / 2 + 150);
    //
    // context.fillStyle="#ffffaa"
    // context.fillRect(0,0,500,300)
    var alpaha=0;
    var fadeIn=true;
    var text="hello world";
    var helloworldImage=new Image();
    helloworldImage.src="../img/img1.jpg";
    function gameLoop() {
        setTimeout(gameLoop,20);
        console.log(1);
        drawScreen();
    }
    gameLoop();
    function drawScreen() {
        context.globalAlpha=1;
        context.fillStyle="#000000";
        context.fillRect(0,0,640,480);
        context.globalAlpha=0.25;
        context.drawImage(helloworldImage,0,0);
    }
}