import { Slider as MaterialSlider } from "@mui/material";
// style
import "../styles/Slider.scss";

interface ISliderProps {
  data: Array<string>;
  updatePageviews: Function;
}
const Slider = ({ data, updatePageviews }: ISliderProps) => {
  // set label text
  const valueLabelFormat = (value: number) => {
    return data[value];
  };
  return (
    <div className="slider-container">
      <MaterialSlider
        key="pageviews-slider"
        aria-label="Pageviews"
        defaultValue={Math.floor(data.length / 2)}
        valueLabelFormat={valueLabelFormat}
        valueLabelDisplay="auto"
        step={1}
        marks={false}
        min={0}
        max={data.length - 1}
        className="slider"
        onChange={(_, value) => updatePageviews(value)}
      />
    </div>
  );
};

export default Slider;
