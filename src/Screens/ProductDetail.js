import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  Image
} from 'react-native';
// import bg from '../../assets/images/bg2.png';
import { View, Text } from 'react-native';
import { HorizontalList, Wrapper,Header } from '../Components';
import { colors, fonts, metrics } from '../utils/Theme';
import Toast from '../utils/Toast';
import { SliderBox } from "react-native-image-slider-box";
import {
  SafeAreaView,
  SafeAreaInsetsContext,
} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Navigator from '../utils/Navigator';
import data from '../../data';
import { connect } from 'react-redux';
import { addItem, deleteItem } from '../Redux/actions';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
      ],
      // width:'100',
      height:100,
    };
  }

  componentDidMount(){
    // console.log('all data', data.images)
      // let records= data.image.filter((item)=>(
      //   item.productid === this.props.route.params.item.id
      // ))
      // let imagesArr=records.map(rec=>(
      //   rec.image
      //   ))
      //   console.log('records arr', imagesArr)
      //   this.setState({images: imagesArr})
    
  }

  addItem = () => {
    this.props.addItem(this.props.route.params.item);
  };

  deleteItem = () => {
    this.props.deleteItem(this.props.route.params.item);
  };

  getCategoryName=(id)=>{
    let name= data.category.filter((cat)=>(
      cat.id===id
    ))
    //console.log('category nameeee', name)
    return name[0].name
  }
  onLayout = e => {
    this.setState({
      // width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height
    });
  };
  render() {
    const {
      name,
      image,
      description,
      price,
      bgcolor,
      id,
      voltage,
      height,
      days,
      categoryid
    } = this.props.route.params.item;
    console.log('image',image)

    const flag = this.props.cart?.items.filter((val) => val.id == id);
    const quantity = flag.length !== 0 ? flag[0].quantity : 0;
   
    return (
      <Wrapper top={0} bottom={0} style={{ backgroundColor: colors.primary }}>
      <Header textStyle={{color:colors.secondary}}></Header>
        <ScrollView
          style={{ flex: 1, backgroundColor: colors.primary }}
          bounces={false}
          showsVerticalScrollIndicator={false}>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.nameHeading}>{name}</Text>
            <Text style={{
              fontSize:20, textAlign:'center',
              color:'white'
                }}>${price}</Text>
              <View style={styles.imageView} >
                <Image style={styles.image} source={image} />
              </View>
              <View style={{ paddingHorizontal: metrics.defaultMargin, paddingTop: metrics.defaultMargin }}>
                <Text style={styles.text}>{description}</Text>
                <View style={{
                  flex:1,
                  flexDirection:'row',
                  justifyContent:'space-between'
                  }}>
                  <Text style={{fontSize:16, color:'white', fontWeight:'bold'}}>Quantity:</Text>
                  <View style={styles.quantityView}>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={this.deleteItem}
                        style={styles.iconView}>
                        <Icon name="remove" style={{ ...styles.icon }} />
                      </TouchableOpacity>
                      <Text style={styles.quantity}>{quantity}</Text>
                      <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={this.addItem}
                        style={styles.iconView}>
                        <Icon name="add" style={styles.icon} />
                      </TouchableOpacity>
                    </View>
                </View>
              </View> 
        </ScrollView>
        <TouchableWithoutFeedback
          onPress={() =>{
              Navigator.navigate('Order')
          }}>
              <View style={styles.btn} >
                <Text  style={styles.buttonText}>ADD TO CART</Text>
              </View>
        </TouchableWithoutFeedback>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  headingOverlay: {
    position: 'absolute',
    bottom: 30,
    left: 0,

    backgroundColor: colors.primary,
    opacity: 0.5,
    // color:colors.primary
    flex: 1,
    flexDirection: 'row',
    // marginVertical: metrics.defaultMargin,
    height: '16%',
    width: '100%',
  },
  headingContainer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '16%',
    width: '100%',
  },
  imageView: {
    // aspectRatio: 1,
    width: metrics.width* 0.9,
    height:metrics.width * 0.9,
    backgroundColor:'transparent',
    marginHorizontal:metrics.defaultMargin
    
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    // aspectRatio: 1,
  },
  heading: {
    fontFamily: fonts.primaryBold,
    fontSize: 28,
    // marginBottom: metrics.defaultMargin,
    color: colors.white,
  },
  property:{
    fontFamily: fonts.secondary,
    fontSize: 16,
    marginBottom: 5,
    color: 'white',
  },
  smallHeading: {
    fontFamily: fonts.secondaryBold,
    fontSize: 18,
    marginBottom: 5,
    color: colors.secondary,
  },
  nameHeading: {
    fontFamily: fonts.primaryBold,
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    flex:1,
    marginRight:10,
    fontWeight:'bold',
    textAlign:'center'
  },
  value:{
    fontFamily: fonts.secondaryBold,
    fontSize: 20,
    lineHeight: 20,
    // marginBottom: metrics.defaultMargin,
    color: 'white',
    fontWeight:'bold',
  },
  text: {
    fontFamily: fonts.secondary,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: metrics.defaultMargin,
    color: colors.secondary,
    textAlign:'center'
  },
  buttonView: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    // borderTopStartRadius: 30,
    paddingHorizontal: 30,
    // marginLeft: metrics.defaultMargin,
  },
  buttonText: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: fonts.primaryBold,
    textAlign:'center',
    flex:1,
    fontWeight:'bold'

  },
  btn:{
    flexDirection:'row', 
    backgroundColor:colors.secondary,
    padding:10,
    paddingVertical:20,
    // marginHorizontal:metrics.defaultMargin,
    // borderRadius:20,
    // marginBottom:metrics.defaultMargin
    // justifyContent:'center'
  },
  backIcon: {
    position: 'absolute',
    top: 20,
    left: metrics.defaultMargin,
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  quantityView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: metrics.defaultMargin,
    backgroundColor:'white',
    borderRadius:5,
    paddingHorizontal:3
  },
  iconView: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
    color: colors.primary,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 18,
    color:colors.primary,
    fontWeight:'bold',
  },
  row: {
    // borderColor:'red',
    // borderWidth:1,
    flexDirection: 'row',
    marginVertical:metrics.defaultMargin
  },
  col: {
    flex: 1,
    // borderColor:'blue',
    // borderWidth:1,
    justifyContent:'center',
    marginHorizontal:5,

  },
  divider:{
    width:'100%',
    borderColor: colors.secondary,
    borderWidth:1,
    marginHorizontal: metrics.defaultMargin,

  },
  blurCard:{
    width:'100%', 
    height:80, 
    backgroundColor:'rgba(24,28,33,.2)',
    borderRadius:22,
    justifyContent:'center',
    alignItems:'center'
  },
  
});

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer,
  };
};

export default connect(mapStateToProps, { addItem, deleteItem })(ProductDetail);
