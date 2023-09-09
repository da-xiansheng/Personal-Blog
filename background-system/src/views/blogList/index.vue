<template>
  <div class="app-container">
    <el-table :data="data" style="width: 100%" border>
      <el-table-column prop="date" label="序号" width="60" align="center">
        <template slot-scope="scope">{{
          scope.$index + (currentPage - 1) * eachPage + 1
        }}</template>
      </el-table-column>

      <el-table-column prop="title" label="文章名称" width="250" align="center">
        <template slot-scope="scope">
          <el-popover
            placement="top-start"
            title="博客预览图"
            width="230"
            trigger="hover"
          >
            <el-image
              style="width: 200px"
              :src="scope.row.thumb"
              fit="contain"
              :preview-src-list="srcList"
            ></el-image>
            <a
              href="#"
              target="_blank"
              @click="goToTitleHandle(scope.row)"
              slot="reference"
              >{{ scope.row.title }}</a
            >
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column prop="title" label="文章描述" width="450" align="center">
        <template slot-scope="scope">{{ scope.row.description }}</template>
      </el-table-column>

      <el-table-column prop="title" label="浏览数" align="center">
        <template slot-scope="scope">{{ scope.row.scanNumber }}</template>
      </el-table-column>

      <el-table-column prop="title" label="评论量" align="center">
        <template slot-scope="scope">{{ scope.row.commentNumber }}</template>
      </el-table-column>

      <el-table-column prop="title" label="所属分类" align="center">
        <template slot-scope="scope">{{
          scope.row.category === null ? "未分类" : scope.row.category.name
        }}</template>
      </el-table-column>

      <el-table-column prop="title" label="创建日期" width="230" align="center">
        <template slot-scope="scope">{{ scope.row.createDate }}</template>
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-tooltip
            class="item"
            effect="dark"
            content="编辑"
            placement="top"
            :hide-after="1000"
          >
            <el-button
              type="primary"
              icon="el-icon-edit"
              circle
              size="mini"
              @click="editBlogHandle(scope.row)"
            ></el-button>
          </el-tooltip>

          <el-tooltip
            class="item"
            effect="dark"
            content="删除"
            placement="top"
            :hide-after="1000"
          >
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              size="mini"
              @click="deleteBlog(scope.row)"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      style="margin-top: 30px"
      background
      layout="prev, pager, next, total, ->, jumper, sizes"
      :total="count"
      :current-page.sync="pagerCurrentPage"
      :page-size="eachPage"
      :page-sizes="[5, 10, 20]"
      @size-change="sizeChangeHandle"
      @current-change="currentChangeHandle"
      @prev-click="prevClickHandle"
      @next-click="nextClickHandle"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getBlog, delOneBlog } from "@/api/blog.js";
import { formatDate } from "@/utils/tools.js";
import { frontEnd_URL } from "@/urlConfig.js";
export default {
  data() {
    return {
      data: [],
      srcList: [], //预览图链接数组
      eachPage: 10, //每页显示多少数据
      currentPage: 1, //当前页码，默认进来是第一页
      totalPage: 0, //总页数
      count: 0, //数据总条数
      pagerCurrentPage: 1, //分页栏当前页码
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      getBlog(this.currentPage, this.eachPage).then(({ data }) => {
        this.data = data.rows;
        for (let i of this.data) {
          i.createDate = formatDate(i.createDate);
          // i.thumb = server_URL + i.thumb;
          this.srcList.push(i.thumb);
        }
        this.count = data.total;
        this.totalPage = Math.ceil(this.count / this.eachPage);
        if (this.currentPage > this.totalPage) {
          this.currentPage = this.totalPage;
          this.fetchData();
        }
      });
    },
    //跳转到具体的文章
    goToTitleHandle(blogInfo) {
      window.open(`${frontEnd_URL}/article/${blogInfo.id}`);
    },
    //删除文章
    deleteBlog(blogInfo) {
      this.$confirm(
        "删除该文章后, 该文章相关的所有评论也会一并删除, 是否继续?",
        "是否删除此篇文章",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(() => {
          delOneBlog(blogInfo.id).then(() => {
            this.fetchData();
            this.$message({
              type: "success",
              message: "删除成功!",
              center: true,
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
            center: true,
          });
        });
    },
    //编辑文章
    editBlogHandle(blogInfo) {
      this.$router.push(`/editBlog/${blogInfo.id}`);
    },
    //分页相关事件
    sizeChangeHandle(pagerNum) {
      this.eachPage = parseInt(pagerNum);
      this.currentPage = 1;
      this.pagerCurrentPage = 1;
      this.fetchData();
    },
    currentChangeHandle(pageNum) {
      this.currentPage = parseInt(pageNum);
      this.fetchData();
    },
    prevClickHandle() {
      this.currentPage -= 1;
    },
    nextClickHandle() {
      this.currentPage += 1;
    },
  },
};
</script>

<style></style>
