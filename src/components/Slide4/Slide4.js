import React from 'react';
import './Slide4.css';

class Slide4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var pr = window.PR;
    pr.prettyPrint();
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className={`slide ${this.props.className} slide4`}>
        <div className="s4left">
        <h1>How might this data look...</h1>
          <table>
            <tbody>
            <tr>
              <th>Region</th>
              <th>Country</th>
              <th>Date</th>
              <th>Income</th>
              <th>Population</th>
            </tr>
            <tr>
              <td>South Asia</td>
              <td>Afghanistan</td>
              <td>1965</td>
              <td>833.61</td>
              <td>11000000</td>
            </tr>
            <tr>
              <td>America</td>
              <td>Barbados</td>
              <td>1970</td>
              <td>9712.48</td>
              <td>2400000</td>
            </tr>
            <tr>
              <td>Middle East</td>
              <td>Bahrain</td>
              <td>1972</td>
              <td>18286.66</td>
              <td>800000</td>
            </tr>
            <tr>
              <td>America</td>
              <td>Belize</td>
              <td>1976</td>
              <td>19726.81</td>
              <td>1200000</td>
            </tr>
            <tr>
              <td>South Asia</td>
              <td>Bhutan</td>
              <td>1992</td>
              <td>7925.16</td>
              <td>2600000</td>
            </tr>
          </tbody>
          </table>
        </div>
        <div className="s4right">
          <h1>...And how we'd render it</h1>
          <pre className="prettyprint lang-js">{`var lineChart = new LineChart();
lineChart.render({
  'data': data,
  'groupIndex': 0,
  'seriesIndex': 1,
  'xValueIndex': 2,
  'yValueIndex': 3,
  'groupName': 'Region',
  'seriesName': 'Country',
  'xValueName': 'Date',
  'yValueName': 'Income'
})`}
          </pre>
        </div>
      </div>
    );
  }
} 

export default Slide4;