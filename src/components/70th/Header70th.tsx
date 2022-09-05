import Nav70th from "src/components/70th/Nav70th";
import useConfetti from "src/utils/useConfetti";

const Header70th = () => {
  const fireConfetti = useConfetti();
  return (
    <header className="w-full bg-archiveBlue-500 border-b-8 border-archiveYellow-500 px-2 pt-6 pb-10 md:px-10 md:pt-6 md:pb-2 flex flex-col gap-2 justify-center items-center">
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <button type="button" onClick={fireConfetti}>
          <img
            src="/images/70thLogo.png"
            alt=""
            className="w-auto max-h-36 md:max-h-40 border border-archiveBlue-600 rounded-lg"
          />
        </button>
        <div className="md:p-8">
          <div className="flex justify-between items-baseline border-b border-archiveYellow-500 pb-4">
            <h2 className="text-gray-100 text-xl md:text-2xl">The Cecilian Society</h2>
            <h3 className="pt-2 text-gray-100 text-base md:text-lg text-right">1952–2022</h3>
          </div>
          <h1 className="text-gray-50 text-4xl md:text-5xl pt-3">70th Anniversary</h1>
        </div>
      </div>
      <Nav70th />
    </header>
  );
};

export default Header70th;
