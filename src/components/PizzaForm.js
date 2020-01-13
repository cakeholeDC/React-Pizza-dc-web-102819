import React from "react"

class PizzaForm extends React.Component {

  render(){
    return(
      <form onChange={this.props.onFormChange} onSubmit={ this.props.onFormSubmit } >
        <div className="form-row">
          <div className="col-5">
              <input type="text" className="form-control" name="topping" placeholder="Pizza Topping" value={ this.props.pizzaForm.topping }/>
          </div>
          <div className="col">
            <select value={this.props.pizzaForm.size} name="size" className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Vegetarian" name='vegetarian' checked={this.props.pizzaForm.vegetarian === true}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Not Vegetarian" name='vegetarian' checked={this.props.pizzaForm.vegetarian === false}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
          </div>
        </div>
        </form>

    )
  }

}

export default PizzaForm


/*
pizzaForm: {
        topping: null,
        size: null,
        vegetarian: null
      }
*/