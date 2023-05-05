import { Oval } from 'react-loader-spinner';
export const Loading = () => {
  return (
    <div
      style={{
        backgroundColor: ' #363030',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
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
