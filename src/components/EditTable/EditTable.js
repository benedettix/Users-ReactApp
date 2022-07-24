import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditTable({ editAccount, accounts }) {
  let navigate = useNavigate();
  const location = useLocation();
  const locationId = location.pathname.lastIndexOf("/") + 1;
  const loc = location.pathname.substring(locationId);
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

  let editNewAccount = (e) => {
    e.preventDefault();

    navigate("/");
    editAccount(newAccount);
  };

  useEffect(() => {
    if (accounts.length > 0) {
      var accountForEdit = accounts.filter((acc) => acc.id === +loc)[0];
      //   newAccount.name = accountForEdit.name;
      console.log(accountForEdit);
      setNewAccount(accountForEdit);
    }

    // console.log("test");
  }, [accounts]);

  return (
    <div className="col-6 mx-auto">
      <form>
        <h3>Edit Account</h3>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={changeHandler}
            id="name"
            value={newAccount.name}
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
            value={newAccount.lastname}
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
            value={newAccount.email}
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
            value={newAccount.phone}
          />
        </div>
        <button
          onClick={editNewAccount}
          type="submit"
          className="btn btn-warning mt-3"
        >
          Edit
        </button>
      </form>
    </div>
  );
}

export default EditTable;
