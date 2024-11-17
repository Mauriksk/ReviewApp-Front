const categories = [
    { name: "Attractions", type: "tourist_attraction" },
    { name: "Restaurants", type: "restaurant" },
    { name: "Museums", type: "museum" },
    { name: "Art Gallery", type: "art_gallery" },
    { name: "Bars", type: "bar" },
];

interface Props {
    onClick: (type: string) => void;
    currentValue: string;
}

export const SearchCategories = ({ onClick, currentValue }: Props) => {
    return (
        <div className="flex justify-between">
            {categories.map(({ name, type }) => (
                <button
                    className={`flex items-center rounded py-1 px-2 mx-2 text-center text-sm transition-all shadow-sm 
                        ${
                            currentValue === type
                                ? "bg-slate-800 text-white border border-transparent hover:bg-slate-700 focus:bg-slate-700 active:bg-slate-700"
                                : "bg-white text-slate-800 border border-slate-400 hover:bg-slate-200 focus:bg-slate-300 active:bg-slate-300"
                        }`}
                    key={type}
                    onClick={() => onClick(type)}
                >
                    {name}
                </button>
            ))}
        </div>
    );
};
