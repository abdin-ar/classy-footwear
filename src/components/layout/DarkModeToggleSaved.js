import useDarkMode from "../../hooks/useDarkMode";

const DarkModeToggleSaved = ({ title, onClick, ...props }) => {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <button
      title={darkMode ? "Light Mode" : "Dark Mode"}
      onClick={toggleDarkMode}
      {...props}
    >
      {darkMode ? (
        <i className="fas fa-sun"></i>
      ) : (
        <i className="fas fa-moon"></i>
      )}
    </button>
  );
};

export default DarkModeToggleSaved;
