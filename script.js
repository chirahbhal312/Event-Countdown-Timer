function updateCountdown() {
    const eventDate = new Date('2024-12-31T23:59:59'); // Set your event date here
    const now = new Date();
    const timeDiff = eventDate - now;

    if (timeDiff <= 0) {
        document.getElementById('days').querySelector('.number').textContent = '00';
        document.getElementById('hours').querySelector('.number').textContent = '00';
        document.getElementById('minutes').querySelector('.number').textContent = '00';
        document.getElementById('seconds').querySelector('.number').textContent = '00';
        return; // Stop the timer when the countdown is over
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('days').querySelector('.number').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').querySelector('.number').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').querySelector('.number').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').querySelector('.number').textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
