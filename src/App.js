import Layout from "./components/Layout/layout";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Layout />
      </ParallaxProvider>
    </div>
  );
}

export default App;
