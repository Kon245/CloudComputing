const dom = document.querySelector(".data")

fetch('./data/桃園市表演藝術空間資料.json')
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  console.log(myJson.activity);
  Out(myJson.activity,dom)
});
function Out(data,dom) {
    var nele
    data.forEach(element => {
        var card = document.createElement("div")

        nele = document.createElement("div");
        nele.innerText=element.troupeName;
        nele.className = "name";
        card.appendChild(nele);

        nele = document.createElement("div");
        nele.innerText=element.performanceType+"-"+element.hallSelect;
        nele.className = "info";
        card.appendChild(nele);

        var back = document.createElement("div")
        nele = document.createElement("img");
        nele.src=element.pic[0]
        back.className = "back";
        back.appendChild(nele);
        card.appendChild(back);

        nele = document.createElement("div");
        nele.innerText="團體名稱:"+element.troupeName;
        nele.className = "team";
        card.appendChild(nele);

        nele = document.createElement("div");
        nele.innerText="位置: "+element.hallType+"-"+element.hallSelect;
        nele.className = "place";
        card.appendChild(nele);

        nele = document.createElement("div");
        nele.innerText="時間: "+element.performanceDate;
        nele.className = "time";
        card.appendChild(nele);

        nele = document.createElement("div");
        nele.innerText="簡介";
        nele.className = "sellTitle";
        card.appendChild(nele);

        nele = document.createElement("div");
        nele.innerText=element.content;
        nele.className = "intro";
        card.appendChild(nele);

        nele = document.createElement("div");
        nele.innerText="售票系統";
        nele.className = "sell";
        card.appendChild(nele);

        nele = document.createElement("div");
        nele.innerText=element.admissionInfo;
        nele.className = "price";
        card.appendChild(nele);

        nele = document.createElement("div");
        nele.innerText="開始售票 "+element.publishDate;
        nele.className = "sellTime";
        card.appendChild(nele);


        card.className = "card";

        dom.appendChild(card)
    });
    
}

// {
//     "troupeName" : "銀河谷音劇團",
//     "hallType" : "中壢藝術館",
//     "hallSelect" : "音樂廳",
//     "performanceType" : "表演類",
//     "performanceSelect" : "親子",
//     "title" : "銀河谷音劇團《國王的新衣》",
//     "content" : "愛穿新衣的國王找來兩位裁縫師縫製新衣， 他們向國王保證能夠織出這世界上 最美麗與奇特的布，並將它做成衣服。 最特別的是， 有智慧的人和努力工作的人才看得見! 國王一聽心花怒放，花了大筆的錢來 製作這件前所未有的「天衣」。 遊行的日子終於來到， 大家都擠在街上要看國王的新衣。  但是，國王的身上，竟然什麼都沒有......",
//     "performanceTimeInfo" : "12/31(五) 14:30",
//     "url" : "",
//     "admissionWay" : "售票",
//     "admissionInfo" : "OPENTIX售票：300、400、500、600、800、1000、1200",
//     "admissionNumber" : "",
//     "admissionDate" : "",
//     "handicap" : "",
//     "publishDate" : "2021/12/02 10:16 上午",
//     "performanceDate" : [ "2021/12/31 02:30 下午~2021/12/31 04:30 下午" ],
//     "pic" : [ "https://www.afmc.gov.tw/Upload/2021120210161434c2fa0.png" ],
//     "hashCode" : "2000583786"
//   }