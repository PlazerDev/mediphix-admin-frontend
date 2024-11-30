import { FaHistory } from "react-icons/fa";

interface Props {
  searchBarTitle: string;
}
function SearchNHistory({ searchBarTitle }: Props) {
  return (
    <div className="flex flex-gap-4 justify-between gap-4">
      <div className="flex flex-1">
        <div className="bg-mediphix_card_background flex flex-col justify-center px-4 rounded-s-lg w-full">
          <input
            type="text"
            placeholder={searchBarTitle}
            className="outline-none"
          />
        </div>
        <button className="bg-mediphix_accent px-8 py-2 rounded-e-lg text-mediphix_card_background hover:bg-[#ff8f33] ">
          Search
        </button>
      </div>
      <button className="bg-mediphix_accent py-2 px-8 rounded-lg text-mediphix_card_background hover:bg-[#ff8f33] flex gap-2 justify-center items-center ">
        <FaHistory />
        History
      </button>
    </div>
  );
}

export default SearchNHistory;
