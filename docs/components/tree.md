# Tree 树

## 实例

<script setup>
import { ref } from 'vue'

function generateTree(currentLevel, broad, depth, parent = '') {
   const levelGenerated = [...Array(broad).keys()].map(i => {
        return {
            cnName: `${parent ? `${parent}-`: ''}${i+1}`,
            cnValue: `${parent ? `${parent}-`: ''}${i+1}`,
            child: currentLevel < depth 
                        ? 
                        generateTree(currentLevel + 1, broad, depth, `${parent ? `${parent}-`: ''}${i+1}`)
                        :
                        []
        }
   })

   return levelGenerated

}

const val = ref(generateTree(1,3,3))
</script>

### 不同主题

:::components
```html
<MtTree :data="val" :mapped="{ label: 'cnName', value: 'cnValue', children: 'child'}"/>
```
:::