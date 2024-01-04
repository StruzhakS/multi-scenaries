import React from 'react';

const SecondScenaries = ({ firstOption, secondOption, handleSecondSelect }) => {
  return (
    <select value={secondOption} onChange={e => handleSecondSelect(e.target.value)}>
      <option disabled value="">
        Виберіть дію
      </option>
      {[...Array(6).keys()].map(i => (
        <option key={i} value={`${firstOption}-${i + 1}`}>
          {`${firstOption}-${i + 1}`}
        </option>
      ))}
    </select>
  );
};

export default SecondScenaries;
