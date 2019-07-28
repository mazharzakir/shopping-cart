import Item1 from '../../images/moble1.jpg';
import Item2 from '../../images/shoes1.jpg';
import Item3 from '../../images/moble5.jpg';
import Item4 from '../../images/moble2.jpg';
import Item5 from '../../images/shoes2.jpg';
import Item6 from '../../images/watch2.jpg';
import Item7 from '../../images/watch1.jpg';
import Item8 from '../../images/shoes3.jpg';
import Item9 from '../../images/watch3.jpg';
import Item10 from '../../images/slider1.jpg';
import Item11 from '../../images/slider2.jpg';
import Item12 from '../../images/slider3.jpg';
import Item13 from '../../images/slider4.jpg';
import Item14 from '../../images/slider5.jpg';
import Item15 from '../../images/slider6.jpg';
import Item16 from '../../images/slider7.jpg';
import { ADD_TO_CART, } from '../../actions/action-types/cart-actions';
import { REMOVE_ITEM , ADD_PRODUCT } from '../../actions/action-types/cart-actions';



const initialProducts = {
  items: [
    { id: 1, name: "Iphone6", price: 20000, image: Item1, category: "mobile", sliderImg: Item9 },
    { id: 2, name: "Hush Puppi", price: 2000, image: Item2, category: "shoes", sliderImg: Item10 },
    { id: 3, name: "Citizen", price: 6000, image: Item7, category: "watch", sliderImg: Item11 },
    { id: 4, name: "Iphone6S", price: 19000, image: Item4, category: "mobile", sliderImg: Item12 },
    { id: 5, name: "Gucci", price: 4000, image: Item5, category: "shoes", sliderImg: Item13 },
    { id: 6, name: "Rolex", price: 7000, image: Item6, category: "watch", sliderImg: Item14 },
    { id: 7, name: "Rado", price: 9000, image: Item9, category: "watch", sliderImg: Item15 },
    { id: 8, name: "Gucci", price: 7000, image: Item8, category: "shoes", sliderImg: Item16 },
    { id: 9, name: "Iphone7", price: 12000, image: Item3, category: "mobile", sliderImg: Item13 }

  ],
  addedItems: [],
  total: 0 ,
  counter : 0,
};
const productReducer = (state = initialProducts, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => {
      return item.id === action.id
    }

    )
 


    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(item => action.id === item.id)
    if (existed_item) {
      addedItem.quantity += 1
      return {
        ...state,
        total: state.total + addedItem.price,
        counter: state.counter+1
      }
    }
    else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
        counter: state.counter+1
      }
    }
  }
  //  Remove Item
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id)
    let new_items = state.addedItems.filter(item => action.id !== item.id)

    //calculating the total
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
    console.log(itemToRemove)
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
      counter: state.counter-itemToRemove.quantity
    }
  }

    // // ADD PRODUCTS

    if (action.type === ADD_PRODUCT){
      // console.log([...state.items, {...action.product, id: new Date().toISOString()}])
      return {
        ...state,
        items: [{...action.product, id: new Date().toISOString(), price: Number(action.product.price || 0)}, ...state.items, ]
      } 
    }


  else {
    return state
  }

}

export default productReducer;
