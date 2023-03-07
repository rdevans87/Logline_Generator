
 const inputValues = {
    'when-a': {},
    'after-a': {},
    'a': {},
   
  };


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
        logline = `When a ${inputValues.leadCharacter} ${inputValues.centralConflict} ${inputValues.actionPoint} ${inputValues.mainGoal} ${inputValues.opposingForce}.`;
        break;
      case 'after-a':
        logline = `After a ${inputValues.majorEvent}, ${inputValues.leadCharacter}  ${inputValues.actionPoint} ${inputValues.mainGoal} ${inputValues.opposingForce}.`;
        break;
      case 'a':
        logline = `A ${inputValues.leadCharacter} ${inputValues.centralConflict} ${inputValues.opposingForce} ${inputValues.mainGoal}.`;
        break;
    }

    // function saveStory() {
      // Get the input values
    //   const incitingIncident = document.getElementById('incitingIncident').value;
    //   const protagonist = document.getElementById('protagonist').value;
    //   const mainGoal = document.getElementById('mainGoal').value;
    //   const antagonist = document.getElementById('antagonist').value;
    //   const obstacle = document.getElementById('obstacle').value;
    //   const painPoint = document.getElementById('painPoint').value;
    //   const setting = document.getElementById('setting').value;
    //   const forcedAction = document.getElementById('forcedAction').value;
    //   const badOutcome = document.getElementById('badOutcome').value;
    
    //   // Save the story object to localStorage
    //   const story = {
    //     incitingIncident,
    //     protagonist,
    //     mainGoal,
    //     antagonist,
    //     obstacle,
    //     painPoint,
    //     setting,
    //     forcedAction,
    //     badOutcome
    //   };
    //   localStorage.setItem('story', JSON.stringify(story));
    // // }

   
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
  

  function downloadLoglines() {
    // Get all the logline text elements on the page
    const loglines = document.querySelectorAll('.logline');
  
    // Create a new text file
    const file = new Blob([loglines.map(logline => logline.innerText).join('\n')], {type: 'text/plain'});
  
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
  localStorage.setItem('loglineData', JSON.stringify(data));
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