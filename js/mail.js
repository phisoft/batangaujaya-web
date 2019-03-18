$(function() {

	// Get the form.
	var form = $('.form');
	var message = $('.message');
    var sendBtn = $(".sendBtn");

	//Action invoked when form submitted
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();
        var sendBtnText = $(sendBtn).text();
        $(sendBtn).text("Sending..");

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
            $(message).show();
			//Removing error and adding success class when the submit is successful
			$(message).removeClass('alert-error');
			$(message).addClass('alert-success');

			// Set the message text.
			$(message).text(response);

			// Clear form fields
			$('.form input, .form textarea').val('');
            $(sendBtn).text(sendBtnText);
		})
		.fail(function(data) {
            $(message).show();
			// If submission failed add error class and remove success class
			$(message).removeClass('alert-success');
			$(message).addClass('alert-error');

			// Set the message text.
			if (data.responseText !== '') {
				$(message).text(data.responseText);
			} else {
				$(message).text('Oops! An error occured and your message could not be sent.');
			}
            $(sendBtn).text(sendBtnText);
		});
	});

});
