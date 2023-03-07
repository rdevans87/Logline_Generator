  const inputValues = {
    'when-a': {},
    'after-a': {},
    'a': {},
   
  };
  function downloadLoglines() {
    // Get all the logline text elements on the page
  // Get all the logline text elements on the page
const loglines = document.querySelectorAll('.logline');

// Create a new text file
const file = new Blob([Array.from(loglines).map(logline => logline.innerText).join('\n')], {type: 'text/plain'});

  
    // Create a URL for the file
    const url = URL.createObjectURL(file);
  
    // Create a link to download the file
    const link = document.createElement('a');
    link.href = url;
    link.download = 'loglines.txt';
  
    // Click the link to start the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  document.getElementById('download-btn').addEventListener('click', downloadLoglines);


  function generateLogline() {
    // Get selected logline type
    const loglineType = document.getElementById('logline-type').value;
  
    // Get input values
    const inputValues = {};
    const inputFields = document.querySelectorAll(`#${loglineType} input`);
    for (const inputField of inputFields) {
      inputValues[inputField.name] = inputField.value;
    }
  
    // Generate logline based on selected logline type
    let logline;
    switch (loglineType) {
      case 'when-a':
        logline = `"When a ${inputValues.leadCharacter} ${inputValues.centralConflict} ${inputValues.actionPoint} ${inputValues.mainGoal} ${inputValues.opposingForce}."`;
        break;
      case 'after-a':
        logline = `After a ${inputValues.majorEvent}, ${inputValues.leadCharacter}  ${inputValues.actionPoint} ${inputValues.mainGoal} ${inputValues.opposingForce}.`;
        break;
      case 'a':
        logline = `A ${inputValues.leadCharacter} ${inputValues.centralConflict} ${inputValues.opposingForce} ${inputValues.mainGoal}.`;
        break;
    }

  
   
    // Create a new logline container
    const loglineContainer = document.createElement('div');
    loglineContainer.classList.add('logline-container');
  
    // Create a new logline element
    const loglineElement = document.createElement('p');
    loglineElement.classList.add('logline');
    loglineElement.textContent = logline;
  
    // Append the logline element to the logline container
    loglineContainer.appendChild(loglineElement);
  
    // Append the logline container to the logline output div
    const loglineOutput = document.getElementById('logline');
    loglineOutput.appendChild(loglineContainer);
  }
  
  function saveResults() {
    // Get all the input values
  
    const inputValues = {
      'when-a': {},
      'after-a': {},
      'a': {},
     
    };
   
    const inputFields = document.querySelectorAll('#logline-type option:checked ~ .logline-inputs input');
    for (const inputField of inputFields) {
      inputValues[inputField.closest('.logline-inputs').id][inputField.name] = inputField.value;
    }
  
    // Get all the generated loglines
    const loglineElements = document.querySelectorAll('.logline');
    const loglines = [];
    for (const loglineElement of loglineElements) {
      loglines.push(loglineElement.textContent);
    }
  
    // Store the input values and loglines in local storage
    const data = {
      'inputValues': inputValues,
      'loglines': loglines,
    };
    localStorage.setItem('loglines', JSON.stringify(data));
  
  }
  
  const savedLoglines = localStorage.getItem('loglines');
  
  let loglines = [];
  if (savedLoglines) {
    const savedData = JSON.parse(savedLoglines);
    loglines = savedData.loglines;
    const inputValues = savedData.inputValues;
    for (const inputType in inputValues) {
      const inputs = inputValues[inputType];
      const inputElements = document.querySelectorAll(`#${inputType} input`);
      for (const inputElement of inputElements) {
        inputElement.value = inputs[inputElement.name];
      }
    }
  }
  
  const loglineOutput = document.getElementById('logline');
  for (const logline of loglines) {
    const loglineContainer = document.createElement('div');
    loglineContainer.classList.add('logline-container');
    const loglineElement = document.createElement('p');
    loglineElement.classList.add('logline');
    loglineElement.textContent = logline;
    loglineContainer.appendChild(loglineElement);
    loglineOutput.appendChild(loglineContainer);
  }
  


function startOver() {
  // Clear all input fields
  const inputFields = document.querySelectorAll(`input[type="text"]`);
  for (const inputField of inputFields) {
    inputField.value = '';
  }

  // Clear all generated loglines
  const loglineContainer = document.getElementById('logline');
  loglineContainer.innerHTML = '';

  // Clear all stored data in local storage
  localStorage.clear();

  // Refresh the page
  location.reload();
}