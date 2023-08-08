// Quiz.js

import React, {Component} from "react";
import Choices from "./Choices";

class Quiz extends Component{
	render() {
		const {question, selectedChoice, onChoiceChange, onSubmit} = this.props;

		return(
			<div className="">
				<h3>Quiz {question.id}</h3>
				<h5 className="mt-2">{question.question}</h5>
				<form onSubmit={onSubmit} className="mt-2 mb-2">
					<Choices
					
						choices={question.choices}
						selectedChoice={selectedChoice}
						onChoiceChange={onChoiceChange}
					/>
					<button type="submit" className="btn btn-primary mt-2">
						SUBMIT
					</button>
				</form>
				
			</div>
		)
	}
}

export default Quiz;
