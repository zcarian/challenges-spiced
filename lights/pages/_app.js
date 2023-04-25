import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { name: "Living Room", isOn: false, id: 1 },
  { name: "Kitchen", isOn: false, id: 2 },
  { name: "Bedroom", isOn: false, id: 3 },
  { name: "Bathroom", isOn: true, id: 4 },
  { name: "Garage", isOn: false, id: 5 },
  { name: "Porch", isOn: true, id: 6 },
  { name: "Garden", isOn: false, id: 7 },
  { name: "Office", isOn: false, id: 8 },
] 

//Function is on
export default function App({ Component, pageProps }) {

  const [lights, setLights] = useState(initialLights);

  function onToggle(lightId) {
    setLights((lights) =>
      lights.map((light) => {
        if (light.id === lightId) 
         {return { ...light, isOn: !light.isOn }
         };
         return light;
  })
    );
  }

  const lightOn = lights.filter((light) => light.isOn).length;

  function turnAllOn() {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
  }
  function turnAllOff() {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component 
        {...pageProps} 
        lightOn={lightOn}
        lights={lights}
        turnAllOn={turnAllOn}
        turnAllOff={turnAllOff}
        onToggle={onToggle}/>
    </Layout>
  );
}
