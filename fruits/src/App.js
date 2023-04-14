import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍎 Red apple",
      color: "red",
    },
    {
      id: 2,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 3,
      name: "🍐 Pear",
      color: "green",
    },
    {
      id: 4,
      name: "🍋 Lemon",
      color: "yellow",
    },
    {
      id: 5,
      name: "🍏 Green apple",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit, index) => {
        return <Card key={index} fruit={fruit} />;
      })}
    </div>
  );
}
