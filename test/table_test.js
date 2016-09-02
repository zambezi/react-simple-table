import React from 'react'
import SimpleTable from '../src'
import { deepEqual, equal, throws } from 'assert'
import { mount } from 'enzyme'
import { jsdom } from 'jsdom'

global.document = jsdom('')
global.window = document.defaultView

describe('react-simple-table', () => {

  it('should throw if missing required properties', () => {
    throws(() => { mount(<SimpleTable />) }, Error, '`columns` is required')
  })

  it('should render a trivial table with empty columns', () => {
    const wrapper = mount(<SimpleTable columns={[]}/>)
        , expected = mount(trivialTable())
    equal(wrapper.html(), expected.html(), 'Rendering ')
  })

  it('should set all known properties', () => {
    const wrapper = mount(
      <SimpleTable columns={[]} rows={[]} selected={[]} onSelect={() => {}} />
    )
    const { columns, rows, selected, onSelect } = wrapper.props()

    deepEqual(columns, [], '`columns` should be an empty array')
    deepEqual(rows, [], '`rows` should be an empty array')
    deepEqual(selected, [], '`selected` should be an empty array')
    equal(typeof onSelect, 'function', '`onSelect` should be `typeof function`')
  })

})

function trivialTable() {
  return <table>
    <thead>
      <tr></tr>
    </thead>
    <tbody></tbody>
  </table>
}
