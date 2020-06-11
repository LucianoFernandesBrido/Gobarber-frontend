import React, {Component} from 'react';


class TechList extends Component {

  state={
    newTech:'',
    techs:[
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };


  handlerInputChange = e =>{
    this.setState({ newTech: e.target.value });
  }


  handlerSubmit = e=>{
    e.preventDefault();
    this.setState({
      techs:[...this.state.techs, this.state.newTech],
      newTech:''
  });
  }



  render(){
    return(
      <form onSubmit = {this.handlerSubmit}>
      <h1>{this.state.newTech}</h1>
      <ul>
      {this.state.techs.map(tech=><li key={tech}>{tech}</li>)}
      </ul>
      <input type="text" 
      onChange={this.handlerInputChange}
      value={this.state.newTech}
      />

      
      <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;