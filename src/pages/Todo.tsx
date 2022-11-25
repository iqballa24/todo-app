import TodosCard from "../components/TodosCard";
import TodosHeader from "../components/TodosCard/TodosHeader";
import TodosBody from "../components/TodosCard/TodosBody";
import TodosFooter from "../components/TodosCard/TodosFooter";

const Home = () => {
  const dataTodo = [
    {
      id: 1,
      title: "Membersihkan tempat tidur",
      isChecked: true
    },
    {
      id: 2,
      title: "Menyapu kamar",
      isChecked: false

    },
    {
      id: 3,
      title: "Tidur malam selama 8 jam",
      isChecked: false
    },
    {
      id: 4,
      title: "Ngopi dulu jangan lupa",
      isChecked: true
    },
  ];
  return (
    <TodosCard>
      <TodosHeader />
      <TodosBody data={dataTodo} />
      <TodosFooter />
    </TodosCard>
  );
};

export default Home;
