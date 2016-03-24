import * as serviceWorker from './serviceWorker';
import $ from 'jquery';

serviceWorker.startWorker();

$.ajax({

  url: "/app/catalog/ZP4QDKRRAY",
  context: document.body

}).done(function( data ) {

  for (var lot of data.data.pageData.lots) {
    $("#lots").append(`<li>${lot.lotTitle}</li>`);
  }

});
