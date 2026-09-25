import { Suspense, useState } from "react";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies/Technologies"
import "./index.css"
import type { Itechnologies } from "./Types/Technologies";
const technologiesFetch = async (): Promise<Itechnologies[]> => {
  const res = await fetch ("/data.json")
  const data = await res.json();
  return data;
};

function App() {
  const [technologiesPromise] = useState<Promise<Itechnologies[]>>(technologiesFetch());
  return (
    <>
    
    <Nav />
    <Banner />
    <Suspense fallback={<h2>Loading....</h2>}>
      <Technologies technologiesPromise ={technologiesPromise} />
    </Suspense>
    
    </>
  )
}

export default App
