# StickyCard

## 实例

::: components
```html
<MtStickyCard expandText="弹出" collapseText="收起">
    <div style="height:40px;background:#ffd412;">
    </div>
    <template #source>
        <div style="height:100px; background: #ff6d1f;">
        </div>
    </template>
</MtStickyCard>
```
:::

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|expandText|展开提示字|string|—— |展开|
|collapseText|收起提示字|string|—— |折叠|
|autoExpand|默认展开|Boolean|true false |true|
|onExpand|展开事件|ChangeHandler|—— |——|
|onCollapse|折叠事件|ChangeHandler|—— |——|

