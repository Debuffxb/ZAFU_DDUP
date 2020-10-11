const request = new require('request');

const info = {
  username: '201700000000',     //学号 
  password: '000001'            //登陆密码
}

const IYUU_token = 'IYUUXXXXXXXXXXXXXXXXXX'; // IYUU令牌

const UA = 'User-Agent: UniteApp/1.43 (iPhone; iOS 14.0; Scale/3.00)';

const submit_url = 'https://appui.zafu.edu.cn/vapp/yqdj/submit.jhtm?token=';

const latest_data_url = 'https://appui.zafu.edu.cn/vapp/yqdj/latestData.jhtm?token=';

const login_url = 'http://app.zafu.edu.cn/app/user/login.jhtm';

var yqdj_json = {
  lng: 119.726275 + Math.random () * 0.001 + "",
  lat: 30.257354 + Math.random () * 0.001 + "",
  gpsareaname: '浙江省杭州市临安区',
  adcode: '330112',
  curareaname: '浙江省杭州市临安区',
  todaySubmitted: 0,
  gpsaddress: '浙江省杭州市临安区锦城街道银杏路浙江农林大学(东湖校区)'
};

var get_res = (option) => {
  const promise = new Promise(function(resolve, reject) {
    request(option, (err, res) => {
        if(err){
          reject(err);
        }
        resolve(res);
    });
  });
  return promise;
};

var send_to_WX = async (text, desp) => {
  let send_to_WX = {
    url: `https://iyuu.cn/${IYUU_token}.send`,
    method: 'POST',
    headers: {
      'User-Agent': UA,
    },
    form: {
      text: text,
      desp: desp
    }
  }
  return ((await get_res(send_to_WX)).body);
}

var login = async (xh, mm) => {
  let login_option = {
    url: login_url,
    method: 'POST',
    headers: {
      'User-Agent': UA,
    },
    form: {
      enPassword: mm,
      userName: xh
    }
  }
  return ((await get_res(login_option)).body);
}

var get_latest_data = async (token) => {
  let latest_data_option = {
    url: latest_data_url + token,
    method: 'POST',
    headers: {
      'User-Agent': UA,
    }
  }
  return ((await get_res(latest_data_option)).body);
}

var submit = async (token, _yqdj_json) => {
  let submit_option = {
    url: submit_url + token,
    method: 'POST',
    headers: {
      'User-Agent': UA,
    },
    formData: {
      stryqdj: JSON.stringify(_yqdj_json)
    }
  }
  return ((await get_res(submit_option)).body);
}

var ddup = async () => {
  let login_res = JSON.parse(await login(info.username, info.password));
  if(login_res.type != 'success'){
    return (await send_to_WX('登记失败', '登录失败，请检查账号密码'));
  }
  let token = login_res.data.token
  let latest_data_res = (await get_latest_data(token));
  if( latest_data_res.indexOf('javascript') != -1 ){
      return (await send_to_WX('登记失败', '获取最新记录失败。'));
  }
  latest_data_res = JSON.parse(latest_data_res);
  let d = new Date()
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  month = month < 10 ? '0' + month : month;
  let date = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
  let tbrq = `${year}-${month}-${date}`;
  if( tbrq == latest_data_res.tbrq ){
    return (await send_to_WX('今日已登记', `今日已登记: ${tbrq}`));
  }
  for(let attr in latest_data_res){
    yqdj_json[attr] = latest_data_res[attr];
  }
  yqdj_json.tbrq = tbrq;
  let yqdj_res= await submit(token, yqdj_json);
  if( yqdj_res.indexOf('success') == -1 ){
    return (await send_to_WX('登记失败', '提交登记信息失败。'));
  }
  return (await send_to_WX('登记成功', `登记成功: ${tbrq}`));
}

'use strict';
exports.main_handler = async (event, context) => {
  return ddup();
};
