<template>
  <div class="f-container">
    <div>
      <el-form
        :model="prjectForm"
        :rules="projectRule"
        ref="newProject"
        label-width="80px"
        label-position="left"
      >
        <el-form-item label="项目logo" prop="logoimg"> </el-form-item>
        <el-form-item label="项目名称" prop="name">
          <el-input v-model="prjectForm.name"></el-input>
        </el-form-item>
        <el-form-item label="所属领域" prop="field">
          <el-radio-group v-model="prjectForm.field">
            <el-radio v-for="field in fieldList" :key="field.id" :label="field.name" ></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="项目概述" prop="abstract">
          <el-input
            type="textarea"
            :rows="10"
            v-model="prjectForm.abstract"
          ></el-input>
        </el-form-item>
        <el-form-item label="项目阶段" prop="phase">
          <el-radio-group v-model="prjectForm.phase">
            <el-radio v-for="phase in phaseList" :key="phase.id" :label="phase.name"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="需要融资" prop="financing">
          <el-radio-group v-model="prjectForm.financing">
            <el-radio label="true">是</el-radio>
            <el-radio label="fasle">否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getProjectField, getProjectPhase } from "@/api/getJson.js";
export default {
  name: "CreateProject",
  data() {
    return {
      fieldList: [],
      phaseList: [],
      prjectForm: {
        logoImg: "",
        name: "创新测试",
        field: "001",
        abstract: `项目简介一、新颖全面且线上线下深度融合，出行是人类活动的刚需。
        二、“微校通”是利用现代信息技术实现家庭与学校快捷、实时沟通的教育网络平台。
        是一套可以有效解决老师和家长之间沟通，帮助孩子健康成长的、集先进的计算机技
        术和无线通信技术于一体的信息交流系统。三、他可以让家长每天都能了解到自己孩子
        在学校的情况，也可以让家长随时、随地的向老师提出建议或反映孩子在家里的表现。
        他充分调动社会教育资源，利用现代信息技术架起学校、家庭之间实时、快捷、有效沟
        通的桥梁，形成社会、学校、家庭和谐共育的局面，促进学生健康成长。`,
        phase: "001",
        financing: false,
      },
      projectRule: [],
    };
  },
  components: {},

  watch: {},

  created() {
    this.getFieldList();
    this.getPhaseList();
  },

  methods: {
    async getFieldList() {
      let field = await getProjectField(this);
      if (field) {
        this.fieldList = field
      }
    },
    async getPhaseList() {
      let phase = await getProjectPhase(this);
      if (phase) {
        this.phaseList = phase
      }
    }
  },
};
</script>

<style scoped lang="scss">
</style>
