//#!  1. buat komponen memiliki hasil penambahan masing-masing.
//#!  2. buat & gunakan Higher Order Component (HOC).
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button counter={1}/>
      <Button counter={2}/>
    </>
  );
}

export default App;
