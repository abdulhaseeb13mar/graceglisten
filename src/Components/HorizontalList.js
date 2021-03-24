import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {metrics} from '../utils/Theme';

export default class HorizontalList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {data, renderItem, style,containerStyle, ...rest} = this.props;
    return (
      <View>
        <FlatList
          bounces={false}
          data={data}
          horizontal={true}
          style={containerStyle}
          contentContainerStyle={{
            margin: metrics.defaultMargin,
            marginTop: 0,
            // paddingRight:metrics.defaultMargin,
            ...style,
          }}
          keyExtractor={() => Math.random().toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          {...rest}
        />
      </View>
    );
  }
}
