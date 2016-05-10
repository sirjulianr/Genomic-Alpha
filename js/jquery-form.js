

$(document).ready(function (){
    validate();
    $('#firstname, #lastname, #email').change(validate);
});

function validate(){
    if ($('#firstname').val().length   >   0   &&
        $('#lastname').val().length  >   0   &&
        $('#email').val().length    >   0) {
            $("input[type=button]").prop("disabled", false);
    }
    else {
            $("input[type=button]").prop("disabled", true);
    }
}
