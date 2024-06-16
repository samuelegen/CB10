const container = document.querySelector(".containerLog");
const containerAccess = document.querySelector(".containerIn");
const textModal = document.querySelector(".textModal");

// input per registrarsi
const inputUser = document.createElement("input");
inputUser.className = "userLog";
inputUser.placeholder = "Username";
inputUser.name = "username";

// input password in fase di registrazione
const inputUserPass = document.createElement("input");
inputUserPass.className = "userPass";
inputUserPass.placeholder = "Password";
inputUserPass.type = "password";
inputUserPass.name = "password";

// button registrati
const userBtn = document.createElement("button");
userBtn.textContent = "Registrati";

// input del login
const inputUserLog = document.createElement("input");
inputUserLog.className = "userIn";
inputUserLog.placeholder = "Username";
inputUserLog.name = "username";

// input password del login
const inputPassLog = document.createElement("input");
inputPassLog.className = "userPassLog";
inputPassLog.placeholder = "Password";
inputPassLog.type = "password";
inputPassLog.name = "password";

// button login
const logBtn = document.createElement("button");
logBtn.textContent = "Log In";

// Aggiungo la modale
let modal = document.getElementById("myModal");

// seleziono dove si trova la 'x' per chiudere la modale
let closeModal = document.querySelector(".close");

// Mostriamo gli elementi al DOM
container.append(inputUser, inputUserPass, userBtn);
containerAccess.append(inputUserLog, inputPassLog, logBtn);

userBtn.addEventListener("click", (e) => {
	e.preventDefault(); // Previene l'invio del form
	const username = inputUser.value;
	const password = inputUserPass.value;

	if (localStorage.getItem(username)) {
		textModal.textContent = "Utente già esistente";
		modal.style.display = "block";
		let interval = setInterval(() => {
			modal.style.display = "none";
			clearInterval(interval);
		}, 4000);
	} else {
		localStorage.setItem(username, password);
		textModal.textContent = "Utente registrato con successo";
		modal.style.display = "block";
		let interval = setInterval(() => {
			modal.style.display = "none";
			clearInterval(interval);
		}, 4000);
	}

	closeModal.onclick = function () {
		modal.style.display = "none";
	};
});

logBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const usernameLog = inputUserLog.value;
	const passLog = inputPassLog.value;

	if (localStorage.getItem(usernameLog)) {
		textModal.textContent = "Dati inseriti non corretti";
		modal.style.display = "block";
		let interval = setInterval(() => {
			modal.style.display = "none";
			clearInterval(interval);
		}, 4000);
	}
	if (localStorage.getItem(passLog)) {
		textModal.textContent = "Dati inseriti non corretti";
		modal.style.display = "block";
		let interval = setInterval(() => {
			modal.style.display = "none";
			clearInterval(interval);
		}, 4000);
	} else {
		localStorage.getItem(usernameLog, passLog);
		textModal.textContent = `Benvenuto/a ${usernameLog}`;
		modal.style.display = "block";
		container.style.display = "none";
		let interval = setInterval(() => {
			modal.style.display = "none";
			clearInterval(interval);
		}, 4000);
	}
	closeModal.onclick = function () {
		modal.style.display = "none";
	};
});
