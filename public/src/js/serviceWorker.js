export function startWorker() {

  if('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('sw.js', { scope: './'})
      .then(function(registration) {
        console.log('Service worker registered!');
      })
      .catch(function(error) {
        console.log('There was an error!');
      });
  }
  else {
    console.log('service workers not supported');
  }

}
