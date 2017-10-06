/**
 * Created by MARWAN M on 01/10/2017.
 * FUNCTION TO ADD NEW LOCATION
 */
$(document).ready(function () {
    $(".add-img").click(function () {
        //console.log('Its owrking !');
        //$(".marker").draggable();
        // var p = $(".marker");
        // var position = p.position();
        // console.log('left: ' +position.left + ',top: ' +position.top);
        // $('.pos').html('left: ' +position.left + ',top: ' +position.top);
        $('.add_marker').prepend('<img id="theImg" src="img/marker.png" />')
    });
    $(".add_marker").draggable();
    var p = $(".add_marker");
    var position = p.position();
    console.log('left: ' +position.left + ',top: ' +position.top);
     $(".save-btn").click(function () {
        console.log('saved !');
        var p = $(".add_marker");
        var position = p.position();
        console.log('left: ' +position.left + ',top: ' +position.top);
        $(".alert-success").html("data insert successfully, Left: "+position.left + ',Top: ' +position.top).fadeIn('slow');
        $('.alert-success').delay(4000).fadeOut('slow');
    });
});