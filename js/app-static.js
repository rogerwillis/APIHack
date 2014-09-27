$(document).ready(function () {


    $(".btn-submit").on('click', function () {

        $("#myModal").modal("show");

    });



    var yodafy = function (input) {


        $.ajax({
            url: 'https://yoda.p.mashape.com/yoda?sentence=' + input + '',
            type: 'GET',
            datatype: 'json',
            success: function (data) { $(".results").text(JSON.stringify(data)); },
            error: function (err) { $(".results").text('Something is wrong!!! Please fix.'); },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "hdLK3NDN7rmsho9QdKXVrBvOqvwHp1SHVZSjsnRcPXWNbXxxKo"); // Enter here your Mashape key
            }
        });


    }



});
