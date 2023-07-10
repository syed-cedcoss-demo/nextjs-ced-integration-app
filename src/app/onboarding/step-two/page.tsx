import Image from "next/image";
import wooIcon from "../../assets/onboarding/WooCommerce.svg";
const StepTwo = () => {
  return (
    <div className=" w-screen h-screen bg-neutral-100 p-10 flex justify-center items-center">
      <div className="flex flex-col shadow-lg bg-white">
        <div className="grid grid-cols-4 gap-2  p-5 ">
          {[1, 2, 3, 4].map((el) => (
            <div
              className="w-full bg-neutral-50 border rounded-sm border-gray-300 text-center"
              key={el}
            >
              <div className="flex justify-center items-center p-8 border-b-2 border-gray-300 ">
                <Image src={wooIcon} width={150} height={100} alt="step2" />
              </div>
              <button className="py-2 text-lg text-gray-600 font-semibold">Connect</button>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="py-2 px-4 mx-4 mb-4 rounded-sm text-white text-lg font-semibold bg-indigo-500">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
