    <script>
        const inputBuscar = document.getElementById("buscar");
        const lista = document.getElementById("lista-productos");
        const productos = lista.getElementsByTagName("li");

        inputBuscar.addEventListener("keyup", function() {
            let filtro = inputBuscar.value.toLowerCase();
            for (let i = 0; i < productos.length; i++) {
                let texto = productos[i].textContent.toLowerCase();
                productos[i].style.display = texto.includes(filtro) ? "" : "none";
            }
        });
    </script>

