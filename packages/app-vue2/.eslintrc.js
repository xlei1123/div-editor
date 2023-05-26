module.exports = {
    root: true,   //root 限定配置文件的使用范围 不再向上搜索
    parserOptions: {  //指定你想要支持的 JavaScript 语言选项
        parser: 'babel-eslint',  //默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器
        sourceType: 'module',    //"script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)
        ecmaFeatures: {   //表示你想使用的额外的语言特性
            jsx: true                   ////支持jsx 请注意，对 JSX 语法的支持不用于对 React 的支持。React 使用了一些特定的 ESLint 无法识别的 JSX 语法。如果你正在使用 React 并且想要 React 语义支持，我们推荐你使用 eslint-plugin-react。
        }
    },
    env: {
        browser: true,
        node: true //
    },
    rules: {
        "indent": [0, 4],          //错误级别是error 4个空格
        "quotes": [0, "double"],   //错误级别是error 引号必须是双引号
        "semi": [0, "always"],     //错误级别是error 必须要有分号结束
        "no-console": "off",            //可不可以使用console  0或者"off" == 关闭规则; 1或者"warn" == 将规则视为警告; 2或者"error" == 将规则视为一个错误
        "arrow-parens": 2               //强制箭头函数的参数使用圆括号括起来 0 == 表示关闭
    }
}