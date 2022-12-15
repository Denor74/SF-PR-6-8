// получаем в константу данные из тэга a
const promptAHref = document.querySelector('.aEdit');

//определяем функцию с действием по событию click по содержимому тега а
promptAHref.addEventListener("click", () => {
  const userText = prompt("Изменение текста ссылки", "Введите новый текст ссылки");
  // Вывод в консоль значение введённое в окне prompt - для проверки (сделал для себя, можно не писать)
  console.log(userText);
  // забираем значение из тэга a
  const userTextField = document.querySelector('.aEdit');
  // меняем текст ссылки на введёный пользователем
  userTextField.textContent = userText
});