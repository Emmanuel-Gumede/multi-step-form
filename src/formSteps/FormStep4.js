import LinkButton from '../components/LinkButton';

const monthlyOptions = [
  {
    id: 'add1',
    title: 'Online service',
    amount: '+$1/mo',
    description: 'Access to multiplayer games',
  },
  {
    id: 'add2',
    title: 'Larger storage',
    amount: '+$2/mo',
    description: 'Extra 1TB of cloud save',
  },
  {
    id: 'add3',
    title: 'Customizable Profile',
    amount: '+$2/mo',
    description: 'Custom theme on your profile',
  },
];

const yearlyOptions = [
  {
    id: 'add1',
    title: 'Online service',
    amount: '+$10/yr',
    description: 'Access to multiplayer games',
  },
  {
    id: 'add2',
    title: 'Larger storage',
    amount: '+$20/yr',
    description: 'Extra 1TB of cloud save',
  },
  {
    id: 'add3',
    title: 'Customizable Profile',
    amount: '+$20/yr',
    description: 'Custom theme on your profile',
  },
];

const FormStep4 = ({ change, isMonthly, formData }) => {
  const amounts = [];
  const selectOption = () => {
    switch (isMonthly) {
      case true:
        return yearlyOptions;

      case false:
        return monthlyOptions;

      default:
        return monthlyOptions;
    }
  };

  (() => {
    amounts.push(formData.plan.split(',')[1].match(/\d+/g)[0]);
    selectOption()
      .filter((a) => formData[a.id] === true)
      .map((data, i) => {
        return amounts.push(data.amount.match(/\d+/g)[0]);
      });
  })();

  return (
    <>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="step4__contents">
        <div className="user__option">
          <h3>
            {' '}
            {formData.plan.split(',')[0]} {!isMonthly ? '(Monthly)' : '(Yearly)'}
          </h3>
          <LinkButton title={'Change'} action={change} />
          <span>{formData.plan.split(',')[1]}</span>
        </div>
        {selectOption()
          .filter((a) => formData[a.id] === true)
          .map((data, i) => {
            return (
              <div key={i} className="user__addons">
                <p> {data.title} </p>
                <span> {data.amount} </span>
              </div>
            );
          })}
      </div>
      <div className="user__total">
        <p>Total {!isMonthly ? '(per month)' : '(per year)'} </p>
        <span>
          +$
          {amounts.map(Number).reduce((total, n) => {
            return total + n;
          })}
          /{!isMonthly ? 'mo' : 'yr'}
        </span>
      </div>
    </>
  );
};

export default FormStep4;
