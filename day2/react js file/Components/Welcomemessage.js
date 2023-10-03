import React from 'react';

function WelcomeMessage(props) {
  const { username } = props;

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>Thank you for visiting our website.</p>
    </div>
  );
}

export default WelcomeMessage;
