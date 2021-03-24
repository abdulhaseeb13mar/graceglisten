import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableWithoutFeedback} from 'react-native';
// import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  FoodCard,
  FoodIcon,
  HorizontalList,
  ItemCard,
  Wrapper,
} from '../Components';
import {colors, fonts, metrics} from '../utils/Theme';
import data from '../../data'

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
      const {item,index,onPress,selected} = this.props;
    return (
        <TouchableWithoutFeedback
          onPress={() => onPress(item)}>
          <View style={[styles.category,
            {backgroundColor: selected ? colors.primary: 'transparent' }
          ]}>
            {/* <View style={[styles.dot,{display:selected?'flex':'none'}]}></View> */}
            <Text
              style={[
                styles.categoryText,
                {
                  color:selected ? 'white': 'black',
                  // color: 'transparent',
                  fontFamily:selected ? fonts.primaryBold:fonts.primary,
                  fontWeight:selected? 'bold':'normal',
                },
              ]}>
              {item.name}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      );
  }
}

const styles = StyleSheet.create({
    category: {
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      // backgroundColor:colors.primary,
      borderRadius:5,
      paddingHorizontal:10,
      marginRight:10,
    },
    categoryText: {
      fontFamily: fonts.primary,
      fontSize: 14,
      textAlign: 'center',
      // width:'20%',
      paddingHorizontal:5,
      marginVertical:10,
      color:colors.secondary,
      textTransform: 'capitalize'
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 5,
      marginTop:2,
      backgroundColor:'red',
    },
  });
  