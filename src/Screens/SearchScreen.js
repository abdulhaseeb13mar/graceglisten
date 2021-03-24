import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList,ImageBackground, Dimensions} from 'react-native';
import Header from '../Components/Header';
import Button from '../Components/Button';
import RootView from '../Components/Wrapper';
import SearchBar from '../Components/SearchBar';
import CardComponent from '../Components/FoodCard';
import {colors, fonts, metrics, text} from '../utils/Theme';
import {connect} from 'react-redux';
import data from '../../data';
// import bg from '../../assets/images/bg2.png';
import {SearchCards} from '../Components';

function SearchScreen(props) {
  const [list, setlist] = useState(data.items);
  const [searchQueryText, setsearchQueryText] = useState('');

  useEffect(() => {
    var updated_list = data.items.filter((val) =>
      val.name.toLowerCase().includes(searchQueryText.toLowerCase()),
    );
    setlist(updated_list);
  }, [props, searchQueryText]);

  const { width, height } = Dimensions.get("window")
  return (
    <RootView>
      
      <Header textStyle={{color:'black', fontWeight:'bold'}} title={'Search'}></Header>
      <SearchBar onChangeText={(value) => setsearchQueryText(value)} />
      <View style={{margin: metrics.defaultMargin}}>
        <Text style={{color:colors.primary}}>
    
          <Text style={{fontFamily: fonts.primary, color:colors.primary, fontWeight:'bold',}}>Found </Text>
          {list.length} Results
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={list}
        style={{padding: metrics.defaultMargin}}
        keyExtractor={() => Math.random().toString()}
        renderItem={({item, index}) => (
          <SearchCards
            index={index}
            item={item}
            style={{marginBottom: metrics.largeMargin, width: '100%'}}
          />
        )}
      />
    </RootView>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(SearchScreen);
