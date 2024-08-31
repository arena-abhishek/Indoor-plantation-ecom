document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const themeStylesheet = document.getElementById('theme-stylesheet');

  // Check the current theme from localStorage
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Set the initial theme
  themeStylesheet.href = `${currentTheme}-mode.css`;

  // Toggle theme and update localStorage
  toggleButton.addEventListener('click', () => {
      const newTheme = themeStylesheet.href.includes('light-mode.css') ? 'dark' : 'light';
      themeStylesheet.href = `${newTheme}-mode.css`;
      localStorage.setItem('theme', newTheme);
  });
});
