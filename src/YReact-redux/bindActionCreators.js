const bindActionCreator = (creator, dispatch) => {
  return (...args) => dispatch(creator(...args))
}

export const bindActionCreators = (creators, dispatch) => {
  let obj = {}
  //遍历creators
  for (const key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }

  return obj
}
