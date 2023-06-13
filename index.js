let player_info=document.querySelector("[player-info]");
let grid_box=document.querySelectorAll(".box");
let newgame=document.querySelector(".newgame");
let current_player;
let game_grid;
win_possition=[
    [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
];
function init_game()
{       
    current_player="X";
    player_info.textContent=`Current Player - ${current_player}`;
    newgame.classList.remove("active");
    game_grid=["","","","","","","",""];

}
init_game()