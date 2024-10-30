import React, { useState } from "react";

function ExperienceSlider() {
  const [experience, setExperience] = useState(0);

  const handleSliderChange = (e) => {
    setExperience(e.target.value);
  };

  return (
    <div className="col m-2">
      <label htmlFor="country" className="form-label">
        <h6>Experience</h6>
      </label>
      <input
        type="range"
        className="form-range"
        min="0"
        max="20"
        value={experience}
        onChange={handleSliderChange}
      />
      
      <span>Experience: {experience} year(s)</span>
    </div>
  );
}

export default ExperienceSlider;
