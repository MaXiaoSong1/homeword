<template>
  <div class="home">
    <el-button type="primary" @click="getCheckList">测试</el-button>
    <ma-Table
      init-request
      @onLoad="onLoad"
      :check-list.sync="checkList"
      :column="column"
      index
      checkbox
      :data="data_1"
      :params="params_1"
      url="/name/"
      method="post"
    >
      <template v-slot:operation="slot">
        <yang-button type="primary" @click="handleEdit(slot.data)"
          >编辑</yang-button
        >
        <yang-button type="danger" @click="handleDelete(slot.data)"
          >删除</yang-button
        >
        <yang-button type="success" @click="handleEdit(slot.data)"
          >编辑</yang-button
        >
        <yang-button type="warning" @click="handleDelete(slot.data)"
          >删除</yang-button
        >
      </template>
    </ma-Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      column: [
        {
          label: "姓名",
          prop: "name",
        },
        {
          label: "创建时间",
          prop: "create_date",
          sort: true,
          sortBy: "a.xx",
        },
        {
          label: "广告图片",
          prop: "url",
          type: "image",
        },
        {
          label: "操作",
          type: "slot",
          slot_name: "operation",
          prop: "operation",
        },
      ],
      data_1: {
        name: "jack",
      },
      params_1: {
        name: "rose",
      },
      checkList: [],
    };
  },
  components: {
    yangButton: () => import("../components/button/index.vue"),
    maTable: () => import("../components/table/index.vue"),
  },
  watch: {
    checkList: {
      handler(val) {
        console.log(val, "1");
      },
      deep: true,
    },
  },
  methods: {
    getCheckList() {
      console.log(this.checkList);
    },
    handleEdit(row) {
      console.log(row);
    },
    handleDelete(row) {
      console.log(row);
    },
    onLoad(data) {
      console.log(data);
    },
    formatData(data) {
      const tableData = data.data;
      tableData.forEach((item) => {
        item.gender = item.gender === "男" ? 1 : 0;
      });
      return tableData;
    },
  },
};
</script>

<style lang="scss" scoped></style>
