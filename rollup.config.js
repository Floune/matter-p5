import filesize from 'rollup-plugin-filesize';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

// Can't use official TypeScript plugin because: https://github.com/rollup/plugins/issues/287

const extensions = [
  '.js', '.jsx', '.ts', '.tsx'
];

const licenseInfo =
`/**
* @author       Floune & Callan
* @license      {@link https://opensource.org/licenses/MIT|MIT License}
*/`;

export default [
	// browser-friendly UMD build
	{
		input: './src/index.ts',
		output: {
      file: './dist/umd/pastete.js',
      name: 'Pastete',
      sourcemap: true,
      esModule: false,
      format: 'umd',
      plugins: [
        filesize()
      ]
		},
		plugins: [
      resolve({
        extensions
      }),
      typescript({
        tsconfig: 'tsconfig-udm.json'
      })
		]
	},
	{
    input: 'src/index.ts',
    onwarn: (warning, next) =>
    {
        //  Because the TypeScript plugin will create d.ts files
        //  that already exist, so let's not spam the console
        //  with them.
        if (warning.code === 'FILE_NAME_CONFLICT')
        {
            return;
        }
        else
        {
            next(warning);
        }
    },
		output: [
        {
          name: 'Pastete',
          file: './public/lib/pastete.min.js',
          sourcemap: true,
          esModule: false,
          format: 'umd',
            plugins: [
                terser({
                    output: {
                        preamble: licenseInfo,
                        comments: false
                    }
                })
            ]
        }
    ],
    plugins: [
      resolve({
        extensions
      }),
      typescript({
        tsconfig: 'tsconfig-udm.json'
      })
    ]
	}
];
