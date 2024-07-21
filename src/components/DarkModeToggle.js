// // src/components/DarkModeToggle.js
// import React, { useState, useEffect } from 'react';

// const DarkModeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(() => {
//     return localStorage.getItem('darkMode') === 'true';
//   });

//   useEffect(() => {
//     if (isDarkMode) {
//       document.body.classList.add('dark-mode');
//     } else {
//       document.body.classList.remove('dark-mode');
//     }
//     localStorage.setItem('darkMode', isDarkMode);
//   }, [isDarkMode]);

//   const toggleDarkMode = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   return (
//     <button onClick={toggleDarkMode}>
//       {isDarkMode ? 'Light Mode' : 'Dark Mode'}
//     </button>
//   );
// };

// export default DarkModeToggle;
