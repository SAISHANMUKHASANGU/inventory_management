import React from 'react';


const Confirmation = (WrappedComponent) => {
  return (props) => {
    const showMessage = (message) => {
      alert(message); 
    };


    return <WrappedComponent {...props} showMessage={showMessage} />;
  };
};

export default Confirmation;
