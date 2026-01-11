const textarea = document.getElementById('myTextarea');
const currentCount = document.getElementById('current-count');
const maxLength = parseInt(textarea.getAttribute('maxlength'));

textarea.addEventListener('input', () => {
    const length = textarea.value.length;

    // Обновляем только цифру текущего количества
    currentCount.textContent = length;

    if (length >= maxLength) {
        textarea.classList.add('error');
        currentCount.parentElement.style.color = 'red'; // Красим весь блок с цифрами
    } else {
        textarea.classList.remove('error');
        currentCount.parentElement.style.color = '#555'; // Возвращаем исходный цвет
    }
});
