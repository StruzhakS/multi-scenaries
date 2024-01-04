import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFirstOption,
  setFourthOption,
  setSecondOption,
  setThirdOption,
} from '../../Redux/ScenariesSlice';
import s from './FirstScenaries.module.css';
import SecondScenaries from '../SecondScenaries/SecondScenaries';
import ThirdScenaries from '../ThirdScenaries/ThirdScenaries';
import FourthScenaries from '../FourthScenaries/FourthScenaries';

const MyComponent = () => {
  const { firstOption, secondOption, thirdOption, fourthOption } = useSelector(
    state => state.scen.scenaries
  );
  const dispatch = useDispatch();

  const handleFirstSelect = option => {
    dispatch(setFirstOption(option));
    dispatch(setSecondOption(''));
    dispatch(setThirdOption(''));
    dispatch(setFourthOption(''));
  };

  const handleSecondSelect = option => {
    dispatch(setSecondOption(option));
    dispatch(setThirdOption(''));
    dispatch(setFourthOption(''));
  };

  const handleThirdSelect = option => {
    dispatch(setThirdOption(option));
    dispatch(setFourthOption(''));
  };

  const handleReset = () => {
    dispatch(setFirstOption(''));
    dispatch(setSecondOption(''));
    dispatch(setThirdOption(''));
    dispatch(setFourthOption(''));
  };

  return (
    <>
      <div className={s.scenaries}>
        <button type="button" onClick={handleReset} className={s.button_24}>
          Reset
        </button>
        <div className={s.scenaries_select}>
          <select value={firstOption} onChange={e => handleFirstSelect(e.target.value)}>
            <option disabled value="">
              Виберіть дію
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>

          {firstOption && (
            <SecondScenaries
              firstOption={firstOption}
              secondOption={secondOption}
              handleSecondSelect={handleSecondSelect}
            />
          )}

          {secondOption && (
            <ThirdScenaries
              secondOption={secondOption}
              thirdOption={thirdOption}
              handleThirdSelect={handleThirdSelect}
            />
          )}

          {thirdOption && <FourthScenaries thirdOption={thirdOption} fourthOption={fourthOption} />}
        </div>
      </div>
    </>
  );
};

export default MyComponent;
