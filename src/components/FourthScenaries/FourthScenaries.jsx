import React from 'react';
import { setFourthOption } from '../../Redux/ScenariesSlice';
import { useDispatch } from 'react-redux';

const FourthScenaries = ({ fourthOption, thirdOption }) => {
  const dispatch = useDispatch();

  return (
    <select value={fourthOption} onChange={e => dispatch(setFourthOption(e.target.value))}>
      <option disabled value="">
        Виберіть дію
      </option>
      {[...Array(6).keys()].map(i => (
        <option key={i} value={`${thirdOption}-${i + 1}`}>
          {`${thirdOption}-${i + 1}`}
        </option>
      ))}
    </select>
  );
};

export default FourthScenaries;
