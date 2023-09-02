import "./styles.css";
import Hello from "./components/Hello";
import ColorProvider from "./context/ColorProvider";

export default function App() {
  return (
    <div className="App">
      <ColorProvider>
        <Hello />
      </ColorProvider>
    </div>
  );
}
