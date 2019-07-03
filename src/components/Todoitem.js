import React,{Component} from 'react'

class Todoitem extends Component{
    render(){
        return(            
                <div className="input-box">
                    <input 
                        type="checkbox" 
                        checked={this.props.item.completed} 
                        onChange={()=>this.props.handleChange(this.props.item.id)}/>
                        
                        <label>{this.props.item.text}</label>
                </div>
        )
    }
}

export default Todoitem