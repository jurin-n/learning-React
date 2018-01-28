// Items state
/*
{
  "items":[
    {
      "id":"item001",
      "title":"商品xx"
    },
    {
      "id":"item002",
      "title":"商品＊＊＊"
    },
    {
      "id":"item003",
      "title":"商品＠＠＠"
    }
  ],
  "sort":"SORTED_BY_ID"
}
*/

//listed Constants
const C = {
    ADD_ITEM:"ADD_ITEM",
    REMOVE_ITEM:"REMOVE_ITEM",
    GET_ITEM:"GET_ITEM",
    LIST_ITEMS:"LIST_ITEMS",
    SORT_ITEMS:"SORT_ITEMS"
  }
  
  //reducers
  const item = (state={}, action) => {
    switch(action.type){
      case C.ADD_ITEM:
        return {
          id:action.id,
          title:action.title
        }
      case C.GET_ITEM:
        return {}
      default:
        return state
    }
  }
  
  const action1 = {
    type:"ADD_ITEM",
    id:"item001",
    title:"商品ああ"
  }
  
  console.log("# invoke item({}, action1).")
  console.log(item({}, action1))
  
  
  
  //--------------------------------------------------------------
  const items = (state=[], action) => {
    switch(action.type){
      case C.ADD_ITEM:
        return [
          ...state,
          item({}, action)
        ]
      case C.REMOVE_ITEM:
        return state.filter(
            i => i.id !== action.id
        )
      default:
        return state
    }
  }
  
  const currentItems = [
    {
      "id":"item001",
      "title":"商品***"
    },
    {
      "id":"item002",
      "title":"商品@@@"
    }
  ]
  
  const action2 = {
    type:"ADD_ITEM",
    id:"item003",
    title:"商品ああ"
  }
  console.log("# invoke items(currentItems, action2).")
  console.log(items(currentItems, action2))
  
  
  const action3 = {
    type:"REMOVE_ITEM",
    id:"item001"
  }
  console.log("# invoke items(currentItems, action3).")
  console.log(items(currentItems, action3))
  
  
  //--------------------------------------------------------------
  const sort = (state="SORTED_BY_ID", action) => {
    switch(action.type){
      case C.SORT_ITEMS:
        return action.sortBy
      default:
        return state
    }
  }
  const currentSort = "SORTED_BY_ID"
  const action4 = {
    type:C.SORT_ITEMS,
    sortBy:"SORTED_BY_TITLE"
  }
  console.log("# invoke items(currentItems, action4).")
  console.log(sort(currentSort, action4))
  
  
  
  
  
  
  
  
  
  