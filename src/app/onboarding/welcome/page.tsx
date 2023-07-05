"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import icon from "../../assets/onboarding/welcome-icon.svg";

const Welcome = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/onboarding/step-one");
  }, 1000 * 3);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Image width={296} height={170} alt="welcome image" src={icon} />
    </div>
  );
};

export default Welcome;
