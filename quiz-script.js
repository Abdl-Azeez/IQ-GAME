var currentQuestion = 0;
var score = 0;
var totalQuestions = 10;


var container = document.getElementById('quizContainer');
var questionEl= document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var progressCont = document.getElementById('progress-value');
var RetryCont= document.getElementById('Retry');
var RetryButton= document.getElementById('Retrybtn');
var Retrybtn= document.getElementById('Retrybttn');
var DisplayQuestions=document.getElementById('DisplayQuestions');



function loadQuestion(questionIndex){

	 for (var i = 0; i< questions.length; i++) {

	    var randomIndex = Math.floor(Math.random()*(i+1));
	    var itemAtIndex = questions[randomIndex];

	    questions[randomIndex] = questions[i];
	    questions[i] = itemAtIndex;
    }


	 var q= questions[questionIndex];

	 questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	 opt1.textContent = q.option1;
	 opt2.textContent = q.option2;
	 opt3.textContent = q.option3;
	 opt4.textContent = q.option4;


   return questions;


};

		// Set the date we're counting down to
		var countDownDate = new Date().getTime()+(1000*10*60.2);

		// Update the count down every 1 second
		var x = setInterval(function() {

		    // Get todays date and time
		    var now = new Date().getTime();

		    // Find the distance between now and the count down date
		    var Timer = countDownDate - now;

		    // Time calculations for days, hours, minutes and seconds

		    var minutes = Math.floor((Timer % (1000 * 60 * 60)) / (1000 * 60));
		    var seconds = Math.floor((Timer % (1000 * 60)) / 1000);

		    // Output the result in an element with id="demo"
		    document.getElementById("demo").innerHTML =minutes + "m : " + seconds + "s ";

		    // If the count down is over, write some text
		    if (Timer < 0) {
		        clearInterval(x);
		        currentQuestion=totalQuestions-1;
		        nextButton.textContent = 'See your total score';
		        document.getElementById("demo").innerHTML = "YOUR TIME HAS EXPIRED";
		        selectedOption.checked = true;
		        currentQuestion++;


		    }
		}, 1000);
function showPopUp() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		document.getElementById("myPopup").style.display='';
		document.getElementById("myPopup").innerHTML='You are correct<br> Keep it up'
		document.getElementById('nextButton').style.display='';
		document.getElementById('popup').style.visibility='hidden';
		document.getElementById('question').style.visibility='hidden';
		document.getElementById('option').style.visibility='hidden';
		document.getElementById('mark').style.display='';

	}

	else {
		document.getElementById("myPopup").style.display='';
		document.getElementById("myPopup").innerHTML='That is not the answer<br> Keep trying'
		document.getElementById('nextButton').style.display='';
		document.getElementById('popup').style.visibility='hidden';
		document.getElementById('question').style.visibility='hidden';
		document.getElementById('option').style.visibility='hidden';
		document.getElementById('cross').style.display='';

	}
}

function loadNextQuestion(){
	document.getElementById("myPopup").style.display='none';
	document.getElementById('nextButton').style.display='none';
	document.getElementById('popup').style.visibility='visible';
	document.getElementById('question').style.visibility='visible';
	document.getElementById('option').style.visibility='visible';
	document.getElementById('cross').style.display='none';
	document.getElementById('mark').style.display='none';

	var selectedOption = document.querySelector('input[type=radio]:checked');
	if((!selectedOption)&& (currentQuestion != totalQuestions - 1)){
		alert('Please select your answer!');
		return;
	}

	else if((!selectedOption)&& (currentQuestion == totalQuestions - 1)){
		alert('Please select an option to view your result!\n Please ba aware that this answer is not included in your result');
		return;
	}

	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score +=10;
	}

	selectedOption.checked = false;
	currentQuestion++;


	if(currentQuestion == totalQuestions - 1){
		nextButton.textContent = 'Finish';
	}

	if(currentQuestion == totalQuestions){
		if (score>=60){
			var element = document.getElementById("Congrat");
    			element.classList.add("Congrat-Image");
    			document.getElementById("Congrat").style.display = '';

   			 }
   		else {
   			RetryCont.style.display = '';

   		}
		container.style.display   = 'none';
		resultCont.style.display  = '';
		resultCont.textContent    = 'Your Score is  ' + score+'%';
		RetryButton.style.display = '';
		DisplayQuestions.style.display= '';

		document.getElementById("progress").style.display = '';
		if (score==0){
			var x = document.getElementById("progress").querySelectorAll("#progressbar");
			x[0].value = "0";

			progressCont.textContent= '0%';
		}
		else if (score==10){
			var x = document.getElementById("progress").querySelectorAll("#progressbar");
			x[0].value = "10";

			progressCont.textContent= '10%';
		}
		else if (score==20){
			var x = document.getElementById("progress").querySelectorAll("#progressbar");
			x[0].value = "20";

			progressCont.textContent= '20%';
		}
		else if (score==30){
			var x = document.getElementById("progress").querySelectorAll("#progressbar");
			x[0].value = "30";

			progressCont.textContent= '30%';
		}
		else if (score==40){
			var x = document.getElementById("progress").querySelectorAll("#progressbar");
			x[0].value = "40";

			progressCont.textContent= '40%';
		}
		else if (score==50){
			var x = document.getElementById("progress").querySelectorAll("#progressbar");
			x[0].value = "50";

			progressCont.textContent= '50%';
		}
		else if (score==60){
			var x = document.getElementById("progress").querySelectorAll("#progressbar");
			x[0].value = "60";

			progressCont.textContent= '60%';
		}
		else if (score==70){
			var x = document.getElementById("progress").querySelectorAll("#progressbar");
			x[0].value = "70";

			progressCont.textContent= '70%';
		}
		else if (score==80){
			var x = document.getElementById("progress").querySelectorAll("#progressbar");
			x[0].value = "80";

			progressCont.textContent= '80%';
		}
		else if (score==90){
			var x = document.getElementById("progress").querySelectorAll("#progressbar");
			x[0].value = "90";

			progressCont.textContent= '90%';
		}
		else {
			var x = document.getElementById("progress").querySelectorAll("#progressbar");
			x[0].value = "100";

			progressCont.textContent= '100%';
		}


		return;
	}



	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

function displayQuestions() {

	document.body.style.background = "#6270b7";
	container.style.display   = 'none';
	resultCont.style.display  = 'none';
	document.getElementById("footer-style").style.position = 'inherit';
	document.getElementById("progress").style.display = 'none';
	document.getElementById("Congrat").style.display = 'none';
	RetryCont.style.display = 'none';
	DisplayQuestions.style.display= 'none';
	Retrybtn.style.display= '';
	Retrybtn.style.marginTop= '6%';
	Retrybtn.style.marginBottom= '10%';
	RetryButton.style.marginTop= '6%';
	RetryButton.style.marginBottom= '10%';

	document.getElementById("AllQuestions").style.display = '';


	document.getElementById("q1").innerHTML = questions[0].question;
	document.getElementById("opt1a").innerHTML = questions[0].option1;
	document.getElementById("opt1b").innerHTML = questions[0].option2;
	document.getElementById("opt1c").innerHTML = questions[0].option3;
	document.getElementById("opt1d").innerHTML = questions[0].option4;
	document.getElementById("Link1").innerHTML = questions[0].website;
	document.getElementById("Link1").href = "https://www.softwaretestinghelp.com/what-is-boundary-value-analysis-and-equivalence-partitioning/";

	//For each questions and options
	document.getElementById("q2").innerHTML = questions[1].question;
	document.getElementById("opt2a").innerHTML = questions[1].option1;
	document.getElementById("opt2b").innerHTML = questions[1].option2;
	document.getElementById("opt2c").innerHTML = questions[1].option3;
	document.getElementById("opt2d").innerHTML = questions[1].option4;
	document.getElementById("Link2").innerHTML = questions[1].website;
	document.getElementById("Link2").href = "https://reqtest.com/testing-blog/what-is-boundary-value-analysis-and-equivalence-partitioning/";

	//For each questions and options
	document.getElementById("q3").innerHTML = questions[2].question;
	document.getElementById("opt3a").innerHTML = questions[2].option1;
	document.getElementById("opt3b").innerHTML = questions[2].option2;
	document.getElementById("opt3c").innerHTML = questions[2].option3;
	document.getElementById("opt3d").innerHTML = questions[2].option4;
	document.getElementById("Link3").innerHTML = questions[2].website;
	document.getElementById("Link3").href = "https://www.tutorialspoint.com/software_testing_dictionary/gorilla_testing.htm";

	//For each questions and options
	document.getElementById("q4").innerHTML = questions[3].question;
	document.getElementById("opt4a").innerHTML = questions[3].option1;
	document.getElementById("opt4b").innerHTML = questions[3].option2;
	document.getElementById("opt4c").innerHTML = questions[3].option3;
	document.getElementById("opt4d").innerHTML = questions[3].option4;
	document.getElementById("Link4").innerHTML = questions[3].website;
	document.getElementById("Link4").href = "https://www.softwaretestingclass.com/smoke-testing/";

	//For each questions and options
	document.getElementById("q5").innerHTML = questions[4].question;
	document.getElementById("opt5a").innerHTML = questions[4].option1;
	document.getElementById("opt5b").innerHTML = questions[4].option2;
	document.getElementById("opt5c").innerHTML = questions[4].option3;
	document.getElementById("opt5d").innerHTML = questions[4].option4;
	document.getElementById("Link5").innerHTML = questions[4].website;
	document.getElementById("Link5").href = "https://www.careerride.com/mchoice/smoke-testing-is-broad-shallow-smoke-and-sanity-testing-6276.aspx";

	//For each questions and options
	document.getElementById("q6").innerHTML = questions[5].question;
	document.getElementById("opt6a").innerHTML = questions[5].option1;
	document.getElementById("opt6b").innerHTML = questions[5].option2;
	document.getElementById("opt6c").innerHTML = questions[5].option3;
	document.getElementById("opt6d").innerHTML = questions[5].option4;
	document.getElementById("Link6").innerHTML = questions[5].website;
	document.getElementById("Link6").href = "https://www.careerride.com/mchoice/sanity-testing-is-deep-narrow-smoke-and-sanity-testing-6274.aspx";

	//For each questions and options
	document.getElementById("q7").innerHTML = questions[6].question;
	document.getElementById("opt7a").innerHTML = questions[6].option1;
	document.getElementById("opt7b").innerHTML = questions[6].option2;
	document.getElementById("opt7c").innerHTML = questions[6].option3;
	document.getElementById("opt7d").innerHTML = questions[6].option4;
	document.getElementById("Link7").innerHTML = questions[6].website;
	document.getElementById("Link7").href = "https://www.tutorialspoint.com/software_testing_dictionary/white_box_testing.htm";

	//For each questions and options
	document.getElementById("q8").innerHTML = questions[7].question;
	document.getElementById("opt8a").innerHTML = questions[7].option1;
	document.getElementById("opt8b").innerHTML = questions[7].option2;
	document.getElementById("opt8c").innerHTML = questions[7].option3;
	document.getElementById("opt8d").innerHTML = questions[7].option4;
	document.getElementById("Link8").innerHTML = questions[7].website;
	document.getElementById("Link8").href = questions[1].website;

	//For each questions and options
	document.getElementById("q9").innerHTML = questions[8].question;
	document.getElementById("opt9a").innerHTML = questions[8].option1;
	document.getElementById("opt9b").innerHTML = questions[8].option2;
	document.getElementById("opt9c").innerHTML = questions[8].option3;
	document.getElementById("opt9d").innerHTML = questions[8].option4;
	document.getElementById("Link9").innerHTML = questions[8].website;
	document.getElementById("Link9").href = questions[1].website;

	//For each questions and options
	document.getElementById("q10").innerHTML = questions[9].question;
	document.getElementById("opt10a").innerHTML = questions[9].option1;
	document.getElementById("opt10b").innerHTML = questions[9].option2;
	document.getElementById("opt10c").innerHTML = questions[9].option3;
	document.getElementById("opt10d").innerHTML = questions[9].option4;
	document.getElementById("Link10").innerHTML = questions[9].website;
	document.getElementById("Link10").href = "https://searchsoftwarequality.techtarget.com/definition/requirements-analysis";

	//For each questions and options
	document.getElementById("q11").innerHTML = questions[10].question;
	document.getElementById("opt11a").innerHTML = questions[10].option1;
	document.getElementById("opt11b").innerHTML = questions[10].option2;
	document.getElementById("opt11c").innerHTML = questions[10].option3;
	document.getElementById("opt11d").innerHTML = questions[10].option4;
	document.getElementById("Link11").innerHTML = questions[10].website;
	document.getElementById("Link11").href = questions[1].website;


	//For each questions and options
	document.getElementById("q12").href = questions[11].question;
	document.getElementById("opt12a").innerHTML = questions[11].option1;
	document.getElementById("opt12b").innerHTML = questions[11].option2;
	document.getElementById("opt12c").innerHTML = questions[11].option3;
	document.getElementById("opt12d").innerHTML = questions[11].option4;
	document.getElementById("Link12").href = questions[11].website;
	document.getElementById("Link12").href = questions[1].website;


	//For each questions and options
	document.getElementById("q13").innerHTML = questions[12].question;
	document.getElementById("opt13a").innerHTML = questions[12].option1;
	document.getElementById("opt13b").innerHTML = questions[12].option2;
	document.getElementById("opt13c").innerHTML = questions[12].option3;
	document.getElementById("opt13d").innerHTML = questions[12].option4;
	document.getElementById("Link13").innerHTML = questions[12].website;
	document.getElementById("Link13").href = questions[1].website;


	//For each questions and options
	document.getElementById("q14").innerHTML = questions[13].question;
	document.getElementById("opt14a").innerHTML = questions[13].option1;
	document.getElementById("opt14b").innerHTML = questions[13].option2;
	document.getElementById("opt14c").innerHTML = questions[13].option3;
	document.getElementById("opt14d").innerHTML = questions[13].option4;
	document.getElementById("Link14").innerHTML = questions[13].website;
	document.getElementById("Link14").href = "http://tryqa.com/what-is-verification-in-software-testing-or-what-is-software-verification/";


	//For each questions and options
	document.getElementById("q15").innerHTML = questions[14].question;
	document.getElementById("opt15a").innerHTML = questions[14].option1;
	document.getElementById("opt15b").innerHTML = questions[14].option2;
	document.getElementById("opt15c").innerHTML = questions[14].option3;
	document.getElementById("opt15d").innerHTML = questions[14].option4;
	document.getElementById("Link15").innerHTML = questions[14].website;
	document.getElementById("Link15").href = questions[1].website;

}
 // <style type="text/css">
 //    .carousel-control-next-icon {background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;}
 //    .carousel-control-prev-icon {background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E"); }
 //  </style>