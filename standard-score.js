function calcbutton(){
  //偏差値を表示するspan
  var jpn_ss_text = document.getElementById("jpnss"); //現代文
  var classicjpn_ss_text = document.getElementById("classicjpnss"); //古典
  var geography_ss_text = document.getElementById("geographyss"); //地理
  var math_i_ss_text = document.getElementById("math_i_ss"); //数学I
  var math_a_ss_text = document.getElementById("math_a_ss"); //数学A
  var chemistry_ss_text = document.getElementById("chemistryss"); //化学基礎
  var biology_ss_text = document.getElementById("biologyss"); //生物基礎
  var communication_en_ss_text = document.getElementById("communication_en_ss"); //コミュ英
  var exp_en_ss_text = document.getElementById("exp_en_ss"); //英語表現
  var homeeconomics_ss_text = document.getElementById("homeeconomics_ss"); //家庭


  //入力点数の取得
  var jpnscore = document.getElementById("jpnscore").value; //現代文
  var classicjpnscore = document.getElementById("classicjpnscore").value; //古典
  var geographyscore = document.getElementById("geographyscore").value //地理
  var math_i_score = document.getElementById("math_i_score").value //数学I
  var math_a_score = document.getElementById("math_a_score").value //数学A
  var chemistryscore = document.getElementById("chemistryscore").value //化学基礎
  var biologyscore = document.getElementById("biologyscore").value //生物基礎
  var communication_en_score = document.getElementById("communication_en_score").value //コミュ英
  var exp_en_score = document.getElementById("exp_en_score").value //英語表現
  var homeeconomics_score = document.getElementById("homeeconomics_score").value //家庭

  //得点分布
  //[0~9, 10~19, 20~29, 30~39, 40~49, 50~59, 60~69, 70~79, 80~89, 90~100]
  let jpn_frequency_table = [0,1,6,19,51,54,77,46,20,0]; //現代文
  let classicjpn_frequency_table = [1,7,29,45,65,46,38,14,21,4]; //古典
  let geography_frequency_table = [0,2,13,37,46,52,44,47,23,5]; //地理
  let math_i_frequency_table = [1,6,24,63,69,51,33,15,7,5]; //数学I
  let math_a_frequency_table = [0,2,19,56,63,65,43,10,10,5]; //数学A
  let chemistry_frequency_table = [0,1,8,13,25,39,55,49,51,28]; //化学基礎
  let biology_frequency_table = [0,0,1,13,23,53,79,72,24,5]; //生物基礎
  let communication_en_frequency_table = [0,5,12,46,62,48,37,36,17,7]; //コミュ英
  let exp_en_frequency_table = [0,7,27,43,38,34,38,35,33,14]; //英語表現
  let homeeconomics_frequency_table = [0,0,0,10,25,50,63,61,53,11]; //家庭


  //各教科の平均点
  let jpn_ave = 59.2; //現代文
  let classicjpn_ave = 49.8; //古典
  let geography_ave = 56.7; //地理
  let math_i_ave = 47.4; //数学I
  let math_a_ave = 49.8; //数学A
  let chemistry_ave = 67.2; //化学基礎
  let biology_ave = 64.5; //生物基礎
  let communication_en_ave = 53.8; //コミュ英
  let exp_en_ave = 55.6; //英語表現
  let homeeconomics_ave = 67.4; //家庭


  //各教科の偏差値取得
  var jpn_ss = calcSS(jpnscore, jpn_ave, jpn_frequency_table); //現代文
  var classicjpn_ss = calcSS(classicjpnscore, classicjpn_ave, classicjpn_frequency_table); //古典
  var geography_ss = calcSS(geographyscore, geography_ave, geography_frequency_table); //地理
  var math_i_ss = calcSS(math_i_score, math_i_ave, math_i_frequency_table); //数学I
  var math_a_ss = calcSS(math_a_score, math_a_ave, math_a_frequency_table); //数学A
  var chemistry_ss = calcSS(chemistryscore, chemistry_ave, chemistry_frequency_table); //化学基礎
  var biology_ss = calcSS(biologyscore, biology_ave, biology_frequency_table); //生物基礎
  var communication_en_ss = calcSS(communication_en_score, communication_en_ave, communication_en_frequency_table); //コミュ英
  var exp_en_ss = calcSS(exp_en_score, exp_en_ave, exp_en_frequency_table); //英語表現
  var homeeconomics_ss = calcSS(homeeconomics_score, homeeconomics_ave, homeeconomics_frequency_table); //家庭

  //偏差値を表示
  jpn_ss_text.textContent = jpn_ss; //現代文
  classicjpn_ss_text.textContent = classicjpn_ss; //古典
  geography_ss_text.textContent = geography_ss; //地理
  math_i_ss_text.textContent = math_i_ss; //数学I
  math_a_ss_text.textContent = math_a_ss; //数学A
  chemistry_ss_text.textContent = chemistry_ss; //化学
  biology_ss_text.textContent = biology_ss; //生物
  communication_en_ss_text.textContent = communication_en_ss; //コミュ英
  exp_en_ss_text.textContent = exp_en_ss; //英語表現
  homeeconomics_ss_text.textContent = homeeconomics_ss; //家庭

}

function calcSS(score, ave, frequency_table){
  if(score != ""){ //入力判定
    //合計人数を取得
    var students = 0;
    for (let i = 0; i < 10; i++) {
      students = students + frequency_table[i];
    }

    //分散(階級値はそれぞれの階級の中央値を使用)
    var standard_deviation = (4.5**2 * frequency_table[0] + 14.5**2 * frequency_table[1] + 24.5**2 * frequency_table[2] + 34.5**2 * frequency_table[3] + 44.5**2 * frequency_table[4] + 54.5**2 * frequency_table[5] + 64.5**2 * frequency_table[6] + 74.5**2 * frequency_table[7] + 84.5**2 * frequency_table[8] + 95**2 * frequency_table[9])/students - ave ** 2;

    //標準偏差
    standard_deviation = Math.sqrt(standard_deviation); //分散の平方根を取得

    //偏差値の公式：偏差/標準偏差*10+50 = (自分の得点-平均)÷標準偏差×10+50
    var ss = (score - ave)/standard_deviation*10 + 50; //偏差値の計算（平均は階級値から求めた平均ではなく、正規の平均を使用）
    
    //偏差値を小数点1位に
    ss = ss.toFixed(1);
    
    return ss; //戻り値
    
  }else{
    return "";
  }
}
