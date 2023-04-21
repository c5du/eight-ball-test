const answers = [
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes definitely",
	"You may rely on it",
	"As I see it, yes",
	"Most likely",
	"Outlook good",
	"Yes",
	"Signs point to yes",
	"Reply hazy try again",
	"Better not tell you now",
	"Ask again later",
	"Cannot predict now",
	"Concentrate and ask again",
	"Don't count on it",
	"Outlook not so good",
	"My sources say no",
	"Very doubtful"
];

const eightBall = document.getElementById("eight-ball");
const answerDiv = document.getElementById("answer");
const askButton = document.getElementById("ask-button");

askButton.addEventListener("click", () => {
	const randomIndex = Math.floor(Math.random() * answers.length);
	const answer = answers[randomIndex];
	eightBall.textContent = answer;
	answerDiv.textContent = answer;
});
