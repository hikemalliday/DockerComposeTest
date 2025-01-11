import { useRequest } from "./requests";

import "./App.css";

function App() {
  const { isLoading, data } = useRequest();

  if (isLoading) return "loading...";

  return (
    <>
      <div>{data ? JSON.stringify(data) : "No data available"}</div>
    </>
  );
}

export default App;
