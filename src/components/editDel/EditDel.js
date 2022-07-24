import { useState } from "react";
import Account from "../Account/Account";
function EditDel({ accounts, deleteAccount, editAccount }) {
  let [editDel, setEditDel] = useState({
    hasBtn: true,
  });
  let createAcc = accounts.map((acc) => {
    return (
      <Account
        editAccount={editAccount}
        deleteAccount={deleteAccount}
        account={acc}
        key={acc.id}
        hasBtn={editDel}
      />
    );
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Lastname</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>{createAcc}</tbody>
    </table>
  );
}

export default EditDel;
