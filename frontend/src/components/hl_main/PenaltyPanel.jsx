import PenaltyButtonWA from "./PenaltyButtonWA";
import { isPenaltyCallLegal } from "../../hl_actions";

const PenaltyPanel = ({ game, selectedPenaltyCall, setSelectedPenaltyCall }) => {
  return (
    <div className="grow grid gap-2">
      <PenaltyButtonWA
        action={function () {
          if (selectedPenaltyCall !== "playerPushing") {
            setSelectedPenaltyCall("playerPushing");
          } else {
            setSelectedPenaltyCall(null);
          }
        }}
        label={selectedPenaltyCall === "playerPushing" ? "Pushing activated" : "Pushing"}
        legal={
          selectedPenaltyCall === "pickedUp" || selectedPenaltyCall === "ballHolding" ? false : true
        }
      />
      <PenaltyButtonWA
        action={function () {
          if (selectedPenaltyCall !== "pickedUp") {
            setSelectedPenaltyCall("pickedUp");
          } else {
            setSelectedPenaltyCall(null);
          }
        }}
        label={selectedPenaltyCall === "pickedUp" ? "Pick Up activated" : "Pick Up / Incapable"}
        legal={
          selectedPenaltyCall === "playerPushing" || selectedPenaltyCall === "ballHolding"
            ? false
            : true
        }
      />
      <PenaltyButtonWA
        action={function () {
          if (selectedPenaltyCall !== "ballHolding") {
            setSelectedPenaltyCall("ballHolding");
          } else {
            setSelectedPenaltyCall(null);
          }
        }}
        label={
          selectedPenaltyCall === "ballHolding"
            ? "Ball Manipulation activated"
            : "Ball Manipulation"
        }
        legal={
          selectedPenaltyCall === "playerPushing" || selectedPenaltyCall === "pickedUp"
            ? false
            : true
        }
      />
    </div>
  );
};

export default PenaltyPanel;
