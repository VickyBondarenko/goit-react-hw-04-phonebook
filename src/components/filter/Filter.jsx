import PropTypes from 'prop-types';

export const Filter = ({ value, onChangeSearch }) => {
  return (
    <div className="filter">
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Type to search ..."
        value={value}
        onChange={onChangeSearch}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeSearch: PropTypes.func.isRequired,
};
