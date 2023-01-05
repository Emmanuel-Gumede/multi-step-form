import FormNav from '../components/FormNav';

const FormMenu = ({ formStep }) => {
  const nav = [
    { step: 1, title1: 'STEP 1', title2: 'YOUR INFO' },
    { step: 2, title1: 'STEP 2', title2: 'SELECT PLAN' },
    { step: 3, title1: 'STEP 3', title2: 'ADD-ONS' },
    { step: 4, title1: 'STEP 4', title2: 'SUMMARY' },
  ];
  return (
    <section className="form__sidebar">
      <div className="form__menu">
        {nav.map((list) => {
          return (
            <FormNav
              key={list.step}
              formStep={formStep}
              step={list.step}
              title1={list.title1}
              title2={list.title2}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FormMenu;
