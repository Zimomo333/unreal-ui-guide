# 表格 Table

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 基础表格

基础的表格展示用法。

当`ur-table`元素中注入`data`对象数组后，在`ur-table-column`中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。
```html
  <template>
    <ur-table
      :data="tableData"
      style="width: 100%">
      <ur-table-column
        prop="date"
        label="日期"
        width="180">
      </ur-table-column>
      <ur-table-column
        prop="name"
        label="姓名"
        width="180">
      </ur-table-column>
      <ur-table-column
        prop="address"
        label="地址">
      </ur-table-column>
    </ur-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
  </script>
```

## 带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

`stripe`属性可以创建带斑马纹的表格。它接受一个`Boolean`，默认为`false`，设置为`true`即为启用。

```html
<template>
  <ur-table
    :data="tableData"
    stripe
    style="width: 100%">
    <ur-table-column
      prop="date"
      label="日期"
      width="180">
    </ur-table-column>
    <ur-table-column
      prop="name"
      label="姓名"
      width="180">
    </ur-table-column>
    <ur-table-column
      prop="address"
      label="地址">
    </ur-table-column>
  </ur-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>
```

## 带边框表格

默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用`border`属性，它接受一个`Boolean`，设置为`true`即可启用。
```html
<template>
  <ur-table
    :data="tableData"
    border
    style="width: 100%">
    <ur-table-column
      prop="date"
      label="日期"
      width="180">
    </ur-table-column>
    <ur-table-column
      prop="name"
      label="姓名"
      width="180">
    </ur-table-column>
    <ur-table-column
      prop="address"
      label="地址">
    </ur-table-column>
  </ur-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>
```

## 固定表头

纵向内容过多时，可选择固定表头。

只要在`ur-table`元素中定义了`height`属性，即可实现固定表头的表格，而不需要额外的代码。
```html
<template>
  <ur-table
    :data="tableData"
    height="250"
    border
    style="width: 100%">
    <ur-table-column
      prop="date"
      label="日期"
      width="180">
    </ur-table-column>
    <ur-table-column
      prop="name"
      label="姓名"
      width="180">
    </ur-table-column>
    <ur-table-column
      prop="address"
      label="地址">
    </ur-table-column>
  </ur-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>
```

## 固定列

横向内容过多时，可选择固定列。

固定列需要使用`fixed`属性，它接受 Boolean 值或者`left` `right`，表示左边固定还是右边固定。
```html
<template>
  <ur-table
    :data="tableData"
    border
    style="width: 100%">
    <ur-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </ur-table-column>
    <ur-table-column
      prop="name"
      label="姓名"
      width="120">
    </ur-table-column>
    <ur-table-column
      prop="province"
      label="省份"
      width="120">
    </ur-table-column>
    <ur-table-column
      prop="city"
      label="市区"
      width="120">
    </ur-table-column>
    <ur-table-column
      prop="address"
      label="地址"
      width="600">
    </ur-table-column>
    <ur-table-column
      prop="zip"
      label="邮编"
      width="120">
    </ur-table-column>
    <ur-table-column
      fixed="right"
      label="操作"
      width="100">
      <template #default="scope">
        <ur-button @click="handleClick(scope.row)" type="text" size="small">查看</ur-button>
        <ur-button type="text" size="small">编辑</ur-button>
      </template>
    </ur-table-column>
  </ur-table>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
      }
    }
  }
</script>
```

## 多选

要选择多行数据，可设`type`属性为`selection`。
```html
<template>
  <ur-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <ur-table-column
      type="selection"
      width="55">
    </ur-table-column>
    <ur-table-column
      label="日期"
      width="120">
      <template #default="scope">{{ scope.row.date }}</template>
    </ur-table-column>
    <ur-table-column
      prop="name"
      label="姓名"
      width="120">
    </ur-table-column>
    <ur-table-column
      prop="address"
      label="地址">
    </ur-table-column>
  </ur-table>
  <div style="margin-top: 20px">
    <ur-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</ur-button>
    <ur-button @click="toggleSelection()">取消选择</ur-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
```

## 排序

对表格进行排序，可快速查找或对比数据。

在列中设置`sortable`属性即可实现以该列为基准的排序，接受一个`Boolean`，默认为`false`。可以通过 Table 的`default-sort`属性设置默认的排序列和排序顺序。可以使用`sort-method`或者`sort-by`使用自定义的排序规则。
```html
<template>
  <ur-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <ur-table-column
      prop="date"
      label="日期"
      sortable
      width="180">
    </ur-table-column>
    <ur-table-column
      prop="name"
      label="姓名"
      sortable
      width="180">
    </ur-table-column>
    <ur-table-column
      prop="address"
      label="地址"
      :formatter="formatter">
    </ur-table-column>
  </ur-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>
```

## 自定义列

使用插槽，可组合其他组件自定义列的显示内容。

```html
<template>
  <ur-table
    :data="tableData"
    style="width: 100%">
    <ur-table-column
      label="日期"
      width="180">
      <template #default="scope">
        <i class="ur-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </ur-table-column>
    <ur-table-column
      label="姓名"
      width="180">
      <template #default="scope">
        <ur-popover effect="light" trigger="hover" placement="top">
          <template #default>
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
          </template>
          <template #reference>
            <div class="name-wrapper">
              <ur-tag size="medium">{{ scope.row.name }}</ur-tag>
            </div>
          </template>
        </ur-popover>
      </template>
    </ur-table-column>
    <ur-table-column label="操作">
      <template #default="scope">
        <ur-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</ur-button>
        <ur-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</ur-button>
      </template>
    </ur-table-column>
  </ur-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
```

## 展开行

当行内容过多时，可以使用 Table 展开行功能。
通过设置 type="expand" 和插槽可以开启展开行功能，`ur-table-column` 的插槽会被渲染成为展开行的内容。

```html
<template>
  <ur-table
    :data="tableData"
    style="width: 100%">
    <ur-table-column type="expand">
      <template #default="props">
        <ur-form labur-position="left" inline class="demo-table-expand">
          <ur-form-item label="商品名称">
            <span>{{ props.row.name }}</span>
          </ur-form-item>
          <ur-form-item label="所属店铺">
            <span>{{ props.row.shop }}</span>
          </ur-form-item>
          <ur-form-item label="商品 ID">
            <span>{{ props.row.id }}</span>
          </ur-form-item>
          <ur-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </ur-form-item>
          <ur-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </ur-form-item>
          <ur-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </ur-form-item>
          <ur-form-item label="商品描述">
            <span>{{ props.row.desc }}</span>
          </ur-form-item>
        </ur-form>
      </template>
    </ur-table-column>
    <ur-table-column
      label="商品 ID"
      prop="id">
    </ur-table-column>
    <ur-table-column
      label="商品名称"
      prop="name">
    </ur-table-column>
    <ur-table-column
      label="描述"
      prop="desc">
    </ur-table-column>
  </ur-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .ur-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
      }
    }
  }
</script>
```

## Table 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | 显示的数据 | array | — | — |
| height | 表格的高度，默认为自动高度，可用于固定表头 | string/number | — | — |
| stripe | 是否为斑马纹 table | boolean | — | false |
| border | 是否带有纵向边框 | boolean | — | false |
| row-key | 行数据的 Key | Function(row)/String | — | — |
| empty-text | 空数据时显示的文本内容 | String | — | 暂无数据 |
| default-expand-all | 是否默认展开所有行，当表格包含展开行时有效 | Boolean | — | false |
| expand-row-keys | 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。| Array | — | |
| default-sort | 默认的排序列的 prop 和顺序。它的`prop`属性指定默认的排序的列，`order`指定默认排序的顺序| Object | `order`: ascending, descending | 如果只指定了`prop`, 没有指定`order`, 则默认顺序是ascending |

## Table 事件
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| select | 当用户手动勾选数据行的 Checkbox 时触发的事件 | selection, row |
| select-all | 当用户手动勾选全选 Checkbox 时触发的事件 | selection |
| selection-change | 当选择项发生变化时会触发该事件 | selection |
| row-click | 当某一行被点击时会触发该事件 | row, column, event |
| sort-change | 当表格的排序条件发生变化的时候会触发该事件 | { column, prop, order } |
| current-change | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 | currentRow, oldCurrentRow |
| expand-change  | 当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded） | row, (expandedRows \| expanded) |

## Table 方法
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| clearSelection | 用于多选表格，清空用户的选择 | — |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） | row, selected |
| toggleAllSelection | 用于多选表格，切换全选和全不选 | - |
| toggleRowExpansion | 用于可展开表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开） | row, expanded |
| setCurrentRow | 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。 | row |
| clearSort | 用于清空排序条件，数据会恢复成未排序的状态 | — |
| sort | 手动对 Table 进行排序。参数`prop`属性指定排序列，`order`指定排序顺序。 | prop: string, order: string |

## Table-column 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 对应列的类型。selection` 显示多选框； `index` 显示该行索引； `expand` 显示一个可展开的按钮 | string | selection /index / expand | — |
| index | 如果设置了 `type=index`，可以通过传递 `index` 属性来自定义索引 | number, Function(index) | - | - |
| label | 对应列的表头名 | string | — | — |
| prop | 对应列内容的字段名，也可以使用 property 属性 | string | — | — |
| width | 对应列的宽度 | string | — | — |
| fixed | 列是否固定在左侧或者右侧，true 表示固定在左侧 | string, boolean | true, left, right | — |
| sortable | 对应列可否排序 | boolean, string | true, false | false |
| sort-method | 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致 | Function(a, b) | — | — |
| sort-by | 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推 | String/Array/Function(row, index) | — | — |
| sort-orders | 数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序 | array | `ascending` 表示升序，`descending` 表示降序，`null` 表示还原为原始顺序 | ['ascending', 'descending', null] |
| resizable | 对应列是否可以通过拖动改变宽度（需要在 ur-table 上设置 border 属性为真） | boolean | — | true |
| formatter | 格式化内容 | Function(row, column, cellValue, index) | — | — |
| selectable | 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 | Function(row, index) | — | — |

## Table-column Scoped 插槽
| name | 说明 |
|------|--------|
| — | 自定义列的内容，参数为 { row, column, $index } |
| header | 自定义表头的内容. 参数为 { column, $index } |