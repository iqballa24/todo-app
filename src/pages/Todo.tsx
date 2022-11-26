import TodosCard from "../components/TodosCard";
import TodosHeader from "../components/TodosCard/TodosHeader";
import TodosBody from "../components/TodosCard/TodosBody";
import TodosFooter from "../components/TodosCard/TodosFooter";

const Home = () => {
  return (
    <TodosCard>
      <TodosHeader />
      <TodosBody />
      <TodosFooter />
    </TodosCard>
  );
};

export default Home;
