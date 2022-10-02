import { StaticImageData } from "next/image";
import logo1970 from "src/assets/images/cecilian_logo_c1970.jpg";
import logo1990 from "src/assets/images/cecilian_logo_c1990.jpg";
import logo2000 from "src/assets/images/cecilian_logo_c2000.jpg";
import logo2007 from "src/assets/images/cecilian_logo_c2007.png";

interface LogoProps {
  src: StaticImageData;
  alt: string;
  whiteBg?: boolean;
}
const Logo = ({ src, alt, whiteBg = false }: LogoProps) => {
  return (
    <a href={src.src} target="_blank">
      <img
        src={src.src}
        alt={alt}
        className={`${
          whiteBg ? "bg-white" : "bg-archiveYellow-500"
        } max-h-14 border border-archiveYellow-500 rounded transition-transform origin-bottom-left hover:-translate-x-4 hover:scale-150`}
      />
    </a>
  );
};

const DashFooter = () => {
  return (
    <footer className="w-full bg-archiveBlue-500 flex flex-col md:flex-row justify-between items-center gap-6 p-12">
      <a
        className="text-gray-100 text-sm text-center md:text-left transform transition-transform hover:underline hover:-translate-y-0.5"
        href="mailto:support@cecilianarchives.com"
      >
        Got a question? Email support@cecilianarchives.com
      </a>
      <div className="flex justify-center md:justify-end items-center gap-2 mx-4 my-1 md:m-0">
        <Logo src={logo1970} alt="Cecilian Society logo, circa 1970" />
        <Logo src={logo1990} alt="Cecilian Society logo, circa 1990" />
        <Logo src={logo2000} alt="Cecilian Society logo, circa 2000" />
        <Logo src={logo2007} alt="Cecilian Society logo, circa 2007" whiteBg={true} />
      </div>
    </footer>
  );
};

export default DashFooter;
