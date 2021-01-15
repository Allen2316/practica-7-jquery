<?php
include("database.php");

$query = "SELECT * FROM persona";

$result = mysqli_query($conexion, $query);

if (!$result) {
    die("Error al listar") . mysqli_error($conexion);
}

$json = array();
while ($row = mysqli_fetch_array($result)) {
    $json[] = array(        
        "nombre" => $row["nombre"],
        "apellido" => $row["apellido"],        
        "id" => $row["id"]
    );
}

$jsonstring = json_encode($json);
echo $jsonstring;