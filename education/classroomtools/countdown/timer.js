let minuteinput = document.getElementById("minuteinput");
let secondsinput = document.getElementById("secondsinput");
let minutescount = document.getElementById("minutes");
let secondscount = document.getElementById("seconds");
let starttimerbutton = document.getElementById("starttimerbutton");
let resettimerbutton = document.getElementById("resettimerbutton");


starttimerbutton.addEventListener("click", ()=>{
	
	let totaltime = Math.floor(minuteinput.value * 60 * 1000) + Math.floor(secondsinput.value * 1000);
	let future = new Date().getTime() + totaltime;

	let timer = setInterval(function(){

		let now = new Date().getTime();
		let distance = future - now;

		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);
		minutes = ("00" + minutes).substr(-2);
		seconds = ("00" + seconds).substr(-2);

		minutescount.innerHTML = minutes;
		secondscount.innerHTML = seconds;

		if(distance < 0){
			console.log("Interval Cleared");
			minutescount.innerHTML = "00";
			secondscount.innerHTML = "00";
			clearInterval(timer);
		}

		resettimerbutton.addEventListener("click", ()=>{

			clearInterval(timer);
			minutescount.innerHTML = "00";
			secondscount.innerHTML = "00";

		});

	}, 100);
		
});




