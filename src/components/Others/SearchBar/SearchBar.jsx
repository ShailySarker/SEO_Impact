
const SearchBar = () => {
    return (
        <div className="flex items-center border-2 py-2 md:px-7 px-1 md:w-96 w-[325px] rounded-xl bg-[#E5E5E5] mb-12">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6a6 6 0 100 12a6 6 0 000-12z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-5-5"
                />
            </svg>
            <input
                type="search"
                name=""
                placeholder="Search your domain, URL, or keyword.."
                className="bg-[#E5E5E5] md:ml-4 ml-2 w-full outline-none"
            />
        </div>
    );
};

export default SearchBar;