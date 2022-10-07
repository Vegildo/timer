const clock = document.querySelector(".clock");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

const mostraHora = () => {
	let data = new Date();

	return data.toLocaleDateString("pt-BR", {
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	});
};
let timer;

start.addEventListener("click", () => {
	timer = setInterval(() => {
		clock.innerHTML = mostraHora();
	}, 1000);
	clock.style.Color = "var(--write-color)";
});

stop.addEventListener("click", () => {
	clearInterval(timer);
	clock.style.color = "var(--red-color)";
});

reset.addEventListener("click", () => {
	clearInterval(timer);
	clock.innerHTML = "00:00:00";
	clock.style.Color = "var(--write-color)";
});

// start.addEventListener("click", (e) => {
// 	alert("Cliquei no iniciar");
// });

// stop.addEventListener("click", (e) => {
// 	alert("Cliquei no parar");
// });

// reset.addEventListener("click", (e) => {
// 	alert("Cliquei no zerar");
// });
