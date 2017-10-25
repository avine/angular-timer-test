document.addEventListener('click', function (e) {

  if (e.target.id === 'vanilla-js-handler') {
    alert('Event handler that\'s occurs outside of Zone.js...');
  }

});
