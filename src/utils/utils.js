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