export default function Profile({ data, handleChange, errors }) {
  return (
    <div>
      <div>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
      </div>
      {errors.name && <span className="error">{errors.name}</span>}
      <div>
        <label>Age: </label>
        <input
          type="number"
          name="age"
          value={data.age}
          onChange={handleChange}
        />
      </div>
      {errors.age && <span className="error">{errors.age}</span>}
      <div>
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
      </div>
      {errors.email && <span className="error">{errors.email}</span>}
    </div>
  );
}
