$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(400, 650, 300, 20, "lime");
    createPlatform(800, 500, 300, 20, "red");
    createPlatform(710, 540, 50, 20, "cyan", 710, 710, 0, 430, 540, 2);
    createPlatform(1000, 390, 300, 20, "blue");
    createPlatform(300, 370, 400, 20, "yellow");
    createPlatform(710, 700, 20, 400, "white", 710, 710, 0, 570, 700, 1);
    createBadPlatform(580, 360, 30, 15, "darkred");
    createBadPlatform(400, 360, 30, 15, "darkred");
    createBadPlatform(1050, 700, 30, 60, "darkred");
    createBadPlatform(880, 700, 30, 60, "darkred");
    createBadPlatform(1150, 380, 30, 15, "darkred");

    // TODO 3 - Create Collectables
    createCollectable("moogle", 1200, 420, 0, 0);
    createCollectable("moogle", 1320, 180, 0, 0);
    createCollectable("moogle", 310, 320, 0.1, 0.1);
    
    

    // TODO 4 - Create Cannons
    createCannon("bottom", 1290, 1000, 10, 60);
    createCannon("left", 400, 2500, 60, 10);
    createCannon("top", 730, 1200, 10, 60, 400, 730, 2);
  
    

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
