
import PropTypes from 'prop-types';


function Button( { children, version, type, isDisabled } ) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {children}

    </button>
  )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']).isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
    isDisabled: PropTypes.bool,
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}

export default Button