import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.details.topping}</td>
      <td>{props.details.size}</td>
      <td>{props.details.vegetarian.toString()}</td>
      <td>
      	<button 
      		type="button"
      		className="btn btn-primary"
	  		onClick={() => props.onEditPizza(props.details)}
  		>
  			Edit Pizza
		</button>
	  </td>
    </tr>
  )
}

export default Pizza
