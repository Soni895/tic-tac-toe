let player_info=document.querySelector("[player-info]");
let grid_box=document.querySelectorAll(".box");
let newgame=document.querySelector(".newgame");
let current_player="X";
let game_grid;
win_possition=[
    [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
];
function init_game()
{       
    
    player_info.textContent=`Current Player - ${current_player}`;
    game_grid=["","","","","","","","",""];
    grid_box;

}
init_game()

for(let i=0;i<grid_box.length;i++)
{

}
function display_value(i)
{

    console.log("hi darshan");
    if(game_grid[i]==="")
    {
        grid_box[i].textContent=current_player;
        current_player="O";
        game_grid[i]=current_player;

    }

    else{

    }
}