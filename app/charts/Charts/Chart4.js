import React from "react";
import PropTypes from "prop-types";
import { AutoSizer } from "react-virtualized";
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryAxis,
  VictoryPie
} from "victory";
import Paper from "@material-ui/core/Paper";
import theme from "./theme";

class Chart4 extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  getData() {
    return [{ x: "Cats", y: 35 }, { x: "Dogs", y: 40 }, { x: "Birds", y: 55 }];
  }

  renderChart(width, height) {
    return (
      <VictoryChart
        domainPadding={{ x: 50 }}
        width={width}
        height={height}
        containerComponent={<VictoryVoronoiContainer responsive={false} />}
        theme={theme()}
      >
        <VictoryAxis />
        <VictoryAxis dependentAxis />
        <VictoryPie data={this.getData()} />
      </VictoryChart>
    );
  }

  render() {
    return (
      <Paper className={this.props.className}>
        <AutoSizer disableHeight>
          {({ width }) => !!width && this.renderChart(width, 0.8 * width)}
        </AutoSizer>
      </Paper>
    );
  }
}

export default Chart4;
