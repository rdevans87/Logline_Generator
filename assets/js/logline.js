
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
  

 