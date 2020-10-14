---
title: Input
---

# Input

::: slot code1

```html
<g-icon class="icon" name="setting"></g-icon>
<g-icon class="icon" name="left"></g-icon>
<g-icon class="icon" name="right"></g-icon>
<g-icon class="icon" name="up"></g-icon>
<g-icon class="icon" name="down"></g-icon>
<g-input v-model="message5"></g-input>
<br />
<span>value: {{ message5 }}</span>
```

```js
import Input from '../../../src/Input'
export default {
  components: {
    'g-input': Input,
  },
  data() {
    return {
      message1: '我是谁？',
      message2: '我在哪？',
      message3: '我在干嘛？',
      message4: 'Hello World',
      message5: 'Hello World',
      error: 'error message',
    }
  },
}
```

:::

<ClientOnly>
  <input-demo></input-demo>
</ClientOnly>
