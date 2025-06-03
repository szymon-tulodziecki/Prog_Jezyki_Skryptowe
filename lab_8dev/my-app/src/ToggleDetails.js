import React, { useState } from 'react';

function ToggleDetails() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(s => !s)}>
        {show ? 'Ukryj szczegóły' : 'Pokaż szczegóły'}
      </button>
      {show && (
        <div className="ToggleDetails-details">
          <strong>Informacje:</strong> <br />
          To są szczegóły! 
        </div>
      )}
    </div>
  );
}

export default ToggleDetails;
