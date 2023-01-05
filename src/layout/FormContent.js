const FormContent = ({ step, formStep }) => {
  const contentStyle = () => {
    switch (formStep) {
      case 5:
        return 'form__contents form__step5';

      default:
        return 'form__contents';
    }
  };
  return <section className={contentStyle()}>{step}</section>;
};

export default FormContent;
