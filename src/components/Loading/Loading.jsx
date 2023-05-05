import { Oval } from 'react-loader-spinner';
export const Loading = () => {
  return (
    <div
      style={{
        backgroundColor: ' #363030',
        width: '100%',
        height: '30vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Oval
        height={80}
        width={80}
        color=" #f4a259"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor=" #f4a259"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
