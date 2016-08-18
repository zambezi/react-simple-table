import babel from 'rollup-plugin-babel'
import babelrc from 'babelrc-rollup'

export default {
  entry: 'src/index.js',
  dest: 'dist/react-simple-table.js',
  format: 'umd',
  moduleName: 'reactSimpleTable',
  external: ['@zambezi/simple-table'],
  sourceMap: true,
  plugins: [ babel(babelrc()) ],
  globals: { }
}
