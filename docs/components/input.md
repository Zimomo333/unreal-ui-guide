# Input 输入框

通过鼠标或键盘输入字符

## 基础用法


```html
<ur-input v-model="input" placeholder="请输入内容"></ur-input>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  setup() {
    return {
      input: ref('')
    }
  }
})
</script>
```


## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件
```html
<ur-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="true">
</ur-input>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  setup() {
    return {
      input: ref('')
    }
  }
})
</script>
```

## 可清空

使用`clearable`属性即可得到一个可清空的输入框

```html
<ur-input
  placeholder="请输入内容"
  v-model="input"
  clearable>
</ur-input>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  setup() {
    return {
      input: ref('')
    }
  }
})
</script>
```

## 密码框

使用`show-password`属性即可得到一个可切换显示隐藏的密码框

```html
<ur-input placeholder="请输入密码" v-model="input" show-password></ur-input>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  setup() {
    return {
      input: ref('')
    }
  }
})
</script>
```

## 文本域

用于输入多行文本信息，通过将 `type` 属性的值指定为 textarea。

文本域高度可通过 `rows` 属性控制
```html
<ur-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</ur-input>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  setup() {
    return {
      textarea: ref('')
    }
  }
})
</script>
```

## 可自适应文本高度的文本域

通过设置 `autosize` 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 `autosize` 还可以设定为一个对象，指定最小行数和最大行数。


```html
<ur-input
  type="textarea"
  autosize
  placeholder="请输入内容"
  v-model="textarea1">
</ur-input>
<div style="margin: 20px 0;"></div>
<ur-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="请输入内容"
  v-model="textarea2">
</ur-input>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  setup() {
    return {
      textarea1: ref(''),
      textarea2: ref('')
    }
  }
})
</script>
```

## 复合型输入框

可前置或后置元素，一般为标签或按钮

可通过 slot 来指定在 input 中前置或者后置内容。

```html
<div>
  <ur-input placeholder="请输入内容" v-model="input1">
    <template #prepend>Http://</template>
  </ur-input>
</div>
<div style="margin-top: 15px">
  <ur-input placeholder="请输入内容" v-model="input2">
    <template #append>.com</template>
  </ur-input>
</div>
<div style="margin-top: 15px">
  <ur-input
    placeholder="请输入内容"
    v-model="input3"
    class="input-with-select"
  >
    <template #prepend>密码</template>
    <template #append>
      <ur-button>提交</ur-button>
    </template>
  </ur-input>
</div>

<style>
  .ur-select .ur-input {
    width: 130px;
  }
  .input-with-select .ur-input-group__prepend {
    background-color: #fff;
  }
</style>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  setup() {
    return {
      input1: ref(''),
      input2: ref(''),
      input3: ref(''),
      select: ref('')
    }
  }
})
</script>
```

## 输入长度限制

 `maxlength` 和 `minlength` 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 `text` 或 `textarea` 的输入框，在使用 `maxlength` 属性限制最大输入长度的同时，可通过设置 `show-word-limit` 属性来展示字数统计。
```html
<ur-input
  type="text"
  placeholder="请输入内容"
  v-model="text"
  maxlength="10"
  show-word-limit
>
</ur-input>
<div style="margin: 20px 0;"></div>
<ur-input
  type="textarea"
  placeholder="请输入内容"
  v-model="textarea"
  maxlength="30"
  show-word-limit
>
</ur-input>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent ({
  setup() {
    return {
      text: ref(''),
      textarea: ref('')
    }
  }
})
</script>
```

## Input Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 类型   | string  | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text |
| modelValue / v-model | 绑定值           | string / number  | — | — |
| maxlength     | 原生属性，最大输入长度      | number          |  —  | — |
| minlength     | 原生属性，最小输入长度      | number          | — | — |
| show-word-limit | 是否显示输入字数统计，只在 `type = "text"` 或 `type = "textarea"` 时有效 | boolean    |  —  | false |
| placeholder   | 输入框占位文本    | string          | — | — |
| clearable     | 是否可清空        | boolean         | — | false |
| show-password | 是否显示切换密码图标| boolean         | — | false |
| disabled      | 禁用            | boolean         | — | false   |
| rows          | 输入框行数，只对 `type="textarea"` 有效  |  number | — |  2   |
| autosize      | 自适应内容高度，只对 `type="textarea"` 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }  |  boolean / object | — |  false   |
| autocomplete | 原生属性，自动补全 | string | on, off | off |
| name | 原生属性 | string | — | — |
| readonly | 原生属性，是否只读 | boolean | — | false |
| max | 原生属性，设置最大值 | — | — | — |
| min | 原生属性，设置最小值 | — | — | — |
| step | 原生属性，设置输入字段的合法数字间隔 | — | — | — |
| resize | 控制是否能被用户缩放 | string | none, both, horizontal, vertical | — |
| autofocus | 原生属性，自动获取焦点 | boolean | true, false | false |
| form | 原生属性 | string | — | — |

## Input Slots
| name | 说明 |
|------|--------|
| prefix | 输入框头部内容，只对 `type="text"` 有效 |
| suffix | 输入框尾部内容，只对 `type="text"` 有效 |
| prepend | 输入框前置内容，只对 `type="text"` 有效 |
| append | 输入框后置内容，只对 `type="text"` 有效 |

## Input Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string \| number) |
| input | 在 Input 值改变时触发 | (value: string \| number) |
| clear | 在点击由 `clearable` 属性生成的清空按钮时触发 | — |

## Input Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | — |
| blur | 使 input 失去焦点 | — |
| select | 选中 input 中的文字 | — |