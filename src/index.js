// Stefan Decimelli
import React from 'react';
import {render} from 'react-dom';

class AppDefault extends React.Component { // Inglese

	render() {
		return (<div>
			<h1> Paranoid Android </h1>
			<p> Please could you stop the noise <br/>
				I'm trying to get some rest <br/>
				From all the unborn chicken voices in my head <br/>
				What's that? <br/>
				What's that? <br/>
				When I am king, you will be first against the wall <br/>
				With your opinion which is of no consequence at all <br/>
				What's that? <br/>
				What's that? <br/>
				Ambition makes you look pretty ugly <br/>
				Kicking, squealing Gucci little piggy <br/>
				You don't remember <br/>
				You don't remember <br/>
				Why don't you remember my name? <br/>
				Off with his head, man <br/>
				Off with his head, man <br/>
				Why don't you remember my name? <br/>
				I guess he does <br/>
				Rain down, rain down <br/>
				Come on rain down on me <br/>
				From a great height <br/>
				From a great height, height <br/>
				Rain down, rain down <br/>
				Come on, rain down on me <br/>
				From a great height <br/>
				From a great height <br/>
				Rain down, rain down (that's it, sir, you're leaving, the 
					crackle of pigskin) <br/>
				Come on rain down on me (the dust and the screaming, the 
					yuppies networking) <br/>
				From a great height (the panic, the vomit, the panic, the 
					vomit) <br/>
				God loves his childrean <br/>
				God loves his children, yeah <br/>
			</p>
		</div>);
	}
}

class AppAlt extends React.Component { // Italiano

	render() {
		return (<div>
			<h1> Androide Paranoico </h1>
			<p> Per favore potresti fermare il rumore <br/>
				Sto cercando di riposarmi <br/>
				Da tutte le voci di pollo non ancora nate nella mia 
				testa <br/>
				Cos'è quello? <br/>
				Cos'è quello? <br/>
				Quando sarò re, sarai prima contro il muro <br/>
				Con la tua opinione che non ha alcuna conseguenza <br/>
				Cos'è quello? <br/>
				Cos'è quello? <br/>
				L'ambizione ti fa sembrare piuttosto brutto <br/>
				Calciare, squittendo il piccolo porcellino di Gucci <br/>
				Non ti ricordi <br/>
				Non ti ricordi <br/>
				Perché non ricordi il mio nome? <br/>
				Via con la testa, amico <br/>
				Via con la testa, amico <br/>
				Perché non ricordi il mio nome? <br/>
				Credo che lo faccia <br/>
				Piovere, piovere <br/>
				Vieni a piovere su di me <br/>
				Da una grande altezza <br/>
				Da una grande altezza, altezza <br/>
				Piovere, piovere <br/>
				Vieni, piovere su di me <br/>
				Da una grande altezza <br/>
				Da una grande altezza <br/>
				Piova, piova (è così, signore, te ne vai, il crepitio della 
					pelle di cinghiale) <br/>
				Vieni a piovere su di me (la polvere e le urla, gli yuppies 
					in rete) <br/>
				Da una grande altezza (il panico, il vomito, il panico, il 
					vomito) <br/>
				Dio ama il suo bambino <br/>
				Dio ama i suoi figli, sì <br/>
			</p>
		</div>);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { lang: 'english', not: 'italiano' };
	}

	change() {
		if(this.state.lang === 'english') 
			this.setState({ lang: 'italiano', not: 'english' });
		else
			this.setState({ lang: 'english', not: 'italiano' });
		this.render();
	}

	render() {
		return (<div>
			<button onClick={()=> this.change()}>{this.state.not}</button>
			{this.state.lang === 'english' ? <AppDefault /> : <AppAlt />} 
		</div>);
	}
}

render(
	<App />, document.getElementById('root'));