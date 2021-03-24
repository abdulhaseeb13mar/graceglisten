import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Navigator from '../utils/Navigator';
import {colors, fonts, metrics} from '../utils/Theme';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {isBack = true,textStyle} = this.props;
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row',alignItems:'center'}}>
          <TouchableOpacity
            onPress={() => Navigator.goBack()}
            activeOpacity={0.9}
            style={styles.backView}>
            <Icon color='black' name="arrow-left" style={styles.icon} />
          </TouchableOpacity>
          <Text style={{fontSize: 22, color:colors.white, fontFamily:fonts.primaryBold, textAlign: 'center',...textStyle}}>
            {this.props.title}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:metrics.defaultMargin,
    height: 60,
    paddingHorizontal: metrics.defaultMargin,
    justifyContent: 'center',
  },
  icon: {
    fontSize: 32,
    color: 'black',
  },
  backView: {
    width: 44,
    height: 44,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginRight:20
  },
  text: {
    fontFamily:fonts.primaryBold
  },
});
