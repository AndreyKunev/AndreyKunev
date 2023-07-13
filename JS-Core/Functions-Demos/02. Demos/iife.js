(function () {
    console.log('Immediately invoked function expression (IIFE)!');
})();

(() => {
    console.log('IIFE is possible even with arrow functions');
})();
