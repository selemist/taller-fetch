const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar

const container = document.getElementById("container"); // Selecciona el contenedor donde se mostrará la información

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo párrafo donde se
 * imprime el campo "name" y el campo "lastname" separados por un espacio
 */
function showData(dataArray) {
  console.log("Mostrando datos:", dataArray); // Verifica si la función recibe los datos correctos
  // Itera sobre los elementos del array
  for (const item of dataArray) {
    // Utiliza template literals para armar el string
    container.innerHTML += `<p>${item.name} ${item.lastname}</p>`;
  }
}

// Realiza una solicitud fetch al archivo JSON para obtener los datos de los estudiantes
fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Convierte la respuesta a un objeto JSON
  })
  .then(data => {
    console.log("Datos obtenidos:", data); // Verifica si se obtienen los datos correctos
    const students = data.students; // Extrae el array de estudiantes del objeto JSON
    console.log("Estudiantes:", students); // Verifica si se extraen los estudiantes correctamente
    showData(students); // Llama a la función showData con los datos de los estudiantes
  })
  .catch(error => {
    console.error('Error fetching data:', error); // Muestra un mensaje de error en la consola si la solicitud falla
  });
