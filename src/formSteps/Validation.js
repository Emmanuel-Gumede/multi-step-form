const Validation = (formData) => {
  let errors = {};

  if (!formData.fullname) {
    errors.fullname = 'This field is required';
  }

  if (!formData.email) {
    errors.email = 'This field is required';
  }

  if (!formData.phone) {
    errors.phone = 'This field is required';
  }

  return errors;
};

export default Validation;
