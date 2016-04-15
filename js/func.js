function installExtension(url) {
  return new Promise(function(reject, resolve) {
    chrome.webstore.install(url, reject, resolve);
  });
}

function initEqualheight(selector) {
  // Resize Cards to same height
  var $cardContent = $('.card-content');
  $cardContent.equalheight();
  $(window).resize(function() {
    $cardContent.equalheight();
  });
}

function initExtensionCard() {
  initEqualheight('.card-content');
  $('.card-install').click(function(event) {
    event.preventDefault();

    var id = $(this).closest('.card-extension').data('extensionId');
    var url = "https://chrome.google.com/webstore/detail/" + id;

    installExtension(url)
      .catch(function(err) {
        console.log(err);
        window.location.href = url;
      });

  });
}

