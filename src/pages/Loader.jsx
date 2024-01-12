import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-lg shadow-md max-w-md w-2/3 sm:w-full relative">
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
          Please, wait for some time ...
        </h2>
        <Spinner
          animation="border"
          role="status"
          className="w-8 h-8 sm:w-16 sm:h-16 border-t-4 border-b-4 border-white mx-auto animate-spin rounded-full"
        ></Spinner>
      </div>
    </div>
  );
};

export default Loader;
