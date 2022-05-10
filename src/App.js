import { UserProvieder } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <UserProvieder>
      <Router />
    </UserProvieder>
  );
}
