import React from 'react'
import ReactDOM from 'react-dom'
import d3 from 'd3'
import simpleTable from '@zambezi/simple-table'

export class Table extends React.Component {

  static get propTypes() {
    return {
      rows: React.PropTypes.array
    , columns: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    }
  }

  componentDidMount() {
    this.setupTable()
  }

  componentDidUpdate() {
    this.setupTable()
  }
  setupTable() {
    const target = d3.select(ReactDOM.findDOMNode(this))
        , props = this.props
        , table = simpleTable.createTable().columns(props.columns)

    target.datum(props.rows).call(table)
  }

  render() {
    return <table></table>
  }

}
