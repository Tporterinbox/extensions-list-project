import React from "react";
import Switch from "react-switch";

function Toggle({ checked, onChange }) {
  return (
    
    <div className="toggle-container">
    <Switch
      checked={checked}
      onChange={onChange}
      onColor="#f94449"
      offColor="#d1d5db"
      height={28}
      width={55}
      handleDiameter={27}  
      uncheckedIcon={false}
      checkedIcon={false}

    />
      </div>
  );
}

export default Toggle;
