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
  ```
   