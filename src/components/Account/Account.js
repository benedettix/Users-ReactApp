import { Link, NavLink } from "react-router-dom";
// import myStyle from "../Account/account.css";
function Account({ account, hasBtn, deleteAccount }) {
  let editUrl = `/edit/${account.id}`;
  const actionButtons = hasBtn ? (
    <>
      <td>
        <button
          onClick={() => deleteAccount(account.id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
      <td>
        <Link to={editUrl}>
          <button className="btn btn-warning" type="button">
            Edit
          </button>
        </Link>
      </td>
    </>
  ) : null;
  return (
    <tr>
      <th>{account.id}</th>
      <td>{account.name}</td>
      <td>{account.lastname}</td>
      <td>{account.phone}</td>
      <td>{account.email}</td>
      {actionButtons}
    </tr>
  );
}

export default Account;
