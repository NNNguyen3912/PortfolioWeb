document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.nav-btn');
  const contentSections = document.querySelectorAll('.content-section');

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. Remove active class from all buttons
      navButtons.forEach(b => b.classList.remove('active'));
      
      // 2. Add active class to clicked button
      btn.classList.add('active');

      // 3. Hide all sections
      contentSections.forEach(section => section.classList.remove('active'));

      // 4. Show the target section
      const targetId = btn.getAttribute('data-target');
      if (targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.classList.add('active');
        }
      }
    });
  });
});
