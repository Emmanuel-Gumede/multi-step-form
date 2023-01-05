const LinkButton = ({ title, action }) => {
  return (
    <button className="form__link" onClick={action}>
      {title}
    </button>
  );
};

export default LinkButton;
