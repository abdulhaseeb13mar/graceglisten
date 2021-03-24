import React, {Component} from 'react';
import {Modal, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigator from '../utils/Navigator';
import {colors, fonts, metrics} from '../utils/Theme';

export default class OrderPlaced extends Component {
  render() {
    return (
      <Modal
        visible={this.props.visible}
        transparent={true}
        animationType="fade">
        <View style={styles.modalView}>
          <View style={styles.centeredView}>
            <View style={styles.iconView}>
              <Icon name="marker-check" color={colors.primary} size={100} />
            </View>
            <Text style={styles.title}>
              Thankyou Your Order Has Been Confirmed!
            </Text>
            {/* <Text style={[styles.title,{fontSize:16, marginTop:0, marginBottom:10}]}>
              Thankyou for placing order
            </Text> */}
            <Text style={styles.smalltitle}>
              Please check your email for more details. You will soon recieve your order.
            </Text>
            <View style={{overflow: 'hidden',marginTop:10}}>
              <Text onPress={this.props.onPress} style={styles.button}>Ok</Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
  },
  centeredView: {
    backgroundColor: 'white',
    width: metrics.width * 0.8,
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // padding: 20,
  },
  iconView: {
    // backgroundColor: colors.primary,
    // width: 100,
    // height: 100,
    alignItems: 'center',
    // justifyContent: 'center',
    // borderRadius: 50,
    // alignSelf: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.secondaryBold,
    textAlign: 'center',
    marginVertical: 5,
    fontWeight:'bold',
    paddingHorizontal:20
    // lineHeight: 32,
  },
  smalltitle:{
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 7,
    paddingHorizontal:20
  },
  button: {
    backgroundColor: colors.primary,
    fontWeight:'bold',
    color: colors.secondary,
    padding: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: fonts.secondaryBold,
  },
});
