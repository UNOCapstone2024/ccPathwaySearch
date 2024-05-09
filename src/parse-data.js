const txtFilePath = './data.txt';

// Function to fetch and parse the .txt file content
function fetchAndDisplayData() {
  // Fetch the .txt file
  fetch(txtFilePath)
    .then(response => response.text())
    .then(text => {
      // Parse the CSV data using PapaParse
      Papa.parse(text, {
        header: true, // Assuming the first row contains headers
        complete: function(results) {
          // Call function to display data
          displayData(results.data);
        },
        error: function(error) {
          console.error('Error parsing CSV: ', error);
        }
      });
    })
    .catch(error => {
      console.error('Error fetching the .txt file: ', error);
    });
}

// Function to display parsed data on the web page
function displayData(data) {
  // Assuming there's an element with an ID 'data-container' to hold the data
  const container = document.getElementById('GuidedPathways');

  // Clear previous content
  container.innerHTML = '';

  // Iterate over each row in the data
  data.forEach(row => {
    // Create an element for each row

    const rowElement = document.createElement('div');
    rowElement.innerHTML = `
      <p>Major: ${row["Major (Concentration)"]}</p>
      <p>Community College: ${row["Community College"]}</p>
      <p>Guided Pathway: ${row["Guided Pathway                "]}</p>
    `;
    // Append the row element to the container
    container.appendChild(rowElement);
  });
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', fetchAndDisplayData);


