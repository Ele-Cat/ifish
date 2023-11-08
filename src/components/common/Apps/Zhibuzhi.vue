<template>
  <img :src="app.icon" alt="" @click.stop="dialogVisible = true">
  <IDialog title="这班上的值不值" :visible="dialogVisible" @ok="dialogVisible = false" @cancel="dialogVisible = false">
    <div class="zhibuzhi">
      <a-form
        ref="formRef"
        :model="formState"
        :rules="rules"
        :label-col="labelCol"
      >
        <template v-if="step === 1">
          <a-form-item label="平均日薪" name="averageDailySalary">
            <a-input-number :min="0" :max="999999" v-model:value="formState.averageDailySalary" placeholder="月薪/工作日（单位：元）" />
          </a-form-item>
          <a-form-item label="工作时长" name="workingHours">
            <a-input-number :min="0" :max="24" v-model:value="formState.workingHours" placeholder="上班时间-上班时间（单位：小时）" />
          </a-form-item>
          <a-form-item label="通勤时长" required name="commutingHours">
            <a-input-number :min="0" :max="24" v-model:value="formState.commutingHours" placeholder="上下班通勤时间（单位：小时）" />
          </a-form-item>
          <a-form-item label="摸鱼时长" name="fishingHours">
            <a-input-number :min="0" :max="24" v-model:value="formState.fishingHours" placeholder="摸鱼+吃饭+午休时间" />
          </a-form-item>
        </template>
        <template v-if="step === 2">
          <a-form-item label="学历" name="education">
            <a-select v-model:value="formState.education" allowClear placeholder="请选择">
              <a-select-option :value="item.value" v-for="item in educations" :key="item.value">{{item.label}}</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="工作环境" name="workEnvironment">
            <a-select v-model:value="formState.workEnvironment" allowClear placeholder="请选择">
              <a-select-option :value="item.value" v-for="item in workEnvironments" :key="item.value">{{item.label}}</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="同事颜值" name="colleagueAppearance">
            <a-select v-model:value="formState.colleagueAppearance" allowClear placeholder="请选择">
              <a-select-option :value="item.value" v-for="item in colleagueAppearances" :key="item.value">{{item.label}}</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="同事质量" name="colleagueQuality">
            <a-select v-model:value="formState.colleagueQuality" allowClear placeholder="请选择">
              <a-select-option :value="item.value" v-for="item in colleagueQualities" :key="item.value">{{item.label}}</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="职业资质" name="vocationalQualification">
            <a-select v-model:value="formState.vocationalQualification" allowClear placeholder="请选择">
              <a-select-option :value="item.value" v-for="item in vocationalQualifications" :key="item.value">{{item.label}}</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item label="上班时间" name="workHours">
            <a-select v-model:value="formState.workHours" allowClear placeholder="请选择">
              <a-select-option :value="item.value" v-for="item in workHours" :key="item.value">{{item.label}}</a-select-option>
            </a-select>
          </a-form-item>
        </template>
        <template v-if="step === 3">
          <div class="cost-performance-box">
            <p class="cost-performance">{{ costPerformance }}</p>
            <p class="tips">{{ costPerformanceTips }}</p>
            <p class="notes">低于0.8很惨，高于1.5很爽，高于2.0爽到爆</p>
          </div>
        </template>
        <a-row type="flex" :justify="step != 3 ? 'end' : 'center'">
          <template v-if="step === 1">
            <a-button type="primary" @click="handleNext">下一步</a-button>
          </template>
          <template v-if="step === 2">
            <a-button @click="step--">上一步</a-button>
            <a-button type="primary" @click="handleSeekResult" style="margin-left:12px;">查看结果</a-button>
          </template>
          <template v-if="step === 3">
            <a-button type="primary" @click="handleRecalculate">重新计算</a-button>
          </template>
        </a-row>
      </a-form>
    </div>
  </IDialog>
</template>

<script setup>
import { reactive, ref, toRaw } from 'vue';
import { educations, workEnvironments, colleagueAppearances, colleagueQualities, vocationalQualifications, workHours } from "@/utils/enums";
const props = defineProps({
  app: {
    type: Object,
    default: () => {},
  }
})

const dialogVisible = ref(false);
const step = ref(1);
const formRef = ref();
const labelCol = {
  span: 4,
};
const formState = reactive({
  averageDailySalary: undefined,
  workingHours: undefined,
  commutingHours: undefined,
  fishingHours: undefined,
  education: undefined,
  workEnvironment: undefined,
  colleagueAppearance: undefined,
  colleagueQuality: undefined,
  vocationalQualification: undefined,
  workHours: undefined,
});
const rules = {
  averageDailySalary: [
    { required: true, message: '请输入', trigger: ['change', 'blur'], },
  ],
  workingHours: [
    { required: true, message: '请输入', trigger: ['change', 'blur'], },
  ],
  commutingHours: [
    { required: true, message: '请输入', trigger: ['change', 'blur'], },
  ],
  fishingHours: [
    { required: true, message: '请输入', trigger: ['change', 'blur'], },
  ],
  education: [
    { required: true, message: '请选择', trigger: ['change', 'blur'], },
  ],
  workEnvironment: [
    { required: true, message: '请选择', trigger: ['change', 'blur'], },
  ],
  colleagueAppearance: [
    { required: true, message: '请选择', trigger: ['change', 'blur'], },
  ],
  colleagueQuality: [
    { required: true, message: '请选择', trigger: ['change', 'blur'], },
  ],
  vocationalQualification: [
    { required: true, message: '请选择', trigger: ['change', 'blur'], },
  ],
  workHours: [
    { required: true, message: '请选择', trigger: ['change', 'blur'], },
  ],
};
const handleNext = () => {
  formRef.value
    .validate(["averageDailySalary", "workingHours", "commutingHours", "fishingHours"])
    .then(() => {
      step.value++;
    })
    .catch(error => {
      console.log('error', error);
    });
}
const costPerformance = ref();
const costPerformanceTips = ref("");
const handleSeekResult = () => {
  formRef.value
    .validate(["education", "workEnvironment", "colleagueAppearance", "colleagueQuality", "vocationalQualification", "workHours",])
    .then(() => {
      // 计算并展示结果
      // 性价比 = (平均日薪 * 综合环境系数) / (35 * (工作时长 + 通勤时长 - 0.5 * 摸鱼时长) * 学历系数)
      // 综合环境系数 = 工作环境系数 * 异性环境系数 * 同事环境系数
      const {averageDailySalary, colleagueAppearance, colleagueQuality, commutingHours, education, fishingHours, vocationalQualification, workEnvironment, workHours, workingHours} = toRaw(formState);
      costPerformance.value = ((averageDailySalary * (workEnvironment * colleagueAppearance * colleagueQuality) * workHours) / (35 * (workingHours + commutingHours - 0.5 * fishingHours) * education * vocationalQualification)).toFixed(2);
      costPerformanceTips.value = costPerformance.value < 0.8 ? "太惨了！ 为你抹泪~~" : costPerformance.value < 1.5 ? "普普通通！ 马马虎虎！熬着吧。" : costPerformance.value < 2 ? "好公司啊！令人羡慕至极。" : "爽爆了！ 大佬您公司还招人吗？"
      step.value++;
    })
    .catch(error => {
      console.log('error', error);
    });
};
const handleRecalculate = () => {
  // formRef.value.resetFields();
  step.value = 1;
}
</script>

<style lang="less" scoped>
.zhibuzhi {
  padding: 20px 0;
  .cost-performance-box {
    padding: 30px 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    .cost-performance {
      width: 120px;
      height: 120px;
      line-height: 120px;
      text-align: center;
      border-radius: 50%;
      background-color: var(--primary-color);
      color: #FFF;
      font-size: 42px;
    }
    .tips {
      color: var(--primary-color);
      margin-top: 12px;
      font-size: 18px;
    }
    .notes {
      margin-top: 12px;
      color: grey;
    }
  }
}
</style>