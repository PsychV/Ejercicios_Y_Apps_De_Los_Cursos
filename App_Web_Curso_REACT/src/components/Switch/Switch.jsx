import React from 'react';
import './Switch.css';


const Switch = ({ isOn, handleToggle, onColor }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
         style={{ background: isOn && onColor }}
         className="react-switch-label"
         htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;

// https://upmostly.com/tutorials/build-a-react-switch-toggle-component 

/* 
Este codigo es necesario en el parent element para que funcione
 const [value, setValue] = useState(false); 
 return (
    <div className="app">
      <Switch
        isOn={value}
        handleToggle={() => setValue(!value)}
        onColor="#EF476F" para elegir el color
      />
    </div>

*/