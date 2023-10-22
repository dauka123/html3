let timer; 
const timerDisplay = document.getElementById('timer'); 
const startButton = document.getElementById('start'); 
const durationInput = document.getElementById('duration'); 

// Add a click event listener to the "Start" button.
startButton.addEventListener('click', () => {
    const duration = parseInt(durationInput.value); 

    // Check if the duration is greater than 0.
    if (duration > 0) {
        clearInterval(timer); 
        startCountdown(duration); 
    }
});

// Function to start the countdown with the given duration.
function startCountdown(duration) {
    let timeRemaining = duration; 
    updateTimerDisplay(timeRemaining); 

    // Set an interval to update the timer display and check if the timer has ended.
    timer = setInterval(() => {
        timeRemaining -= 1; 
        updateTimerDisplay(timeRemaining);

        // Check if the timer has reached zero.
        if (timeRemaining <= 0) {
            clearInterval(timer); 
            alert('Timer has ended!'); // Display an alert when the timer ends.
        }
    }, 1000); // The interval updates the timer every 1000 milliseconds.
}

// Function to update the timer display with days, hours, minutes, and seconds.
function updateTimerDisplay(time) {

    const days = Math.floor(time / 86400);
    time %= 86400;
    const hours = Math.floor(time / 3600);
    time %= 3600;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    document.querySelector('.launch-time div:nth-child(1) p').textContent = days;
    document.querySelector('.launch-time div:nth-child(2) p').textContent = hours;
    document.querySelector('.launch-time div:nth-child(3) p').textContent = minutes;
    document.querySelector('.launch-time div:nth-child(4) p').textContent = seconds;
}
