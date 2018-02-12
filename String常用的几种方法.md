##字符串常用的方法##

1.str.substr(n,m)//从索引n 开始截取m个字符

2.str.substring(n,m)//从索引n 开始截取到索引m(不包括m)的字符

3.str.slice(n,m)//同上,只不过支持负数索引

4.str.split()//按照指定的分隔符将字符串转为数组

5.str.indexOf() /str.lastIndexOf//看字符串是否包含某一个字符

6.str.replace()// 按条件查找字符,并替换字符

>
     let str="ajinga";
     let newstr=str.replace("a","哈");
     console.log(newstr)==="哈jinga"  
     上面的方式只能替换一个,如果想要替换所有得连续str.replace("a","哈").replace("a","哈").
     里面放一个正则变可以变的更简单就解决了上面的问题:
     let newstr=str.replace(/a/g,"哈");
     console.log(newstr) ===="哈jing哈"

     
>

7.str.toUpperCase();

8.str.toLowerCase();

9.str.charAt(index) //查找某个索引所对应的字符

> 
    let str="jing";
    str.charAt(0)===="j"
>
10.str.charCodeAt(index)//查找字符串中索引对应的字符的unicode编码


11.str.match() //返回正则匹配的字符