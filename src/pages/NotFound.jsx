import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 style={{ color: ' #f4a259', fontSize: '44px' }}>Not Found</h1>
      <Link style={{ color: ' #f4a259', fontSize: '24px' }} to={'/'}>
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
