import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';

export default [{
  input: 'src/index.ts',
  output: {
    file: 'monetochka.js',
    format: 'es',
  },
  watch: {
    include: 'src/**',
  },
  plugins: [
    typescript({ useTsconfigDeclarationDir: true }),
    sourceMaps(),
  ],
}];
