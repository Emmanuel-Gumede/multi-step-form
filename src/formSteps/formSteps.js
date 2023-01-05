import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';
import FormStep3 from './FormStep3';
import FormStep4 from './FormStep4';
import FormStep5 from './FormStep5';

const formSteps = (
  formStep,
  handleInput,
  formData,
  inputErrors,
  isMonthly,
  setIsMonthly,
  changeOption
) => {
  switch (formStep) {
    case 1:
      return (
        <FormStep1
          handleInput={handleInput}
          formData={formData}
          inputErrors={inputErrors}
        />
      );

    case 2:
      return (
        <FormStep2
          handleInput={handleInput}
          formData={formData}
          v_monthly={isMonthly}
          f_monthly={setIsMonthly}
        />
      );

    case 3:
      return (
        <FormStep3 handleInput={handleInput} formData={formData} v_monthly={isMonthly} />
      );

    case 4:
      return (
        <FormStep4 change={changeOption} isMonthly={isMonthly} formData={formData} />
      );

    case 5:
      return <FormStep5 />;

    default:
      return null;
  }
};

export default formSteps;
