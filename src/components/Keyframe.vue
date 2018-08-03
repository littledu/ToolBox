<template>
    <div class="keyframe">
        <div class="h1">帧动画生成器</div>
        <el-row :gutter="20" class="keyframe__main">
            <el-col :span="14">
                <el-upload
                        class="upload-area"
                        name="piclists"
                        drag
                        action="http://127.0.0.1:8360/keyframe"
                        multiple
                        accept="png"
                        :showFileList=true
                        :on-success="successHandler"
                >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传png文件，且不超过500kb</div>
                </el-upload>
            </el-col>
            <el-col :span="10">

            </el-col>
        </el-row>

    </div>
</template>

<script>
  export default {
    name: 'Keyframe',
    data() {
      return {
        msg: ''
      }
    },
    methods: {
      successHandler(response, file, fileList){
        console.log(fileList)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    @import "../assets/css/keyframe.less";
</style>
