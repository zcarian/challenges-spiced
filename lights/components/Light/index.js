import { LightButton, Icon, Text, Name, State } from "./Light.styled";
import { useLightsStore } from "../../stores/lights";

export default function Light({ name, isOn, id }) {
  const onToggle = useLightsStore((state) => state.onToggle);

  return (
    <LightButton
      type="button"
      onClick={() => {
        onToggle(id);
      }}
      isOn={isOn}
    >
      <Icon isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
