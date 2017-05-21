'use strict';

var contactUsModel = {

  formFields: [{
		            name: 'name',
	              size: 'col-md-6',
	              type: 'text',
	              pattern: /^[a-zA-Z]+$/,
	              placeholder: 'Your name here',
	              tooltip: 'Only a-Z!'
	             },
							 {
							 	name: 'email',
							  size: 'col-md-6',
							  type: 'email',
							  pattern: /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9._]+$/,
							  placeholder: 'Your mail here',
							  tooltip: 'Invalid mail!'
							 },
							 {
							 	name: 'message',
							  size: 'col-md-12',
							  type: 'textarea',
							  minlength: 20,
							  placeholder: 'Your message here',
							  tooltip: 'Minimum 20 symbols!'
							}]
};
