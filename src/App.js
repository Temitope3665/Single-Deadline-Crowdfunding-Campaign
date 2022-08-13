import "./App.css";
import { loadStdlib } from "@reach-sh/stdlib";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import * as backend from "./reach/build/index.main.mjs";
import { useRef, useState } from "react";
import { views, Loader } from "./utils/";
import {
  ConnectAccount,
  PasteContractInfo,
  SelectRole,
  TestView,
  WaitForAttacher,
} from "./screens";
import Home from "./screens/Home";
import CreateProject from "./screens/CreateProject";
import SuccessfulCreation from "./screens/SuccessfulCreation";
import SelectProject from "./screens/SelectProject";
import ProjectDetails from "./screens/ProjectDetails";
import BackProject from "./screens/BackProject";
import SuccessfullyBacked from "./screens/SuccessfullyBacked";
import { toaster } from "evergreen-ui";

const reach = loadStdlib("ALGO");
reach.setWalletFallback(
  reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
);
const fmt = (x) => reach.formatCurrency(x, 4);

function App() {
  // const [ account, setAccount ] = useState({})
  const [view, setView] = useState(views.CONNECT_ACCOUNT);
  const [accountBal, setAccountBal] = useState(0);
  const [accountAddress, setAccountAddress] = useState("");

  console.log(accountAddress);

  const account = useRef();
  const balance = useRef();

  const connectWallet = async () => {
    const getAccount = async () => {
      try {
        account.current = await reach.getDefaultAccount();
        setAccountAddress(account.current.networkAccount.addr);
        toaster.success(`Account connected successfully`)
        console.log("Account :" + account.current.networkAccount.addr);
      } catch (err) {
        toaster.danger(`Error occured, can't retrieve your account`)
        console.log(err);
      }
    };

    const getBalance = async () => {
      try {
        let rawBalance = await reach.balanceOf(account.current);
        balance.current = reach.formatCurrency(rawBalance, 4);
        setAccountBal(balance.current);
        console.log("Balance :" + balance.current);
      } catch (err) {
        toaster.danger('Error occured')
        console.log(err);
      }
    };

    try {
      await getAccount();
      await getBalance();
    } catch (err) {
      toaster.danger('Error occured')
      console.log(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {view === views.CONNECT_ACCOUNT && (
          <Home
            handleClick={() => setView(views.CREATE_PROJECT)}
            supportProject={() => setView(views.PROJECT_DETAILS)}
            connectWallet={connectWallet}
          />
        )}
        {view === views.CREATE_PROJECT && (
          <CreateProject
            handleCreateProject={() => setView(views.CREATE_PROJECT_SUCCESS)}
            accountBal={accountBal}
          />
        )}
        {view === views.CREATE_PROJECT_SUCCESS && (
          <SuccessfulCreation
            handleCopy={() => setView(views.SELECT_PROJECT)}
          />
        )}
        {view === views.SELECT_PROJECT && (
          <SelectProject
            viewProject={() => setView(views.PROJECT_DETAILS)}
            accountBal={accountBal}
          />
        )}
        {view === views.PROJECT_DETAILS && (
          <ProjectDetails
            handleCreateProject={() => setView(views.CREATE_PROJECT_SUCCESS)}
            backProject={() => setView(views.BACK_PROJECT)}
          />
        )}
        {view === views.BACK_PROJECT && (
          <BackProject
            handleBackProject={() => setView(views.SUCCESS_BACKED)}
            accountBal={accountBal}
          />
        )}
        {view === views.SUCCESS_BACKED && (
          <SuccessfullyBacked
            handleGoHome={() => setView(views.CONNECT_ACCOUNT)}
          />
        )}
      </header>
    </div>
  );
}

export default App;
