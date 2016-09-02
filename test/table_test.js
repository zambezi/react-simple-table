import React from 'react'
import SimpleTable from '../src'
import { strictEqual } from 'assert'
import { shallow, mount } from 'enzyme'
import { jsdom } from 'jsdom'
import assert from 'assert'

global.document = jsdom('')
global.window = document.defaultView

describe('react-simple-table', () => {

  it('should throw if missing required properties', () => {
    assert.throws(() => { mount(<SimpleTable />) }, Error, '`columns` is required')
  })

  it('should render a trivial table with empty columns', () => {
    const wrapper = mount(<SimpleTable columns={[]}/>)
        , expected = mount(trivialTable())

    assert.equal(wrapper.html(), expected.html(), 'Rendering ')
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
