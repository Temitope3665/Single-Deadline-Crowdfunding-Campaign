import "./App.css";
import { loadStdlib, ask } from "@reach-sh/stdlib";
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
import CreatorResponse from "./screens/CreatorResponse";

const reach = loadStdlib("ALGO");
reach.setWalletFallback(
  reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
);
const fmt = (x) => reach.formatCurrency(x, 4);

function App() {
  const [view, setView] = useState(views.CONNECT_ACCOUNT);
  const [accountBal, setAccountBal] = useState(0);
  const [account, setAccount] = useState({});
  const [accountAddress, setAccountAddress] = useState("");
  const [createProjectRes, setCreateProjectRes] = useState("");
  const [contractInfo, setContractInfo] = useState({});
  const [user, setUser] = useState("");
  const [projectTitle, setProjectTitle] = useState('');
  const [projectCost, setProjectCost] = useState();
  const [contractDetails, setContractDetails] = useState({});
  const stdlib = loadStdlib(process.env);
  const suStr = stdlib.standardUnit;
  const toAU = (au) => stdlib.parseCurrency(au);
  const toSU = (su) => stdlib.formatCurrency(su, 4);
  const [submitting, setSubmitting] = useState(false);
  const [funderResponse, setFunderResponse] = useState();
  const [backedProjectCost, setBackedProjectCost] = useState('');
  const [reportMsg, setReportMsg] = useState('');
  const [funderCost, setFunderCost] = useState(0);

  const balance = useRef();

  const numOfFunders = 3;

  // Connect wallet
  const connectWallet = async () => {
    const getAccount = async () => {
      try {
        account.current = await reach.getDefaultAccount();
        setAccountAddress(account.current.networkAccount.addr);
        setAccount(account)
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

  const commonInteract = (role) => ({
    reportTransfer: (payment) => { console.log(`The contract paid ${toSU(payment)} ${suStr} to ${role === 'Receiver' ? 'you' : 'the Receiver'}`); },
    reportCancellation: () => toaster.danger('Project has been cancelled'),
    reportPayment: (payment) => { 
      setReportMsg(`${role === 'Funder' ? 'You' : 'A Supporter'} paid ${toSU(payment)} ${suStr} to the contract.`)
      setView(views.SUCCESS_BACKED);
      setView(views.CREATOR_RESPONSE);
      console.log(`${role === 'Funder' ? 'You' : 'A Supporter'} paid ${toSU(payment)} ${suStr} to the contract.`);
     }
  });

  console.log(user);

  const handleProject = async () => {
    if (user === "Receiver") {
      try {
        setSubmitting(true);
        const receiverInteract = {
          ...commonInteract(user),
          projectCost: toAU(projectCost),
          project: projectTitle,
          // deadline: 5,
          reportReady: async (projectCost) => {
            setCreateProjectRes(`Your ${projectTitle} is up for support at ${toSU(projectCost)} ${suStr}`)
            setContractInfo(`${JSON.stringify(await ctc.getInfo())}`)
            setView(views.CREATE_PROJECT_SUCCESS);
            setSubmitting(false);
          }
        };
         // deploy the contract here
         const ctc = await account.current.contract(backend);
         await ctc.participants.Receiver(receiverInteract);
      } catch (error) {
        setSubmitting(false);
        toaster.danger('Error occured');
      }
    } else {
      setFunderResponse(true);
      console.log(funderResponse)
      try {
        setSubmitting(true);
        const funderInteract = {
          ...commonInteract(user),
          confirmBacked: async (projectCost) => funderResponse,
          reportProject: async (projectCost) => {
            console.log(`successfully backed this project with ${projectCost}`);
            setBackedProjectCost(projectCost)
            setSubmitting(false);
            setFunderCost(projectCost)
          }
        };
        const info = JSON.parse(contractDetails);
        const acc = await account.current.contract(backend, info);
        console.log(account);
        await acc.participants.Funder(funderInteract);
      } catch (error) {
        toaster.danger(error)
        console.log(error);
        setSubmitting(false);
      }

    }
  }

  console.log(Number(accountBal));

const setProjectDetailsData = (data) => {
  console.log(data);
};

const setPTitle = (title) => {
  setProjectTitle(title);
}

const setPCost = (cost) => {
  setProjectCost(cost);
}

const setDetails = (contractDetails) => {
  setContractDetails(contractDetails)
};

  return (
    <div className="App">
      <header className="App-header">
        {view === views.CONNECT_ACCOUNT && (
          <Home
            handleClick={(e) => { setView(views.CREATE_PROJECT); setUser('Receiver'); e.preventDefault(); }}
            supportProject={(e) => { setView(views.BACK_PROJECT); setUser('Funder'); e.preventDefault(); }}
            connectWallet={connectWallet}
          />
        )}
        {view === views.CREATE_PROJECT && (
          <CreateProject
            handleCreateProject={handleProject}
            setProjectDetailsData={setProjectDetailsData}
            accountBal={accountBal}
            setTitle={setPTitle}
            setAmount={setPCost}
            submitting={submitting}
          />
        )}
        {view === views.CREATE_PROJECT_SUCCESS && (
          <SuccessfulCreation
            successMsg={createProjectRes}
            contractInfo={contractInfo}
            accountBal={accountBal}
            goHome={(e) => { setView(views.CONNECT_ACCOUNT); e.preventDefault(); }}
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
            handleBackProject={() => { handleProject(); setFunderResponse(true); }}
            handleCancelProject={(e) => { setFunderResponse(false); }}
            accountBal={accountBal}
            setDetails={setDetails}
            submitting={submitting}
          />
        )}
        {view === views.SUCCESS_BACKED && (
          <SuccessfullyBacked
            handleGoHome={() => setView(views.CONNECT_ACCOUNT)}
            cost={backedProjectCost}
            reportMsg={reportMsg}
          />
        )}
        {view === views.CREATOR_RESPONSE && (
          <CreatorResponse
            handleGoHome={() => setView(views.CONNECT_ACCOUNT)}
            reportMsg={reportMsg}
            newBal={accountBal}
            funderCost={funderCost}
          />
        )}
      </header>
    </div>
  );
}

export default App;
