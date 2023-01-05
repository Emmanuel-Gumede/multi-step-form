const BackButton = ({ title, action }) => {
  return (
    <button className="form__backward" onClick={action}>
      {title}
    </button>
  );
};

export default BackButton;
