const laptopCore = document.getElementById('laptopCore');
const formFrame = document.getElementById('formFrame');
const formHeading = document.getElementById('formHeading');
const textHub = document.getElementById('textHub');
const textFounder = document.getElementById('textFounder');
const tabSignup = document.getElementById('tabSignup');
const tabLogin = document.getElementById('tabLogin');

// --- TIMELINE CONTROLLER FOR FIXED ELEMENTS ---
window.addEventListener('DOMContentLoaded', () => {
    // First display: "Surman Code Hub"
    setTimeout(() => {
        textHub.classList.add('fade-in-out');
    }, 400);

    // Second display: "Founder & CEO | Lead Developer Vishal Kumar"
    setTimeout(() => {
        textFounder.classList.add('fade-in-out');
    }, 2500);

    // Third step: Trigger laptop setup directly at 4.6 seconds
    setTimeout(() => {
        laptopCore.classList.add('trigger-jump');
    }, 4600);
});

tabSignup.addEventListener('click', () => shiftMode('signup'));
tabLogin.addEventListener('click', () => shiftMode('login'));

// --- DUR / PAAS SLIDE CONTROLLER ---
function shiftMode(mode) {
    const boxSignup = document.getElementById('boxSignup');
    const boxLogin = document.getElementById('boxLogin');

    if (mode === 'signup') {
        formFrame.className = "screen-interface signup-mode";
        formHeading.innerText = "Surman Code Hub Signup Form";

        boxSignup.classList.add('active');
        boxLogin.classList.remove('active');
        tabSignup.className = "tab-btn active-signup";
        tabLogin.className = "tab-btn";

        laptopCore.classList.remove('slide-out-away');

    } else {
        formFrame.className = "screen-interface login-mode";
        formHeading.innerText = "Surman Code Hub Login Form";

        boxLogin.classList.add('active');
        boxSignup.classList.remove('active');
        tabLogin.className = "tab-btn active-login";
        tabSignup.className = "tab-btn";

        // Trigger Dur aur Paas Slide Effect
        laptopCore.classList.remove('slide-out-away');
        void laptopCore.offsetWidth; // Force Reflow
        laptopCore.classList.add('slide-out-away');
    }
}