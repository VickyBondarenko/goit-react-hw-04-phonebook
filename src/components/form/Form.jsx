import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './formStyle.module.css';

export default class Form extends Component {
  state = {
    id: null,
    name: '',
    number: '',
  };
  handleSabmit = e => {
    e.preventDefault();
    this.props.onCheck(this.state);
    this.setState({ id: null, name: '', number: '' });
  };

  handlestateInpyt = e => {
    this.setState({ [e.target.name]: e.target.value, id: nanoid() });
  };

  render() {
    return (
      <form
        className={css.form}
        onSubmit={this.handleSabmit}
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
      >
        <label className={css.label}>
          Name
          <input
            onChange={this.handlestateInpyt}
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
          />
        </label>

        <label className={css.label}>
          Number
          <input
            onChange={this.handlestateInpyt}
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
          />
        </label>
        <button
          className={css.form_btn}
          type="submit"
          style={{ width: '150px' }}
        >
          Add contact
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onCheck: PropTypes.func.isRequired,
};
