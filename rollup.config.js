import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
	entry: 'src/index.js',
	plugins: [
		commonjs({
			include: 'node_modules/**'
		}),
		nodeResolve({
			jsnext: true,
			main: true,
			skip: [ 'path', 'sander', 'buffer-crc32' ]
		}),
		buble({
			exclude: 'node_modules/**'
		})
	],
	external: [ 'path', 'sander', 'buffer-crc32' ],
	sourceMap: true
};
