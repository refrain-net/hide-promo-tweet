'use strict';

requestAnimationFrame(function hide () {
    [...document.querySelectorAll('[data-testid="placementTracking"]')]
        .filter(element => [...element.querySelectorAll('span')].find(span => span.textContent === 'プロモーション'))
        .map(element => element.remove());
    requestAnimationFrame(hide);
});
