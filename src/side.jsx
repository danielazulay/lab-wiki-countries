import React from "react"
import countries from "./countries.json"
import { Link } from "react-router-dom";

class Side extends React.Component{

state={
    name:"",
    area:0,
    demonym:"",
    cca3:"",
   border:[]
}

searchCountries = () => {
    if (!this.state.name) {
      const foundCountrie =  countries.find((pais) => {
          console.log(this.props.match.params.cca3)
        return pais.cca3 === this.props.match.params.cca3;
         
      });

      if (foundCountrie) {
        this.setState({ ...foundCountrie });
  
      }
    }
  };

render(){
    this.searchCountries()
    console.log(this.state.border)
return(
<div data-bs-spy="scroll " data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">

    <h4 id="list-item-1">{this.state.name.common}</h4>
       <p>{this.state.demonym}</p>
       <p>{this.state.area}</p>
       {this.state.border.map((x)=>{
           return(

            <Link to={`/countries/${x}`} className="daniel">{x}</Link>
           )
       })}
</div>
)


}


}




export default Side