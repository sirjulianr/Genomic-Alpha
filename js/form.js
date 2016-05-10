
$(document).ready(function(){

			// Custom method to validate name
			$.validator.addMethod("nameValidate", function(value, element) {
				return this.optional(element) || /^[a-zA-Z]*$/i.test(value);
			}, "Name must contain only letters");
            
            //Custome method to validate number
            $.validator.addMethod("numberValidate", function(value, element) {
                return this.optional(element) || /^[0-9]*$/i.test(value);
            }, "Must only contain numbers");
           

			$(".next").click(function(){
				var form = $("#myform");
				form.validate({
					errorElement: 'span',
					errorClass: 'help-block',
					highlight: function(element, errorClass, validClass) {
						$(element).closest('.form-group').addClass("has-error");
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).closest('.form-group').removeClass("has-error");
					},
					rules: {
						firstname: {
							required: true,
							nameValidate: true,
							minlength: 3,
						},
						lastname : {
							required: true,
                            nameValidate: true,
                            minlength: 3,
						},
						email : {
							required: true,
                            minlength: 3
						},
                        phone : {
                            required: true,
                            numberValidate: true,
                        },
                        practice : {
                            required: true,
                        },
                        state : {
                            required: true,  
                        },
						type:{
							required: true,
						},
						patients:{
							required: true,
						},
						name: {
							required: true,
							minlength: 3,
						},
					},
					messages: {
						firstname: {
							required: "Please enter a first name",
						},
						lastname : {
							required: "Please enter a last name",
						},
						email : {
							required: "Please enter an email address",
						},
                        state : {
                            required: "Please choose a state"  
                        },
						phone: {
							required: "Please enter a phone number",
						},
						practice: {
							required: "Please enter your practice name",
						},
                        type: {
							required: "Please enter your practice type",
						},
                        patients: {
							required: "Please enter a number",
						},
					}
				});
				
				if (form.valid() === true){
					if ($('#account_information').is(":visible")){
						current_fs = $('#account_information');
						next_fs = $('#company_information');
					}else if($('#company_information').is(":visible")){
						current_fs = $('#company_information');
						next_fs = $('#personal_information');
					}
					
					next_fs.show(); 
					current_fs.hide();
				}
			});

			$('#previous').click(function(){
				if($('#company_information').is(":visible")){
					current_fs = $('#company_information');
					next_fs = $('#account_information');
				}else if ($('#personal_information').is(":visible")){
					current_fs = $('#personal_information');
					next_fs = $('#company_information');
				}
				next_fs.show(); 
				current_fs.hide();
	});
});

$("form").submit(function(){
                window.location.replace("index.html");

});