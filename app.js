const dvd = document.querySelector('#logo');
const state = {
    position:{
        x: (window.innerWidth / 2) - 100,
        y: (window.innerHeight / 2) - 100,
    },
    velocity:{
        x: 1,
        y: 0,
    }
};


function draw(){
    dvd.style.top = state.position.y + 'px';
    dvd.style.left = state.position.x + 'px';
}

function update(){
    state.position.y += (state.velocity.y * 4);
    state.position.x += (state.velocity.x * 4 );
}


function gameloop() {
    update();
    draw();
    requestAnimationFrame(gameloop);
}
gameloop();