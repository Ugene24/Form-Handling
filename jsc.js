
document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

  
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

   
    const levels = [];
    document.querySelectorAll('input[name="level"]:checked').forEach((checkbox) => {
        levels.push(checkbox.value);
    });
    formObject.level = levels.join(', ');

    const titles = [];
    document.querySelectorAll('input[name="title"]:checked').forEach((checkbox) => {
        titles.push(checkbox.value);
    });
    formObject.title = titles.join(', ');

   
    sessionStorage.setItem('formData', JSON.stringify(formObject));

    
    window.location.href = 'display.html';
});

document.getElementById('applicationForm').addEventListener('reset', function(event) {
    
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.checked = false;
    });

    
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
        radio.checked = false;
    });

    
    document.querySelectorAll('input[type="text"], textarea').forEach((input) => {
        input.value = '';
    });

    
    document.getElementById('birthdate').value = '';
});