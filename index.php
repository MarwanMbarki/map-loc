<?php
/**
 * User: MARWAN MBARKI
 * Date: 02/10/2017
 * Time: 22:31
 */
?>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Page Title -->
    <title>Map Location - COPYRIGHT 2017 - MARWAN MBARKI</title>
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/custom-dist.js"></script>


    <!-- Bootstrap stylesheet -->
    <link rel="stylesheet" href="css/bootstrap.min.css" crossorigin="anonymous">
    <link rel="stylesheet" href="css/bootstrap.css" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/style-dist.css">
</head>
<body>
<div class="container add-header">
    <div class="row">
        <div class="col-md-6">
            <h1>ADD NEW LOCATION</h1>
            <p>Just Drag the marker to the position of your choice.</p>
            <p class="pos"></p>
            <div class="alert alert-success" style="display: none;">
              <strong>Success!</strong> Location Added To DB.
            </div>
            <div class="alert alert-danger" style="display: none;">
              <strong>Success!</strong> Location Added To DB.
            </div>
        </div>
        
        <div class="col-md-6 add-img" data-toggle="tooltip" title="Add New Location">
            <a href="#!"><img src="img/add-button.png" alt=""></a>
        </div>
    </div>
    <div class="row map">
        <div class="map-img">
            <div class="marker">
                <a href="#!" class="add_marker"><!-- <img src="img/marker.png" alt=""> --></a>
            </div>
        </div>

    </div>
    <div class="row save-btn" data-toggle="tooltip" title="Save Your Location !">
        <a href="#!"><img src="img/save-folder.png" alt=""></a>
    </div>
</div>
</body>
</html>
