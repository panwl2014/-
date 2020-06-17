// const path = require('path')

// // 拼接路径
// function resolve (dir) {
// 	return path.join(__dirname, dir)
// }
// let proxyObject = {
// 	target: 'http://localhost:3003'
// }
// module.exports = {
// 	lintOnSave: false,
// 	publicPath: './',
// 	outputDir: 'dist',
// 	assetsDir: 'static',
// 	indexPath: 'index.html',
// 	devServer: {
//             proxy: {
//                 '/login': proxyObject,
//             }
// 	}
// }



if (process.env.NODE_ENV === 'production') {
    module.exports = {
        outputDir: 'dist',
        indexPath: 'index.html',
        publicPath: './'
    }
} else {
    let proxyObject = {
        target: 'http://localhost:3003'
    };
    module.exports = {

        devServer: {
            proxy: {
                '/login': proxyObject,
                '/test': proxyObject,
                '/isLogin': proxyObject,
            }
        }
    }
}