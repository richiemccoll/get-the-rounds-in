import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Container, Divider } from "semantic-ui-react";
import * as barActions from "./actions/barActions";
import * as drinkActions from "./actions/drinkActions";
import BarsContainer from "./components/Bars/BarsContainer";
import SelectedBarContainer
  from "./components//SelectedBar/SelectedBarContainer";
import DrinksContainer from "./components/Drinks/DrinksContainer";

class App extends Component {
  render() {
    return (
      <Container>
        <h1>Get The Rounds in!</h1>
        <BarsContainer
          bars={this.props.bars}
          selectBar={this.props.barActions.selectBar}
        />
        <Divider />

        {this.props.selectedBar.selectedBar &&
          <SelectedBarContainer
            currentBar={this.props.bars.filter(
              bar => bar.name === this.props.selectedBar.selectedBar.text
            )}
          />}

        {this.props.selectedBar.selectedBar &&
          <DrinksContainer
            currentBar={this.props.bars.filter(
              bar => bar.name === this.props.selectedBar.selectedBar.text
            )}
            drinks={this.props.drinks}
            prices={this.props.prices}
            addDrink={this.props.drinkActions.addDrink}
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
    prices: state.prices
  };
}

function mapDispatchToProps(dispatch) {
  return {
    barActions: bindActionCreators(barActions, dispatch),
    drinkActions: bindActionCreators(drinkActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
