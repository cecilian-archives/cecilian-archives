import { StarIcon } from "@heroicons/react/20/solid";

const StarDivider = ({ bgClass = "bg-archiveYellow-50" }) => {
  return (
    <div className="relative w-full py-2">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <hr className="w-full mx-12 border-t border-archiveYellow-600" />
      </div>
      <div className="relative flex justify-center">
        <span className={`${bgClass} px-2`}>
          <StarIcon className="h-5 w-5 text-archiveYellow-600" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
};

export default StarDivider;
