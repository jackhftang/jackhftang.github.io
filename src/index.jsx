var React = require('react');

window.log = console.log.bind(console);


var slogans = [
  {
    content: "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.",
    signature: "C. A. R. Hoare"
  }
  ,
  {
    content: 'I have no particular talent. I am merely inquisitive.',
    signature: 'Albert Einstein'
  }
  ,
  {
    content: 'First they ignore you, then they laugh at you, then they fight you, then you win.', 
    signature: 'Mohandas Karamchand Gandhi'
  }
];

var interval = 5*1000;

// var Main = React.createClass({

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      timer: null,
      index: Math.floor(slogans.length*Math.random())
    }
  }

  //componentDidMount(){
  //  this.setState({
  //    timer: setInterval(() => {
  //      this.tick()
  //    }, interval)
  //  })
  //}
  //
  //componentWillUnmount(){
  //  var t = this.state.timer;
  //  clearInterval(t);
  //}

  //tick(){
  //  this.setState({ index: this.state.index + 1 })
  //}

  prev(){
    var n = this.state.index - 1;
    if( n < 0 ) n += slogans.length;
    this.setState({ index: n });
  };

  next(){
    var n = this.state.index + 1;
    n %= slogans.length;
    this.setState({ index: n });
  };

  render(){
    var s = slogans[this.state.index % slogans.length];
    return <div className="container">
      <div id="slogan">
        <div>{s.content}</div>
        <div className="signature">{s.signature}</div>
        <div className="button" onClick={this.prev.bind(this)}>Previous</div>
        <div className="button" onClick={this.next.bind(this)}>Next</div>
      </div>
    </div>
  }
}


React.render(<Main />, document.getElementById('mount'));