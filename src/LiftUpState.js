import { useState } from 'react'
import Checkbox from './components/LiftStateUp/Checkbox'
import OnOffButton from './components/LiftStateUp/OnOffButton'

const LiftUpState = () => {
    const [active, setActive] = useState(true);

    const changeHandler = () => {
      setActive(!active);
    };
  return (
    <div>
        <Checkbox active={active} onChangeHandler={changeHandler}/>
        <OnOffButton active={!active} onChangeHandler={changeHandler}/>
    </div>
  )
}

export default LiftUpState