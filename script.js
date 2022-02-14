let arr = new Array(25);
let count = 0;
var bingo=0;

let bingoCheckArr = new Array(12);
for(var i = 0; i < bingoCheckArr.length; i++)
    bingoCheckArr[i]=0;

for(var i = 0; i < arr.length; i++)
    arr[i]=-1;

let arrBingo=new Array(5);
for(var i=0; i<arrBingo.length; i++){
    arrBingo[i]=new Array(5);
}

function generateArr(){
    while(count!=25){
        var x = Math.floor(Math.random()*25)+1;
        if(arr.includes(x)){
            console.log("true");
        }
        else{
            arr[count]=x;
            count=count+1;
        }
    }
    console.log(arr);
    
    for(var i = 0; i <arrBingo.length; i++){
        for(var j=0; j<arrBingo[i].length; j++){
            arrBingo[i][j]=arr[i*5+j];
        }
    }
    for(var i=0; i<arr.length; i++){
        document.getElementById("pos"+i).innerHTML=arr[i];
    }
}

function doubleDigit(x){
    if(x<10)
        return " "+x;
    return x;
}

function clickBingo(x){
    document.getElementById("pos"+x).style.textDecoration="line-through";
    let i = Math.floor(x/5);
    let j = x%5;
    arrBingo[i][j] = 0;
    logic();
}

function logic(){

    var flag=0;

    // Horizontal Check
    if(flag==0){
        for(var i=0;i<arrBingo.length; i++){
            if(bingoCheckArr[i]==0 && arrBingo[i][0]==0 && arrBingo[i][1]==0 && arrBingo[i][2]==0 && arrBingo[i][3]==0 && arrBingo[i][4]==0){
                bingoCheckArr[i]=1;
                flag=1;
                break;
            }
        }
    }

    //Vertical Check
    if(flag==0){
        for(var i=0;i<arrBingo.length; i++){
            if(bingoCheckArr[5+i]==0 && arrBingo[0][i]==0 && arrBingo[1][i]==0 && arrBingo[2][i]==0 && arrBingo[3][i]==0 && arrBingo[4][i]==0){
                bingoCheckArr[5+i]=1;
                flag=1;
                break;
            }
        }
    }

    // Diagonal Check
    if(flag==0){
        if(bingoCheckArr[10]==0 && arrBingo[0][0]==0 && arrBingo[1][1]==0 && arrBingo[2][2]==0 && arrBingo[3][3]==0 && arrBingo[4][4]==0){
            bingoCheckArr[10]=1;
            flag=1;
        }
    }
    if(flag==0){
        if(bingoCheckArr[11]==0 && arrBingo[0][4]==0 && arrBingo[1][3]==0 && arrBingo[2][2]==0 && arrBingo[3][1]==0 && arrBingo[4][0]==0){
            bingoCheckArr[11]=1;
            flag=1;
        }
    }

    var sum=0;    
    for(var i=0;i<bingoCheckArr.length; i++){
        sum=sum+bingoCheckArr[i];
    }
    bingo=sum;

    if(bingo>0){
        document.getElementById("bin"+bingo).style.textDecoration="line-through";
        document.getElementById("bin"+bingo).className="fw-bold text-primary";
    }
    if(bingo>=5){
        winning_msg_on();
    }
    
}

function resetGame(){
    location.reload();
}

function winning_msg_on(){
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay").innerText="Hurray You WON....!";
}

function winning_msg_off() {
    document.getElementById("overlay").style.display = "none";
    resetGame();
}