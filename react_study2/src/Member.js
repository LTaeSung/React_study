import PropTypes from 'prop-types';

const Member = ({ name, age, email, nickname, children }) => {
  return (
    <>
      <div>
        난 {name} 이다. 나이는 {age} 이고 이메일은 {email} 이다 별명은{' '}
        {nickname} 인데?
      </div>
      <div>{children}</div>
    </>
  );
};

Member.defaultProps = {
  nickname: 'default',
};

Member.prototype = {
  age: PropTypes.number,
  tel: PropTypes.string.isRequired,
};

export default Member;
