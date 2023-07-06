window.onload = function() {
    fetch('./openapi/omniapi.yaml')
      .then(response => response.text())
      .then(yamlData => {
        const data = jsyaml.load(yamlData);
        console.log(data); // Use the parsed YAML data here
      })
      .catch(error => console.log('Error:', error));
  };
  