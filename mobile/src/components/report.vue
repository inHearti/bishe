<template>
  <van-form @failed="onFailed">
    <van-cell-group inset>
      <van-field
        v-model="form.time"
        is-link
        readonly
        name="datePicker"
        label="时间"
        placeholder="点击选择时间"
        @click="showTimePicker = true"
      />
      <van-popup v-model:show="showTimePicker" position="bottom">
        <van-picker-group
          title="日期"
          :tabs="['选择日期', '选择时间']"
          @confirm="onConfirm"
          @cancel="onCancel"
        >
          <van-date-picker
            v-model="currentDate"
            :min-date="minDate"
            :max-date="maxDate"
          />
          <van-time-picker v-model="currentTime" />
        </van-picker-group>
      </van-popup>

      <van-field
        v-model="form.place"
        is-link
        readonly
        name="area"
        label="地区选择"
        placeholder="点击选择省市区"
        @click="showArea = true"
      />
      <van-popup v-model:show="showArea" position="bottom">
        <van-area
          :area-list="areaList"
          @confirm="onConfirm1"
          @cancel="showArea = false"
        />
      </van-popup>

      <van-field
        v-model="form.message"
        rows="2"
        autosize
        label="描述"
        type="textarea"
        maxlength="50"
        placeholder="请输入描述信息"
        show-word-limit
      />

      <van-field name="uploader" label="上传照片">
        <template #input>
          <van-uploader v-model="form.image" />
        </template>
      </van-field>

      <van-field
        v-model="form.people"
        name="联系方式"
        label="手机号"
        placeholder="请预留手机号"
      />
    </van-cell-group>
    <div style="margin: 30px">
      <van-button round block type="primary" native-type="submit" @click="submit">
        举报
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { areaList } from '@vant/area-data';
import {report} from '@/api/clue'

//表单数据
const form = reactive({
  time: '',
  place: '',
  message: '',
  image: [],
  people: ''
})

//时间选择
const showTimePicker = ref(false);

const currentDate = ref(['2023', '01', '01']);
const currentTime = ref(['12', '00']);
const onConfirm = () => {
  form.time = `${currentDate.value.join('-')} ${currentTime.value.join(':')}`
  showTimePicker.value = false
};
const onCancel = () => {
  showTimePicker.value = false
};


//地点选择

const showArea = ref(false);
const onConfirm1 = ({ selectedOptions }) => {
  showArea.value = false;
  form.place = selectedOptions.map((item) => item.text).join('/');
};


const submit = ()=>{
  // report(form.value).then()
  console.log(form.image)
}

</script>