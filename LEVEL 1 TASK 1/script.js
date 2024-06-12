document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.querySelector('.video-wrapper');
    const videoModal = document.querySelector('.video-modal');
    
    playButton.addEventListener('click', () => {
        videoModal.style.display = 'block';
    });

    videoModal.addEventListener('click', (e) => {
        if (e.target.classList.contains('video-modal')) {
            videoModal.style.display = 'none';
        }
    });
});