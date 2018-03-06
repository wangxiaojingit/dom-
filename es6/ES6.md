### ES6

###使用Babel 编译ES6

> 一.下载安装Babel

> 环境:需要在自己的电脑上安装node(node中会自带nmp包管理器)

> npm install babel-cli -g (把模块安装在全局环境下,在任何的项目中都可以使用命令来编译我们的代码)

>npm uninstall babel-cli -g(卸载全局安装的babel)

>二.配置babelrc文件,安装一些语言解析包.

> 我们需要把babelrc 文件配置在当前项目的根目录下(这个文件没有文件名,后缀名是.babelrc)
   
>  a: 在电脑上不能直接创建没有文件名的文件,我们需要在webstrom 或者vs 或者使用命令创建.

>  b:.babelrc  这个后缀名在某些webstrom中有的是不识别的,它其实是一个json文件.我需要在webstrom中配置一下(让它隶属于json) .在setting中File Types 里找到 JSON 然后添加.babelrc

> 三: 在.bebelrc 中编写一些内容

```json
 {
 "presets":[],//存放的是我们编译代码时候需要依赖的语言解析包

  "plugins":[]//存放的是,我们编译代码时候需要依赖的插件信息
 }
```
> 四.安装依赖的语言解析包

> 在当前项目根目录下安装(不是安装在全局),需要注意的是:要在当前根目录下打开DOC 命令才行

> npm install babel-preset-latest (安装最新已经发布的语言标准模块)

> npm install babel-preset-stage-2 安装当前还没有发布但是已经进入草案的语言解析模块(如果你的代码中已经用到了发布非标准的语法)

> 安装完成之后,在当前项目的根目录会出现一个node_modules de 文件夹.在这个文件夹中有我们安装的模块.

> 完成最后.babelrc 文件的配置.

```json

{
  "presets":["latest","stage-2"],
  "plugins":[]

}
```

> 五.使用命令来编译代码

> 基本上所有支持命令操作的模块都有一个命令:

> babel --help / babel -h `查看帮助`

> babel --version /babel -V `查看版本号`

> babel --out-file /babel -o `把某一个js文件的Es6代码进行编译`

> babel --out-dir /babel -d `把某一个文件夹中所有的es6 代码进行编译`

> babel --watch /babel -w `监听文件中代码的改变,当文件中代码改变后会自动进行编译`

> 结束监听的操作: 按两次 ctrl+c

![](/es6.png)

### es6 常用语法

#####let 基础语法

> let 变量名=变量值

> 使用let创建的变量值和var 创建的变量区别

> 一.使用let 或者const 不存在变量提升

```javascript
   

   console.log(a)// a is not defined
   console.log(str) "undefined"
   console.log(sum) sum is not defined
   let a=123
   let str="123"
   let sum=function(){}

```
// => 创建变量

let xxx=xxx;

// => 创建函数

let xxx=function(){}

// => 自执行函数

;(function(){
 })()


> 二. 使用let 定义的变量不允许在同一个作用域中重复声明

  

```javascript
  
   var n=12;
   console.log(n);
  let c=13
  let c=16 

```
有重复声明,报错.此时前面的console.log(n)也没有执行.在js代码之前,就已经知道有重复声明的,浏览器依然存在类似变量提升的机制.在代码执行之前会把所有的变量过滤一遍.

> 三.let 声明的变量不可以重复声明,但可以重复定义.

```javascript
  let num=0;
  num=12;

```

```javascript
   
  "use strict"
  console.log(typeof num) //"undefined"

```
> 使用typeof 检测的时候不会报错,会返回"undefined"


```javascript
   
  "use strict"
  console.log(typeof num) 

  let num

```
>  四."暂时性死区"在es6 中检测一个没有被声明的变量,直接报错,再也不像es5中的typeof ** 的值是"undefined".



> 五.Es6 语法创建变量let 存在"块级作用域",而es5 中var/function 没有块级作用域.

> 我们可以把es6语法中的块级作用域看成是私有作用域,存在私有变量和作用域链的一些机制.es6语法中把大部分用`{}`包起来的都称为'块级作用域'.

> 以后少操作arguments[0],在严格模式下,不存在映射


```javascript

  if(true){
   let total=1
  }

  console.log(total) //会报错,'total is not defined'判断体中也是一个块级作用域.
```

```javascript
  
  for( let i=0;i<5;i++){
    console.log(i)
  }
  
  console.log(i) //会报错,for循环也是块级作用域.当前案例形成5个块级作用域,每一个块级作用域中都有一个私有变量i

```

```javascript

  try{
    let i=100
  }catch(e){
    let k=200
  }

 console.log(i,k) //try catch 也是块级作用域
```

```javascript
switch(){
  case 0:
   let i=0;
   break;
   ....
}

console.log(i)//报错
```
for in ,switch case 也是块级作用域


###const 声明一个常量的值

> const 声明一个常量,一旦赋值,值就不能改变.

### ES6 的解构赋值

> 按照原有值的结构,把原有值中的某一部分内容快速获取到.

```javascript

let [a,b,c]=[1,2,3];
console.log(a)//1
console.log(b)//2
console.log(c)//3

```

```javascript

[a,b,c]=[1,2,3];
console.log(a)//1
console.log(b)//2
console.log(c)//3

```



























