if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(function(register) {
      console.log('Registration worked!', register);
    })
    .catch(function(register) {
      console.log('Registration failed!', register);
    });
}
