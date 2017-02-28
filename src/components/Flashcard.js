import React from 'react';


class Flashcard extends React.Component {
  constructor(props) {
    super(props);
      this.state = { answering: false, editing: false };

  }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  }

  toggleAnswer = () => {
    this.setState({ answering: !this.state.answering})
  }

  display() {
    return(
      <div id='card' className='col s12 m4'>
        <h3>{this.props.flashcard.cardNum}</h3>
        <h5>{this.props.flashcard.question}?</h5>
        <button onClick={ this.toggleAnswer } className='btn green'>Show Answer</button>
        <button onClick={ this.toggleEdit } className='btn blue'>Edit Card</button>
        <button onClick={ () => this.props.deleteFlashcard(this.props.flashcard.id) } className='btn red darken-4'>Delete</button>
      </div>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let cardNum = this.refs.cardNum.value;
    let question = this.refs.question.value;
    let answer = this.refs.answer.value;

    let updatedFlashcard = { id: this.props.flashcard.id, cardNum, question, answer }
    this.props.editFlashcard(this.props.flashcard.id, updatedFlashcard);
    this.toggleEdit();
  }

  edit() {
    return(
      <div className='col s12 m4'>
        <h3>Editing: {this.props.flashcard.cardNum}</h3>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='cardNum' required defaultValue={this.props.flashcard.cardNum} />
          <br />
          <input type='text' ref='question' required defaultValue={this.props.flashcard.question} />
          <br />
          <input type='text' ref='answer' required defaultValue={this.props.flashcard.answer } />
          <br />
          <button type='button' className='btn red' onClick={this.toggleEdit}>Cancel</button>
          <input type='submit' className='btn blue' />
        </form>
      </div>
    );
  }

  answering() {
    return(
      <div className='col s12 m4'>
        <h3>{this.props.flashcard.cardNum}</h3>
        <h5><i>Answer: {this.props.flashcard.answer}</i></h5>
        <button className='btn pink' onClick={this.toggleAnswer}>Show Question</button>
      </div>
    );
  };

  render() {
    if(this.state.answering)
      return this.answering();
    else if(this.state.editing)
      return this.edit();
    else
      return this.display();
  }
}

export default Flashcard; 