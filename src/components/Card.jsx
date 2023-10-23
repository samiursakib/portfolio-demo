import { EyeIcon, CodeBracketIcon } from "@heroicons/react/24/solid";

const Card = ({ card }) => {
  const { id, title, description, image, tag } = card;
  return (
    <div className="">
      <div className="rounded-t-md h-52 sm:h-32 group relative" style={{ background: `url(${image})`, backgroundSize: 'cover'}}>
        <div className="hidden group-hover:flex justify-center items-center space-x-4 abosolute top-0 left-0 h-full w-full bg-opacity-0 bg-[#151515] group-hover:bg-opacity-80">
          <button className="hover:cursor-pointer rounded-full w-10 h-10 border border-white flex justify-center items-center">
            <EyeIcon className="h-6 w-6 text-white" />
          </button>
          <button className="hover:cursor-pointer rounded-full w-10 h-10 border border-white flex justify-center items-center">
            <CodeBracketIcon className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      <div className="rounded-b-xl text-xs bg-[#181818] p-3">
        <h1 className="text-white font-bold">{title}</h1>
        <h1 className="text-[#ADB7BE]">{description}</h1>
      </div>
    </div>
  );
}

export default Card;