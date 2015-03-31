function LinksEditXBlock(runtime, element) {
  $(element).find('.save-button').bind('click', function() {
    var handlerUrl = runtime.handlerUrl(element, 'studio_submit');
    var data = {
      href1: $(element).find('input[name=href1]').val(),
      href2: $(element).find('input[name=href2]').val(),
      href3: $(element).find('input[name=href3]').val(),
      href4: $(element).find('input[name=href3]').val(),  
    };
    if (data['href1']==''||data['href1'==null]){
	   alert('type something at Link 1');
    }
    else if (data['href2']==''||data['href2'==null]){
        alert('type something at Link 2');
    }
    else if (data['href3']==''||data['href3'==null]){
        alert('type something at Link 3');
    }
    else if (data['href4']==''||data['href4'==null]){
        alert('type something at Link 4');
    }    
    else{
        $.post(handlerUrl, JSON.stringify(data)).done(function(response) {
    }
   });
  });

  $(element).find('.cancel-button').bind('click', function() {
    runtime.notify('cancel', {});
  });
}
