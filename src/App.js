import { useEffect, useState } from 'react';
import FormContent from './layout/FormContent';
import formSteps from './formSteps/formSteps';
import FormMenu from './layout/FormMenu';
import FormFooter from './layout/FormFooter';
import Validation from './formSteps/Validation';

const initFormValues = {
  fullname: '',
  email: '',
  phone: '',
  plan: 'arcade,$90/yr',
  add1: false,
  add2: false,
  add3: false,
};

function MultiStepForm() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState(initFormValues);
  const [isMonthly, setIsMonthly] = useState(true);
  const [inputErrors, setInputErrors] = useState({});
  const [isNextPage, setIsNextPage] = useState(false);

  const handleInput = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const nextStep = (e) => {
    e.preventDefault();
    setInputErrors(Validation(formData));
    setIsNextPage(true);
  };

  const backStep = (e) => {
    e.preventDefault();
    if (formStep !== 1) setFormStep(formStep - 1);
  };

  const confirmStep = (e) => {
    e.preventDefault();
    setFormStep(5);
  };

  const changeOption = (e) => {
    e.preventDefault();
    setFormStep(2);
  };

  useEffect(() => {
    if (Object.keys(inputErrors).length === 0 && isNextPage) {
      setFormStep(formStep + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputErrors]);

  return (
    <main>
      <form className="form">
        <FormMenu formStep={formStep} />
        <FormContent
          step={formSteps(
            formStep,
            handleInput,
            formData,
            inputErrors,
            isMonthly,
            setIsMonthly,
            changeOption
          )}
          formStep={formStep}
        />
        <FormFooter
          formStep={formStep}
          nextStep={nextStep}
          backStep={backStep}
          confirmStep={confirmStep}
        />
      </form>
    </main>
  );
}

export default MultiStepForm;
