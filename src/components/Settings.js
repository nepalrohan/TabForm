export default function Settings({ data, setData }) {
  const { theme } = data;

  const handleChange = (e) => {
    setData({ ...theme, theme: e.target.name });
  };
  return (
    <div>
      <div>
        <label>
          <input
            onChange={handleChange}
            type="radio"
            name="dark"
            checked={theme === "dark"}
          />
          Dark
        </label>
      </div>

      <div>
        <label>
          <input
            onChange={handleChange}
            type="radio"
            name="light"
            checked={theme === "light"}
          />
          Light
        </label>
      </div>
    </div>
  );
}
