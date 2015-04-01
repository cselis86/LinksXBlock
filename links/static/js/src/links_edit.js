function LinksEditXBlock(runtime, element) {
  $(element).find('.save-button').bind('click', function() {
    var handlerUrl = runtime.handlerUrl(element, 'studio_submit');
    var data = {
      href1: $(element).find('input[name=href1]').val(),
      href2: $(element).find('input[name=href2]').val(),
      href3: $(element).find('input[name=href3]').val(),
      href4: $(element).find('input[name=href4]').val(),  
    };
   
   var isEmpty = false;

    if (data.href1 == "" ) {
        window.alert('type something in link 1');
        isEmpty = true;
    }
    if (data.href2 == "" ) {
        window.alert('type something in link 2');
        isEmpty = true;
    }
    if (data.href3 == "" ) {
        window.alert('type something in link 3');
        isEmpty = true;
    }
    if (data.href4 == "" ) {
        window.alert('type something in link 4');
        isEmpty = true;
    }
    
    if (!isEmpty) {
        $.post(handlerUrl, JSON.stringify(data)).done(function(response) { });
    }
  
//    $.post(handlerUrl, JSON.stringify(data)).done(function(response) { });
  
  });

  $(element).find('.cancel-button').bind('click', function() {
    runtime.notify('cancel', {});
  });
}
