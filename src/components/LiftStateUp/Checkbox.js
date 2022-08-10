

const Checkbox = (props) => {
  const {active, onChangeHandler} = props;

  return <input type="checkbox" onChange={onChangeHandler} checked={active} />;
};

export default Checkbox;
