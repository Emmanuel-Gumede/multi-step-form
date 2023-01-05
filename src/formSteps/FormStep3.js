import AddOn from '../components/AddOn';

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

const FormStep3 = ({ v_monthly, handleInput, formData }) => {
  const selectOption = () => {
    switch (v_monthly) {
      case true:
        return yearlyOptions;

      case false:
        return monthlyOptions;

      default:
        return monthlyOptions;
    }
  };
  return (
    <>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      {selectOption().map((data, i) => {
        return (
          <AddOn
            key={i}
            id={data.id}
            title={data.title}
            amount={data.amount}
            description={data.description}
            formData={formData}
            handleInput={handleInput}
          />
        );
      })}
    </>
  );
};

export default FormStep3;
