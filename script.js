// Sample Day 1 Unlock
function unlockDay(day) {
    if(day === 1) {
        Swal.fire({
            title: 'Day 1 Surprise!',
            html: `<video controls src="day1-surprise.mp4"></video>
                   <p>Your chocolate gift is arriving tomorrow! 🍫</p>`,
            background: 'var(--teal)'
        });
    }
    // Add other days' logic
}
