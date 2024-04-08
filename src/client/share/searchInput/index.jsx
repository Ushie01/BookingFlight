import { GenericSearch } from "@heathmont/moon-icons-tw";

export const SearchInput = ({width, setSearchInput}) => {
  return (
    <div className="flex items-center border px-2 rounded-lg h-[56px] bg-gray-100">
      <GenericSearch height={25} width={25} color="gray" />
      <input
        type="text"
        className={`${width} borderless-input rounded-md pl-2 h-12 bg-gray-100`}
        placeholder="Search"
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};
