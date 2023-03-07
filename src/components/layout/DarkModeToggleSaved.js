import useDarkMode from "../../hooks/useDarkMode";

const DarkModeToggleSaved = (props) => {
  const [darkMode, toggleDarkMode] = useDarkMode();
  const myProps = { ...props };
  myProps.className = `${props.className}`;

  return (
    <button
      title={darkMode ? "Light Mode" : "Dark Mode"}
      onClick={toggleDarkMode}
      {...myProps}
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
