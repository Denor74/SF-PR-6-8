const promptAHref = document.querySelector('a');

promptAHref.addEventListener("click", () => {
  const userText = prompt("Изменение текста ссылки");
  // Вывод в консоль значение введённое в окне prompt - для проверки
  console.log(userText);
  // забираем значение из тэга a
  const userTextField = document.querySelector('a');
  // меняем 
  userTextField.textContent = userText
});