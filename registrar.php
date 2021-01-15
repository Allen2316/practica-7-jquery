<?php
include("database.php");

if (isset($_POST["nombre"])) {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];

    $query = "INSERT INTO persona(nombre, apellido) VALUES ('$nombre','$apellido')";
    $result = mysqli_query($conexion, $query);
    if (!$result) {
        die("No se ha podido Guadar el Usuario");
    }
    echo "Usuario Guardado";
}
    

