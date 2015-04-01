function LinksEditXBlock(runtime, element) {
  $(element).find('.save-button').bind('click', function() {
    var handlerUrl = runtime.handlerUrl(element, 'studio_submit');
    var data = {
      href1: $(element).find('input[name=href1]').val(),
      href2: $(element).find('input[name=href2]').val(),
      href3: $(element).find('input[name=href3]').val(),
      href4: $(element).find('input[name=href3]').val(),  
    };

    if (data.href1 === null ) {
        window.alert('type something in link 1');
    }
    else {
        $.post(handlerUrl, JSON.stringify(data)).done(function(response) { });
    }
  
  });

  $(element).find('.cancel-button').bind('click', function() {
    runtime.notify('cancel', {});
  });
}
