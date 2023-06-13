let player_info=document.querySelector("[player-info]");
let grid_box=document.querySelectorAll(".box");
let newgame=document.querySelector(".newgame");
let current_player;
let game_grid;

init_game()
current_player.
win_possition=[
    [1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]
];
function init_game()
{       
    
    for(let i=0;i<grid_box.length;i++)
    {
        grid_box[i].textContent="";
    }
    current_player="X";
    player_info.textContent=`Current Player - ${current_player}`;
    game_grid=["","","","","","","","",""];

}


// grid_box.forEach((value,index)=>
// {
//     value.addEventListener("click",()=> display_value(index)
//      );

// });



for(let i=0;i<grid_box.length;i++)
{
    grid_box[i].addEventListener("click",()=>display_value(i) );
}

function display_value(i)
{
    if(game_grid[i]==="")
    {
       

        if(current_player=="X")
        {
            grid_box[i].textContent=current_player;
            current_player="O";
            game_grid[i]=current_player;
            player_info.textContent=`Current Player - ${current_player}`;
            check_gameover();
        }
        else{

           
        grid_box[i].textContent=current_player;
        current_player="X";
        player_info.textContent=`Current Player - ${current_player}`;
        game_grid[i]=current_player;
        check_gameover();
        }
        
        }

    else{
return;
    }
}

newgame.addEventListener("click",()=>
{
init_game();
}
);

check_gameover=()=>
{

}