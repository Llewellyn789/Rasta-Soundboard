document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.sound-btn');
    const sounds = {
        'me-bombo': 'sounds/me-bombo.mp3',
        'bomboclaaaat': 'sounds/bomboclaaaat.mp3',
        'bomb-rasclat-egg': 'sounds/bomb-rasclat-egg.mp3',
        'rich-millionaire': 'sounds/rich-millionaire.mp3',
        'bigmanting': 'sounds/bigmanting.mp3',
        'bup-bup': 'sounds/bup-bup.mp3'
    };

    // Create audio elements for each sound
    const audioElements = {};
    for (const [key, path] of Object.entries(sounds)) {
        audioElements[key] = new Audio(path);
    }

    // Add click event listeners to buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const soundKey = button.dataset.sound;
            const audio = audioElements[soundKey];
            
            // Stop and reset the audio before playing
            audio.currentTime = 0;
            audio.play().catch(error => {
                console.error('Error playing sound:', error);
            });
        });
    });
}); 