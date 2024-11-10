// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Example for adding a dynamic greeting based on the time of day
window.onload = function() {
    const greeting = document.createElement('h2');
    const currentHour = new Date().getHours();
    
    let message = "Hello!";
    
    if (currentHour >= 6 && currentHour < 12) {
        message = "Good Morning!";
    } else if (currentHour >= 12 && currentHour < 18) {
        message = "Good Afternoon!";
    } else {
        message = "Good Evening!";
    }
    
    greeting.textContent = message;
    document.querySelector('.header .container').appendChild(greeting);
};
