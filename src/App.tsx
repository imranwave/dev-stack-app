import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import TechnologySection from "./components/Technology/TechnologySection";
import type { Technology } from "./components/types/technology";

const technologyPromise = async (): Promise<Technology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
function App() {
  console.log(technologyPromise);
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={<p>loading....</p>}>
        <TechnologySection
          technologyPromise={technologyPromise()}
        ></TechnologySection>
      </Suspense>
    </>
  );
}

export default App;
