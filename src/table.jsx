import React from 'react'
import ReactDOM from 'react-dom'
import { select } from 'd3-selection'
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
    const target = select(ReactDOM.findDOMNode(this))
        , props = this.props
        , table = simpleTable.createTable()
                    .columns(props.columns)
                    .on('select', props.select)

    if (props.selected) table.selected(props.selected)

    target.datum(props.rows).call(table)
  }

  render() {
    return <table></table>
  }

}
