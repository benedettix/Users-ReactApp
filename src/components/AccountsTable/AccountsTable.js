import Account from "../Account/Account";
function AccountsTable({ accounts }) {
  let createAcc = accounts.map((acc) => {
    return <Account account={acc} key={acc.id} />;
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

export default AccountsTable;
