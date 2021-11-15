import typescript from '@rollup/plugin-typescript'

export default {
  input: 'src/gibstr.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [typescript({ lib: ['es5', 'es6', 'dom'], target: 'es5' })],
}
