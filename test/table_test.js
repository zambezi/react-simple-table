import Table from '../src'
import { strictEqual } from 'assert'
import { shallow } from 'enzyme'

describe('react-simple-table', () => {

  it('should have something', () => {
    strictEqual(Table, 'Table!', 'Not the same :(')
  })
})


// the trivial table
// rows = undefined
// columns = [{}]
// <table data-reactroot="">
//   <thead>
//     <tr>
//       <th></th>
//     </tr>
//   </thead>
//   <tbody></tbody>
// </table>
