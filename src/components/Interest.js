export default function Interest({ data, setData, errors }) {
  const { interests } = data;

  const handleChange = (e, name) => {
    setData({
      ...interests,
      interests: e.target.checked
        ? [...interests, e.target.name]
        : interests.filter((i) => i !== e.target.name),
    });

    console.log(interests);
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleChange}
          />
          Coding
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handleChange}
          />
          Music
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="javascript"
            checked={interests.includes("javascript")}
            onChange={handleChange}
          />
          Javascript
        </label>
      </div>
      {errors.interests && <span className="error">{errors.interests}</span>}
    </div>
  );
}
