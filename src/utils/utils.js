import axios from "axios";

/**
 * 生成固定长度随机字符串
 * @param {Number} length 字符串长度
 * @returns 
 */
export function uuid(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';
  let randomString = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  
  return randomString;
}

/**
 * 将图片文件转换为 Base64 格式
 * @param {File} file - 图片文件对象
 * @returns {Promise} - 返回 Promise 对象
 */
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

/**
 * 获取网站ico
 * @param {String} url 网站地址
 */
export function renderIco(url) {
  // const apiUrl = "https://api.vvhan.com/api/ico?url=" + url.replace(/^https?:\/\//i, '');
  const apiUrl = "https://api.iowen.cn/favicon/" + url.replace(/^https?:\/\//i, '') + ".png";
  return apiUrl;
}

/**
 * 下载文件
 * @param {String} url 下载地址
 */
export function downloadFile(downloadUrl) {
  // axios.get(downloadUrl, {
  //   responseType: 'blob' // 重点
  // })
  // .then(response => {
  //   const url = window.URL.createObjectURL(new Blob([response.data]));
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.setAttribute('download', 'example.flac'); // 自定义文件名
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // });
  // return

  // 创建一个新的a标签
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.setAttribute('download', 'example.flac');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * 毫秒转 时:分:秒
 * @param {Number} millisecond 毫秒
 */
export function millisecondToHms(millisecond) {
  if (!millisecond) {
    return "00:00:00";
  }
  const hours = Math.floor(millisecond / 1000 / 60 / 60);
  const minutes = Math.floor((millisecond / 1000 / 60) % 60);
  const remainingSeconds = Math.floor((millisecond / 1000) % 60);

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

/**
 * 秒转 分:秒
 * @param {Number} sec 秒
 */
export function secToMs(sec) {
  if (!sec) {
    return "00:00";
  }
  const minutes = Math.floor(sec / 60);
  const remainingSeconds = sec % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}

/**
 * 分:秒 转 秒
 * @param {String} timeString 分:秒
 * @returns 
 */
export function msToSec(timeString) {
  if (!timeString) return 0;
  const [minutes, seconds] = timeString.split(':');
  return parseInt(minutes) * 60 + seconds * 1;

  // let timeArray = timeString.split(':');
  // let minutes = parseInt(timeArray[0], 10);
  // let secondsArray = timeArray[1].split('.');
  // let seconds = parseInt(secondsArray[0], 10);
  // let milliseconds = parseInt(secondsArray[1], 10);
  // let totalSeconds = minutes * 60 + seconds + milliseconds / 100;
  // return totalSeconds || 0;
}

/**
 * 获取一个随机整数，这个数在一个范围内，而且不等于输入的参数
 * @param {*} min 最小值
 * @param {*} max 最大值
 * @param {*} exclude 入参
 * @returns 
 */
export function getRandomIntInRange(min, max, exclude) {
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  while (randomNum === exclude) {
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return randomNum;
}