$(document).ready(function() {

    var askArray = [
        {
            question: "How many years must a player be retired to be eligible for the Pro Football Hall of Fame?", 
            choice: ["three", "two", "five", "six"],
            answer: 2,
            photo: "assets/images/HOF.jpg"
         },
         {
             question: "How far is a MLB pitching mound from home plate?", 
            choice: ["57 feet, 3 inches", "60 feet, 6 inches", "46 feet", "59 feet"],
            answer: 1,
            photo: "assets/images/pitch.jpg"
         }, 
         {
             question: "What tennis star has the most total weeks at No. 1 in the ATP rankings all-time?", 
            choice: ["Roger Federer", "Ivan Lendl", "Pete Sampras", "Novak Djokovic" ],
            answer: 0,
            photo: "assets/images/roger.jpg"
        }, 
        {
            question: "What NFL team has won the most Superbowls?", 
            choice: ["Dallas Cowboys", "New England Patriots", "San Francisco 49ers", "Pittsburgh Steelers" ],
            answer: 3,
            photo: "assets/images/super.jpg"
        }, 
        {
            question: "Which NHL Hockey team has won the most Stanley Cups?", 
            choice: ["Montreal Canadiens", "Detroit Red Wings", "Toronto Maple Leafs", "Pittsburgh Penguins" ],
            answer: 0,
            photo: "assets/images/NHL.jpg"
        }, 
        {
            question: "What soccer player has scored the most FIFA World Cup goals ever?", 
            choice: ["Ronaldo", "Pele", "Gerd Müller", "Miroslav Klose" ],
            answer: 3,
            photo: "assets/images/soccer.jpg"
        }, 
        {
            question: "What MLB player has played in more games than anyone?", 
            choice: ["Hank Aaron", "Pete Rose", "Cal Ripken Jr.", "Carl Yastrzemski" ],
            answer: 1,
            photo: "assets/images/pete.jpg"
        }, 
        {
            question: "What player has the best 3 point shooting percentage in NBA history?", 
            choice: ["Larry Bird", "Kyle Korver", "Stephen Curry", "Steve Nash" ],
            answer: 2,
            photo: "assets/images/curry.jpg"
        }];

    
        var correctCount = 0;
        var wrongCount = 0;
        var unansweredCount = 0;
        var timer = 15;
        var intervalId;
        var userAnswer ="";
        var running = false;
        var questCount = askArray.length;
        var decide;
        var index;
        var newArray = [];
        var place = [];

        $("#reset").hide();

        $("#questionPane").addClass("hidden");
        $("#answerPane").addClass("hidden");

		$("#play").click(function() {
           
			if ($("#questionPane").hasClass("hidden")) {
				$("#questionPane").removeClass("hidden").addClass("visible");
            }
            if ($("#answerPane").hasClass("hidden")) {
                $("#answerPane").removeClass("hidden").addClass("visible")
            }
        
            $("#play").click(function() {
                $("#play").hide();
                    showQuestion();
                    runTimer();
                    for(var i = 0; i < askArray.length; i++) {
                place.push(askArray[i]);
        }
    })

            

    function runTimer(){
        if (!running) {
        intervalId = setInterval(decrement, 1000); 
        running = true;
        }
    }
    
    function decrement() {
        $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer --;
    
        
        if (timer === 0) {
            unansweredCount++;
            stop();
            $("#answerPane").html("<p>Time is up! The correct answer is: " + decide.choice[decide.answer] + "</p>");
            hidepicture();
        }	
    }
    
    
    function stop() {
        running = false;
        clearInterval(intervalId);
    }
})
//randomly pick question in array if not already shown
//display question and loop though and display possible answers
function showQuestion() {
	//generate random index in array
	index = Math.floor(Math.random()*askArray.length); {
	decide = askArray[index];
}
}

		//iterate through answer array and display
		$("#questionPane").html("<h2>" + decide.question + "</h2>");
		for(var i = 0; i < decide.choice.length; i++) {
			var userChoice = $("<div>");
			userChoice.addClass("answerchoice");
			userChoice.html(decide.choice[i]);
			//assign array position to it so can check answer
			userChoice.attr("data-guessvalue", i);
			$("#answerPane").append(userChoice);
//		}
}
})

//click function to select answer and outcomes
$(".answerchoice").click(function () {
	//grab array position from userGuess
	userGuess = parseInt($(this).attr("data-guessvalue"));

	//correct guess or wrong guess outcomes
	if (userGuess === decide.answer) {
		stop();
		correctCount++;
		userGuess="";
		$("#answerPane").html("<p>Correct!</p>");
		hidepicture();

	} else {
		stop();
		wrongCount++;
		userGuess="";
		$("#answerblock").html("<p>Wrong! The correct answer is: " + decide.choice[decide.answer] + "</p>");
		hidepicture();
	}

})



function hidepicture () {
	$("#answerblock").append("<img src=" + choice.photo + ">");
	newArray.push(pick);
	askArray.splice(index,1);

	var hidpic = setTimeout(function() {
		$("#answerblock").empty();
		timer= 15;

	//run the score screen if all questions answered
	if ((wrongCount + correctCount + unansweredCount) === qCount) {
		$("#questionblock").empty();
		$("#questionblock").html("<h3>Game Over!  Here's how you did: </h3>");
		$("#answerblock").append("<h4> Correct: " + correctCount + "</h4>" );
		$("#answerblock").append("<h4> Incorrect: " + wrongCount + "</h4>" );
		$("#answerblock").append("<h4> Unanswered: " + unansweredCount + "</h4>" );
		$("#reset").show();
		correctCount = 0;
		wrongCount = 0;
		unansweredCount = 0;

	} else {
		runTimer();
		displayQuestion();

	}
	}, 3000);


}

$("#reset").on("click", function() {
	$("#reset").hide();
	$("#answerPane").empty();
	$("#questionPane").empty();
	for(var i = 0; i < holder.length; i++) {
		askArray.push(holder[i]);
	}
	runTimer();
	displayQuestion();

})



      

   
 
