import rock from './images/rock.png';
import paper from './images/paper.png';
import scissor from './images/scissor.png';
import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      round: 1,
      playerScore: 0 ,
      npcScore: 0 ,
      playerChose: 'rock' ,
      npcChose: 'paper' ,
      tie: 0
    };

    this.choose = this.choose.bind(this)
    this.nextRound = this.nextRound.bind(this);
    this.npcWin = this.npcWin.bind(this);
    this.playerWin = this.playerWin.bind(this);
    this.npcChoose = this.npcChoose.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.tie = this.tie.bind(this);
  };
  

  playerWin() {
    this.setState({
      playerScore: this.state.playerScore + 1
    });
    console.log(`playerWin function player win and playerScore: ${this.state.playerScore}`)
  };

  npcWin() {
    this.setState({
      npcScore: this.state.npcScore + 1
    });
    console.log(`npcWin function player win and npcScore: ${this.state.npcScore}`)
  };

  tie() {
    console.log(`it's a tie`)
    this.setState({
      tie: this.state.tie + 1
    })
  }

  nextRound = () => {
    console.log(`current round: ${this.state.round}`)
    this.setState({
      round: this.state.round + 1
    });
    console.log(`upcoming round is ${this.state.round}`)
  };

  
  
  npcChoose() {
    const rpsArray = ['rock', 'paper', 'scissor'];
    const randIndex = Math.floor(Math.random() * 3);
    let npcPick = rpsArray[randIndex];
    console.log(`npcPick: ${npcPick} and randIndex: ${randIndex}`)
    this.setState({
      npcChose: npcPick
    });
    console.log(`npcChoose function: npc choose: ${this.state.npcChose}`)
  };
  
  whoWin() {
    if (this.state.playerChose === this.state.npcChose) {
      this.tie();
      return;
    } else if (this.state.playerChose === 'paper') {
      if (this.state.npcChoose === 'scissor') {
        this.npcWin();
      } else {
        this.playerWin()
      }
    } else if (this.state.playerChose === 'rock') {
      if (this.state.npcChoose === 'paper') {
        this.npcWin();
      } else {
        this.playerWin()
      }
    } else if (this.state.playerChose === 'scissor') {
      if (this.state.npcChose === 'rock') {
        this.npcWin();
      } else {
        this.playerWin()
      }
    } 
  };
  
  choose(e) {
    this.setState({
      playerChose: e.target.value
    });
    console.log(`choose(e) function: player chose ${e.target.value}`)
  };

  handleClick(e) {
    console.log(`current round: ${this.state.round}`)

    this.choose(e);
    this.npcChoose();
    this.whoWin();
    this.nextRound();
    console.log('break')
    console.log('break')
    console.log('break')
    console.log('break')
    console.log(`upcoming round is ${this.state.round}`)

  }
  
  render() { 
    return ( 
      <div className="app"> 
    
        <div className="choose">
          
          <input onClick={this.handleClick} type="image" className="chooseRPS" value='rock'  src={rock} alt="rock" />

          <input onClick={this.handleClick} type="image" className="chooseRPS" value='paper' src={paper} alt="paper" />

          <input onClick={this.handleClick} type="image" className="chooseRPS" value='scissor' src={scissor} alt="scissor" />

        </div>
          <button>Round: {this.state.round}</button>
          <button>Player Score: {this.state.playerScore}</button>
          <button>Npc Score: {this.state.npcScore}</button>
          <button># of Ties: {this.state.tie}</button>
        <div>
          
        </div>
    
      </div>
    );
  }
};
 
export default App;  
  


