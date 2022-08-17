import PropTypes from 'prop-types';
function Card( { children,reverse }) {
  return (
    <div className="card" style={{
        backgroundColor : reverse? 'black' : '#fff',
        color: reverse? '#fff' : 'black',
    }}>{children}</div>
  )
}
Card.defaultProps = {
    reverse : false,
}
Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool.isRequired,
}

export default Card;