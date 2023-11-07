let playerhands = "";
let computerhands = "";
let result = "";
let wins = "";

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
        result = "勝ち"
    }
    else if(computerhands === "チョキ"){
        result = "負け"
    }
    else{
        result = "あいこ"
    }
});

$(".pickgu").on("click",function() {
    if(computerhands === "グー"){
        result = "あいこ"
    }
    else if(computerhands === "チョキ"){
        result = "勝ち"
    }
    else{
        result = "負け"
    }
});

$(".pickchoki").on("click",function() {
    if(computerhands === "グー"){
        result = "負け"
    }
    else if(computerhands === "チョキ"){
        result = "あいこ"
    }
    else{
        result = "勝ち"
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

    // じゃんけんの結果
    setTimeout(function() {
        if (result === "勝ち") {
            $(".resulttext").html("勝ち").css("text-shadow","0 0 20px red, 0 0 20px red, 0 0 30px red, 0 0 30px red");
        } else if (result === "あいこ") {
            $(".resulttext").html("あいこ").css("text-shadow","0 0 20px white, 0 0 20px red, 0 0 30px white, 0 0 30px white");
        } else {
            $(".resulttext").html("負け").css("text-shadow","0 0 20px blue, 0 0 20px blue, 0 0 30px blue, 0 0 30px blue");
        }
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
});

