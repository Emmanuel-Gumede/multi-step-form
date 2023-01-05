const FormNav = ({ formStep, step, title1, title2 }) => {
  return (
    <div className="form__stepmark">
      <div className={`nav__number ${formStep === step ? 'nav__number-selected' : ''}`}>
        {step}
      </div>
      <p className="nav__title-1"> {title1} </p>
      <h3 className="nav__title-2"> {title2} </h3>
    </div>
  );
};

export default FormNav;
