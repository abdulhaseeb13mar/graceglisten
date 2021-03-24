import React, {Component} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {colors, fonts, metrics} from '../utils/Theme';

class Input extends Component {
  static propTypes = {
    label: PropTypes.string,
    onChangeText: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    secureTextEntry: PropTypes.bool,
    customStyle: PropTypes.object,
    labelContainerStyle: PropTypes.object,
    labelStyle: PropTypes.object,
    isRow: PropTypes.bool,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    isLabel: PropTypes.bool,
    multiline: PropTypes.bool,
    inputStyle: PropTypes.object,
    placeholderColorText: PropTypes.string,
    numberOfLines: PropTypes.number,
    maxLength: PropTypes.number,
    errorType: PropTypes.string,
    textValue: PropTypes.string,
    returnKeyType: PropTypes.string,
    editable: PropTypes.bool,
    required: PropTypes.bool,
    error: PropTypes.bool,
  };

  static defaultProps = {
    label: '',
    onChangeText: undefined,
    onSubmitEditing: undefined,
    secureTextEntry: false,
    labelContainerStyle: {},
    labelStyle: {},
    customStyle: {},
    isRow: false,
    placeholder: '',
    keyboardType: 'default',
    isLabel: true,
    multiline: false,
    inputStyle: {},
    placeholderColorText: colors.textPlaceholder,
    numberOfLines: 1,
    errorType: undefined,
    textValue: '',
    editable: true,
    required: false,
    error: false,
    returnKeyType: 'done',
    onRef: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      showError: false,
      textValue: props.textValue,
      isFocused: false,
    };
  }

  render() {
    const {
      secureTextEntry,
      customStyle,
      isRow,
      placeholder,
      keyboardType,
      multiline,
      inputStyle,
      placeholderTextColor,
      numberOfLines,
      editable,
      label,
      labelStyle,
      labelContainerStyle,
      returnKeyType,
      onSubmitEditing,
      onRef,
      error,
      maxLength,
    } = this.props;

    const {textValue, isFocused, showError} = this.state;
    return (
      <View
        style={[
          styles.inputContainer,
          customStyle,
          isRow && styles.isRowContainer,
        ]}>
        <View style={isRow && {flex: 1}}>
          {label ? <Text style={styles.label}>{label}</Text> : null}
          <TextInput
            ref={(input) => {
              this.textInput = input;
              onRef(input);
            }}
            value={this.props.textValue}
            maxLength={maxLength}
            underlineColorAndroid="transparent"
            placeholder={!isFocused && !showError ? placeholder : null}
            placeholderTextColor={placeholderTextColor || colors.primary}
            autoCapitalize="none"
            onChangeText={this.props.onChangeText}
            secureTextEntry={secureTextEntry}
            style={[styles.inputStyle, inputStyle]}
            keyboardType={keyboardType}
            multiline={multiline}
            numberOfLines={numberOfLines}
            textAlignVertical="center"
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            editable={editable}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            blurOnSubmit={returnKeyType !== 'next'}
          />
        </View>
        {isRow ? this.props.children : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: metrics.smallMargin,
  },
  inputStyle: {
    fontSize: 14,
    textAlign: 'left',
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    height: 45,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    color:colors.primary
  },
  label: {
    color: 'black',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily:fonts.primary,
    paddingLeft:10
  },
  errorField: {
    borderColor: colors.secondary,
  },
  isRowContainer: {
    flexDirection: 'row',
  },
});

export default Input;
