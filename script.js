// URL del JSON generado desde Google Sheets
const sheetURL = "URL_DE_TU_HOJA_JSON"; // La pondremos después

fetch(sheetURL)
  .then(res => res.json())
  .then(data => {
    const contenedor = document.getElementById("productos");

    data.forEach(fila => {
      contenedor.innerHTML += `
        <div>
          <img src="${fila.imagen}" alt="${fila.producto}" width="150">
          <h3>${fila.producto}</h3>
          <p>Precio: $${fila.precio}</p>
        </div>
      `;
    });
  })
  .catch(error => console.error("Error al cargar los datos:", error));

