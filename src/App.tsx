import { useRoutes } from "./router/useRoutes";

function App() {
  const routes = useRoutes();
  return <div>{routes}</div>;
}

export default App;
