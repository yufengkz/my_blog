### 创建项目
```
create-react-app my-demo
cd my-demo
yarn eject
```

### 项目引入ant
```
yarn add antd
yarn add --dev babel-plugin-import @babel/plugin-proposal-decorators
# 添加.babelrc文件
{
    "presets": ["react-app"],
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }]
    ]
}
# 删除package.json中的babel配置
```

### 配置自定义主题
```
# 修改webpack.config.js
# 找到getStyleLoaders配置第三个参数
const getStyleLoaders = (cssOptions, preProcessor, newOptions) => {
    ...其他代码
    {
        loader: require.resolve(preProcessor),
        options: {
          //自定义主题配置
          ...newOptions,
          sourceMap: true,
        },
    }
}
```

### 添加less支持
```
# 安装以来插件
yarn add less less-loader
# webpack.config.js中添加：
const lessRegex = /\.less$/;  // 新增less配置
const lessModuleRegex = /\.module\.less$/; // 新增less配置，这个其实不配置也行
//配置less
// **************** 配置less 并添加自定义主题 ***************** //
{
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getStyleLoaders({
        importLoaders: 2,
        sourceMap: isEnvProduction && shouldUseSourceMap,
    },
    'less-loader', 
    {
        javascriptEnabled: true,
        // 这里设置、修改默认主题样式
        modifyVars: {
            'primary-color': '#FF5983', // 全局主色 默认1890ff
            'link-color': '#1890ff', // 链接色
        }
    }
    ),
    sideEffects: true,
},
{
    test: lessModuleRegex,
    use: getStyleLoaders({
        importLoaders: 2,
        sourceMap: isEnvProduction && shouldUseSourceMap,
        modules: true,
        getLocalIdent: getCSSModuleLocalIdent,
    },
    'less-loader', 
    ),
},
// **************** 配置less 并添加自定义主题 ***************** //
```

### 配置多环境 dev tet prod[https://blog.csdn.net/qq_35844177/article/details/80519513]
```
# 根目录下创建 .env.development .env.test .env.production配置文件:
.env.development 文件
# 当前环境
NODE_ENV=development
REACT_APP_ENV=development
# 应用名称
REACT_APP_NAME=React Blog Dev
# App版本
REACT_APP_VERSION=$npm_package_version
# 域名
REACT_APP_DOMAIN=localhost:3000
# API接口
REACT_APP_API=http://$REACT_APP_DOMAIN/api
# 打包是否启用sourceMap
REACT_APP_GENERATE_SOURCEMAP=true

.env.test 文件
# 设置test.js时注意：
NODE_ENV=production
...

.env.production 文件
NODE_ENV=production
...
```
### 修改config/env.js
```
//有一个特殊的内置环境变量叫做NODE_ENV，你可以输出process.env.NODE_ENV，但无法手动覆盖NODE_ENV。这可以防止开发人员意外地将缓慢的开发构建部署到生产环境中。
// const NODE_ENV = process.env.NODE_ENV;
const NODE_ENV = process.env.REACT_APP_ENV || process.env.NODE_ENV;
```

### 安装项目打包后分析插件
```
# 安装插件
yarn add --dev webpack-bundle-analyzer
# 配置 webpack.config.js
//项目分析插件(分析打包后的文件体积)
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// 是否使用项目分析插件 use BundleAnalyzerPlugin
const shouldUseBundleAnalyzer = process.env.REACT_APP_USE_ANALYZER !== 'false';
// 添加项目分析插件 最后一个plugins中
isEnvProduction && shouldUseBundleAnalyzer && new BundleAnalyzerPlugin(),

```

### 更改命令
```
# 安装cross-env  yarn add --dev cross-env
"start": "node scripts/start.js",
"build-test": "cross-env REACT_APP_ENV=test node scripts/build.js",
"build-prod": "cross-env REACT_APP_ENV=production node scripts/build.js"
```

### 运行项目
```
yarn start
```

### 打包项目
```
yarn build-test 测试环境打包
yarn build-prod 生产环境打包
```

### 项目使用 Nprogress
```
# index.html手动引入 nprogress.css
yarn add nprogress
```

### 项目配置redux
```
# 安装依赖

"redux": "^4.0.1"
"react-redux": "^7.0.3"
"redux-thunk": "^2.3.0"
```