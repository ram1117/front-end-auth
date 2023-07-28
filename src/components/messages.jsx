import PropTypes from 'prop-types';

const Messages = ({ message }) => {
  const { success, error } = message;
  return (
    <div className="messages-wrapper">
      {success !== '' && <p className="success-message">{success}</p>}
      {error !== '' && <p className="error-message">{error}</p>}
    </div>
  );
};
export default Messages;

Messages.defaultProps = { message: { success: '', error: '' } };
Messages.propTypes = {
  message: PropTypes.shape({
    success: PropTypes.string,
    error: PropTypes.string,
  }),
};
