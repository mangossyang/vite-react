import React, { Component } from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { connect } from '../YReact-redux'
import { bindActionCreators } from '../YReact-redux/bindActionCreators'
class ReduxPage extends Component {
  render() {
    console.log(this.props)
    const { count, dispatch, add, minus } = this.props
    return (
      <Stack spacing={2} direction="row">
        <Button variant="text">{count}</Button>
        <Button
          variant="contained"
          onClick={() => dispatch({ type: 'ADD', payload: 100 })}
        >
          dispacth
        </Button>
        <Button variant="outlined" onClick={() => add()}>
          add
        </Button>
        <Button variant="outlined" onClick={() => minus()}>
          MINUS
        </Button>
      </Stack>
    )
  }
}

export default connect(
  ({ count }) => ({ count }),
  // mapDispatchToProps object | function
  {
    add: () => ({ type: 'ADD' }),
    minus: () => ({ type: 'MINUS' })
  }
  // (dispatch) => {
  //   let creators = {
  //     add: () => ({ type: 'ADD' }),
  //     minus: () => ({ type: 'MINUS' })
  //   }

  //   creators = bindActionCreators(creators, dispatch)

  //   return { dispatch, ...creators }
  // }
)(ReduxPage)
