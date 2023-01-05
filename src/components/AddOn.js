const AddOn = ({ id, title, description, amount, handleInput, formData }) => {
  return (
    <label
      htmlFor={id}
      className={`form__addon ${formData[id] === true ? 'form__addon-selected' : ''}`}
    >
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={formData[id]}
        onChange={handleInput}
      />
      <div>
        <h3 style={{ gridArea: 'head' }}> {title} </h3>
        <p style={{ gridArea: 'text' }}> {description} </p>
        <span style={{ gridArea: 'amount' }}> {amount} </span>
      </div>
    </label>
  );
};

export default AddOn;
