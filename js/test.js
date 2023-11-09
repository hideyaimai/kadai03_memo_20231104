let playerhands = "";
let computerhands = "";
let matchResult = "";

// computerhandsをランダムに変更します。
$(".pickgu,.pickchoki,.pickpa").on("click",function () {
    // ここに処理を書く
    let random = Math.floor(Math.random()*3);

    if(random === 0){
        computerhands = "グー";
    }
    else if(random === 1){
        computerhands = "チョキ";
    }
    else if(random === 2){
        computerhands = "パー";
    }
})

// 以下3つはplayerhandsを変更します。
$(".pickgu").on("click",function(){
    playerhands = "グー";
    $(".pickgu").css("background-color","rgba(237, 202, 196, 0.4)")
    $(".pickchoki").css("background-color", "");
    $(".pickpa").css("background-color", "");
})

$(".pickchoki").on("click",function(){
    playerhands = "チョキ";
    $(".pickgu").css("background-color","")
    $(".pickchoki").css("background-color", "rgba(237, 202, 196, 0.4)");
    $(".pickpa").css("background-color", "");
})

$(".pickpa").on("click",function(){
    playerhands = "パー";
    $(".pickgu").css("background-color","")
    $(".pickchoki").css("background-color", "");
    $(".pickpa").css("background-color", "rgba(237, 202, 196, 0.4)");
})

// 以下3つはresultを変更します。
$(".pickpa").on("click",function() {
    if(computerhands === "グー"){
        matchResult = "勝ち"
    }
    else if(computerhands === "チョキ"){
        matchResult = "負け"
    }
    else{
        matchResult = "あいこ"
    }
});

$(".pickgu").on("click",function() {
    if(computerhands === "グー"){
        matchResult = "あいこ"
    }
    else if(computerhands === "チョキ"){
        matchResult = "勝ち"
    }
    else{
        matchResult = "負け"
    }
});

$(".pickchoki").on("click",function() {
    if(computerhands === "グー"){
        matchResult = "負け"
    }
    else if(computerhands === "チョキ"){
        matchResult = "あいこ"
    }
    else{
        matchResult = "勝ち"
    }
});

// 確定ボタンでhandsとresult変数を画面に反映します。
$(".confirmbutton").on("click", function() {
    // テキスト変化
    setTimeout(function() {
        $(".resulttext").html("じゃんけん")
    }, 500);

    // じゃんけんの手を変更
    setTimeout(function() {
        $(".resulttext").html("ぽん！！")

        // 自身の手を変化
        if (playerhands === "グー") {
            $(".myhandpicture").attr("src", "img/janken_gu.png");
        } else if (playerhands === "チョキ") {
            $(".myhandpicture").attr("src", "img/janken_choki.png");
        } else {
            $(".myhandpicture").attr("src", "img/janken_pa.png");
        }
        
        // コンピューターの手を変化
        if (computerhands === "グー") {
            $(".enemyhandpicture").attr("src", "img/janken_gu.png");
        } else if (computerhands === "チョキ") {
            $(".enemyhandpicture").attr("src", "img/janken_choki.png");
        } else {
            $(".enemyhandpicture").attr("src", "img/janken_pa.png");
        }
    }, 1500);

    // じゃんけんの結果を結果を履歴に表示する
    setTimeout(function() {
        if (matchResult === "勝ち") {
            $(".resulttext").html("勝ち").css("text-shadow","0 0 20px red, 0 0 20px red, 0 0 30px red, 0 0 30px red");
        } else if (matchResult === "あいこ") {
            $(".resulttext").html("あいこ").css("text-shadow","0 0 20px white, 0 0 20px red, 0 0 30px white, 0 0 30px white");
        } else {
            $(".resulttext").html("負け").css("text-shadow","0 0 20px blue, 0 0 20px blue, 0 0 30px blue, 0 0 30px blue");
        }
        
        // ローカルストレージのデータをlistに表示
        let html = `
        <li>
            <p>${value}（<span class="small-text">${key}</span>）</p>
        </li>
        `;
            $(".logList").append(html);
    }, 2500); 

    // リセット
    setTimeout(function() {
        $(".resulttext").html("手を選択").css("text-shadow","");
        $(".myhandpicture").attr("src", "img/door.jpeg");
        $(".enemyhandpicture").attr("src", "img/door.jpeg");
        $(".pickgu").css("background-color","")
        $(".pickchoki").css("background-color", "");
        $(".pickpa").css("background-color", "");
    }, 5000);

    // ローカルストレージにデータを格納
    let currentDate = new Date();
    let key = currentDate.toLocaleString('ja-JP'); 
    let value = playerhands+"に"+computerhands+"をだして"+matchResult;
    localStorage.setItem(key, value);

});

// ローカルストレージの内容を表示
for( let i=0 ; i<localStorage.length ; i++) {
    let key = localStorage.key(i);
    let value =localStorage.getItem(key);
    let html = `
    <li>
        <p>${value}（<span class="small-text">${key}</span>）</p>
    </li>
    `;
    $(".logList").append(html);
}

$(".clear").on("click", function() {
    localStorage.clear();
    $(".logList").empty();
});