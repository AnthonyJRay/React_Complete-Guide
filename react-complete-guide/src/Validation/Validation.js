import React from 'react';

const inputValidator = (props) => {
  const textLength = props.inputLength

  if (textLength < 5) {
    return (
      <p>Text length is too short.</p>
    )
  } else {
    return (
      <p>Text length is long enough.</p>
    )
  }
}

export default inputValidator;