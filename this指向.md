###this 指向专题

this:当前函数执行的主体:
 > 函数外面的this是window,我们一般研究的是函数内部的this
 > this 是谁和函数在哪定义和在哪执行都没关系

  ```javascript
    
     function fn(){
       console.log(this)
     }

     function sum(){
       fn()
     }

  [答案:window]


   function fn(){
       console.log(this)
   }


   fn()
   [答案:window]

   
   function fn(){
       console.log(this)
   }


   ~function(){
      fn()
   }()

   [答案:window]



var obj={
    name:"zf",
    fn:function(){
      console.log(this)
    }
}

obj.fn()

答案:obj

var obj={
    name:"zf",
    fn:function(){
      console.log(this)
    }
}

var f=obj.fn;
f();

答案:window


  ```

###this的几条规律: 

在js非严格模式下,this的几条规律:

 `this是谁跟方法在哪定义在哪执行无关,只跟方法执行的主体有关`

> 1.自执行函数里面的this一般都是"window"

```javascript
  
var obj={
    name:"zf",
    fn:~function(){
      //对象数据类型的,先开一个堆内存,存属性名值,在存的时候此时还没给fn赋值,此时的this是window
      console.log(this)
      return function(){
         //这个里面的this 就看是谁调用fn
      }
    }()
}

答案:window
```

> 2.当给元素绑定一个事件的时候,当事件触发相应方法,方法里面的this一般情况下就是绑定的元素

```javascript

   el.onclick=function(){
     //this======el
   }
```

> 3.当方法执行,看方法名前面是否有点,有点,点前面是谁,this就是谁,没有this一般都是window


在js严格模式下this的指向:
 
  > 开启严格模式:在当前作用域第一行加字符串:"use strict",那么当前作用域下的js代码就是按照严格模式处理的

  ```javascript
     
    ~function(){
      "use strict"
      //只在这个私有作用域中开启了严格模式,外面的代码不受影响
    }()
  ``` 

> 1.在js严格模式下,当函数执行主体不明确的时候,this 指向"undefined",非严格模式,this指向"window"

```javascript

   function fn(){
     console.log("this")
   }

  fn() 
  
  答案:window

 function fn(){
     console.log("this")
   }

  window.fn() 

 答案:window


```
如果在上面的例子加上 "use strict",在严格模式下,上面的答案分别是:"undefined","window"

>  接下来就让我们测试下是否真的掌握了this?

```javascript

   function fn(){
     console.log("this")
   }

  document.body.onclick=function(){
      
       fn()
  }
    
  //输出答案:window

```

360 面试题:

```javascript

   var num=1;
   obj={
      num:2,
      fn:(function(num){
       this.num*=2;
       num+=2;
       return function(){
           this.num*=3;
           num++;
           console.log(num)
       }
      })(num) 
   }
var fn=obj.fn;
fn();
obj.fn();
console.log(num,obj.num)
    
答案:4,5,6,6


```

![](/360.png)

































