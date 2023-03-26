import { Switch as MaterialSwitch } from "@mui/material";
// style
import "../styles/Switch.scss";

interface ISwitchData {
  checked: boolean;
  togglePeriod: Function;
}

const Switch = ({ checked, togglePeriod }: ISwitchData) => {
  return (
    <div className="switch-container">
      <MaterialSwitch
        key="pageviews-switch"
        inputProps={{ "aria-label": "Switch Billing Period" }}
        className="switch"
        checked={checked}
        onChange={() => togglePeriod()}
      />
    </div>
  );
};

export default Switch;
