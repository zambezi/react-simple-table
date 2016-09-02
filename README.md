@zambezi/react-simple-table
===========================

A wrapper to use [@zambezi/simple-table](https://github.com/zambezi/simple-table) as a React component.

## Installation

```
npm install --save @zambezi/react-simple-table
```

## Basic Usage

Define your data as an Array of rows:

```
const rows = [
        {
          name: 'Álvaro'
        , email: 'alvaro@example.com'
        , address: { city: 'London' }
        , price: 234234.23433223
        }
      , {
          name: 'Ignacio'
        , email: 'ignacio@example.com'
        , address: { city: 'London' }
        , price: 111111.234234234
        }
      ]
```

Define your columns as an Array of column descriptors:

```
const columns = [
        { key: 'name', label: 'Name' }
      , { key: 'email', label: 'Email' }
      , { format: addressFormatter, label: 'City' }
      , { key: 'price', label: 'Price', format: priceFormatter }
      ]
```

- `label`: The label for this column in the table header
- `key`: The key in the row to pick the data from. Optional, see `format`
- `format`: a function that will take either a cell or a row as argument. If
  a `key` is provided `format` will receive a cell, otherwise it will receive
  the entire row.

Define any required formatter functions:

```
function addressFormatter(row) {
  return row.address.city
}

function priceFormatter(price) {
  return price.toFixed ? price.toFixed(3) : ''
}
```

Render the table using React and ReactDOM

```
import React from 'react'
import ReactDOM from 'react-dom'
import SimpleTable from '@zambezi/react-simple-table'

ReactDOM.render(
  <SimpleTable columns={ columns } rows={ rows } />
, document.querySelector('#react-simple-table')
)
```

## Handling selections

Provide a mechanism to render `SimpleTable` on demand, passing an array of
selected rows:

```
function draw(selected=[]) {
  ...
}
```

Define a selection callback:

```
function addToSelection(row) {
  // `selected` is an Array of rows
  draw([ row ])
}
```

Pass the selection callback and the selected rows as a properties
to `SimpleTable`:

```
function draw(selected=[]) {
  ReactDOM.render(
    <SimpleTable
      columns={ columns }
      rows={ rows }
      selected={ selected }
      onSelect={ addToSelection }
      />
  , document.querySelector('#react-simple-table')
  )
}
```

## Contributing

See [contributing](CONTRIBUTING.md)
