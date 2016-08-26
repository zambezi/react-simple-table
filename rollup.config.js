vimport babel from 'rollup-plugin-babel'

export default {
  entry: 'src/index.js',
  dest: 'dist/react-simple-table.js',
  format: 'umd',
  moduleName: 'reactSimpleTable',
  external: ['react', 'react-dom', '@zambezi/simple-table', 'd3'],
  sourceMap: true,
  plugins: [ babel({
    "presets": [["es2015", { "modules": false }], "react"],
    "plugins": ["external-helpers"],
    "babelrc": false
  }) ],
  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    '@zambezi/simple-table': 'simpleTable',
    'd3': 'd3'
  }
}
