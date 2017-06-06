import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Divider, Container, Header } from "semantic-ui-react";
import * as barActions from "./actions/barActions";
import * as drinkActions from "./actions/drinkActions";
import * as roundActions from "./actions/roundActions";
import * as notificationActions from './actions/notificationActions';
import BarsContainer from "./components/Bars/BarsContainer";
import SelectedBarContainer
  from "./components/SelectedBar/SelectedBarContainer";
import DrinksContainer from "./components/Drinks/DrinksContainer";
import RoundContainer from "./components/Round/RoundContainer";
import MessageContainer from "./components/Message/MessageContainer";

class App extends Component {
  render() {
    const { bars = {} } = this.props;
    const { selectedBar = "" } = this.props.selectedBar;
    const { drinks, prices, currentRound, orderedRounds, notification } = this.props;

    return (
      <Container>
        <Header as="h1">Get The Rounds in!</Header>

        {!selectedBar &&
          <BarsContainer
            bars={bars}
            selectBar={this.props.barActions.selectBar}
          />}

        <Divider />

        {selectedBar &&
          <div>
            <SelectedBarContainer
              currentBar={bars.filter(bar => bar.name === selectedBar.text)}
            />

            <Divider />

            <DrinksContainer
              currentBar={bars.filter(bar => bar.name === selectedBar.text)}
              drinks={drinks}
              prices={prices}
              addDrink={this.props.drinkActions.addDrink}
            />
          </div>}

        {currentRound.length &&
          <RoundContainer
            bar={selectedBar.text}
            round={currentRound}
            removeDrink={this.props.roundActions.removeDrink}
            confirmRound={this.props.roundActions.confirmRound}
            clearRound={this.props.roundActions.clearRound}
            showNotification={this.props.notificationActions.showNotification}
          />}

        {notification.visible &&
          <MessageContainer
            message={notification.message}
            hideNotification={this.props.notificationActions.hideNotification}
          />}

      </Container>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    bars: state.bars,
    selectedBar: state.selectedBar,
    drinks: state.drinks,
    prices: state.prices,
    currentRound: state.currentRound,
    orderedRounds: state.rounds,
    notification: state.notification
  };
}

function mapDispatchToProps(dispatch) {
  return {
    barActions: bindActionCreators(barActions, dispatch),
    drinkActions: bindActionCreators(drinkActions, dispatch),
    roundActions: bindActionCreators(roundActions, dispatch),
    notificationActions: bindActionCreators(notificationActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
