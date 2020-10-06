const logic ={'one':"-",'two':"-", 'three':"-", 'four':"-", "five":"-", 'six':"-","seven":"-", "eight":"-", "nine":"-"};
var chance=true;
var fill=0

// Taking Input

function inputValue(boxNo,value){
  if (chance===false){
    const curr = document.querySelector('.'+boxNo)
    curr.textContent=value;
    setTimeout(function(){
      curr.classList.add(value);
      logic[boxNo]=value;
      fill=fill+1;
      if (ifWon(fill)){
      const text = document.querySelector('.judgement');
      text.textContent="Your Turn";}
    }, 1000); 
  }
}

// Reset

function reset(strr){
  const text = document.querySelector('.judgement');
      text.textContent= strr;
  setTimeout(function(){
    location.reload();
  }, 3000); 
}

// Computers Turn

function computer(){

  // occuopy center

  if (logic['five']==='-'){
    inputValue("five","O");
    return;
  }
  // complete Diagonals
  if ((logic["first"]=='O' && logic["five"]=='O' && logic["nine"] =='-')  || (logic["first"]=='O' && logic["nine"]=='O' && logic["nine"] =='-') || (logic["five"] =='O' && logic["nine"]=='O' && logic["one"] =='-')){
        inputValue("five","O");
        inputValue("one","O");
        inputValue("nine","O");
        return;
  }

  if ((logic["three"]=='O' && logic['five']=='O' && logic["seven"] =='-') || (logic["three"]=='O' && logic['five']=='-' && logic["seven"] =='O') || (logic["three"]=='-' && logic['five']=='O' && logic["seven"] =='O')){
        inputValue("five","O");
        inputValue("seven","O");
        inputValue("three","O");
        return;
  }

  // completing rows and columns
  if ((logic["three"]=='O' && logic['one']=='O' && logic["two"] =='-') || (logic["three"]=='O' && logic['one']=='-' && logic["two"] =='O') || (logic["three"]=='-' && logic['one']=='O' && logic["two"] =='O')){
    inputValue("one","O");
    inputValue("two","O");
    inputValue("three","O");
    return;
  }
  if ((logic["four"]=='O' && logic['five']=='O' && logic["six"] =='-') || (logic["four"]=='O' && logic['five']=='-' && logic["six"] =='O') || (logic["four"]=='-' && logic['five']=='O' && logic["six"] =='O')){
    inputValue("four","O");
    inputValue("five","O");
    inputValue("six","O");
    return;
  }
  if ((logic["seven"]=='O' && logic['eight']=='O' && logic["nine"] =='-') || (logic["seven"]=='O' && logic['eight']=='-' && logic["nine"] =='O') || (logic["seven"]=='-' && logic['eight']=='O' && logic["nine"] =='O')){
    inputValue("seven","O");
    inputValue("eight","O");
    inputValue("nine","O");
    return;
  }
  if ((logic["one"]=='O' && logic['four']=='O' && logic["seven"] =='-') || (logic["one"]=='O' && logic['four']=='-' && logic["seven"] =='O') || (logic["one"]=='-' && logic['four']=='O' && logic["seven"] =='O')){
    inputValue("one","O");
    inputValue("four","O");
    inputValue("seven","O");
    return;
  }
  if ((logic["two"]=='O' && logic['five']=='O' && logic["eight"] =='-') || (logic["two"]=='O' && logic['five']=='-' && logic["eight"] =='O') || (logic["two"]=='-' && logic['five']=='O' && logic["eight"] =='O')){
    inputValue("two","O");
    inputValue("five","O");
    inputValue("eight","O");
    return;
  }
  if ((logic["three"]=='O' && logic['six']=='O' && logic["nine"] =='-') || (logic["three"]=='O' && logic['six']=='-' && logic["nine"] =='O') || (logic["three"]=='-' && logic['six']=='O' && logic["nine"] =='O')){
    inputValue("three","O");
    inputValue("six","O");
    inputValue("nine","O");
    return;
  }
  // blocking diagonals
  // first diagonal
  if (logic["first"]=='X' && logic["five"]=='X' && logic["nine"] =='-'){
    inputValue("nine","O");
    return;
  }
  if (logic["first"]=='X' && logic["five"]=='-' && logic["nine"] =='X'){
    inputValue("five","O");
    return;
  }
  if (logic["first"]=='-' && logic["five"]=='X' && logic["nine"] =='X'){
    inputValue("one","O");
    return;
  }

  // second Diagonal
  if (logic["three"]=='X' && logic["five"]=='X' && logic["seven"] =='-'){
    inputValue("seven","O");
    return;
  }
  if (logic["three"]=='X' && logic["five"]=='-' && logic["seven"] =='X'){
    inputValue("five","O");
    return;
  }
  if (logic["three"]=='-' && logic["five"]=='X' && logic["seven"] =='X'){
    inputValue("three","O");
    return;
  }


  // Blocking rows and Column
  // ROWS
  if (logic["one"]=='X' && logic["two"]=='X' && logic["three"] =='-'){
    inputValue("three","O");
    return;
  }
  if (logic["one"]=='X' && logic["two"]=='-' && logic["three"] =='X'){
    inputValue("two","O");
    return;
  }
  if (logic["one"]=='-' && logic["two"]=='X' && logic["three"] =='X'){
    inputValue("one","O");
    return;
  }
  if (logic["four"]=='X' && logic["five"]=='X' && logic["six"] =='-'){
    inputValue("six","O");
    return;
  }
  if (logic["four"]=='X' && logic["five"]=='-' && logic["six"] =='X'){
    inputValue("five","O");
    return;
  }
  if (logic["four"]=='-' && logic["five"]=='X' && logic["six"] =='X'){
    inputValue("four","O");
    return;
  }
  if (logic["seven"]=='X' && logic["eight"]=='X' && logic["nine"] =='-'){
    inputValue("nine","O");
    return;
  }
  if (logic["seven"]=='X' && logic["eight"]=='-' && logic["nine"] =='X'){
    inputValue("eight","O");
    return;
  }
  if (logic["seven"]=='-' && logic["eight"]=='X' && logic["nine"] =='X'){
    inputValue("seven","O");
    return;
  }
  // COLUMNS
  if (logic["one"]=='X' && logic["four"]=='X' && logic["seven"] =='-'){
    inputValue("seven","O");
    return;
  }
  if (logic["one"]=='X' && logic["four"]=='-' && logic["seven"] =='X'){
    inputValue("four","O");
    return;
  }
  if (logic["one"]=='-' && logic["four"]=='X' && logic["seven"] =='X'){
    inputValue("one","O");
    return;
  }
  if (logic["two"]=='X' && logic["five"]=='X' && logic["eight"] =='-'){
    inputValue("eight","O");
    return;
  }
  if (logic["two"]=='X' && logic["five"]=='-' && logic["eight"] =='X'){
    inputValue("five","O");
    return;
  }
  if (logic["two"]=='-' && logic["five"]=='X' && logic["eight"] =='X'){
    inputValue("two","O");
    return;
  }
  if (logic["three"]=='X' && logic["six"]=='X' && logic["nine"] =='-'){
    inputValue("nine","O");
    return;
  }
  if (logic["three"]=='X' && logic["six"]=='-' && logic["nine"] =='X'){
    inputValue("six","O");
    return;
  }
  if (logic["three"]=='-' && logic["six"]=='X' && logic["nine"] =='X'){
    inputValue("three","O");
    return;
  }


  // Special Cases
  if (logic['one']=='X' && logic['nine']=='X' && logic['five'] =='O' ){
        if (logic["two"]=='-'){
          inputValue("two","O");
          return;
        }
        if (logic["four"]=='-'){
          inputValue("four","O");
          return;
        }
        if (logic["six"]=='-'){
          inputValue("six","O");
          return;
        }
        if (logic["eight"]=='-'){
          inputValue("eight","O");
          return;
        }
  }

  // Blocking Second Diagonal
  if (logic['three']=='X' && logic['seven']=='X' && logic['five'] =='O' ){
    if (logic["two"]=='-'){
      inputValue("two","O");
      return;
    }
    if (logic["four"]=='-'){
      inputValue("four","O");
      return;
    }
    if (logic["six"]=='-'){
      inputValue("six","O");
      return;
    }
    if (logic["eight"]=='-'){
      inputValue("eight","O");
      return;
    }
  }

  // Taking Corners
  if (logic["one"]=='-'){
    inputValue("one","O");
    return;
  }
  if (logic["three"]=='-'){
    inputValue("three","O");
    return;
  }
  if (logic["seven"]=='-'){
    inputValue("seven","O");
    return;
  }
  if (logic["nine"]=='-'){
    inputValue("nine","O");
    return;
  }
  // Taking Mid Spaces
  if (logic["one"]=='-'){
    inputValue("one","O");
    return;
  }
  if (logic["two"]=='-'){
    inputValue("two","O");
    return;
  }
  if (logic["three"]=='-'){
    inputValue("three","O");
    return;
  }
  if (logic["four"]=='-'){
    inputValue("four","O");
    return;
  }
  if (logic["five"]=='-'){
    inputValue("five","O");
    return;
  }
  if (logic["six"]=='-'){
    inputValue("six","O");
    return;
  }
  if (logic["seven"]=='-'){
    inputValue("seven","O");
    return;
  }
  if (logic["eight"]=='-'){
    inputValue("eight","O");
    return;
  }
  if (logic["nine"]=='-'){
    inputValue("nine","O");
    return;
  } 
}

// Check for win

function ifWon(fill){
    console.log(fill);
    if ((logic['one']==='X' && logic['two']==="X" && logic["three"]==="X") || (logic['four']==='X' && logic['five']==="X" && logic["six"]==="X") || (logic['seven']==='X' && logic['eight']==="X" && logic["nine"]==="X")){
      console.log("X WINS!!");
      reset("You Won!!");
      return;
    }
    else if ((logic['one']==='O' && logic['two']==="O" && logic["three"]==="O") || (logic['four']==='O' && logic['five']==="O" && logic["six"]==="O") || (logic['seven']==='O' && logic['eight']==="O" && logic["nine"]==="O")){
      console.log("O WINS!!");
      reset("You Lost!!");
      return;
    }
    else if ((logic['one']==='O' && logic['four']==="O" && logic["seven"]==="O") || (logic['two']==='O' && logic['five']==="O" && logic["eight"]==="O") || (logic['three']==='O' && logic['six']==="O" && logic["nine"]==="O")){
      console.log("O WINS!!");
      reset("You Lost!!");
      return;
    }
    else if ((logic['one']==='X' && logic['four']==="X" && logic["seven"]==="X") || (logic['two']==='X' && logic['five']==="X" && logic["eight"]==="X") || (logic['three']==='X' && logic['six']==="X" && logic["nine"]==="X")){
      console.log("X WINS!!");
      reset("You Won!!");
      return;
    }
    else if ((logic['one']==='O' && logic['five']==="O" && logic["nine"]==="O") || (logic['three']==='O' && logic['five']==="O" && logic["seven"]==="O")){
      console.log("O WINS!!");
      reset("You Lost!!");
      return;
    }
    else if ((logic['one']==='X' && logic['five']==="X" && logic["nine"]==="X") || (logic['three']==='X' && logic['five']==="X" && logic["seven"]==="X")){
      console.log("X WINS!!");
      reset("You Won!!");
      return;
    }
    else if (fill===9) {
      console.log("match Draw!!");
      reset("Match Draw!!");
      return;
    }
    else{
      chance= !chance;
      return 1;
    }
}

const boxes=document.querySelectorAll('.one, .two, .three, .four, .five, .six, .seven, .eight, .nine');
boxes.forEach((box) =>{
  box.addEventListener('click', (e)=>{
      const boxNo=e.target.className;
      if (logic[boxNo]==='-' && chance){
        logic[boxNo]='X';
        const curr = document.querySelector('.'+boxNo)
        curr.textContent='X';
        curr.classList.add('X');
        fill=fill+1;
        if (ifWon(fill))
        {const text = document.querySelector('.judgement');
        text.textContent="Computer is Playing";}
        computer();
      }
  });
});