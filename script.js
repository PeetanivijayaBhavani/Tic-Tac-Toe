const statusDisplay=document.querySelector('.game--status');
let gameActive=true;//initial state of a game
let currentPlayer="X";//initial player
//initialize all the 9 cells as empty cells
let gameState=["","","","","","","","",""];
//give a winning message X,O
const winningMessage=()=>`Player ${currentPlayer} has won!`;
const drawMessage=()=>"Game ended in draw";
const currentPlayerTurn=()=>`Its  ${currentPlayer} turn`;
statusDisplay.innerHTML=currentPlayerTurn();
//declare 5 functions
function handleCellPlayed()
{
}
function handleplayerChange()
{
}
function handleResultValidation()
{
}
function handleCellClick()
{
}
function handleRestartGame()
{
}
document.querySelectorAll('.cell').forEach(cell=>cell.addEventListener('click',handleCellClick));
document.querySelector('.game--restart').addEventListener('click',handleRestartGame);
//part-2 of the code-handleCellClick--> handlecell
function handleCellClick(clickedCellEvent)
{
    const clickedCell=clickedCellEvent.target;
    const clickedCellIndex=parseInt(clickedCell.getAttribute('data-cell-index'));//it stores 2 as value
    if(gameState[clickedCellIndex]!==""||!gameActive)
    {
        return;//this does not allow a cell click twice ,playing after a game over
    }
    handleCellPlayed(clickedCell,clickedCellIndex);
    handleResultValidation();
}
//part-3 of the program
function handleCellPlayed(clickedCell,clickedCellIndex)
{
    gameState[clickedCellIndex]=currentPlayer;
    clickedCell.innerHTML=currentPlayer;
}
//part=-4 result validation
const winningConditions=[
    [0,1,2],    //0
    [3,4,5],    //1
    [6,7,8],    //2
    [0,4,8],    //3
    [2,4,6],     //4
    [0,3,6],    //5
    [1,4,7],    //7
    [2,5,8]     //8
];
function handleResultValidation()
{
    let roundWon=false;
    for(let i=0;i<=7;i++)
    {
        const winningCondition=winningConditions[i];
        let a=gameState[winningCondition[0]];
        let b=gameState[winningCondition[1]];
        let c=gameState[winningCondition[2]];
        if(a===""||b===""||c==="")
        {
            continue;
        }
        if(a===b && b===c)
        {
            roundWon=true;
            break;
        }
    }
    if(roundWon)
    {statusDisplay.innerHTML=winningMessage();
        gameActive=false;
        return;
    }
    let roundDraw=!gameState.includes("");
    if(roundDraw)
    {
        statusDisplay.innerHTML=drawMessage();
        gameActive=false;
        return;
    }
    handleplayerChange();
}
//part-5 of progrram
function handleplayerChange()
{
    currentPlayer=currentPlayer==="X"?"O":"X";
    statusDisplay.innerHTML=currentPlayerTurn();
}
//part-6
function handleRestartGame()
{
    gameActive=true;
    currentPlayer="X";
    gameState=["","","","","","","","",""];
    statusDisplay.innerHTML=currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell=>cell.innerHTML="");
}