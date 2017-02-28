import React from 'react';
import Flashcard from './Flashcard';


class Flashcards extends React.Component {
  constructor(props) {
    super(props);
    let flashcard = {
                      id: 1, 
                      cardNum: 'Card 1',
                      question: 'Delete Method in React',
                      answer: 'No clue'
                    };
    this.state = { flashcards: [flashcard] };
  }
  

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  guid() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4()
      + '-' +
      this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let cardNum = this.refs.cardNum.value;
    let question = this.refs.question.value;
    let answer = this.refs.answer.value;

    let flashcard = { id: this.guid(), cardNum, question, answer };
    this.setState({ flashcards: [...this.state.flashcards, flashcard] });
    this.refs.cardForm.reset();
    this.refs.cardNum.focus();
  };

  editFlashcard = (id, updatedFlashcard) => {
    let flashcards = this.state.flashcards.map( flashcard => {
      if(flashcard.id === id)
        return updatedFlashcard
      else 
        return flashcard
    });
    this.setState( {flashcards} );
  }

  deleteFlashcard = (id) => {
    alert('Card Deleted')
    let flashcards = this.state.flashcards.filter( flashcard => {
      if(flashcard.id === id)
        return false;
      else 
        return true;
    });
    this.setState( {flashcards} );
  }

  displayFlashcards = () => {
    return this.state.flashcards.map( flashcard => {
      return(<Flashcard 
              key={flashcard.id}
              flashcard={flashcard}
              editFlashcard={this.editFlashcard}
              deleteFlashcard={this.deleteFlashcard}
            />);
    });
  };

  render() {
    return(
      <div>
        <h3>React Flash Cards</h3><hr />
        <form ref='cardForm' onSubmit={ this.handleSubmit }>
          <input ref='cardNum' type='text' required placeholder='Card Number' />
          <br />
          <input ref='question' type='text' required placeholder='Question' />
          <br />
          <input ref='answer' type='text' required placeholder='Answer' />
          <br />
          <input type='submit' className='btn blue' />
        </form>
        <hr />
        <div className='row'>
          { this.displayFlashcards() }
        </div>
      </div>
    );
  };

  }

  export default Flashcards;