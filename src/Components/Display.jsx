const Display = ({ displayValue }) => {
    return (
        <input
            className="w-full h-16 text-3xl text-right bg-white/30 backdrop-blur-sm border-2 border-white rounded-lg px-4 mb-4 text-black placeholder:text-gray-300 shadow-inner"
            type="text"
            id="display"
            value={displayValue}
            readOnly
        />
    );
};

export default Display;
