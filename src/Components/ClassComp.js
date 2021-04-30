import React, { Component } from 'react';
import ArrowComp from './ArrowComp';

export default class ClassComp extends Component {
    constructor(props)
    {
        super(props);
        // let names= [1,2,3,4,5];//this.props.names_of_groups.map((v,i)=><li key={i.toString}>{v}</li>);
        
        this.state = {count:0,input:'',items:[]} ; 
        this.increment= this.increment.bind(this);
        this.decrement= this.decrement.bind(this);
        this.reset= this.reset.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);


    }

    increment(){
        this.setState(state=>({count:++state.count}));
    }
    
    decrement(){
        this.setState(state=>({count:--state.count}));
    }

    reset(){
        this.setState(state=>({count:0}));
    }
    
    handleChange(event)
    {
        this.setState({input:event.target.value});
    }

    handleSubmit(event)
    {
        event.preventDefault();
        this.setState({items:[...this.state.items,this.state.input]});
    }


    render() {
         
        let names=this.props.names_of_groups;
        // res= this.props.names_of_groups.map((val, index)=>(<li key={index}>{val}</li>));
        //console.dir(names)
        if(this.state.count>=0)
        {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>    
                        <input onChange={this.handleChange}/>
                        <button type="submit">submit</button>
                    </form>
                    
                    <ul>{this.state.items.map((item, index)=>(
                        <li key={index}>{item}</li>
                        ))}
                    </ul>

                     <h1 style={{color:"#ccffaa"}}>Count: {this.state.count} </h1>
                    <button onClick={this.increment}>Increment</button> 
                    <button onClick={this.decrement}>Decrement</button> 
                    <button onClick={this.reset}>Reset</button> 
                    <input onChange={this.handleChange}/>
                    <h5>Controlled Input</h5>                     
                    <h3>{this.state.input}</h3>
                    <br></br>
                </div>
            );
        }else{
            return(
                <div>
                     <h1>Count less zero: {this.state.count} </h1>
                    <button onClick={this.increment}>Increment</button> 
                    <button onClick={this.reset}>Reset</button> 
                         
                </div> 
                
            )
        }

     
    }
}
