<?php
include("database.php");
/* if (isset($_POST["ID-nombre1"])) { */
$id = $_POST["ID-user1"];
$nombre = $_POST["nombre1"];
$apellido = $_POST["apellido1"];
$query = "UPDATE persona SET nombre = '$nombre', apellido = '$apellido' WHERE id = '$id'";
$result = mysqli_query($conexion, $query);
if (!$result) {
    die("Error al editar");
}
echo "Se edito";
//echo "Se edito";
/* } */
