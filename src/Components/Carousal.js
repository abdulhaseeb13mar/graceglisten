import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {metrics} from '../utils/Theme';
import Carousel from 'react-native-snap-carousel';

export default function Carousal({data}) {
  return (
    <View style={{marginVertical: '3%'}}>
      <Carousel
        layout={'default'}
        data={data}
        sliderWidth={metrics.width}
        itemWidth={metrics.width}
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: metrics.width,
                height: metrics.height / 3.5,
                marginHorizontal: 10,
                alignSelf: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,
                elevation: 2,
              }}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={item.imageCover}
              />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
