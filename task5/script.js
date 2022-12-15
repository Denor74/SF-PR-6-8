// Получаем в переменную данные из селектора input
let textInput = document.querySelector('input');


//определяем функцию с действием по событию keyup в input
textInput.addEventListener('keyup', (event) => {
    // Назначаем переменную для вывода дублирующего текста из input в p с id=duplicateField
    let textDuplicateField = document.querySelector('#duplicateField');
    // в текстовое содержимое p с id=duplicateField с помощью свойства textContent
    // выводим содержимое полученное при событии keydown произошедшее в элементе input (присваиваем значение textContent для textDuplicateField)
    textDuplicateField.textContent = event.target.value; 
});

// Определяем функцию с событием klick по input 
document.querySelector('button').addEventListener('click', (event) => {
    // Отменяем стандартные действия браузера при клике на button
    event.preventDefault();
    // Назначаем переменную текстового содержимого p с id=duplicateField
    let textDuplicateField = document.querySelector('#duplicateField').textContent;
    // Выводим в консоль содержимое 
    console.log(textDuplicateField);
    // обнуляем значение в поле input
    document.querySelector('input').value = '';
    // обнуляем значение в содержимом тэга HTML с id="duplicateField"
    document.querySelector('#duplicateField').innerHTML = '';
    
});