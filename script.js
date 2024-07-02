document.addEventListener("DOMContentLoaded", function() {
    const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDay = document.querySelector('[data-testid="currentDay"]');
    const slackProfilePicture = document.querySelector('[data-testid="slackProfilePicture"]');

    function updateTime() {
        const now = new Date();
        currentTimeUTC.textContent = now.toUTCString();
        currentDay.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    }

    updateTime();
    setInterval(updateTime, 60000); // Update every minute

    // Ensure the Slack profile picture has natural dimensions
    slackProfilePicture.onload = function() {
        if (slackProfilePicture.naturalWidth === 0 || slackProfilePicture.naturalHeight === 0) {
            console.error("Profile picture does not have natural dimensions.");
        }
    };
});
