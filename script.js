'use strict';

requestAnimationFrame(function hide () {
  [...document.querySelectorAll('[data-testid="placementTracking"]')].filter(el => {
    return [...el.querySelectorAll('span')].find(el => el.textContent === 'プロモーション');
  }).map(el => el.style.display = 'none');
  requestAnimationFrame(hide);
});
