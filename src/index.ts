document.addEventListener('DOMContentLoaded', () => {
  // === Tab Navigation ===
  const navButtons = document.querySelectorAll('.nav-btn');
  const contentSections = document.querySelectorAll('.content-section');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      contentSections.forEach(section => section.classList.remove('active'));

      const targetId = btn.getAttribute('data-target');
      if (targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add('active');
        }
      }
    });
  });

  // === Video Carousel ===
  const carousels = document.querySelectorAll('.video-carousel');

  carousels.forEach(carousel => {
    const videos = carousel.querySelectorAll('.carousel-video') as NodeListOf<HTMLVideoElement>;
    const dots = carousel.querySelectorAll('.dot');
    const nextBtn = carousel.querySelector('.carousel-btn');
    let currentIndex = 0;

    function goToVideo(index: number) {
      // Pause current video
      videos[currentIndex].pause();
      videos[currentIndex].classList.remove('active');
      dots[currentIndex].classList.remove('active');

      // Update index (loop back to 0 if at end)
      currentIndex = index % videos.length;

      // Play new video
      videos[currentIndex].classList.add('active');
      dots[currentIndex].classList.add('active');
      videos[currentIndex].currentTime = 0;
      videos[currentIndex].play();
    }

    // Next button
    nextBtn?.addEventListener('click', () => {
      goToVideo(currentIndex + 1);
    });

    // Dot clicks
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToVideo(index);
      });
    });
  });
});
