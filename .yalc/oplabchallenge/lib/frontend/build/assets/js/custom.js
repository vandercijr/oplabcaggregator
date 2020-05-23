'use strict';

(() => {
  const domloaded = () => {
    new WOW().init();
    setTimeout(() => {
      alert('Done!');
    }, 500);
  };

  document.addEventListener("DOMContentLoaded", domloaded);
})();