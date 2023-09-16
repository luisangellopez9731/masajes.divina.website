import Image from "next/image";
import welcomeImage from "../assets/welcomeBGImage.jpg";

export const Welcome = () => {
  return (
    <div className="w-full overflow-hidden relative h-[50%] flex p-4 items-center justify-around">
      <div className="bg-primary w-full h-full absolute top-0 left-0" />
      <div className="h-fit relative text-primaryText">
        <h2 className="text-[3rem] font-bold uppercase">
          Masajes de relajación y terapeuticos
        </h2>
        <p className="text-3xl">
          Te ayudamos a hacer una pausa de bienestar en tu día
        </p>
      </div>
      <Image
        src={welcomeImage}
        className={`h-[33vh] max-h-[33vh] min-h-[15em] relative`}
        alt="welcome"
      />
    </div>
  );
};

// maybe use a div box with gradient
