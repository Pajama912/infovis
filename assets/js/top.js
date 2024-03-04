data = [
  {id: "root", index: 0, name: "表示する項目を選択"},
  {id: "education-related", index: 1, name: "教育関連", parent: "root"},
  {id: "university", index: 2, name: "大学", parent: "education-related", display: "#ffffff00", importance: 0},
  {id: "college", index: 3, name: "短大・専門学校", parent: "education-related", display: "#ffffff00", importance: 0},
  {id: "school", index: 4, name: "小学校・中学校・高校", parent: "education-related", display: "#ffffff00", importance: 0},
  {id: "kindergarten", index: 5, name: "幼稚園", parent: "education-related", display: "#ffffff00", importance: 0},
  {id: "public-facility", index: 6, name: "公共施設", parent: "root"},
  {id: "toilets", index: 7, name: "公共トイレ", parent: "public-facility", display: "#ffffff00", importance: 0},
  {id: "post_box", index: 8, name: "ポスト", parent: "public-facility", display: "#ffffff00", importance: 0},
  {id: "police", index: 9, name: "警察署・交番", parent: "public-facility", display: "#ffffff00", importance: 0},
  {id: "hospital", index: 10, name: "病院", parent: "public-facility", display: "#ffffff00", importance: 0},
  {id: "library", index: 11, name: "図書館", parent: "public-facility", display: "#ffffff00", importance: 0},
  {id: "park", index: 12, name: "公園", parent: "public-facility", display: "#ffffff00", importance: 0},
  {id: "fire_station", index: 13, name: "消防署", parent: "public-facility", display: "#ffffff00", importance: 0},
  {id: "post_office", index: 14, name: "郵便局", parent: "public-facility", display: "#ffffff00", importance: 0},
  {id: "food-service", index: 15, name: "飲食店", parent: "root"},
  {id: "cafe", index: 16, name: "カフェ", parent: "food-service", display: "#ffffff00", importance: 0},
  {id: "convenience", index: 17, name: "コンビニ", parent: "food-service", display: "#ffffff00", importance: 0},
  {id: "supermarket", index: 18, name: "スーパー", parent: "food-service", display: "#ffffff00", importance: 0},
  {id: "fast-food", index: 19, name: "ファミレス", parent: "food-service", display: "#ffffff00", importance: 0},
  {id: "restaurant", index: 20, name: "レストラン", parent: "food-service", display: "#ffffff00", importance: 0},
  {id: "sightseeing", index: 21, name: "観光", parent: "root"},
  {id: "shrine", index: 22, name: "神社", parent: "sightseeing", display: "#ffffff00", importance: 0},
  {id: "temple", index: 23, name: "寺", parent: "sightseeing", display: "#ffffff00", importance: 0},
]

//display:各施設の所在地を何色で表示するか指定。表示しない場合は0。
//importance:各々項目の重要度を-2,-1,0,1,2の5段階で指定。

var display_color = "#e66465"; //密度表示の色を指定

var colorpicker_button = []; //colorpickerがonになっている項目を記憶する。

var update

$(function () {
  $('header').load('./assets/html/header_top.html');
  $('footer').load('./assets/html/footer.html');
  $('#map').load('./assets/html/map.html');
  $('#sidebar').load('./assets/html/sidebar.html');
});