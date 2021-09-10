// UC8
const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = output.value;
salary.addEventListener('input',function(){
    output.textContent = salary.value;
}) ;