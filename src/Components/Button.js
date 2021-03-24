import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {colors, fonts} from '../utils/Theme';
import {BarIndicator} from 'react-native-indicators';

class SimpleButton extends Component {
  render() {
    return (
      <TouchableOpacity
        disabled={this.props.loading ? this.props.loading : false}
        activeOpacity={0.7}
        onPress={this.props.onPress}>
        <View
          style={{
            width: '100%',
            minHeight: 50,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: this.props.disabled
              ? colors.darkBackground
              : colors.primary,
            ...this.props.style,
          }}>
          {this.props.loading ? (
            <BarIndicator
              style={{flex: 0}}
              count={3}
              size={20}
              color={'white'}
            />
          ) : (
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                padding: 8,
                fontFamily:fonts.primaryBold,
                textAlign: 'center',
                ...this.props.textStyle,
              }}>
              {this.props.text}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

export default SimpleButton;
