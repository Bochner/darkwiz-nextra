document.addEventListener('DOMContentLoaded', () => {
  const spotlightGroups = document.querySelectorAll('[data-spotlight="true"]');
  
  spotlightGroups.forEach(group => {
    group.addEventListener('mousemove', e => {
      const rect = group.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      group.style.setProperty('--mouse-x', `${x}px`);
      group.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}); 