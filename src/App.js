import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import EditDel from "./components/editDel/EditDel";
import CreateAccount from "./components/createAccount/CreateAccount";
import EditTable from "./components/EditTable/EditTable";
import axios from "axios";

function App() {
  let [accounts, setAccounts] = useState([]);
  async function getData() {
    axios
      .get(
        "https://raw.githubusercontent.com/benedettix/Restful-api-files/main/file"
      )
      .then((res) => {
        return setAccounts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  let addNewAccountToState = (account) => {
    account.id = Math.floor(Math.random() * (300 - 100) + 100);
    setAccounts([...accounts, account]);
    localStorage.data = JSON.stringify([...accounts, account]);
  };
  let deleteAccount = (id) => {
    let copyAccounts = accounts.filter((acc) => {
      return acc.id !== id;
    });
    setAccounts(copyAccounts);
    localStorage.data = JSON.stringify(copyAccounts);
  };
  let editAccount = (acc) => {
    let accountCopy = [...accounts];
    let accountPosition = accountCopy
      .map((account) => account.id)
      .indexOf(acc.id);
    accountCopy[accountPosition] = acc;
    setAccounts(accountCopy);
    localStorage.data = JSON.stringify(accountCopy);
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AccountsTable accounts={accounts} />} />

          <Route
            path="add"
            element={
              <CreateAccount addNewAccountToState={addNewAccountToState} />
            }
          />

          <Route
            path="/edit/:id"
            element={
              <EditTable editAccount={editAccount} accounts={accounts} />
            }
          />
          <Route
            path="edit"
            element={
              <EditDel
                editAccount={editAccount}
                deleteAccount={deleteAccount}
                accounts={accounts}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
