import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: 1, title: "냠냠치킨", price: 19000, date: new Date(2023, 6 - 1, 3) },
    { id: 2, title: "양파", price: 5000, date: new Date(2023, 6 - 1, 7) },
    { id: 3, title: "포도", price: 20000, date: new Date(2023, 6 - 1, 21) },
    { id: 4, title: "오렌지", price: 15000, date: new Date(2023, 6 - 1, 22) },
  ];

  return (
    <div>
      <h2>리액트 시작하기</h2>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
