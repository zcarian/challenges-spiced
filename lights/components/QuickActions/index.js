import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({turnAllOn, turnAllOff, lightOn}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => turnAllOff()}
        disabled={lightOn === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => turnAllOn()}
        disabled={lightOn === 8}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
