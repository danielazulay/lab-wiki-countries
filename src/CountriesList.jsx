import React from "react"
import countries from "./countries.json"

import { Link } from "react-router-dom";

class CountriesList extends React.Component{

state={
    countries:[...countries],
}



render(){
return(
<div>

<div class="list-group">

{this.state.countries.map((c)=>{
return(

<div key={c.cca3}>     
<Link to={`/countries/${c.cca3}`}  className="list-group-item list-group-item-action">{c.name.common}</Link>
</div>
)
})

}


</div>

</div>
)

}

}

export default CountriesList 