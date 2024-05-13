import ErrorBody from "../errorcomponents/ErrorBody";
import ErrorFooter from "../errorcomponents/ErrorFooter";
import ErrorBg from "./../assets/ErrorBg.svg";
const Unauthorized = () => {

  return (
    <div className="flex flex-col">
      <ErrorBody
        error="401"
        message="You do not have access to the requested page."
      />
      <ErrorFooter />
      <div>
        <img src={ErrorBg} alt="" className="absolute -top-10 w-full" />
      </div>
    </div>
  );
};

export default Unauthorized;
