//変数定義
var song = {'song001':'サイレントマジョリティー (All/Lv.24)','song002':'危なっかしい計画 (All/Lv.24)','song003':'期待していない自分 (All/Lv.23)','song004':'僕たちの戦争 (All/Lv.23)','song005':'Dash&Rush (All/Lv.23)','song006':'ドレミソラシド (All/Lv.23)','song007':'アザトカワイイ (All/Lv.23)','song008':'それが愛なのね (All/Lv.23)','song009':'ひらがなけやき (All/Lv.22)','song010':'NO WAR in the future (All/Lv.22)','song011':'避雷針 (All/Lv.22)','song012':'W-KEYAKIZAKAの詩 (All/Lv.22)','song013':'約束の卵 (All/Lv.22)','song014':'JOYFUL LOVE (All/Lv.22)','song015':'Cage (All/Lv.22)','song016':'誰がその鐘を鳴らすのか？ (All/Lv.22)','song017':'Buddies (All/Lv.22)','song018':'櫻坂の詩 (All/Lv.22)','song019':'NO WAR in the future 2020 (All/Lv.22)','song020':'Nobody\'s fault (All/Lv.21)','song021':'太陽は見上げる人を選ばない (All/Lv.21)','song022':'日向坂 (All/Lv.21)','song023':'東京タワーはどこから見える？ (Blue/Lv.24)','song024':'My fans (Blue/Lv.24)','song025':'Dead end (Blue/Lv.24)','song026':'キミガイナイ (Blue/Lv.23)','song027':'誰よりも高く跳べ！ (Blue/Lv.23)','song028':'もう森へ帰ろうか？ (Blue/Lv.23)','song029':'おいで夏の境界線 (Blue/Lv.23)','song030':'アンビバレント (Blue/Lv.23)','song031':'キュン (Blue/Lv.23)','song032':'好きということは… (Blue/Lv.23)','song033':'10月のプールに飛び込んだ (Blue/Lv.23)','song034':'青春の馬 (Blue/Lv.23)','song035':'それが愛なのね (Blue/Lv.23)','song036':'BAN (Blue/Lv.23)','song037':'膨大な夢に押し潰されて (Blue/Lv.23)','song038':'世界にはThank you！が溢れている (Blue/Lv.23)','song039':'Nobody\'s fault (Blue/Lv.22)','song040':'二人セゾン (Blue/Lv.22)','song041':'風に吹かれても (Blue/Lv.22)','song042':'未熟な怒り (Blue/Lv.22)','song043':'約束の卵 (Blue/Lv.22)','song044':'ときめき草 (Blue/Lv.22)','song045':'JOYFUL LOVE (Blue/Lv.22)','song046':'結局、じゃあねしか言えない (Blue/Lv.22)','song047':'君しか勝たん (Blue/Lv.22)','song048':'ブルーベリー＆ラズベリー (Blue/Lv.22)','song049':'摩擦係数 (Blue/Lv.22)','song050':'その日まで (Blue/Lv.22)'
,'song051':'世界には愛しかない (Blue/Lv.21)','song052':'Student Dance (Blue/Lv.21)','song053':'最前列へ (Blue/Lv.21)','song054':'乗り遅れたバス (Blue/Lv.21)','song055':'まさか　偶然... (Blue/Lv.21)','song056':'窓を開けなくても (Blue/Lv.21)','song057':'ブルームーンキス (Blue/Lv.21)','song058':'君と僕と洗濯物 (Blue/Lv.21)','song059':'声の足跡 (Blue/Lv.21)','song060':'偶然の答え (Blue/Lv.21)','song061':'五月雨よ (Blue/Lv.21)','song062':'思いがけないダブルレインボー (Blue/Lv.21)','song063':'青空が違う (Blue/Lv.20)','song064':'バスルームトラベル (Blue/Lv.20)','song065':'Dead end (Green/Lv.25)','song066':'Dash&Rush (Green/Lv.24)','song067':'ジャマイカビール (Green/Lv.24)','song068':'恋した魚は空を飛ぶ (Green/Lv.24)','song069':'サイレントマジョリティー (Green/Lv.23)','song070':'手を繋いで帰ろうか (Green/Lv.23)','song071':'永遠の白線 (Green/Lv.23)','song072':'制服と太陽 (Green/Lv.23)','song073':'線香花火が消えるまで (Green/Lv.23)','song074':'アンビバレント (Green/Lv.23)','song075':'山手線 (Green/Lv.23)','song076':'JOYFUL LOVE (Green/Lv.23)','song077':'黒い羊 (Green/Lv.23)','song078':'なぜ　恋をして来なかったんだろう？ (Green/Lv.23)','song079':'条件反射で泣けて来る (Green/Lv.23)','song080':'ひらがなで恋したい (Green/Lv.22)','song081':'夏色のミュール (Green/Lv.22)','song082':'もう森へ帰ろうか？ (Green/Lv.22)','song083':'青空が違う (Green/Lv.22)','song084':'不協和音 (Green/Lv.22)','song085':'ナゼー (Green/Lv.22)','song086':'Deadline (Green/Lv.22)','song087':'最終の地下鉄に乗って (Green/Lv.22)','song088':'Buddies (Green/Lv.22)','song089':'約束の卵 2020 (Green/Lv.22)','song090':'Microscope (Green/Lv.22)','song091':'思ったよりも寂しくない (Green/Lv.22)','song092':'ってか (Green/Lv.22)','song093':'ひらがなけやき (Green/Lv.21)','song094':'W-KEYAKIZAKAの詩 (Green/Lv.21)','song095':'耳に落ちる涙 (Green/Lv.21)','song096':'こんなに好きになっちゃっていいの？ (Green/Lv.21)','song097':'My god (Green/Lv.21)','song098':'キツネ (Green/Lv.21)','song099':'僕なんか (Green/Lv.21)','song100':'断絶 (Green/Lv.21)'
,'song101':'無言の宇宙 (Green/Lv.20)','song102':'何度でも何度でも (Green/Lv.20)','song103':'避雷針 (Purple/Lv.25)','song104':'こんな整列を誰がさせるのか？ (Purple/Lv.24)','song105':'NO WAR in the future (Purple/Lv.24)','song106':'ってか (Purple/Lv.24)','song107':'ブルーベリー＆ラズベリー (Purple/Lv.24)','song108':'条件反射で泣けて来る (Purple/Lv.24)','song109':'世界には愛しかない (Purple/Lv.23)','song110':'猫の名前 (Purple/Lv.23)','song111':'エキセントリック (Purple/Lv.23)','song112':'沈黙が愛なら (Purple/Lv.23)','song113':'こんなに好きになっちゃっていいの？ (Purple/Lv.23)','song114':'キツネ (Purple/Lv.23)','song115':'君のため何ができるだろう (Purple/Lv.23)','song116':'青春の馬 (Purple/Lv.23)','song117':'なぜ　恋をして来なかったんだろう？ (Purple/Lv.23)','song118':'Microscope (Purple/Lv.23)','song119':'摩擦係数 (Purple/Lv.23)','song120':'語るなら未来を… (Purple/Lv.22)','song121':'手を繋いで帰ろうか (Purple/Lv.22)','song122':'半分の記憶 (Purple/Lv.22)','song123':'キュン (Purple/Lv.22)','song124':'ドレミソラシド (Purple/Lv.22)','song125':'最終の地下鉄に乗って (Purple/Lv.22)','song126':'Buddies (Purple/Lv.22)','song127':'流れ弾 (Purple/Lv.22)','song128':'僕なんか (Purple/Lv.22)','song129':'恋が絶滅する日 (Purple/Lv.22)','song130':'サイレントマジョリティー (Purple/Lv.21)','song131':'期待していない自分 (Purple/Lv.21)','song132':'君に話しておきたいこと (Purple/Lv.21)','song133':'Nobody (Purple/Lv.21)','song134':'大人は信じてくれない (Purple/Lv.21)','song135':'カレイドスコープ (Purple/Lv.21)','song136':'櫻坂の詩 (Purple/Lv.21)','song137':'約束の卵 2020 (Purple/Lv.21)','song138':'約束の卵 (Purple/Lv.20)','song139':'バレエと少年 (Purple/Lv.20)','song140':'ノックをするな！ (Red/Lv.24)','song141':'ガラスを割れ！ (Red/Lv.24)','song142':'不協和音 (Red/Lv.24)','song143':'好きということは… (Red/Lv.24)','song144':'BAN (Red/Lv.24)','song145':'Dead end (Red/Lv.24)','song146':'ひらがなで恋したい (Red/Lv.23)','song147':'二人セゾン (Red/Lv.23)','song148':'誰よりも高く跳べ！ (Red/Lv.23)','song149':'ハロウィンのカボチャが割れた (Red/Lv.23)','song150':'ハッピーオーラ (Red/Lv.23)'
,'song151':'誰のことを一番 愛してる？ (Red/Lv.23)','song152':'ソンナコトナイヨ (Red/Lv.23)','song153':'Plastic regret (Red/Lv.23)','song154':'流れ弾 (Red/Lv.23)','song155':'僕のジレンマ (Red/Lv.23)','song156':'夏の近道 (Red/Lv.23)','song157':'Cool (Red/Lv.23)','song158':'僕たちのLa vie en rose (Red/Lv.23)','song159':'手を繋いで帰ろうか (Red/Lv.22)','song160':'危なっかしい計画 (Red/Lv.22)','song161':'青春の馬 (Red/Lv.22)','song162':'なぜ　恋をして来なかったんだろう？ (Red/Lv.22)','song163':'アザトカワイイ (Red/Lv.22)','song164':'川は流れる (Red/Lv.22)','song165':'無言の宇宙 (Red/Lv.22)','song166':'ママのドレス (Red/Lv.22)','song167':'One choice (Red/Lv.22)','song168':'僕たちは付き合っている (Red/Lv.21)','song169':'制服と太陽 (Red/Lv.21)','song170':'NO WAR in the future (Red/Lv.21)','song171':'I\'m out (Red/Lv.21)','song172':'抱きしめてやる (Red/Lv.21)','song173':'まさか　偶然... (Red/Lv.21)','song174':'君をもう探さない (Red/Lv.21)','song175':'コンセントレーション (Red/Lv.21)','song176':'半信半疑 (Red/Lv.21)','song177':'櫻坂の詩 (Red/Lv.21)','song178':'Right？ (Red/Lv.21)','song179':'一番好きだとみんなに言っていた小説のタイトルを思い出せない (Red/Lv.21)','song180':'キミガイナイ (Red/Lv.20)','song181':'やさしさが邪魔をする (Red/Lv.20)','song182':'砂塵 (Red/Lv.20)','song183':'My fans (Red/Lv.20)','song184':'期待していない自分 (Yellow/Lv.24)','song185':'アンビバレント (Yellow/Lv.24)','song186':'抱きしめてやる (Yellow/Lv.24)','song187':'この夏をジャムにしよう (Yellow/Lv.24)','song188':'ひらがなで恋したい (Yellow/Lv.23)','song189':'手を繋いで帰ろうか (Yellow/Lv.23)','song190':'僕たちは付き合っている (Yellow/Lv.23)','song191':'太陽は見上げる人を選ばない (Yellow/Lv.23)','song192':'ソンナコトナイヨ (Yellow/Lv.23)','song193':'半信半疑 (Yellow/Lv.23)','song194':'ブルームーンキス (Yellow/Lv.23)','song195':'BAN (Yellow/Lv.23)','song196':'僕のジレンマ (Yellow/Lv.23)','song197':'飛行機雲ができる理由 (Yellow/Lv.23)','song198':'月と星が踊るMidnight (Yellow/Lv.23)','song199':'世界には愛しかない (Yellow/Lv.22)','song200':'語るなら未来を… (Yellow/Lv.22)'
,'song201':'永遠の白線 (Yellow/Lv.22)','song202':'半分の記憶 (Yellow/Lv.22)','song203':'302号室 (Yellow/Lv.22)','song204':'車輪が軋むように君が泣く (Yellow/Lv.22)','song205':'ときめき草 (Yellow/Lv.22)','song206':'Cage (Yellow/Lv.22)','song207':'ホントの時間 (Yellow/Lv.22)','song208':'コンセントレーション (Yellow/Lv.22)','song209':'青春の馬 (Yellow/Lv.22)','song210':'ただがむしゃらに (Yellow/Lv.22)','song211':'君と僕と洗濯物 (Yellow/Lv.22)','song212':'君しか勝たん (Yellow/Lv.22)','song213':'アディショナルタイム (Yellow/Lv.22)','song214':'無念 (Yellow/Lv.22)','song215':'桜月 (Yellow/Lv.22)','song216':'AM1:27 (Yellow/Lv.21)','song217':'音楽室に片想い (Yellow/Lv.21)','song218':'君に話しておきたいこと (Yellow/Lv.21)','song219':'日向坂 (Yellow/Lv.21)','song220':'砂塵 (Yellow/Lv.21)','song221':'My fans (Yellow/Lv.21)','song222':'Plastic regret (Yellow/Lv.21)','song223':'思ったよりも寂しくない (Yellow/Lv.21)','song224':'誰よりも高く跳べ！2020 (Yellow/Lv.21)','song225':'渋谷川 (Yellow/Lv.20)','song226':'もうこんなに好きになれない (Yellow/Lv.20)','song227':'最初の白夜 (Yellow/Lv.20)'}
var kitaichi = {'kitaichi01':'3.72%+ (7-28-6-19-0,28-10-3-0-10)','kitaichi02':'3.68% (7-28-6-19-0)','kitaichi03':'3.68% (7-28-6-19-0)(S.teller同色)','kitaichi04':'3.68% (8-16-7-30-0)(S.teller同色)','kitaichi05':'3.61%+ (9-20-9-0-65)(S.teller同色)','kitaichi06':'3.50%+ (8-14-9-25-0,14-14-3-0-10)','kitaichi07':'3.49%+ (11-26-15-0-40)','kitaichi08':'3.40% (8-14-9-25-0)','kitaichi09':'3.25%+ (7-28-6-13-10)','kitaichi10':'3.14% (8-19-7-22-0)','kitaichi11':'3.07% (7-30-6-15-0)','kitaichi12':'3.05%+ (7-28-6-12-10)','kitaichi13':'2.75%+ (6-24-5-12-12)','kitaichi14':'2.52% (7-28-6-13-0)','kitaichi15':'2.50%+ (9-20-9-0-45)','kitaichi16':'2.50% (4-35-3-12-0)','kitaichi17':'2.46% (8-16-7-20-0)','kitaichi18':'2.45% (7-30-6-12-0)','kitaichi19':'2.34%+ (9-18-7-12-19)','kitaichi20':'2.33% (8-16-7-19-0)(S.teller他色)','kitaichi21':'2.32% (7-28-6-12-0)','kitaichi22':'2.28%+ (9-20-9-0-41)(S.teller他色)','kitaichi23':'2.22% (8-18-5-22-0)','kitaichi24':'2.12% (8-19-5-20-0)','kitaichi25':'2.04% (9-23-8-12-0)','kitaichi26':'2.01%+ (8-17-5-17-10)','kitaichi27':'1.96% (9-22-8-12-0)','kitaichi28':'1.86% (8-21-7-12-0)','kitaichi29':'1.73% (8-16-5-19-0)','kitaichi30':'1.73%+ (9-18-9-0-34)','kitaichi31':'1.63% (8-17-5-17-0)','kitaichi32':'1.43% (10-15-9-12-0)','kitaichi33':'1.09% (11-11-10-12-0)','kitaichi34':'0.95% (7-10-6-12-0)','kitaichi35':'0.78%+ (9-18-7-0-19)','kitaichi36':'0.69%+ (4-35-3-0-10)','kitaichi37':'0.68%+ (7-30-6-0-10)','kitaichi38':'0.67%+ (6-24-5-0-12)','kitaichi39':'0.57% (12-6-10-12-0)','kitaichi40':'0.57%+ (9-23-8-0-10)','kitaichi41':'0.55%+ (9-22-8-0-10)','kitaichi42':'0.52%+ (8-21-7-0-10)','kitaichi43':'0.40%+ (10-15-9-0-10)','kitaichi44':'0.30%+ (11-11-10-0-10)','kitaichi45':'0.26%+ (7-10-6-0-10)','kitaichi46':'0.16%+ (12-6-10-0-10)','kitaichi47':'Fleek (3-20-?-14-0)(未対応)','kitaichi48':'0.00% (0-0-0-0-0)'}
var bairitsu = {'bairitsu01':'1.0倍','bairitsu02':'1.1倍','bairitsu03':'1.2倍','bairitsu04':'1.3倍','bairitsu05':'1.4倍','bairitsu06':'1.5倍','bairitsu07':'1.6倍','bairitsu08':'1.7倍','bairitsu09':'1.8倍','bairitsu10':'2.25倍'}

/*配列作成*/
let baiarr = [];
let sigma = [];
let frontarr = [];
for(let i = 0 ; i < 5 ; i++){
    frontarr[i] = [];
    for(let j = 0 ; j < 10 ; j++){
        frontarr[i][j] = 0;
    }
}

//画面読み込み後の動作
window.onload=function(){
    /*プルダウンリスト取得*/
    for(let key in song){
        let op = document.createElement("option");
        op.value = key;
        op.text = song[key];
        document.getElementById("songselect").appendChild(op)
    }
    for(let i = 1 ; i < 6 ; i++){
        for(let key in kitaichi){
            let op = document.createElement("option");
            op.value = key;
            op.text = kitaichi[key];
            document.getElementById("setFront"+i).appendChild(op)
        }
        for(let key in bairitsu){
            let op = document.createElement("option");
            op.value = key;
            op.text = bairitsu[key];
            document.getElementById("setBai"+i).appendChild(op)
        }
    }

    /*倍率設定取得*/
    for(let i = 1 ; i < 6 ; i++){
        for(let j = 0 ; j < bailist.length ; j++){
            if(bailist[j].bairitsu == bairitsu[document.getElementById("setBai"+i).value]){
                baiarr[i-1] = bailist[j].baiR;
            }
        }    
    }

    /*フロント情報格納*/
    for(let i = 1 ; i < 6 ; i++){
        for(let j = 0 ; j < kitaichilist.length ; j++){
            if(kitaichilist[j].kitaichi == kitaichi[document.getElementById("setFront"+i).value]){
                frontarr[i-1][0] = kitaichilist[j].A1;
                frontarr[i-1][1] = Math.round(kitaichilist[j].B1*baiarr[i-1]*100)/100;
                frontarr[i-1][2] = kitaichilist[j].C1;
                frontarr[i-1][3] = kitaichilist[j].D1;
                frontarr[i-1][4] = kitaichilist[j].E1;
            }
        }
    } 
    for(let i = 1 ; i < 6 ; i++){
        for(let j = 0 ; j < kitaichilist.length ; j++){
            if(kitaichilist[j].kitaichi == kitaichi[document.getElementById("setFront"+i).value]){
                frontarr[i-1][5] = kitaichilist[j].A2;
                frontarr[i-1][6] = Math.round(kitaichilist[j].B2*baiarr[i-1]*100)/100;
                frontarr[i-1][7] = kitaichilist[j].C2;
                frontarr[i-1][8] = kitaichilist[j].D2;
                frontarr[i-1][9] = kitaichilist[j].E2;
            }
        }
    }

    /*計算可能可否確認*/
    for(let i = 0 ; i < songlist.length ; i++){
        if(songlist[i].category == song[document.getElementById("songselect").value]){
            okng = songdata[i][0];
            break;
        }
    }
    if(okng === undefined){
    okngtext = "計算不可";
    }
    else{
        okngtext = "計算可";
    }
    document.getElementById("okngcheck").textContent = okngtext;
    if(okngtext == "計算不可"){
        document.getElementById("okngcheck").style.color = "red";
    }
    else{
        document.getElementById("okngcheck").style.color = "blue";
    }
}

/*変数作成*/
let Fsougou = "100000";
let Gsougou = "1000000";
let scoresimloop = "10000";

/*情報入力時の動作*/
function change(){
    /*総合力取得*/
    Fsougou = document.getElementById("setFsougou").value;
    Gsougou = document.getElementById("setGsougou").value;

    /*計算可能可否確認*/
    for(let i = 0 ; i < songlist.length ; i++){
        if(songlist[i].category == song[document.getElementById("songselect").value]){
            okng = songdata[i][0];
            break;
        }
    }
    if(okng === undefined){
        okngtext = "計算不可";
    }
    else{
        okngtext = "計算可";
    }
    document.getElementById("okngcheck").textContent = okngtext;
    if(okngtext == "計算不可"){
        document.getElementById("okngcheck").style.color = "red";
    }
    else{
        document.getElementById("okngcheck").style.color = "blue";
    }

    /*試行回数取得*/
    if(document.getElementById("setSikou").value <= 100000 && document.getElementById("setSikou").value >= 1000){
        scoresimloop = document.getElementById("setSikou").value;
    }
    else if(document.getElementById("setSikou").value > 100000){
        scoresimloop = 100000;
    }
    else if(document.getElementById("setSikou").value < 1000){
        scoresimloop = 1000;
    }
    else{
        scoresimloop = 10000;
    }

    /*倍率設定取得*/
    for(let i = 1 ; i < 6 ; i++){
        for(let j = 0 ; j < bailist.length ; j++){
            if(bailist[j].bairitsu == bairitsu[document.getElementById("setBai"+i).value]){
                baiarr[i-1] = bailist[j].baiR;
            }
        }
    }
       
    /*フロント情報格納*/
    for(let i = 1 ; i < 6 ; i++){
        for(let j = 0 ; j < kitaichilist.length ; j++){
            if(kitaichilist[j].kitaichi == kitaichi[document.getElementById("setFront"+i).value]){
                frontarr[i-1][0] = kitaichilist[j].A1;
                frontarr[i-1][1] = Math.round(kitaichilist[j].B1*baiarr[i-1]*100)/100;
                frontarr[i-1][2] = kitaichilist[j].C1;
                frontarr[i-1][3] = kitaichilist[j].D1;
                frontarr[i-1][4] = kitaichilist[j].E1;
            }
        }
    } 
    for(let i = 1 ; i < 6 ; i++){
        for(let j = 0 ; j < kitaichilist.length ; j++){
            if(kitaichilist[j].kitaichi == kitaichi[document.getElementById("setFront"+i).value]){
                frontarr[i-1][5] = kitaichilist[j].A2;
                frontarr[i-1][6] = Math.round(kitaichilist[j].B2*baiarr[i-1]*100)/100;
                frontarr[i-1][7] = kitaichilist[j].C2;
                frontarr[i-1][8] = kitaichilist[j].D2;
                frontarr[i-1][9] = kitaichilist[j].E2;
            }
        }
    }
}

/*計算開始時の動作*/
function output(){
    
    /*DOM事前取得*/
    let songsong = document.getElementById("songselect").value;
   
    /*ループ素材事前取得*/
    let songsonglength = songlist.length;

    /*変数取得*/
    for(let i = 0 ; i < songsonglength ; i++){
        if(songlist[i].category == song[songsong]){
            simlength = songlist[i].sec;
            noteslength = songlist[i].notes;
            songlv = songlist[i].lv;
            FSnotes = songlist[i].FS;
            FFnotes = songlist[i].FF;
            break;
        }
        else{
            simlength = 0;
            noteslength = 0;
            songlv = 0;
            FSnotes = 0;
            FFnotes = 0;
        }
    }

    /*配列設定*/
    let songnotessec = [];
    for(let i = 0 ; i < noteslength ; i++){
        songnotessec[i] = [];
        for(let j = 0 ; j < 2 ; j++){
            songnotessec[i][j] = 0;
        }
    }
    let simarr = [];
    for(let i = 0 ; i < simlength ; i++){
        simarr[i] = [];
        for(let j = 0 ; j < 40 ; j++){
            simarr[i][j] = 0;
        }
    }
    let songarr = [];
    for(let i = 0 ; i < noteslength ; i++){
        songarr[i] = [];
        for(let j = 0 ; j < 3 ; j++){
            songarr[i][j] = 0;
        }
    }
    scorearr = [];
    for(let i = 0 ; i < scoresimloop ; i++){
        scorearr[i] = [];
        for(let j = 0 ; j < 2 ; j++){
            scorearr[i][j] = 0;
        }
    }
    sigmaresult = [];
    sigmaresultcount = [];

    /*選択楽曲のノーツあたりの経過時間*/
    for(let i = 0 ; i < noteslength ; i++){
        for(let j = 0 ; j < songsonglength ; j++){
            if(songlist[j].category == song[songsong]){
                songnotessec[i][0] = i+1;
                songnotessec[i][1] = songdata[j][i];
            }
        }
    }

    /*ベーススコア算出*/
    basescore = Math.round((0.25*parseInt(songlv)+5)*(parseInt(Fsougou)+0.08*parseInt(Gsougou))/parseInt(noteslength));

    /*処理時間計測開始*/
    const startTime1 = performance.now();

    /*ループ開始*/
    for(let k = 0 ; k < scoresimloop ; k++){
        /*発動パターン配列作成*/
        /*4n列目*/
        for(let i = 0 ; i < simlength ; i++){
            for(let j = 0 ; j < 10 ; j++){
                simarr[i][4*j] = Math.floor(Math.random() * 10000) + 1;
            }
        }
        /*4n+1,4n+2,4n+3列目の1行目*/
        for(let i = 0 ; i < 5 ; i++){
            if(simarr[0][4*i] <= frontarr[i][1]*100){
                simarr[0][4*i+1] = "A";
            }
            else{
                simarr[0][4*i+1] = "S";
            }
            simarr[0][4*i+2] = 1;
            simarr[0][4*i+3] = 0;
        }
        for(let i = 5 ; i < 10 ; i++){
            if(simarr[0][4*i] <= frontarr[i-5][6]*100){
                simarr[0][4*i+1] = "A";
            }
            else{
                simarr[0][4*i+1] = "S";
            }
            simarr[0][4*i+2] = 1;
            simarr[0][4*i+3] = 0;
        }
        /*発動時間、Stay/Active算出*/
        for(let i = 1 ; i < simlength ; i++){
            for(let j = 0 ; j < 5 ; j++){
                if(simarr[i-1][4*j+1] == "S" && simarr[i-1][4*j+2] < frontarr[j][0]){
                    simarr[i][4*j+1] = "S";
                    simarr[i][4*j+2] = simarr[i-1][4*j+2]+1;
                }
                else if(simarr[i-1][4*j+1] == "A" && simarr[i-1][4*j+2] < parseInt(frontarr[j][0]) + parseInt(frontarr[j][2])){
                    simarr[i][4*j+1] = "A";
                    simarr[i][4*j+2] = simarr[i-1][4*j+2]+1;
                }
                else if(simarr[i][4*j] <= frontarr[j][1]*100){
                    simarr[i][4*j+1] = "A";
                    simarr[i][4*j+2] = 1;
                }
                else{
                    simarr[i][4*j+1] = "S";
                    simarr[i][4*j+2] = 1;
                }
                if(simarr[i][4*j+1] == "S"){
                    simarr[i][4*j+3] = 0;
                }
                else if(simarr[i][4*j+1] == "A" && simarr[i][4*j+2] <= frontarr[j][0]){
                    simarr[i][4*j+3] = 0;
                }
                else{
                    simarr[i][4*j+3] = 1;
                }
            }
            for(let j = 5 ; j < 10 ; j++){
                if(simarr[i-1][4*j+1] == "S" && simarr[i-1][4*j+2] < frontarr[j-5][5]){
                    simarr[i][4*j+1] = "S";
                    simarr[i][4*j+2] = simarr[i-1][4*j+2]+1;
                }
                else if(simarr[i-1][4*j+1] == "A" && simarr[i-1][4*j+2] < parseInt(frontarr[j-5][5]) + parseInt(frontarr[j-5][7])){
                    simarr[i][4*j+1] = "A";
                    simarr[i][4*j+2] = simarr[i-1][4*j+2]+1;
                }
                else if(simarr[i][4*j] <= frontarr[j-5][6]*100){
                    simarr[i][4*j+1] = "A";
                    simarr[i][4*j+2] = 1;
                }
                else{
                    simarr[i][4*j+1] = "S";
                    simarr[i][4*j+2] = 1;
                }
                if(simarr[i][4*j+1] == "S"){
                    simarr[i][4*j+3] = 0;
                }
                else if(simarr[i][4*j+1] == "A" && simarr[i][4*j+2] <= frontarr[j-5][5]){
                    simarr[i][4*j+3] = 0;
                }
                else{
                    simarr[i][4*j+3] = 1;
                }
            }
        }

        /*1ノーツ分のスコア算出*/
        for(let i = 0 ; i < noteslength ; i++){
            songarr[i][0] = (simarr[songnotessec[i][1]-1][3]*frontarr[0][4] + simarr[songnotessec[i][1]-1][7]*frontarr[1][4] + simarr[songnotessec[i][1]-1][11]*frontarr[2][4] + simarr[songnotessec[i][1]-1][15]*frontarr[3][4] + simarr[songnotessec[i][1]-1][19]*frontarr[4][4] + simarr[songnotessec[i][1]-1][23]*frontarr[0][9] + simarr[songnotessec[i][1]-1][27]*frontarr[1][9] + simarr[songnotessec[i][1]-1][31]*frontarr[2][9] + simarr[songnotessec[i][1]-1][35]*frontarr[3][9] + simarr[songnotessec[i][1]-1][39]*frontarr[4][9])/100;
            songarr[i][1] = (simarr[songnotessec[i][1]-1][3]*frontarr[0][3] + simarr[songnotessec[i][1]-1][7]*frontarr[1][3] + simarr[songnotessec[i][1]-1][11]*frontarr[2][3] + simarr[songnotessec[i][1]-1][15]*frontarr[3][3] + simarr[songnotessec[i][1]-1][19]*frontarr[4][3] + simarr[songnotessec[i][1]-1][23]*frontarr[0][8] + simarr[songnotessec[i][1]-1][27]*frontarr[1][8] + simarr[songnotessec[i][1]-1][31]*frontarr[2][8] + simarr[songnotessec[i][1]-1][35]*frontarr[3][8] + simarr[songnotessec[i][1]-1][39]*frontarr[4][8])/100;
            if(i+1 >= FSnotes && i+1 <= FFnotes){
                songarr[i][2] = Math.ceil(basescore*1.2*(1+(i+1)/noteslength*(1+songarr[i][0]))*(1+songarr[i][1]));
            }
            else{
                songarr[i][2] = Math.ceil(basescore*(1+(i+1)/noteslength*(1+songarr[i][0]))*(1+songarr[i][1]));
            }
            /*1ループ分のスコア合計*/
            scorearr[k][0] += songarr[i][2];
        }
    }

    /*スコアの配列内昇順並び替え*/
    scorearr.sort(function(a, b) {
        return a[0] - b[0];
    });
    for(let i = 0 ; i < scoresimloop ; i++){
        scorearr[i][1] = (i+1)/(parseInt(scoresimloop)+1);
        sigmaresult[i] = scorearr[i][0];
        sigmaresultcount[i] = Math.floor(sigmaresult[i]/1000)*1000;
    }
    let sigmaresultcountlength = sigmaresultcount.length;

    /*グラフ用のデータ作成*/
    /*1000の位に合わせたデータの要素数を区分ごとにカウント*/
    Graphdata_sub = {};
    for (let i = 0 ; i < sigmaresultcountlength ; i++) {
        let elm = sigmaresultcount[i];
        Graphdata_sub[elm] = (Graphdata_sub[elm] || 0) + 1;
    }
    let Gd_sub_key = Object.keys(Graphdata_sub);
    let Gd_sub_value = Object.values(Graphdata_sub);
    let Gd_sub_key_length = Gd_sub_key.length;
    /*グラフ元連想配列作成*/
    Graphdata = [];
    for(let i = 0 ; i < Gd_sub_key_length ; i++){
        let data_x = {};
        data_x.x = parseInt(Gd_sub_key[i]);
        data_x.y = Gd_sub_value[i]/scoresimloop;
        for(let j = 0 ; j < scoresimloop ; j++){
            if(data_x.x <= sigmaresult[j]){
                data_x.px = Math.ceil((scorearr[j][1]*100)*1000)/1000;
                break;
            }
        }
        Graphdata.push(data_x);
    }

    /*MIN、MAX算出*/



    /*-3σから3σまでのスコアを抽出*/
    for(let i = 0 ; i < scoresimloop ; i++){
        if(scorearr[i][1] > 0.0013){
            sigma[0] = scorearr[i-1][0];
            break;
        }
    }
    for(let i = 0 ; i < scoresimloop ; i++){
        if(scorearr[i][1] > 0.0228){
            sigma[1] = scorearr[i-1][0];
            break;
        }
    }
    for(let i = 0 ; i < scoresimloop ; i++){
        if(scorearr[i][1] > 0.1587){
            sigma[2] = scorearr[i-1][0];
            break;
        }
    }
    for(let i = 0 ; i < scoresimloop ; i++){
        if(scorearr[i][1] > 0.5){
            sigma[3] = scorearr[i-1][0];
            break;
        }
    }
    for(let i = 0 ; i < scoresimloop ; i++){
        if(scorearr[i][1] > 0.8413){
            sigma[4] = scorearr[i-1][0];
            break;
        }
    }
    for(let i = 0 ; i < scoresimloop ; i++){
        if(scorearr[i][1] > 0.9772){
            sigma[5] = scorearr[i-1][0];
            break;
        }
    }
    for(let i = 0 ; i < scoresimloop ; i++){
        if(scorearr[i][1] > 0.9987){
            sigma[6] = scorearr[i-1][0];
            break;
        }
    }

    /*計算時設定の書き出し*/
    document.getElementById("setreturn1").textContent = Fsougou;
    document.getElementById("setreturn2").textContent = Gsougou;
    document.getElementById("setreturn31").textContent = kitaichi[document.getElementById("setFront1").value] +"/"+ bairitsu[document.getElementById("setBai1").value];
    document.getElementById("setreturn32").textContent = kitaichi[document.getElementById("setFront2").value] +"/"+ bairitsu[document.getElementById("setBai2").value];
    document.getElementById("setreturn33").textContent = kitaichi[document.getElementById("setFront3").value] +"/"+ bairitsu[document.getElementById("setBai3").value];
    document.getElementById("setreturn34").textContent = kitaichi[document.getElementById("setFront4").value] +"/"+ bairitsu[document.getElementById("setBai4").value];
    document.getElementById("setreturn35").textContent = kitaichi[document.getElementById("setFront5").value] +"/"+ bairitsu[document.getElementById("setBai5").value];
    document.getElementById("setreturn4").textContent = scoresimloop;
    /*計算結果の書き出し*/
    document.getElementById("result1").textContent = sigma[0];
    document.getElementById("result2").textContent = sigma[1];
    document.getElementById("result3").textContent = sigma[2];
    document.getElementById("result4").textContent = sigma[3];
    document.getElementById("result5").textContent = sigma[4];
    document.getElementById("result6").textContent = sigma[5];
    document.getElementById("result7").textContent = sigma[6];

    /*処理時間計測開始*/
    const endTime1 = performance.now();

    /*履歴用コンソール出力*/
    console.log("計算時間：" + (endTime1 - startTime1) + "msec.");
    console.log("【楽曲】 "+song[songsong]);
    console.log("【フロント総合力】 "+Fsougou);
    console.log("【グループ総合力】 "+Gsougou);
    console.log("【フロント編成】");
    console.log(document.getElementById("setreturn31").textContent);
    console.log(document.getElementById("setreturn32").textContent);
    console.log(document.getElementById("setreturn33").textContent);
    console.log(document.getElementById("setreturn34").textContent);
    console.log(document.getElementById("setreturn35").textContent);
    console.log("【試行回数】 "+scoresimloop);
    console.log("-3σ："+sigma[0]);
    console.log("-2σ："+sigma[1]);
    console.log("-σ："+sigma[2]);
    console.log("0："+sigma[3]);
    console.log("σ："+sigma[4]);
    console.log("2σ："+sigma[5]);
    console.log("3σ："+sigma[6]);
    console.log("--------------------------------");

}
