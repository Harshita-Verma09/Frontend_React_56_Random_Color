import GenerateColor from "./components/GenerateColor"

function App() {

  return (
    <>
      <div style={{
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",  // ✅ Full width ensure karega
        margin: "0",
        padding: "0",
        display: "flex",  // ✅ Center align bhi ho sakta hai
        justifyContent: "center",
        alignItems: "center"
      }}>
        <GenerateColor />
      </div>

    </>
  )
}

export default App
