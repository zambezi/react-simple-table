import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/index.jsx',
  dest: 'dist/react-simple-table.js',
  format: 'umd',
  moduleName: 'reactSimpleTable',
  external: ['react', 'react-dom'],
  sourceMap: true,
  plugins: [ babel({
    "presets": [["es2015", { "modules": false }], "react"],
    "plugins": ["external-helpers"]
  }) ],
  globals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}
