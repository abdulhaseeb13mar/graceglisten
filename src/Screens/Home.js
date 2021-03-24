import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView, ImageBackground} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {
  FoodCard,
  FoodIcon,
  HorizontalList,
  ItemCard,
  SearchBar,
  Wrapper,
} from '../Components';
// import bg from '../../assets/images/bg2.png';
import {colors, fonts, metrics} from '../utils/Theme';
import data from '../../data';
import Category from '../Components/Category';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Navigator from '../utils/Navigator';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '1',
      categories: [],
      items: [],
      recommended: [],
    };
  }

  componentDidMount() {
    let items
    if(this.state.selectedCategory==='0'){
      items= this.props.products
    }else{
      items = this.props.products.filter(
        (val) => val.categoryid == this.state.selectedCategory,
      );
    }
    const recommended = this.props.products.filter((val) => val.recommended);
    this.setState({
      items: items,
      recommended: recommended,
    });
  }

  selectCategory = (item) => {
    this.setState({selectedCategory: item.id});
    const items = this.props.products.filter(
      (val) => val.categoryid == item.id,
    );
    this.setState({items: items});
  };

  UNSAFE_componentWillReceiveProps(props) {
    const items = props.products.filter(
      (val) => val.categoryid == this.state.selectedCategory,
    );
    const recommended = props.products.filter((val) => val.recommended);
    this.setState({
      items: items,
      recommended: recommended,
    });
  }

  render() {
    return (
      <Wrapper>
        <ScrollView
          style={{flex: 1}}
          bounces={false}
          showsVerticalScrollIndicator={false}>

          <View style={styles.headingContainer}>
            <Text style={{
              
                fontFamily: fonts.primary,
                fontSize: 28,
                fontWeight:'bold',
                // margin: metrics.defaultMargin,
                // marginRight: metrics.width * 0.35,
                marginBottom:5,
                color: colors.white,
              
            }}>
              Candles
            </Text>
            <Icon
              onPress={() => Navigator.navigate('Order')}
              name="cart"
              style={styles.icon}
            />
          </View>
          
          <SearchBar
          // containerStyle={{marginTop:40}}
           textInput={{color: 'red'}} disabled />

          <View style={{marginTop:10}}>
            <HorizontalList
              data={data.category}
              renderItem={({item}) => (
                <Category
                  item={item}
                  selected={item.id == this.state.selectedCategory}
                  onPress={() => this.selectCategory(item)}
                />
              )}
            />
          </View>

            <HorizontalList
            style={{
              // marginHoritozal:metrics.defaultMargin,
            }}
              data={this.state.items}
              horizontal={false}
              renderItem={({item, index}) => (
                <FoodCard item={item} index={index} />
              )}
            />


          <Text style={styles.subHeading}>Recommended</Text>
          <HorizontalList
            data={this.state.recommended}
            renderItem={({item, index}) => <ItemCard item={item} index={index} />}
          />
          {this.props.favProducts.length > 0 && (
            <>
              <Text style={styles.subHeading}>Favourites</Text>
              <HorizontalList
                data={this.props.favProducts}
                renderItem={({item}) => <ItemCard item={item} />}
              />
            </>
          )}
        </ScrollView>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: fonts.primary,
    fontSize: 28,
    fontWeight:'bold',
    margin: metrics.defaultMargin,
    // marginRight: metrics.width * 0.35,
    marginBottom:5,
    color: colors.white,
  },
  subHeading: {
    fontFamily: fonts.primaryBold,
    fontSize: 24,
    margin: metrics.defaultMargin,
    color: colors.white,
    fontWeight:'bold',
  },
  category: {
    transform: [{rotate: '270deg'}],
    marginVertical: 15,
    marginLeft: metrics.smallMargin,
    textAlign: 'center',
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  categoryText: {
    fontFamily: fonts.primary,
    fontSize: 16,
    marginBottom: 5,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    position: 'absolute',
    right: metrics.defaultMargin,
    top: metrics.defaultMargin,
    fontSize: 32,
  },
  des:{
    width:'90%',
    fontFamily: fonts.secondary,
    fontSize: 16,
    marginHorizontal: metrics.defaultMargin,
    color: colors.secondary,
    marginBottom:metrics.defaultMargin
  },
  icon: {
    // position: 'absolute',
    // right: metrics.defaultMargin,
    // top: metrics.defaultMargin,
    fontSize: 32,
    color: colors.primary,
    // marginRight: metrics.defaultMargin,
  },
  headingContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    margin: metrics.defaultMargin,
    marginBottom:0,
    // marginVertical:0,
    // flex:1,
    // borderColor:'red',
    // borderWidth:1
  },
});

const mapStateToProps = (state) => {
  return {
    products: state.products,
    favProducts: state.favProducts,
  };
};

export default connect(mapStateToProps)(Home);
