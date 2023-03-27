import './Card.scss';

export const Card = ({ firstName, lastName, image, ...props }) => {
  return (
    <div className='Card' {...props}>
      <img src={image} alt={`${firstName}`} />
      <div className='Card__user'>
        <p>
          {firstName} {lastName}
        </p>
      </div>
    </div>
  );
};
