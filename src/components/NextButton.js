const NextButton = ({ title, action }) => {
  return (
    <button className="form__forward" onClick={action}>
      {title}
    </button>
  );
};

export default NextButton;
