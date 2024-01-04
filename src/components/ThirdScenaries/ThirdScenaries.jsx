import React from 'react';

const ThirdScenaries = ({ secondOption, thirdOption, handleThirdSelect }) => {
  return (
    <select value={thirdOption} onChange={e => handleThirdSelect(e.target.value)}>
      <option disabled value="">
        Виберіть дію
      </option>
      {[...Array(6).keys()].map(i => (
        <option key={i} value={`${secondOption}-${i + 1}`}>
          {`${secondOption}-${i + 1}`}
        </option>
      ))}
    </select>
  );
};

export default ThirdScenaries;
