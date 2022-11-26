import { useEffect } from "react";
import Todo from "./pages/Todo";
import Layout from "./components/layout";
import checkStorageIsExist from "./utils/checkStorageExist";

function App() {
  useEffect(() => {
    checkStorageIsExist();
  }, []);
  
  return (
    <Layout>
      <Todo />
    </Layout>
  );
}

export default App;
