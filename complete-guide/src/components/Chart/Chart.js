import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueArray = props.data.map((point) => point.value);
  const totalMax = Math.max(...valueArray);
  console.log(props.data)
  return (
    <div className="ccc">
      {props.data.map((point) => {
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={totalMax}
          label={point.label}
        />;
      }) }
    </div>
  );
};

export default Chart;
