/* eslint-disable */

import webpack, { DefinePlugin } from 'webpack';
import path from 'path';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);

    config.resolve = config.resolve || {};
    config.resolve.alias = {
        ...config.resolve?.alias,
        '@': path.resolve(paths.src),
    };

    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    config.module.rules = config.module?.rules?.map((rule: any) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.resolve.extensions?.push('.ts', '.tsx');
    config.module.rules.push(buildCssLoader(true));
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.plugins?.push(new DefinePlugin({
        __IS_DEV__: true,
    }))

    return config;
};
