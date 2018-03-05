### toStirng

每一个数据类型都有toString方法
 > 1.null和undefined也是内置toString方法的,但是我们自己不能手动的操作,它都是在各种表达式中自己自动的进行转换的
  
    (null).toString()/(undefined).toString() ->Uncaught TypeError: Cannot read property 'toString' of undefined (不允许我们调)
    console.log("zhufeng" + undefined);//->"zhufengundefined" (自己默认的会把undefined转换为字符串)

 >  2.除了用对象({})的toString不是直接的转换为字符串,其余的都是把自己的值转换为了字符串

 >({name:'zhufeng'}).toString() ->结果不是想象中的"{name:'zhufeng'}" 而是"[object Object]"

 > 在Object的原型上定义的toString方法,不是单纯的转换为字符串,而是返回实例所属的类的信息,例如:"[object(固定) Object(所属的类)]"

    //var obj = {name: 'zhufeng'};
    //obj.toString() - > 让Object的原型上的toString方法执行, 方法中的this是obj, 而返回的是obj所属类的信息"[object Object]"
    //->其实toString执行的时候时候是把自己方法中的this对应的所属类的信息返回

> `所以可以用 Object.prototype.toString.call()来检测数据类型`

```javascript
Object.prototype.toString.call([])
"[object Array]"
Object.prototype.toString.call('123')
"[object String]"
Object.prototype.toString.call(123)
"[object Number]"
Object.prototype.toString.call(null)
"[object Null]"
Object.prototype.toString.call(undefined)
"[object Undefined]"
Object.prototype.toString.call(function(){})
"[object Function]"
var obj={"name":"lili"}
undefined
obj.toString()
"[object Object]"

Object.prototype.toString.call(/^\d$/)
"[object RegExp]"

```

利用Object.prototype.toString.call() 来封装isType 的方法检测某一个值是不是特定的数据类型.


```javascript

function isType(value,className){
       var val=Object.prototype.toString.call(value);
       return val==="[object "+className+"]"
    }

```