function result(){
    var oneA = document.getElementById("1a");
    var oneB = document.getElementById("1b");
    var oneC = document.getElementById("1c");
    var twoA =document.getElementById("2a");
    var twoB =document.getElementById("2b");
    var twoC =document.getElementById("2c");
    var threeA =document.getElementById("3a");
    var threeB =document.getElementById("3b");
    var points=0;
    var percentange;
    var comment;

    if(oneA.checked == true){
        points += 6;
    }
    else if  (oneA.checked == false && oneB.checked == false && oneC.checked == false){
        alert("please answer all questions")
    }
    if(twoA.checked == true){
        points +=6;       
    }
    else if (twoA.checked == false && twoB.checked == false && twoC.checked == false)
    {
        alert("please answer all questions")
    }
    if(threeA.checked == true){
        points +=6;
    }
    else if  (threeA.checked == false && threeB.checked == false){
        alert("please answer all questions")
    }


    percentange=(points/18)*100;

    if(percentange >80){
        comment= "you have excellently passed";
    }
    else if(percentange >= 50 && percentange <80){
        comment="you have fairly passed";
    }
    else {
        comment="you have performed poorly. you need to retake the test";
    }

    document.getElementById("answer").innerHTML="your total score is " + percentange +"%"+" \n"+ comment;
}