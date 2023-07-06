window.onload = function() {
    fetch('/openapi/omniapi.yaml')
      .then(response => response.text())
      .then(yamlData => {
        const data = jsyaml.load(yamlData);
        const container = document.getElementById('data-container');
        container.innerText = JSON.stringify(data);
      })
      .catch(error => console.log('Error:', error));
  };