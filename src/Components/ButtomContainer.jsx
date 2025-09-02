const ButtonContainer = ({ onButtonClick }) => {
    const ButtonName = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

    return (
        <div
            id="button-container"
            className="grid grid-cols-4 gap-2 p-2"
        >
            {
                ButtonName.map(buttoname => (
                    <button
                        key={buttoname}
                        onClick={() => onButtonClick(buttoname)}
                        className="glow-button"
                    >
                        {buttoname}
                    </button>
                ))
            }
        </div>
    );
};

export default ButtonContainer;
