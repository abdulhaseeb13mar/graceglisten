import {combineReducers} from 'redux';
import data from '../../../data';

var cart = {
  items: [],
  totalItems: '',
  totalPrice: 0,
};

const cartReducer = (state = cart, {type, payload}) => {
  if (payload) {
    var {...rest} = payload;
    switch (type) {
      case 'ADD_ITEM':
        const existingItem = state.items.find((item) => item.id == rest.id);
        if (existingItem) {
          existingItem.quantity += 1;
          const obj = {
            ...state,

            totalPrice: state.totalPrice + formatPrice(rest.price),
          };
          return obj;
        } else {
          const obj = {
            ...state,
            items: [...state.items, {...rest, quantity: 1}],

            totalPrice: state.totalPrice + formatPrice(rest.price),
          };
          return obj;
        }

      case 'DELETE_ITEM':
        const item = state.items.find((item) => item.id == payload.id);
        if (item) {
          if (item.quantity == 1) {
            const arr = state.items.filter((item) => item.id !== payload.id);
            const obj = {
              ...state,
              items: arr,

              totalPrice: state.totalPrice - formatPrice(rest.price),
            };
            return obj;
          } else {
            item.quantity -= 1;
            const obj = {
              ...state,

              totalPrice: state.totalPrice - formatPrice(rest.price),
            };
            return obj;
          }
        }

      case 'EMPTY_CART':
        return cart;
    }
  }
  return state;
};


export const products = (state = data.items, action) => {
  switch (action.type) {
    case 'ADD_FAV':
      var array = [...state];
      var index = array.findIndex((item) => item.id == action.payload.id);
      if(array[index].isFav)
      array[index] = {...array[index], isFav: 0};
      else
      array[index] = {...array[index], isFav: 1};
      return array;
  }

  return state;
};

export const favProducts = (state=[],action)=>{
  switch (action.type) {
      case 'ADD_FAV':
        var array = state;
        var index = array.find((item) => item.id == action.payload.id);
        if(index){
            array = array.filter(item=>item.id !== action.payload.id)
        }
        else {
            array = [{...action.payload,isFav:1},...array,]
        }
        //console.log('FAV PRODUCTS=> ',array)
        return array;
    }
  
  return state;
}


export const recentlyViewed = (state=[],action)=>{
  if(action.type=='ADD_RECENT'){
      var array = state.filter(item=>item["id"]!==action.payload["id"])
      array = [action.payload,...array]
      return array;
  }
  return state;
}


const formatPrice = (price) => {
  var formatted_price = parseFloat(price);
  formatted_price = formatted_price.toFixed(2);
  return parseFloat(formatted_price);
};

export default combineReducers({
  cartReducer,
  favProducts,
  products,
  recentlyViewed
});