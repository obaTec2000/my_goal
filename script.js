function updateTime() {
    const now = new Date();
    const currentTimeUTC = now.toUTCString().split(' ')[4]
    const currentDay= now.toLocaleDateString('en-US', { weekday: 'long' });

    document.getElementById('utcTime').textContent = currentTimeUTC
    document.getElementById('currentDay').textContent = currentDay
}

updateTime();
setInterval(updateTime, 1000); 