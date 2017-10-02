/**
 * Created by MARWAN M on 01/10/2017.
 */
$(document).ready(function () {
    $(".add-img").click(function () {
        console.log('Its owrking !');
        $(".marker").draggable();
        var p = $(".marker");
        var position = p.position();
        console.log('left: ' +position.left + ',top: ' +position.top);
        $('.pos').html('left: ' +position.left + ',top: ' +position.top);
    });
    $(".marker").draggable();
    var p = $(".marker");
    var position = p.position();
    console.log('left: ' +position.left + ',top: ' +position.top);
});