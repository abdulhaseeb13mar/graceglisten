import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
// import bg from '../../assets/images/bg2.png';


import {CartItem, Header, Input, Wrapper} from '../Components';
import {colors, fonts, metrics} from '../utils/Theme';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigator from '../utils/Navigator';

import Validation from '../utils/Validation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from '../utils/Toast';
import OrderPlaced from '../Components/OrderPlaced';
import {BarIndicator} from 'react-native-indicators';
import {connect} from 'react-redux';
import {addItem, deleteItem} from '../Redux/actions';
import Cart from '../../assets/images/cart.png';

class OrderScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  render() {
    return (
      <Wrapper bottom={0}>
        <Header textStyle={{fontWeight:'bold'}} title="Your Orders" />

        {this.props.cart.items.length > 0 ? (
          <>
            <KeyboardAwareScrollView
              bounces={false}
              style={{
                flex: 1,
                // paddingHorizontal: metrics.defaultMargin,
              }}>
              {this.props.cart.items.map((item) => (
                <CartItem
                  item={item}
                  quantity={item.quantity}
                  onAdd={() => this.props.addItem(item)}
                  onMinus={() => this.props.deleteItem(item)}
                />
              ))}
              <View style={{margin: metrics.defaultMargin}}>
                <View style={styles.info}>
                    <Text style={styles.title}>Delivery Time</Text>
                    <Text style={styles.text}>45 mins</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>Payment Mode</Text>
                    <Text style={styles.text}>Payment on Delivery</Text>
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>Total Price</Text>
                    <Text style={[styles.title, {color: colors.primary}]}>
                    ${parseInt(this.props.cart.totalPrice) * this.state.quantity}
                    </Text>
                </View>
              </View>
            </KeyboardAwareScrollView>
            <SafeAreaInsetsContext.Consumer>
              {(insets) => (
                <TouchableWithoutFeedback
                onPress={() =>
                  Navigator.navigate('Checkout')}
                >
                  <View style={{flexDirection:'row', justifyContent:'center', backgroundColor:'red'}} >
                    <Text  style={styles.buttonText}>CONFIRM ORDER</Text>
                  </View>
                </TouchableWithoutFeedback>
              )}
            </SafeAreaInsetsContext.Consumer>
          </>
        ) : (
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image source={Cart} />
          </View>
        )}
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    borderTopStartRadius: 30,
    paddingHorizontal: 30,
    marginLeft: metrics.defaultMargin,
    minHeight: 80,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontFamily: fonts.secondaryBold,
    fontSize: 18,
    fontWeight:'bold',
    color:'black'
    
  },
  text: {
    fontFamily: fonts.secondary,
    fontSize: 16,
    color: colors.primary,
  },
  buttonText: {
    color: colors.secondary,
    flex:1,
    // marginTop:8,
    // marginVertical: metrics.defaultMargin,
    fontSize: 20,
    fontWeight:'bold',
    fontFamily: fonts.primaryBold,
    textAlign:'center',
    padding:10,
    paddingVertical:20,
    // borderRadius:20,
    backgroundColor:colors.primary,
    // borderWidth:1,
    // width:'80%'
  },
  empty:{
    fontSize: 18,
    fontFamily: fonts.primaryBold,
    color:colors.white
  },
});

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer,
  };
};

export default connect(mapStateToProps, {addItem, deleteItem})(
  OrderScreen,
);
