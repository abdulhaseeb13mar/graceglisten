export const addItem=(item)=>{
    return {
        type:'ADD_ITEM',
        payload:item
    }
}

export const deleteItem=(item)=>{
   
    return {
        type:'DELETE_ITEM',
        payload:item
    }
}

export const emptyCart=()=>{
    return{
        type:'EMPTY_CART',
        payload:{}
    }
}

export const addFav=(item)=>{
    //console.log('action called',item)
    return {
        type:'ADD_FAV',
        payload:item
    }
}

export const addRecent=(item)=>{
    return{
        type:'ADD_RECENT',
        payload:item
    }
}