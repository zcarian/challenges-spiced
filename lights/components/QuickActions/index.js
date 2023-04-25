import styled from "styled-components";
import Button from "../Button";
import {useLightsStore} from "../../stores/lights";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions() {
  const turnAllOn = useLightsStore((state) => state.turnAllOn);
  const turnAllOff = useLightsStore((state) => state.turnAllOff);
  const turnOnAmount = useLightsStore((state) => state.turnOnAmount());

  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => turnAllOff()}
        disabled={turnOnAmount === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => turnAllOn()}
        disabled={turnOnAmount === 8}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
