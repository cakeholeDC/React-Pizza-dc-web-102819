import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
	constructor(){
		super()
		this.state = {
			pizzaList: [],
			pizzaForm: {
				id: null,
				topping: '',
				size: '',
				vegetarian: false
			}
		}
	}

	onFormChange = (event) => {
		console.log(event.currentTarget)
		let boolean = event.currentTarget.vegetarian.value === "Vegetarian" ? true : false
		this.setState({
			pizzaForm: {
				id: this.state.pizzaForm.id,
				topping: event.currentTarget.topping.value,
				size: event.currentTarget.size.value,
				vegetarian: boolean
			}
		})
	}

	onFormSubmit = (event) => {
		event.preventDefault()
		console.log('submit')


		let URL = 'http://localhost:3000/pizzas'
		let method = "POST"

		if (this.state.pizzaForm.id) {
			URL += `/${this.state.pizzaForm.id}`
			method = "PATCH"
		}

		console.log(method, "- to -", URL)

		const pizzaFormConfig = {
			method: method,
			headers: {
		      'Content-Type': 'application/json',
		      'Accept': 'application/json'
		    },
		    body: JSON.stringify(this.state.pizzaForm)
		}

		fetch(URL, pizzaFormConfig)
			.then(res => res.json())
			.then(pizza => this.setState({ 
				pizzaList: [...this.state.pizzaList.filter(pizza => pizza.id !==  this.state.pizzaForm.id), pizza],
				pizzaForm: {
					id: null,
					topping: '',
					size: '',
					vegetarian: false
				}
			}))
	}

	onEditPizza = (pizza) => {
		console.log("onEditPizza")
		console.log(pizza)
		this.setState({
			pizzaForm: {
				id: pizza.id,
				topping: pizza.topping,
				size: pizza.size,
				vegetarian: pizza.vegetarian
			}
		})
	}

	componentDidMount(){
		fetch('http://localhost:3000/pizzas')
			.then(res => res.json())
			.then(pizzaList => this.setState({ pizzaList: pizzaList }))
	}

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm
        	pizzaForm={ this.state.pizzaForm }
        	onFormChange={ this.onFormChange }
        	onFormSubmit={ this.onFormSubmit }
    	/>
        <PizzaList 
        	pizzaList={ this.state.pizzaList.sort((a,b) => (a.id > b.id) ? 1 : -1 )}
        	onEditPizza={ this.onEditPizza }
    	/>
      </Fragment>
    );
  }
}

export default App;
