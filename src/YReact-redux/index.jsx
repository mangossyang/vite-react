import React from 'react'
import { useLayoutEffect } from 'react'
import { useCallback } from 'react'
import { useReducer } from 'react'
import { useContext } from 'react'
import { bindActionCreators } from './bindActionCreators'
// 跨层级数据传递
// *step1 创建一个Context对象
// *step2 Provider传递store
// *step3 后代组件接受store
const Context = React.createContext()

export const Provider = ({ store, children }) => {
  return <Context.Provider value={store}>{children}</Context.Provider>
}

export const connect =
  (mapStateToProps, mapDispatchTOProps) => (WrapComponent) => (props) => {
    const store = useContext(Context)
    const stateProps = mapStateToProps(store.getState())
    let dispatchProps = { dispatch: store.dispatch }

    if (typeof mapDispatchTOProps === 'function') {
      dispatchProps = mapDispatchTOProps(store.dispatch)
    } else if (typeof mapDispatchTOProps === 'object') {
      dispatchProps = bindActionCreators(mapDispatchTOProps, store.dispatch)
    }

    //更新视图
    const forceUpdate = useForceUpdate()
    useLayoutEffect(() => {
      store.subscribe(() => {
        forceUpdate()
      })
    }, [store])
    return <WrapComponent {...props} {...stateProps} {...dispatchProps} />
  }

const useForceUpdate = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0)

  const update = useCallback(() => {
    forceUpdate()
  })

  return update
}

export function useSelector(selector) {
  const store = useContext(Context)
  //更新视图
  const forceUpdate = useForceUpdate()
  useLayoutEffect(() => {
    store.subscribe(() => {
      forceUpdate()
    })
  }, [store])
  return selector(store.getState())
}
export function useDispatch() {
  const store = useContext(Context)
  return store.dispatch
}
