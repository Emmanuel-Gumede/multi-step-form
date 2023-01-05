const ConfirmBtn = ({ title, action }) => {
  return (
    <button className="form__confirm" onClick={action}>
      {title}
    </button>
  );
};

export default ConfirmBtn;
