const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production';
const isAnalyz = process.env.IS_ANALYZ;

function addStyleResource(rule) {
    rule
        .use('style-resources-loader')
        .loader('style-resources-loader')
        .options({
            patterns: [path.resolve(__dirname, './src/styles/**/*.less')],
        });
}

module.exports = {
    baseUrl: './',
    devServer: {
        port: 3001,
        open: true,
        proxy: 'http://localhost:3000'
    },
    outputDir: path.resolve(__dirname, '../back/public/html'),
    productionSourceMap: false, // 生产不生成 sourcemap
    chainWebpack: config => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
    },
    configureWebpack: config => {
        // 依赖代码分离，避免 vendor 过大
        config.optimization = {
            runtimeChunk: 'single',
            splitChunks: {
                name: true,
                chunks: 'all',
                minSize: 10000,
                maxInitialRequests: 4, // 首页最大并行下载数
                cacheGroups: {
                    base: {
                        test: (module) => {
                            return /vue|zrender|core-js|async-validator/.test(module.context);
                        },
                        name: 'base',
                        priority: 3,
                        reuseExistingChunk: true,
                    },
                    elementui: {
                        test: (module) => {
                            return /element-ui/.test(module.context);
                        },
                        name: 'elementui',
                        priority: 3,
                        reuseExistingChunk: true,
                    },
                    echarts: {
                        test: (module) => {
                            return /echarts/.test(module.context);
                        },
                        name: 'echarts',
                        priority: 3,
                        reuseExistingChunk: true,
                    },
                },
            }
        }

        if (isAnalyz) {
            // 打包分析可视化，命令：npm run analyz
            config.plugins.push(new BundleAnalyzerPlugin({
                analyzerMode: 'server',
                analyzerHost: '127.0.0.1',
                analyzerPort: 8889,
                reportFilename: 'report.html',
                defaultSizes: 'parsed',
                openAnalyzer: true,
                generateStatsFile: false,
                statsFilename: 'stats.json',
                statsOptions: null,
                logLevel: 'info',
            }));
        }

        if (isProduction) {
            // gzip 压缩
            config.plugins.push(new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: new RegExp('\\.js$'),
                threshold: 160,
                minRatio: 0.8
            }));
        }
    },
};