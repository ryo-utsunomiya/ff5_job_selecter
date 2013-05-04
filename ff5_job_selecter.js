// min以上max以下のランダムな整数値を返す
function getRandomInt(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}

window.addEventListener("load", function(){
    var btn = document.getElementById("chk");
    // ボタンにイベントを割り当て
    btn.addEventListener("click", function(evt){
        var ele = document.getElementsByTagName("output")[0];
        // チェックボックスの選択状態を読み出し
        var checkBtn = document.querySelectorAll("input[type=checkbox]");

        var keys = [];
        for (var i = 0; i < checkBtn.length; i++) {
            if (checkBtn[i].checked) {
                if (i === 0) [].push.apply(keys, ['wind']);
                if (i === 1) [].push.apply(keys, ['water']);
                if (i === 2) [].push.apply(keys, ['fire']);
                if (i === 3) [].push.apply(keys, ['earth']);
                if (i === 4) [].push.apply(keys, ['gba']);
                if (i === 5) [].push.apply(keys, ['others']);
            }
        }

        var jobs = {
            'wind' : ['ナイト', 'モンク', 'シーフ', '白魔道士', '黒魔道士', '青魔道士'],
            'water' : ['バーサーカー', '魔法剣士', '時魔道士', '赤魔道士', '召喚士'],
            'fire' : ['忍者', '魔獣使い', '風水士', '狩人', '吟遊詩人'],
            'earth' : ['侍', '竜騎士', '踊り子', '薬師'],
            'gba' : ['予言士', '砲撃士', '剣闘士', 'ネクロマンサー'],
            'others' : ['すっぴん', 'ものまね士']
        };

        var selected_jobs = [];
        for (var i = 0; i < keys.length; i++) {
            [].push.apply(selected_jobs, jobs[keys[i]]);
        }

        var characters = ['バッツ', 'レナ', 'ガラフ/クルル', 'ファリス'];
        var rand;

        for (i = 0; i < characters.length; i++) {
            rand = getRandomInt(0, selected_jobs.length);
            ele.innerHTML += characters[i] + "：" + selected_jobs[rand] + "<br>";
        }

        // デフォルトイベントを禁止
        evt.preventDefault();
        return false;
    }, false);
}, false);