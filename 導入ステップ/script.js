alert('Hello, JavaScript!');

document.getElementById('changeTextButton').addEventListener('click', function() {
    let header = document.getElementById('header');
    header.textContent = 'Text Changed!';
});