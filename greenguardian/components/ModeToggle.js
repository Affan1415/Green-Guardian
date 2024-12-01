const ModeToggle = ({ mode, toggleMode }) => {
    return (
        <button
            onClick={toggleMode}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
            Switch to {mode === 'Manual' ? 'AI Mode' : 'Manual Mode'}
        </button>
    );
};

export default ModeToggle;
