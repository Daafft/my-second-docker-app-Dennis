import {build} from 'esbuild';

await build({
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.mjs',
    bundle: true,
    platform: 'node',
    format: 'esm',
    target: 'node22',
    minify: true,
    sourcemap: false,
    external: ['bullmq', 'ioredis', 'pino']
});
