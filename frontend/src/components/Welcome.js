import React from 'react';

const Welcome = ( {details} ) => {
  return (
    <div>
      {details && <h1>Welcome, {details.name}!</h1>}
      {/* Render the user name if the user data is available */}
    </div>
  );
};

export default Welcome;
