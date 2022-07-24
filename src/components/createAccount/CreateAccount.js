import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount({ addNewAccountToState }) {
  let navigate = useNavigate();
  let [newAccount, setNewAccount] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });

  let changeHandler = (e) => {
    let id = e.target.id;
    let newAccCopy = { ...newAccount };
    newAccCopy[id] = e.target.value;
    setNewAccount(newAccCopy);
  };

  let addNewAccount = (e) => {
    e.preventDefault();
    navigate("/");
    addNewAccountToState(newAccount);
  };
  return (
    <div className="col-6 mx-auto">
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={changeHandler}
            id="name"
          />
        </div>
        <div className="form-group">
          <label>Lastname</label>
          <input
            type="text"
            className="form-control"
            placeholder="Lastname"
            onChange={changeHandler}
            id="lastname"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={changeHandler}
            id="email"
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            onChange={changeHandler}
            id="phone"
          />
        </div>
        <button
          onClick={addNewAccount}
          type="submit"
          className="btn btn-primary mt-3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
