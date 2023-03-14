import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './formStyle.module.css';

export const Form = ({ onCheck }) => {
  const [id, setId] = useState(null);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const user = {
    id,
    name,
    number,
  };

  const handleSabmit = e => {
    e.preventDefault();
    onCheck(user);
    setId(null);
    setName('');
    setNumber('');
  };

  const handlestateInpyt = e => {
    const { value, name } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
    setId(nanoid());
  };

  return (
    <form
      className={css.form}
      onSubmit={handleSabmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
    >
      <label className={css.label}>
        Name
        <input
          onChange={handlestateInpyt}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
      </label>

      <label className={css.label}>
        Number
        <input
          onChange={handlestateInpyt}
          type="tel"
          name="number"
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </label>
      <button className={css.form_btn} type="submit" style={{ width: '150px' }}>
        Add contact
      </button>
    </form>
  );
};

Form.propTypes = {
  onCheck: PropTypes.func.isRequired,
};
