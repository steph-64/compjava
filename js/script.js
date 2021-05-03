function result (){
    var oneA = document.getElementById("1a");
    var oneB =document.getElementById("1b");
    var oneC =document.getElementById("1c");
    var twoA =document.getElementById("2a");
    var twoB =document.getElementById("2b");
    var twoC =document.getElementById("2c");
    var threeA =document.getElementById("3a");
    var threeB =document.getElementById("3b");
    var points=0;

    if(oneA.checked == true){
        points += 6;
    }
    if(twoA.checked == true){
        points +=6;       
    }
    if(threeA.checked == true){
        points +=6;
    }
    document.getElementById("answer").innerHTML=points;
}