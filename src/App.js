import { RecoilRoot } from "recoil";
import { UserProvieder } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvieder>
        <Router />
      </UserProvieder>
    </RecoilRoot>
  );
}
