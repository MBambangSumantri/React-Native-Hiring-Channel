import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import FooterNavigation from '../components/FooterNavigation';
import {View, Text, Header} from 'native-base';
import {FlatGrid} from 'react-native-super-grid';
import {connect} from 'react-redux';
import {fetchEngineers} from '../redux/Actions/Engineers';

class Home extends Component {
  componentDidMount() {
    // do something after component mounted
    this.fetchEngineers(
      process.env.REACT_APP_BASE_URL + '/api/v1/engineer?page=1',
    );
  }

  fetchEngineers = url => {
    this.props.fetch(url);
  };

  render() {
    return (
      <>
        {props.Engineers.card.map(item => (
          <>
            <Header />
            <FlatGrid
              itemDimension={130}
              items={item}
              style={styles.gridView}
              renderItem={({item, index}) => (
                <View
                  style={[styles.itemContainer, {backgroundColor: item.code}]}>
                  <Text style={styles.itemName}>{item.photo}</Text>
                  <Text style={styles.itemCode}>{item.name}</Text>
                </View>
              )}
            />
            <FooterNavigation />
          </>
        ))}
      </>
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

const mapStateToProps = state => ({
  Engineers: state.Engineers,
});
const mapDispatchToProps = dispatch => ({
  fetch: url => dispatch(fetchEngineers(url)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
