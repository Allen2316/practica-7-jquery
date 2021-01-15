$(function () {
    listar();

    $(document).on("click", ".agregar", function (e) {

        const data = $("#form-registro").serialize();
        let url = "registrar.php";
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (response) {
                console.log(response);
                listar();
                $("#form-edicion").trigger("reset");
                let template = `Agregado con EXITO`;
                $(".mensajeBody").html(template);
                template = `<button type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button>`;
                $(".piemodal").html(template);
            }
        });
        e.preventDefault();
    });

    $(document).on("click", ".btnagregar", function () {
        let template = `
            <form id="form-registro" class="form-registro">
            <input type="hidden" id="ID-user">
            <div class="form-group row px-4">
                <input type="text" class="form-control" name="nombre" id="nombre"
                    placeholder="Nombre" required>
            </div>
            <div class="form-group row px-4">
                <input type="text" class="form-control" name="apellido" id="apellido"
                    placeholder="Apellido" required>
            </div>
            <div class="form-group row px-4">
                <button type="button" class="btn btn-secondary mr-2"
                    data-dismiss="modal">Cancelar</button>
                <button type="submit" class="agregar btn btn-success">Guardar</button>
                <!-- aqui va el mensaje de guardado -->
            </div>
            </form>`;
        $(".mensajeBody").html(template);
        $(".piemodal").html("");
    });

    function listar() {
        $.ajax({
            type: "GET",
            url: "listar.php",
            success: function (response) {
                let datos = JSON.parse(response);
                let template = "";
                datos.forEach(dato => {
                    template +=
                        `<tr ID-user="${dato.id}">                                                
                        <td>
                            ${dato.nombre}
                        </td>
                        <td> ${dato.apellido} </td>                                                
                        <td>
                        <button class="btnactualizar btn btn-primary px-4" data-toggle="modal" data-target="#modalEditar">Editar</buttton>
                        </td>
                        <td>                         
                            <button class="borrar btn btn-danger" data-toggle="modal" data-target="#modalEliminacion">Eliminar</buttton>                          
                        </td>
                    </tr>
                    `
                });
                $("#cuerpo-tabla").html(template);
            }
        });
    }

    $(document).on("click", ".borrar", function () {
        let item = 0;
        let id = 0;
        item = $(this)[0].parentElement.parentElement;
        console.log(item);
        id = $(item).attr("ID-user");
        $(document).on("click", ".modalEliminar", function () {
            $.ajax({
                type: "POST",
                url: "eliminar.php",
                data: { id },
                success: function (response) {
                    listar();
                    item = 0;
                    id = 0;
                    console.log(response);
                }
            });
        });
    });




    $(document).on("click", ".btnactualizar", function (e) {
        let item = $(this)[0].parentElement.parentElement;
        let id = $(item).attr("ID-user");
        console.log(id);
        $.ajax({
            type: "POST",
            url: "usuario-individual.php",
            data: { id },
            success: function (response) {
                const dato = JSON.parse(response);
                $("#ID-user1").val(dato.id);
                $("#nombre1").val(dato.nombre);
                $("#apellido1").val(dato.apellido);
                console.log(response);
            }
        });
        e.preventDefault();
    });


    $(document).on("click", ".actualizar", function (e) {
        const data = $("#form-edicion").serialize();
        console.log(data);
        let url = "editar.php";
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (response) {
                console.log(response);
                listar();
                $("#form-edicion").trigger("reset");
            }
        });
        e.preventDefault();
    });


});
