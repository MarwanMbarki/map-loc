/**
 * Created by MARWAN M on 01/10/2017.
 * FUNCTION TO ADD NEW LOCATION
 */
$(document).ready(function () {
    //ONCLICK ADD NEW NEW MARKER TO THE MAP
    $(".add-img").click(function () {
    $('.add_marker').prepend('<img id="theImg" src="img/marker.png" />')
    });


    //MAKE THE MARKER DRAGGABLE
    $(".add_marker").draggable();
    var p = $(".add_marker");
    var position = p.position();
    console.log('left: ' +position.left + ',top: ' +position.top);

    // ONCLICK SAVE LOCATION TO DATABASE
     $(".save-btn").click(function () {
        if ($('#theImg') [0]){
        console.log('saved !');
        var p = $(".add_marker");
        var position = p.position();
        console.log('left: ' + position.left + ',top: ' + position.top); 
        $(".alert-success").html("Data insert successfully, Left: "+position.left + ',Top: ' +position.top).fadeIn('slow');
        $('.alert-success').delay(4000).fadeOut('slow');
        $('#theImg').remove();
        }

        //IF THERE IS NO MARKER THAN DISPLAY AN ERROR MESSAGE
        else{
            $(".alert-danger").html("No Marker To insert!").fadeIn('slow');
            $('.alert-danger').delay(2000).fadeOut('slow');
        }
    });
});
