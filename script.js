// Function to handle scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        // If element is in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.style.opacity = "1";
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScrollAnimations);

// Initial call to handle elements in view on page load
handleScrollAnimations();

// Function to update the light based on time of day
function updateLightPhase() {
    const now = new Date();
    const hour = now.getHours();
    const body = document.body;
    const lamp = document.querySelector('.lamp');
    
    // Reset all classes first
    body.classList.remove('morning', 'afternoon', 'evening', 'night');
    lamp.classList.remove('morning-glow', 'afternoon-glow', 'evening-glow', 'night-glow');
    
    // Morning: 5am - 11am
    if (hour >= 5 && hour < 11) {
        body.classList.add('morning');
        lamp.classList.add('morning-glow');
    } 
    // Afternoon: 11am - 5pm
    else if (hour >= 11 && hour < 17) {
        body.classList.add('afternoon');
        lamp.classList.add('afternoon-glow');
    } 
    // Evening: 5pm - 10pm
    else if (hour >= 17 && hour < 22) {
        body.classList.add('evening');
        lamp.classList.add('evening-glow');
    } 
    // Night: 10pm - 5am
    else {
        body.classList.add('night');
        lamp.classList.add('night-glow');
    }
}

// Initial call to set the correct light phase
updateLightPhase();

// Update the light phase every minute
setInterval(updateLightPhase, 60000);

// Demo rotation for presentation purposes - cycles through phases every 5 seconds
let demoMode = true;
let phaseIndex = 0;
const phases = ['morning', 'afternoon', 'evening', 'night'];
const glowPhases = ['morning-glow', 'afternoon-glow', 'evening-glow', 'night-glow'];

function demoRotation() {
    if (!demoMode) return;
    
    const body = document.body;
    const lamp = document.querySelector('.lamp');
    
    // Remove all classes
    body.classList.remove('morning', 'afternoon', 'evening', 'night');
    lamp.classList.remove('morning-glow', 'afternoon-glow', 'evening-glow', 'night-glow');
    
    // Add current phase
    body.classList.add(phases[phaseIndex]);
    lamp.classList.add(glowPhases[phaseIndex]);
    
    // Move to next phase
    phaseIndex = (phaseIndex + 1) % phases.length;
}

// Run demo rotation every 5 seconds
setInterval(demoRotation, 5000);
demoRotation(); // Initial call

// Stop demo mode and switch to real time when user interacts
document.addEventListener('click', function() {
    demoMode = false;
    updateLightPhase();
});