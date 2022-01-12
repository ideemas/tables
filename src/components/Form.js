import { useReducer, useState } from "react";
import "./Form.css";

function Form() {
  const formReducer = (state, event) => {
    return {
      ...state,
      [event.target.name]: event.target.value,
    };
  };

  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 6000);
    console.log(formData);
  };
  return (
    <div className="form-wrap">
      {submitting && (
        <div className="form-message">
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>:{value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input name="name" onChange={setFormData} />
          </label>
          <label>
            <p>Surname</p>
            <input name="surname" onChange={setFormData} />
          </label>
          <label>
            <p>Age</p>
            <input name="age" onChange={setFormData} />
          </label>
          <label>
            <p>City</p>
            <select name="city" onChange={setFormData}>
              <option value="">--Please choose an option--</option>
              <option value="Riga">Riga</option>
              <option value="Saulkrasti">Saulkrasti</option>
              <option value="Jelgava">Jelgava</option>
            </select>
            {/* <input name="city" onChange={setFormData} /> */}
          </label>
        </fieldset>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
