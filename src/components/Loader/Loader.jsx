import { InfinitySpin } from "react-loader-spinner";
const Loader = () => {
  return (
    <div>
      <InfinitySpin
        visible={true}
        width="200"
        color="#137d4d"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
