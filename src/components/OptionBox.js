const OptionBox = ({ id, image, title, amount, comment, handleInput, formData }) => {
  return (
    <label className="form__options2" htmlFor={id}>
      <input
        type="radio"
        id={id}
        name="plan"
        style={{ display: 'none' }}
        value={[title, amount]}
        checked={id === formData.plan.split(',')[0].toLowerCase() ? true : false}
        onChange={handleInput}
      />
      <div className="options__list">
        <div>
          <img src={image} alt={'option'} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h3> {title} </h3>
          <p> {amount} </p>
          <span> {comment} </span>
        </div>
      </div>
    </label>
  );
};

export default OptionBox;
