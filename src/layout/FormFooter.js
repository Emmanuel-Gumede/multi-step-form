import NextButton from '../components/NextButton';
import BackButton from '../components/BackButton';
import ConfirmBtn from '../components/ConfirmBtn';

const FormFooter = ({ formStep, nextStep, backStep, confirmStep }) => {
  return (
    <section className="form__footer">
      {formStep === 1 || formStep === 5 ? (
        ''
      ) : (
        <BackButton title={'Go Back'} action={backStep} />
      )}
      {formStep < 4 ? (
        <NextButton title={'Next Step'} action={nextStep} />
      ) : formStep === 4 ? (
        <ConfirmBtn title={'Confirm'} action={confirmStep} />
      ) : (
        ''
      )}
    </section>
  );
};

export default FormFooter;
