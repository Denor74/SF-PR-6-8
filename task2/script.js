const consoleLog = document.querySelector("#consoleLog");

consoleLog.addEventListener("click", () => {
  console.log("Пример использования команды console.log");
});

const alertID = document.querySelector("#alertID");

alertID.addEventListener("click", () => {
  alert("Пример использования команды Alert");
});

const promptID = document.querySelector("#promptID");

promptID.addEventListener("click", () => {
  prompt("Пример использования команды Prompt", "Введите сообщение");
});
