### 一、效果图 
![verify-code-input-normal.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3c87d69222ab4b009ad5b94bef93c057~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1120&h=100&s=2258&e=png&b=ffffff)
![verify-code-input-select.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19ba8e0a3be042d19aacc8fc9bcaf274~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1120&h=100&s=2326&e=png&b=ffffff)
### 二、实现思路
1. 根据count属性设置小正方形框的数量
2. 一个input标签采用相对布局方式覆盖在小正方形框上(z-index: 1)，并且设置隐藏(opacity: 0)
3. 监听input标签onChange事件，获取输入的值设置到小正方形框里面，并且回调onChange
4. 当输入的值大约或者等于count属性。回调onComplete(输入完成)