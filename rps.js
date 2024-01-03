function comp_choice(){
    let choice='';
    let random_number= Math.random() * 3;
    if(random_number<=1){
        return 'Rock';
    }
    else if(random_number<=2){
        return 'Paper';
    }
    else{
        return 'Scissors';
    }    
}
function showRes(player_choice, computer_choice, res){
    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('#User').innerHTML=
    player_choice!== undefined ?`You: ${player_choice}` : '';

    document.querySelector('#Computer').innerHTML=
    computer_choice!== undefined ?`Computer: ${computer_choice}` : '';

    document.querySelector('#Result').innerHTML=
    res!== undefined ?`Result: ${res}` : '';

    document.querySelector('#Score').innerHTML=`${score.showScore()}`;
}

function who_won(computer_choice, player_choice){
    if(computer_choice === player_choice ){
        score.tie++;
        let res='Tie'
        showRes(player_choice, computer_choice, res)
    }

    else if((computer_choice==='Rock'&& player_choice==='Scissors') || (computer_choice==='Paper'&& player_choice==='Rock') || (computer_choice==='Scissors'&& player_choice==='Paper')){
        score.computer_points++;
        let res='Lost'
        showRes(player_choice, computer_choice, res)
    }

    else if((player_choice==='Rock'&& computer_choice==='Scissors') || (player_choice==='Paper'&& computer_choice==='Rock') || (player_choice==='Scissors'&& computer_choice==='Paper')){
        score.player_points++;
        let res='Won'
        showRes(player_choice, computer_choice, res)
    }
} 
    
    let scoreStr=localStorage.getItem('score');
    let score;
    reset(scoreStr);
    function reset(scoreStr){
        //showRes();
        score= scoreStr ? JSON.parse(scoreStr) :   {
            player_points: 0,
            computer_points: 0,
            tie:0,
        };
        score.showScore= function(){
            return`Computer: ${score.computer_points} You: ${score.player_points} Tie: ${score.tie}`;
        };
    }
    

