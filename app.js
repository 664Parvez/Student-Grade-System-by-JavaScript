let btn = document.querySelector('#btn');
btn.addEventListener('click', function(addPre) {
    addPre.preventDefault();

    let name = document.querySelector('#name').value;
    let roll = document.querySelector('#roll').value;
    let grade = document.querySelector('#grade').value;
    let std = document.querySelector('#std');

    if (grade == 5) {
        std.innerHTML = 'Student name: ' + name + ', ' + 'Student roll: ' + roll + ', ' + 'Student grade: A+';
    } else if (grade <= 4.99 && grade >= 4.00) {
        std.innerHTML = 'Student name: ' + name + ', ' + 'Student roll: ' + roll + ', ' + 'Student grade: A';
    } else if (grade <= 3.99 && grade >= 3.50) {
        std.innerHTML = 'Student name: ' + name + ', ' + 'Student roll: ' + roll + ', ' + 'Student grade: B+';
    } else if (grade <= 3.49 && grade >= 3.00) {
        std.innerHTML = 'Student name: ' + name + ', ' + 'Student roll: ' + roll + ', ' + 'Student grade: B+';
    } else if (grade <= 2.99 && grade >= 2.50) {
        std.innerHTML = 'Student name: ' + name + ', ' + 'Student roll: ' + roll + ', ' + 'Student grade: B-';
    } else if (grade <= 2.49 && grade >= 1) {
        std.innerHTML = 'Student name: ' + name + ', ' + 'Student roll: ' + roll + ', ' + 'Student grade: C';
    } else {
        std.innerHTML = 'Student name: ' + name + ', ' + 'Student roll: ' + roll + ', ' + 'Student grade: Failed';
    }
})