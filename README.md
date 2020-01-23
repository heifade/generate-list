# 安装

```sh
npm i generate-list
```

# 用法

```ts
import { generateList } from "generate-list";

generateList(2); // [undefined, undefined]
generateList(2, i => ""); // ["", ""]
generateList(2, i => 0); // [0, 0]
generateList(2, i => i); // [0, 1]
generateList(2, i => ({ index: i })); // [{index: 0}, {index: 1}]
```
