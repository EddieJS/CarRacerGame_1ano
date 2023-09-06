// starting the game
function start() {
    gamearea.innerHTML = "";
    starScreen.classList.add('hide');
    player.Start = true;
    player.score = 0;
    window.requestAnimationonFrame(Play);
    // creating the road lines
    for (i = 0; i < 5; i++) {

    let roadlines = document.createElement('div') ;
    roadlines.setAttribute('clas', 'roadlines') ;
    roadlines.y = (i * 140) ;
    roadlines.style.top = roadlines.y + "px" ;
    gamearea.appendchild(roadlines) ;
    }
    // creating the opponents car
    for (i = 0 < 3; i++){
    let oppents = docunet.createlement('div') ;
    opponents.setattribute('class', 'opponents') ;
    opponents.y = ((i) * -300) ;
    opponents.style.top = opponents.y + "px" ;
    gamearea.appendchild(oponnents) ;
    opponents.style.left = math.flor(math.random () * 350) + "px";
    opponente.style.backgroundcolor=randomcolor() ;
    }
    let car = document.creatElement('div');
    car.setAttribute('class', 'car');
     gameArea.appendchild(car);
     player.x = car.offsetleft;
     player.y = car.offsettop;
    }
    function randomcolor () {
    function c() {
    let hex=math.floor(math.random() * 256) .tostring(16) ;
    return ("0"+String(hex)) .substr(-2) ;
    }
    return "#"+c()+c()+c() ;
    } 
    }


























}
    