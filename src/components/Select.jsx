export default function Select({
  label,
  id,
  value,
  onChange,
  defaultOption,
  options,
  error,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        // ref={categoryRef}
      >
        {defaultOption && <option hidden>{defaultOption}</option>}
        {options.map((_options, index) => (
          <option key={index} value={_options}>
            {_options}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  );
}
