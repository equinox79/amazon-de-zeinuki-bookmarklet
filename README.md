# Amazonで税抜き表示するブックマークレット

## これは何

Amazonで税抜き表示するブックマークレットです。

## こんなふうに表示されます

<img src="misc/pict/sc1.png" />

## 導入方法

下のリンクをブックマークバーにドラッグ・アンド・ドロップしてください。

<a href="javascript:(function()%7Bdocument.querySelector(".a-color-price").textContent %2B%3D"｜税抜き%3A " %2B Math.round(document.querySelector(".a-color-price").textContent.replace(%2F%5B%5E0-9%5D%2Fg%2C'')%2F 1.08)%2B "円"%7D)()">Amazonで税抜き表示</a>


