const path = require('path')

// 拼接路径
function resolve(dir) {
	return path.join(__dirname, dir)
}
let proxyObject1 = {
	target: 'http://103.44.144.35:9001',
	ws: true,
	changeOrigin: true,
	pathRewrite: {
		'^/showData': '/showData'
	}
	// cookieDomainRewrite: {
	// 	'103.44.144.41:9001': '127.0.0.1'
	// }
}
let proxyObject2 = {
	target: 'http://localhost:3003'
}
if (process.env.NODE_ENV === 'production') {
	module.exports = {
		publicPath: './',
		outputDir: 'dist',
		assetsDir: 'static',
		indexPath: 'index.html',
	}
} else {
	module.exports = {
		lintOnSave: false,
		devServer: {
			proxy: {
				'/login': proxyObject2,
				'/test': proxyObject2,
				'/isLogin': proxyObject2,
				'/showData': proxyObject1,
			}

		}
	}
}



// if (process.env.NODE_ENV === 'production') {
//     module.exports = {
//         outputDir: 'dist',
//         indexPath: 'index.html',
//         publicPath: './'
//     }
// } else {
//     let proxyObject = {
//         target: 'http://localhost:3003'
//     };
//     module.exports = {

//         devServer: {
//             proxy: {
//                 '/login': proxyObject,
//                 '/test': proxyObject,
//                 '/isLogin': proxyObject,
//             }
//         }
//     }
// }