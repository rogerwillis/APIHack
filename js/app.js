$(document).ready(function () {
    
   

    $(".btn-submit").on('click', function () {

        var input = $(".yoda-input").val();
        

        if (input != "") {
           
            yodafy(input);
        } else {
            $(".results").text('Wrong, something is!!! Put some text in sir!!! Hmmmmmm.');
            $("#myModal").modal("show");
        }

    });



    var yodafy = function (input) {
        $(".btn-submit").text("loading...");
       
        $.ajax({
            url: 'https://yoda.p.mashape.com/yoda?sentence=' + input + '',
            type: 'GET',
            datatype: 'json',
            success: function (data) {
                $(".results").text(JSON.stringify(data)); 
                $("#myModal").modal("show");
                $(".btn-submit").text("Yodafy! Again!");
                $(".yoda-input").val("");

            },
            error: function(err) {
                $(".results").text('Something is wrong!!! Please fix.');
                $("#myModal").modal("show");
                $(".btn-submit").text("Yodafy!");
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "hdLK3NDN7rmsho9QdKXVrBvOqvwHp1SHVZSjsnRcPXWNbXxxKo"); // Mashape key
            },
            
        });


    }



});
