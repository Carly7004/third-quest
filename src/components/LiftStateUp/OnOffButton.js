

const OnOffButton = (props) => {
  const {active, onChangeHandler} = props;
  return (
    <button
      className={active ? "button-on" : "button-off"}
      onClick={onChangeHandler}
      type="button"
    >
      {active ? "on" : "off"}
    </button>
  );
};

export default OnOffButton;
