import React from 'react';
import './Slide5.css';

class Slide5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var pr = window.PR;
    pr.prettyPrint();
  }

  shouldComponentUpdate() {
    setTimeout(() => {
      var pr = window.PR;
      pr.prettyPrint();
    });
    return true;
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className={`slide ${this.props.className} slide5`}>
        <div className="s4left">
        <h1>How about a different shape...</h1>
        <pre className="prettyprint lang-js">
{`var data = 
[
  {
    'South Asia': {
      'Afghanistan': {
        '1970-01-01': {'Income': 1873.21, 'Population': 24000000},
        '1971-01-01': {'Income': 1971.45, 'Population': 24500000},
        ...
      },
      'Bangladesh': {
        '1970-01-01': {'Income': 1878.42, 'Population': 13000000},
        ...
      },
      ...
    }
  },
  {
    'Middle East & North Africa': {
      'Algeria': {
        ...
      },
      'Bahrain': {
        ...
      },
      ...
    },
  },
  ...
]
`}
        </pre>
        </div>
        {this.props.slide === 12 &&
        <div className="s4right">
        <h1>...And how we'd render it</h1>
        <pre className="prettyprint lang-js">
{`var lineChart = new tsiClient.LineChart();
lineChart.render(data)
`}
        </pre>
        </div>
        }
      </div>
    );
  }
} 

export default Slide5;