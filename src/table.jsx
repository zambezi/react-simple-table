import React from 'react'
import ReactDOM from 'react-dom'
import { select } from 'd3-selection'
import simpleTable from '@zambezi/simple-table'

export class Table extends React.Component {

  static get propTypes() {
    return {
      rows: React.PropTypes.array
    , columns: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
    , select: React.PropTypes.func
    , selected: React.PropTypes.arrayOf(React.PropTypes.object)
    }
  }

  componentDidMount() {
    this.setupTable()
  }

  componentDidUpdate() {
    this.setupTable()
  }

  setupTable() {
    const target = select(ReactDOM.findDOMNode(this))
        , { columns, rows, selected, onSelect } = this.props
        , table = simpleTable.createTable()
                    .columns(columns)
                    .on('select', onSelect)

    if (selected) table.selected(selected)
    target.datum(rows).call(table)
  }

  render() {
    return <table></table>
  }
}
