export const dq = [
  {
    name: '华北地区',
    provinces: ['北京市', '天津市', '河北省', '山西省'],
  },
  {
    name: '华东地区',
    provinces: [
      '上海市',
      '江苏省',
      '浙江省',
      '安徽省',
      '福建省',
      '江西省',
      '山东省',
    ],
  },
  {
    name: '华南地区',
    provinces: ['广东省', '广西壮族自治区', '海南省'],
  },
  {
    name: '华中地区',
    provinces: ['河南省', '湖北省', '湖南省'],
  },
  {
    name: '西南地区',
    provinces: ['重庆市', '四川省', '贵州省', '云南省', '西藏自治区'],
  },
  {
    name: '西北地区',
    provinces: [
      '陕西省',
      '甘肃省',
      '青海省',
      '宁夏回族自治区',
      '新疆维吾尔自治区',
    ],
  },
  {
    name: '东北地区',
    provinces: ['辽宁省', '吉林省', '黑龙江省', '内蒙古自治区'],
  },
  {
    name: '港澳台',
    provinces: ['香港特别行政区', '澳门特别行政区', '台湾省'],
  },
]

export function getNameByProvince(province) {
  for (const element of dq) {
    for (const item of element.provinces) {
      if (item === province) {
        return element.name
      }
    }
  }
}
