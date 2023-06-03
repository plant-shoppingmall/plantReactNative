class product {
  constructor(name, id, price, image, category, description, size, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
    this.category = category;
    this.description = description;
    this.size = size;
    this.like = false;
    this.quantity = quantity;
  }
}

export let airPurifyPlantes = [];
airPurifyPlantes.name = "공기정화식물";
export let cactus = [];
cactus.name = "다육식물";
export let flower = [];
flower.name = "꽃";
// export let flowerBox = [];
// flowerBox.name = "flowerBox";
export let pot = [];
pot.name = "분재";

export let products = [airPurifyPlantes, flower, cactus, pot];

airPurifyPlantes.push(
  new product(
    "금전수",
    0,
    "18,000",
    [
      require("./공기정화식물/image000.png"),
      require("./공기정화식물/image001.png"),
      require("./공기정화식물/image002.png"),
    ],
    "공기정화식물",
    "금전수는 그늘진 곳에서 잘 견디지만, 실내 밝은 간접광에서 키우는 것이 더 좋습니다. 환경 조건에 견디는 힘이 뛰어나고 과습한 상태에서 저온상태가 되면 뿌리가 썩기 쉽습니다. 수분이 많은 지하경을 가지고 광택이 있는 잎이 매력적인 선인장입니다.",
    "Small"
  )
);
airPurifyPlantes.push(
  new product(
    "녹보수",
    1,
    "38,000",
    [
      require("./공기정화식물/image010.png"),
      require("./공기정화식물/image011.png"),
    ],
    "공기정화식물",
    "녹색의 보석 나무라 하여 이름이 녹보수이며 많은 재복과 행운을 불러들인다는 설이 있는 식물입니다. 사무실이나 가정에서 통풍이 잘 되는 곳으로 반양지, 반그늘 간접광을 받을 수 있는 곳이 좋다.",
    "Small"
  )
);
airPurifyPlantes.push(
  new product(
    "몬스테라",
    2,
    "23,000",
    [
      require("./공기정화식물/image020.png"),
      require("./공기정화식물/image021.png"),
    ],
    "공기정화식물",
    "본래 몬스테라 크기는 상당히 큰 편에 속하여 가정에서 기르기에는 어려움이 있었으나 북유럽풍의 인테리어가 유행하면서 가정에서 키우는 비중이 늘어났다. 건조한 환경, 과습한 환경에서 모두 잘 자라나는 식물이기 때문에 얇은 잎으로 인하여 바람에 찢어지는 부분만 신경쓴다면 어느 위치에서든 잘 자란다.",
    "Small"
  )
);
airPurifyPlantes.push(
  new product(
    "뱅갈고무나무",
    3,
    "48,000",
    [
      require("./공기정화식물/image030.png"),
      require("./공기정화식물/image031.png"),
      require("./공기정화식물/image032.png"),
      require("./공기정화식물/image033.png"),
    ],
    "공기정화식물",
    "뱅갈고무나무는 더운 지역에서 성장하는 식물이기 때문에 가장 성장하기 좋은 온도는 25°C이다. 따라서 한겨울에는 반드시 실내로 옮겨서 최소한 10°C 이상의 온도를 유지해주는 것이 중요하다. 습도가 과한 환경을 피하고 반양지, 반음지의 환경을 유지해서 간접적인 햇빛이 드는 곳이 가장 좋은 위치이다.",
    "medium"
  )
);
airPurifyPlantes.push(
  new product(
    "크루시아",
    4,
    "29,000",
    [
      require("./공기정화식물/image040.png"),
      require("./공기정화식물/image041.png"),
      require("./공기정화식물/image042.png"),
    ],
    "공기정화식물",
    "크루시아는 열대 식물인만큼, 따뜻한 열대성 기후에서 키워주시는 것이 좋다. 크루시아키우기의 적정 온도는 16~29°C이며, 겨울에는 10~13°C 이다. 크루시아는 습도에도 강한 식물이라 잎을 젖은 수건으로 자주 닦아주시거나잎에 스프레이해주시는 것도 좋다",
    "Small"
  )
);
airPurifyPlantes.push(
  new product(
    "테이블야자",
    5,
    "11,000",
    [require("./공기정화식물/image050.png")],
    "공기정화식물",
    "테이블야자는 열대 우림에서 사는 관엽식물로 멕시코 남쪽에서 자라는 식물이다. 야자는 기본적으로 키가 굉장히 크나 테이블 야자는 그 중에서 작은 편에 속한다. 실내에서 키울 경우 최대 2미터까지 성장하며 다른 식물에 비해서 햇빛과 습도의 영향을 덜 받기 때문에 키우기 쉬운 편에 속하며 겨울에는 반드시 실내에 들여놓아야 한다.",
    "Small"
  )
);
airPurifyPlantes.push(
  new product(
    "홍콩야자",
    6,
    "10,000",
    [require("./공기정화식물/image060.png")],
    "공기정화식물",
    "홍콩야자는 햇빛이 은은하게 들어오는 반양지 또는 반음지에서 건강하게 자란다. 또한 통풍이 잘 되는 곳에서 잎이 시들지 않게 하고 줄기가 곧게 자라게 키우는 것이 중요하다. 10년 정도 꾸준히 키운다면 1년동안 꽃대가 나오며 꽃이 지면 열매도 볼 수 있는 매력적인 식물이다.",
    "Small"
  )
);
airPurifyPlantes.push(
  new product(
    "스투키",
    7,
    "21,000",
    [
      require("./공기정화식물/image070.png"),
      require("./공기정화식물/image071.png"),
    ],
    "공기정화식물",
    "스투키가 잘 자라기 위해서는 햇볕에 두고 좀 더 물을 자주 주어야 한다. 스투키의 새순이 자랄 때 특히 많은 양의 햇빛과 적당한 물을 필요로 하는데 이때 햇빛과 물을 제공해주지 않으면 잘 자라지 못한다.",
    "medium"
  )
);
airPurifyPlantes.push(
  new product(
    "아레카야자",
    8,
    "52,000",
    [
      require("./공기정화식물/image080.png"),
      require("./공기정화식물/image081.png"),
      require("./공기정화식물/image082.png"),
    ],
    "공기정화식물",
    "아레카야자는 실내 공기 중에 있는 본드, 니스, 페인트, 합판 등에서 나오는 휘발성 유기 화합물질 및 담배연기 등을 흡수하는데 탁월한 효과가 있다. 따라서 새롭게 인테리어를 끝낸 사무실 공간이나 새로 입주한 집에서 나타나는 새집 증후군을 막아주는데 도움이 된다.",
    "medium"
  )
);
airPurifyPlantes.push(
  new product(
    "스킨답서스",
    9,
    "14,000",
    [
      require("./공기정화식물/image090.png"),
      require("./공기정화식물/image091.png"),
    ],
    "공기정화식물",
    "금전수는 그늘진 곳에서 잘 견디지만, 실내 밝은 간접광에서 키우는 것이 더 좋습니다. 환경 조건에 견디는 힘이 뛰어나고 과습한 상태에서 저온상태가 되면 뿌리가 썩기 쉽습니다. 수분이 많은 지하경을 가지고 광택이 있는 잎이 매력적인 선인장입니다.",
    "Small"
  )
);

flower.push(
  new product(
    "호접란",
    10,
    "123,000",
    [require("./꽃/image000.png"), require("./꽃/image001.png")],
    "꽃",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "medium"
  )
);
flower.push(
  new product(
    "라일락",
    11,
    "19,500",
    [require("./꽃/image010.png"), require("./꽃/image011.png")],
    "꽃",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "medium"
  )
);
flower.push(
  new product(
    "수국",
    12,
    "15,500",
    [
      require("./꽃/image020.png"),
      require("./꽃/image021.png"),
      require("./꽃/image022.png"),
    ],
    "꽃",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "medium"
  )
);
flower.push(
  new product(
    "시클라멘",
    13,
    "17,500",
    [require("./꽃/image030.png")],
    "꽃",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "medium"
  )
);
flower.push(
  new product(
    "안수리움",
    14,
    "16,000",
    [
      require("./꽃/image040.png"),
      require("./꽃/image041.png"),
      require("./꽃/image042.png"),
    ],
    "꽃",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "medium"
  )
);
flower.push(
  new product(
    "장미",
    15,
    "13,000",
    [require("./꽃/image050.png"), require("./꽃/image051.png")],
    "꽃",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "medium"
  )
);
flower.push(
  new product(
    "카네이션",
    16,
    "24,000",
    [
      require("./꽃/image060.png"),
      require("./꽃/image061.png"),
      require("./꽃/image062.png"),
    ],
    "꽃",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "medium"
  )
);
flower.push(
  new product(
    "튤립",
    17,
    "12,500",
    [require("./꽃/image070.png")],
    "꽃",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "small"
  )
);
flower.push(
  new product(
    "프리지아",
    18,
    "26,000",
    [
      require("./꽃/image080.png"),
      // require("./꽃/image081.png"),
      require("./꽃/image082.png"),
    ],
    "꽃",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "small"
  )
);
flower.push(
  new product(
    "해바라기",
    19,
    "21,000",
    [require("./꽃/image090.png")],
    "꽃",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "medium"
  )
);

cactus.push(
  new product(
    "귀면각",
    20,
    "144,000",
    [
      require("./다육식물/image000.png"),
      require("./다육식물/image000.png"),
      require("./다육식물/image000.png"),
    ],
    "다육식물",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "large"
  )
);
cactus.push(
  new product(
    "하월시아",
    21,
    "27,000",
    [require("./다육식물/image010.png"), require("./다육식물/image010.png")],
    "다육식물",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "small"
  )
);
cactus.push(
  new product(
    "금양환",
    22,
    "25,000",
    [require("./다육식물/image020.png")],
    "다육식물",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "small"
  )
);
cactus.push(
  new product(
    "아가베",
    23,
    "112,000",
    [require("./다육식물/image030.png")],
    "다육식물",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "large"
  )
);
cactus.push(
  new product(
    "알로에",
    24,
    "31,000",
    [require("./다육식물/image040.png")],
    "다육식물",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "medium"
  )
);
cactus.push(
  new product(
    "에케베리아",
    25,
    "24,500",
    [require("./다육식물/image050.png")],
    "다육식물",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "small"
  )
);
cactus.push(
  new product(
    "용신목",
    26,
    "15,000",
    [require("./다육식물/image060.png")],
    "다육식물",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "small"
  )
);
cactus.push(
  new product(
    "유포르비아",
    27,
    "44,500",
    [require("./다육식물/image070.png")],
    "다육식물",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "medium"
  )
);
cactus.push(
  new product(
    "크라슐라",
    28,
    "27,000",
    [require("./다육식물/image080.png")],
    "다육식물",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "medium"
  )
);
cactus.push(
  new product(
    "파키피덤",
    29,
    "44,500",
    [
      require("./다육식물/image090.png"),
      require("./다육식물/image090.png"),
      require("./다육식물/image090.png"),
      require("./다육식물/image090.png"),
      require("./다육식물/image090.png"),
      require("./다육식물/image090.png"),
    ],
    "다육식물",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "small"
  )
);

pot.push(
  new product(
    "느릅나무",
    30,
    "244,500",
    [
      require("./분재/image000.png"),
      require("./분재/image000.png"),
      require("./분재/image000.png"),
      require("./분재/image000.png"),
    ],
    "분재",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "large"
  )
);
pot.push(
  new product(
    "단풍나무",
    31,
    "214,500",
    [require("./분재/image010.png"), require("./분재/image010.png")],
    "분재",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "large"
  )
);
pot.push(
  new product(
    "동백",
    32,
    "154,000",
    [require("./분재/image020.png"), require("./분재/image020.png")],
    "분재",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "large"
  )
);
pot.push(
  new product(
    "매화",
    33,
    "354,000",
    [require("./분재/image030.png"), require("./분재/image030.png")],
    "분재",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "large"
  )
);
pot.push(
  new product(
    "명자나무",
    34,
    "149,000",
    [require("./분재/image040.png"), require("./분재/image040.png")],
    "분재",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "large"
  )
);
pot.push(
  new product(
    "삼나무",
    35,
    "129,000",
    [require("./분재/image050.png"), require("./분재/image050.png")],
    "분재",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "large"
  )
);
pot.push(
  new product(
    "소나무",
    36,
    "129,000",
    [require("./분재/image060.png"), require("./분재/image060.png")],
    "분재",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "large"
  )
);
pot.push(
  new product(
    "은행나무",
    37,
    "129,000",
    [require("./분재/image070.png"), require("./분재/image070.png")],
    "분재",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "large"
  )
);
pot.push(
  new product(
    "전나무",
    38,
    "129,000",
    [require("./분재/image080.png")],
    "분재",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "large"
  )
);
pot.push(
  new product(
    "느티나무",
    39,
    "129,000",
    [require("./분재/image090.png")],
    "분재",
    "둥글고 두꺼운 잎을 가져 매력적인 다육식물입니다. 파키피덤은 햇빛이 잘 드는 곳에서 자라야 잎이 길어지지 않고 본 모습을 유지하며 잎이 둥근 형태로 자라납니다. 겨울에 성장하는 동형종이지만 여름에도 반 그늘에서 키우는 것을 추천합니다.",
    "large"
  )
);

export const findObject = (category, productName) => {
  for (let i = 0; i < products.length; i++) {
    if (category == products[i].name) {
      for (let j = 0; j < products[i].length; j++) {
        if (productName == products[i][j].name) {
          return products[i][j];
        }
      }
    }
  }
};
export const findCategory = category => {
  for (let i = 0; i < products.length; i++) {
    if (category == products[i].name) {
      return products[i].name;
    }
  }
};

export const choiceRandomObject = () => {
  let randomCategory = Math.floor(Math.random() * 3);
  let randomObject = Math.floor(Math.random() * 10);
  return products[randomCategory][randomObject];
};

export const choiceNum = ({ numItem }) => {
  let itemArray = [];
  while (itemArray.length < numItem) {
    let choiceItem = choiceRandomObject();
    console.log(choiceItem + "1");
    itemArray.push(choiceItem);
    for (let j = 0; j < itemArray.length; j++) {
      if (itemArray[j] == choiceItem) {
        itemArray.splice(j, 1);
        break;
      }
    }
  }
  console.log(itemArray);
  return itemArray;
};

export const priceToInt = stringPrice => {
  let noCommas = stringPrice.replace(/,/g, "");
  let price = parseInt(noCommas, 10);
  return price;
};
// 문자열 가격 -> 정수로
export let popular = [];
for (let i = 0; i < 3; i++) {
  popular.push(airPurifyPlantes[i]);
  popular.push(flower[i]);
  popular.push(cactus[i]);
  popular.push(pot[i]);
}
