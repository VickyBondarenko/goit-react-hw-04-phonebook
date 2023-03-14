import PropTypes from 'prop-types';
import css from './listStyle.module.css';

export const List = ({ options, onDeleteUser }) => {
  function handleDelete(e) {
    onDeleteUser(e.target.id);
  }
  return (
    <ul className={css.list}>
      {options.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p>
            {name}: {number}
          </p>
          <button className={css.list_btn} onClick={handleDelete} id={id}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteUser: PropTypes.func.isRequired,
};
