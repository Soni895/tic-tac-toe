let player_info=document.querySelector("[player-info]");
let grid_box=document.querySelectorAll(".box");
let newgame=document.querySelector(".newgame");
let current_player;
let game_grid;

 let win_possition=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    init_game();
function init_game()
{       



    for(let i=0;i<grid_box.length;i++)
    {
        grid_box[i].textContent="";
        grid_box[i].style.pointerEvents="all";
        grid_box[i].classList.remove("win");

    }
    player_info.removeAttribute("id", "winner");
    current_player="X";
    newgame.classList.remove("active");
    player_info.textContent=`Current Player - ${current_player}`;
    game_grid=["","","","","","","","",""];

}


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
            game_grid[i]=current_player;
            current_player="O";

           
          
        }
        else{
            game_grid[i]=current_player;
        grid_box[i].textContent=current_player;
        current_player="X";
        }
        player_info.textContent=`Current Player - ${current_player}`;
        check_gameover();
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
    let ans=0;
    win_possition.forEach((position)=>
        {
       
            console.log(position);
            if((game_grid[position[0]]!== "" && game_grid[position[1]]!==""&& game_grid[position[2]]!=="")
            &&(game_grid[position[0]]===game_grid[position[1]])&&(game_grid[position[1]]===game_grid[position[2]])
            )
    
            {
               

                if(game_grid[position[0]]=="X")
                {
                    
                    player_info.textContent=`Winner is - X`;
                    

                }
                else{
                    player_info.textContent=`Winner is - O`;
                   
                }
                player_info.setAttribute("id", "winner");
                grid_box[position[0]].classList.add("win");
                grid_box[position[1]].classList.add("win");
                grid_box[position[2]].classList.add("win");  
                newgame.classList.add("active");
                grid_box.forEach((box)=>
                {
                   box.style.pointerEvents="none";
                });
                ans=1;
                
                
            }
        }
    );
           let count=0;
       game_grid.forEach(pos=>
        {
            console.log(pos);

            if(pos!=="" &&!ans)
            {
                count++;
            }
        });
        console.log(count);
        if(count==9)
        {
            player_info.textContent=`Match Draw`;
            newgame.classList.add("active");
        }
       

    



}
