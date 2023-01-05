const ToggleButton = ({ action, toggle, formData }) => {
  return (
    <label className="option__toggle" htmlFor="options-toggle">
      <input
        type="checkbox"
        id="options-toggle"
        name="options-toggle"
        checked={toggle}
        onChange={() => {
          formData.plan = '';
          action(!toggle);
        }}
      />
      <h5>Monthly</h5>
      <div className="toggle__button"></div>
      <h5>Yearly</h5>
    </label>
  );
};

export default ToggleButton;
