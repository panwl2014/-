const path = require('path')

// 拼接路径
function resolve (dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	lintOnSave: false,
	publicPath: './',
	outputDir: 'dist',
	assetsDir: 'static',
	indexPath: 'index.html',
	devServer: {
	}
}