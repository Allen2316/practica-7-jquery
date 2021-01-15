<?php
include("database.php");
/* if (isset($_POST["id"])) { */
$id = $_POST["id"];
$query = "SELECT * FROM persona WHERE id = $id";
$result = mysqli_query($conexion, $query);
if (!$result) {
    die("No se hallo");
}

$json = array();
while ($row = mysqli_fetch_array($result)) {
    $json[] = array(
        "id" => $row["id"],
        "nombre" => $row["nombre"],
        "apellido" => $row["apellido"]        
    );
}
$jsonstring = json_encode($json[0]);
echo $jsonstring;
/* }  */


