/*       Counter Section JS  */ 

let totalStudents = 0;
let totalStudent = 0;
let assistanceCount = 0;

function updateCounters() {
    // Increment values within specified ranges
    totalStudents = Math.min(totalStudents + Math.ceil(Math.random() * 300), 25000);
    totalStudent = Math.min(totalStudent + Math.ceil(Math.random() * 10), 1000);
    assistanceCount = Math.min(assistanceCount + Math.ceil(Math.random() * 1), 150);

    document.getElementById('studentsCounter').innerText = totalStudents.toLocaleString() + '+';
    document.getElementById('studentCounter').innerText = totalStudent.toLocaleString() + '+';
    document.getElementById('assistanceCounter').innerText = assistanceCount.toLocaleString() + '+';
}

// Update counters every second (1000 milliseconds)
setInterval(updateCounters, 10);

$('.count').counterUp({
    time: 1000
});


