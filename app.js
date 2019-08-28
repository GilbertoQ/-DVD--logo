const dvd = document.querySelector('#logo');

const state = {
    color: 0,
    position:{
        x: (window.innerWidth / 2) - (dvd.clientWidth / 2),
        y: (window.innerHeight / 2) - (dvd.clientHeight / 2),
    },
    velocity:{
        x: 1,
        y: -1,
    }
};

function draw(){
    dvd.style.top = state.position.y + 'px';
    dvd.style.left = state.position.x + 'px';
    //console.log(state.color)
    dvd.querySelectorAll('path').forEach(path => {
        path.setAttribute('fill', `hsl(${state.color % 360},100%,50%)`);
      });
}

function update(){
    state.position.y += (state.velocity.y * 4);
    state.position.x += (state.velocity.x * 4 );

}

function hit_detection(){
    //right edge
    if( state.position.x + dvd.clientWidth >= window.innerWidth -2){
        state.velocity.x = -state.velocity.x;
        choose_color();
    }
    //left edge
    else if(state.position.x <= 0 ){
        state.velocity.x = -state.velocity.x;
        choose_color();
    }

    //top
    if(state.position.y <= 0 ){
        state.velocity.y = -state.velocity.y;
        choose_color();
    }
    //bottom
    else if(state.position.y + dvd.clientHeight >= window.innerHeight - 2){
        state.velocity.y = -state.velocity.y;
        choose_color();
    }
}

function choose_color(){
    state.color = state.color + 137;
    //console.log(state.color)
}
function gameloop() {
    update();
    draw();
    hit_detection();
    requestAnimationFrame(gameloop);
}
gameloop();