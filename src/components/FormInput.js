const FormInput = (props) => {
  const { inputErrors, label, error, onChange, id, ...others } = props;
  return (
    <label className="step1-input">
      <div>
        <span>{label}</span>
        <span className="form__error">{inputErrors}</span>
      </div>
      <input
        style={{ border: inputErrors !== undefined ? '1px solid #ff0000' : '' }}
        {...others}
        onChange={onChange}
      />
    </label>
  );
};

export default FormInput;
