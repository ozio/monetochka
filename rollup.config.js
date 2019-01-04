import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';

export default [{
  input: 'src/index.ts',
  output: [
    {
      file: 'monetochka.esm.js',
      format: 'esm',
    },
    {
      file: 'monetochka.cjs.js',
      format: 'cjs',
    },
  ],
  watch: {
    include: 'src/**',
  },
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    sourceMaps(),
  ],
}];
