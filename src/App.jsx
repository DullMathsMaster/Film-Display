import './App.css'

function App() {
  return (
    <>
      <Text display = "whatsap"/>
      <Text display = "helo fren"></Text>
    </>
  );
}

function Text({display}) {
  return (
    <div>
      <p>{display}</p>    
    </div>
  );
}
export default App
