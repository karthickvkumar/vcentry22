import LoginAction from "./components/login-form";
import ResetAccount from "./components/reset-account";
import RegisterForm from "./components/register-form";
import "./css/style.css";

function App() {
  return (
    <div>
      <h1>Welcome to React JS Application</h1>
      {/* <LoginAction></LoginAction> */}
      {/* <ResetAccount></ResetAccount> */}
      <RegisterForm></RegisterForm>
    </div>
  );
}

export default App;
