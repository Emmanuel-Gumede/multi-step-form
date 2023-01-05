import FormInput from '../components/FormInput';

const FormStep1 = ({ handleInput, formData, inputErrors }) => {
  const inputs = [
    {
      id: 1,
      type: 'text',
      name: 'fullname',
      placeholder: 'e.g. Stephen King',
      label: 'Name',
      error: 'This field is required',
      required: true,
    },
    {
      id: 2,
      type: 'text',
      name: 'email',
      placeholder: 'e.g. stephenking@lorem.com',
      label: 'Email Address',
      error: 'This field is required',
      required: true,
    },
    {
      id: 3,
      type: 'text',
      name: 'phone',
      placeholder: 'e.g. +1 234 567 890',
      label: 'Phone Number',
      error: 'This field is required',
      required: true,
    },
  ];

  return (
    <>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      {inputs.map((input) => {
        return (
          <FormInput
            key={input.id}
            {...input}
            value={formData[input.name]}
            onChange={handleInput}
            inputErrors={inputErrors[input.name]}
          />
        );
      })}
    </>
  );
};

export default FormStep1;
