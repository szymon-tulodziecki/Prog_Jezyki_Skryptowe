import React from 'react';

function ScoreDisplay({ score }) {
  let message;
  if (score < 50) {
    message = 'Za mało punktów!';
  } else if (score < 80) {
    message = 'W sam raz!';
  } else {
    message = 'Super wynik!';
  }
  return <div className="ScoreDisplay-message">{message}</div>;
}

export default ScoreDisplay;
