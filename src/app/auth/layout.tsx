const Auth = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen bg-[url('/Vector.svg')] bg-no-repeat">
      <div className="grid grid-flow-row grid-cols-3 min-h-full min-w-full ">
        <div className="flex flex-col items-center p-2 mt-40 col-span-3 md:col-span-1 md:mb-3">
          <div className="w-11/12 md:max-w-xs">
            <h1 className="font-extrabold text-2xl primary-radiant mb-4">
              CedCommerce Integration Applications
            </h1>
            <p className="text-lg secondary-radiant">
              Automate Inventory & Order syncing across multiple selling platforms.
            </p>
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 flex flex-col justify-center items-center">
          {children}
        </div>
      </div>
      <div className="md:absolute p-3 bottom-0 left-0 right-0">
        <p className="text-center text-sm secondary-radiant">
          {`A CedCommerce Inc Product @${new Date().getFullYear()}. Need Help? `}
          <span className="text-blue-500 cursor-pointer">Get Support</span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
