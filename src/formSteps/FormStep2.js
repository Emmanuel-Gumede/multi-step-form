import OptionBox from '../components/OptionBox';
import ToggleButton from '../components/ToggleButton';
import arcade from '../images/icon-arcade.svg';
import advanced from '../images/icon-advanced.svg';
import pro from '../images/icon-pro.svg';

const monthlyOptions = [
  { id: 'arcade', title: 'Arcade', amount: '$9/mo', comment: '', image: arcade },
  { id: 'advanced', title: 'Advanced', amount: '$12/mo', comment: '', image: advanced },
  { id: 'pro', title: 'Pro', amount: '$15/mo', comment: '', image: pro },
];

const yearlyOptions = [
  {
    id: 'arcade',
    title: 'Arcade',
    amount: '$90/yr',
    comment: '2 months free',
    image: arcade,
  },
  {
    id: 'advanced',
    title: 'Advanced',
    amount: '$120/yr',
    comment: '2 months free',
    image: advanced,
  },
  { id: 'pro', title: 'Pro', amount: '$150/yr', comment: '2 months free', image: pro },
];

const FormStep2 = ({ v_monthly, f_monthly, handleInput, formData }) => {
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
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="form__optList">
        {selectOption().map((data, i) => {
          return (
            <OptionBox
              key={i}
              id={data.id}
              image={data.image}
              title={data.title}
              amount={data.amount}
              comment={data.comment}
              formData={formData}
              handleInput={handleInput}
            />
          );
        })}
      </div>
      <div className="form__options">
        <ToggleButton action={f_monthly} toggle={v_monthly} formData={formData} />
      </div>
    </>
  );
};

export default FormStep2;
