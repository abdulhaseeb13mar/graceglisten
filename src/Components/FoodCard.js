import React, {Component, version} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import data from '../../data';
import Navigator from '../utils/Navigator';
import {colors, fonts, metrics} from '../utils/Theme';
import Fav from './Fav';

export default class FoodCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
     };
  }


  render() {
    const {index}=this.props;
    const {name, description, price,isFav, image} = this.props.item;
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => Navigator.navigate('ProductDetail',{item:this.props.item,category:this.props.category})}>
        <View>
          <View style={[styles.outerCard]}>
            <View style={styles.innerCard}>
              <View style={[styles.content]}>
    
                <View style={[styles.imageView]}>
                  <Image source={image} style={styles.image} />
                </View>
                <View style={styles.details}>
                  <View style={{
                    flexDirection:'row',
                    position:'absolute',
                    top:10, right:15
                  }}>
                        {/* <Icon name="arrow-forward" color="white" size={24} /> */}
                        <Fav isFav={isFav} item={this.props.item}/>
                  </View>
                  <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                    {name}
                  </Text>
                  <Text style={styles.desc} numberOfLines={1} ellipsizeMode="tail">
                    {description}
                  </Text>
                  <View style={styles.priceView} >
                    <Text style={styles.price}>
                      ${price}
                    </Text>
                      <Icon name="long-arrow-alt-right" color="white" size={24} />
                  </View>
                </View>
              </View>
            </View>
            {/* <View style={styles.iconView}> */}
              {/* <Icon name="plus" color="white" size={24} /> */}
              {/* <Fav isFav={isFav} item={this.props.item}/>
            </View> */}
          </View>

          {/* <ImageBackground 
            source={image} 
            style={[styles.container,{backgroundColor:bgcolor, }]}
            imageStyle={{ borderRadius: 30,}}
            >
            <Fav style={{right:-8,top:10}} isFav={isFav} item={this.props.item}/>
            
            <View style={styles.detailView}>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{name}</Text>
                <Text style={[styles.title,{color:colors.grey, fontFamily:fonts.secondaryBold}]} numberOfLines={1} ellipsizeMode="tail">${price}</Text>
              </View>
             
              <View style={{
                flexDirection:'row',
                alignItems:'center'
              }}>
                <View style={[styles.dot]}></View>
                <Text style={styles.desc} numberOfLines={1} ellipsizeMode="tail">
                  {days}
                </Text>
                <View style={[styles.dot]}></View>
                <Text style={styles.desc} numberOfLines={1} ellipsizeMode="tail">
                  {country}
                </Text>
              </View>
            </View>
          </ImageBackground> */}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: metrics.defaultMargin,
    borderRadius:30,
    position:'relative',
    top:0,
    left:0,
    flex:1,
    aspectRatio:1,
    
  },
 
  
  detailView: {
    paddingVertical:20,
    width:'100%',
    paddingHorizontal:20,
    position:'absolute',
    bottom:0,
    left:0,
    backgroundColor: colors.white,
    borderRadius:30,
  },
  iconView: {
    // backgroundColor: colors.secondary,
    // borderBottomEndRadius: 15,
    // borderTopStartRadius: 15,
    // width: 45,
    // height: 45,
    // alignItems: 'center',
    // justifyContent: 'center',
    // position: 'absolute',
    // bottom: 0,
    // right: 0,
    // shadowColor: colors.secondary,
    // shadowOffset: {
    //   width: 2,
    //   height: 2,
    // },
    // shadowOpacity: 0.75,
    // shadowRadius: 3.84,
    justifyContent:'center',
    alignItems:'center',
    width: metrics.defaultMargin *2
    // paddingLeft: '5%'
  },
  title: {
    fontSize: 18,
    fontFamily: fonts.primaryBold,
    // paddingRight:20
  },
 
  dot: {
    backgroundColor: colors.grey,

    width: 5,
    height: 5,
    borderRadius: 5,
    marginTop:3,
    marginHorizontal:5
  },


  ////////////////
  imageView: {
    width: 120,
    height: 150,
    backgroundColor:'transparent',
    borderRadius:30,
    paddingRight:metrics.smallMargin,
    position:'absolute',
    top:0,
    left:-50
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode:'contain',
  },
  outerCard:{
    width: metrics.width *0.90,
    height:150,
    backgroundColor:colors.primary,
    marginBottom: metrics.defaultMargin,
    borderRadius:30,
    display:'flex',
    // flexDirection:'row',
    flexDirection:'row-reverse',
    position:'relative',
    top:0,
    left:0

  },
  innerCard:{
    width: metrics.width *0.75,
    height:150,
    backgroundColor:colors.lightBackground,
    marginBottom: metrics.defaultMargin,
    // borderRadius:30,
    borderTopRightRadius:30,
    borderBottomRightRadius:30
    // alignItems:'center'
  },
  details:{
    backgroundColor:'transparent',
    flex:1,
    borderRadius:30,
    paddingTop:40,
    paddingLeft: 70,
    position:'relative',
    top:0,
    left:0
  },
  content:{
    flex:1,
    backgroundColor:'transparent',
    flexDirection:'row',
  },
  name:{
    fontSize:18,
    color:'black',
    fontFamily:fonts.primaryBold,
    fontWeight:'bold',

  },
  desc: {
    color: colors.grey,
    marginVertical: 5,
    fontSize: 12,
    fontFamily: fonts.secondary,
  },
  price: {
    // marginTop: 10,
    fontSize: 18,
    fontFamily: fonts.secondaryBold,
    paddingRight:10,
    color: 'white'
  },
  priceView:{
    backgroundColor:colors.primary,
    position:'absolute',
    bottom:0,
    right:0,
    paddingHorizontal:20,
    flexDirection:'row',
    paddingVertical: 10,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  }
});
