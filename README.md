# Nodejs
以前学过一些，现在忘了，系统的再学一下，从基本使用到 express 再到 koa，koa2...

### express
express 框架，一些 api 可以参考 [Express中文网](http://expressjs.com/zh-cn/4x/api.html#req.cookies)
- 依赖中间件，和 `wordpress` 一样，依赖插件，这里面叫做中间件
- 接受请求
- - get  post  use
- 非破坏式的，添加了一些自己的东西
- static 用法 `require('express-static')`
- 链式操作 next
- 可以自己写一个中间件，看 `express2.js` 和 `lib/bodyParser.js`

```js
//                      d*##$.
// zP"""""$e.           $"    $o
//4$       '$          $"      $
//'$        '$        J$       $F
// 'b        $k       $>       $
//  $k        $r     J$       d$
//  '$         $     $"       $~
//   '$        "$   '$E       $
//    $         $L   $"      $F ...
//     $.       4B   $      $$$*"""*b
//     '$        $.  $$     $$      $F
//      "$       R$  $F     $"      $
//       $k      ?$ u*     dF      .$
//       ^$.      $$"     z$      u$$$$e
//        #$b             $E.dW@e$"    ?$
//         #$           .o$$# d$$$$c    ?F
//          $      .d$$#" . zo$>   #$r .uF
//          $L .u$*"      $&$$$k   .$$d$$F
//           $$"            ""^"$$$P"$P9$
//          JP              .o$$$$u:$P $$
//          $          ..ue$"      ""  $"
//         d$          $F              $
//         $$     ....udE             4B
//          #$    """"` $r            @$
//           ^$L        '$            $F
//             RN        4N           $
//              *$b                  d$
//               $$k                 $F
//               $$b                $F
//                 $""               $F
//                 '$                $
//                  $L               $
//                  '$               $
//                   $               $
```
