<template>
<div class="topheader">
<el-row>
  <el-col :span="24" style="background-color: #324057;">
    <el-menu theme="dark" default-active="1" class="max-width" mode="horizontal" style="border-radius: 0;" :router="true">
      <el-menu-item route="/home">
        <h1 style="font-size:20px;color: #fff;">
        知了云社区
        <el-tag type="success">物业管理</el-tag>
        </h1>
      </el-menu-item>    
      <el-menu-item route="/home">切换社区</el-menu-item>
      
      <el-menu-item style="float:right;">
       <el-button type="danger"  icon="close" @click="logout">退出登录</el-button>
      </el-menu-item> 

      <el-menu-item route="/account" :index="7" style="float:right;">
      <i class="el-icon-setting"></i>
      xx物业</el-menu-item>       
    </el-menu>
  </el-col>
  <slot>
  <el-col :span="24"  style="background-color: #fff;">
    <el-menu class="max-width" mode="horizontal" :default-active="0" :router="true" style="background-color: #fff;border-radius: 0;">     
      <el-menu-item route="/community">
        <el-tag type="primary">四季全辉</el-tag>
      </el-menu-item>  

      <el-menu-item route="/opendoorlog" :index="2">
      <i class="el-icon-time"></i>
      开门记录</el-menu-item>

      <el-menu-item route="/device" :index="1">
      <i class="el-icon-loading"></i>
      设备监控</el-menu-item>  

      <el-menu-item route="/card" :index="3">
      <i class="el-icon-menu"></i>
      卡片管理</el-menu-item>

      <el-menu-item route="/member" :index="4">
      <i class="el-icon-star-off"></i>
      人员管理</el-menu-item>

      <el-menu-item route="/building" :index="5">
      <i class="el-icon-upload"></i>
      房屋管理</el-menu-item>

      <el-menu-item route="/notice" :index="6">
      <i class="el-icon-warning"></i>
      通知管理</el-menu-item>     

  </el-menu>
  </el-col>
  </slot>
</el-row>
</div>
</template>

<script>
export default {
  methods: {
    logout() {
      if (!window.localStorage) {
        console.log("浏览器不支持localstorage");
        this.$message.error({
          showClose: true,
          message: '请升级浏览器，推荐使用现代浏览器'
        });
      } else {
        let storage = window.localStorage;
        storage.clear();
        this.$message.success({
          showClose: true,
          message: '退出成功'
        });
        this.$router.push('/');
      }
    }
  },
};  

</script>

<style lang="css">
.topheader {
  margin-bottom: .2rem;
}
</style>