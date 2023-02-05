import React  from "react";
import "./index1.css";


 class CounterTask extends React.Component {
    state ={
        Counter:0,
        Counter1:0,
    }

    handlestart=()=>{
         this.setState({Counter:this.state.Counter+1});

    };
    handlestop=()=>{
         this.setState({Counter:this.state.Counter-1});

    };
    
    start =()=>
    {
        setInterval(()=>{
        this.setState({Counter1:this.state.Counter1+1});
        console.log(this.state.Counter1);
        },500);
    }
    
stop () {
  clearInterval();
  // release our intervalID from the variable

}
  

  render() {
     
    
    return (
        
      <div className="Counter111"> 
      <h4>COUNTER VALUE:</h4>
      <hr/>
      
        <h4>Incr.. && Decr.. == {this.state.Counter}</h4>
        
        <div className="just flex"><button onClick={this.handlestart}>INCREASE</button>
        <button onClick={this.handlestop}>DECREASE</button>
        </div>
        <hr/>
        
        <h4>Loop (Incr..and Stop) value=={this.state.Counter1}</h4>
        <div className="just flex">
            <button onClick={this.start}>RUN</button>
            <button onClick={this.stop}>STOP</button>
        </div>
        
      
        
        </div>
    );
  }
}

export default CounterTask;