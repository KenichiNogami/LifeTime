# 概要
- 日本の定期健康診断の特定健診データをもとに寿命を計算する「私の寿命（My Lifetime）」アプリです。

- 計算方法は非公開ですが、生命保険会社における健康状態ごとに死亡率を設定するノウハウや、生命保険会社が引き受けられない高リスクの被保険者の死亡率見積もりに関する再保険会社のノウハウ、余命が短い方から生命保険を買い取って死亡保険金を前払いするサービスにおけるノウハウを応用しています。
- 利用方法は、AZURE関数(簡易版）へのAPI接続あるいは[WEBアプリ](https://medicalhealth.blob.core.windows.net/medicalhealth/index2.html)をそのまま利用する形で行います。
- 非商用利用は無料です。ただし、サーバーのコスト等に負荷がかかるような規模の利用は、ご遠慮ください。
- 例えば、顧客会員サービスとして会員の健康増進のためご利用される場合、グレーゾーンになりますので[フォーム](https://docs.google.com/forms/d/e/1FAIpQLScSKMGFgLAcHFeaQ9nG3YozRF3mczSJlH37I0nncOTeQ8oYbg/viewform?usp=sf_link)でお問い合わせいただければ幸甚です。
- 開発者自身が、人間ドックでオールAを取った5日後に脳梗塞を発症し、運よく一命を取り留めた経験があります。[note記事](https://note.com/nogami_kenichi/n/n0867f2d7aaa1)
- 人間ドックの結果オールAだったことで、リスクのある生活態度であったことが原因だったと反省し、皆さんが同じ過ちを繰り返さないためにこのアプリを開発しました。
- 熱心な利用者権・開発者として、日々、改善に努めています。皆さんにも使っていただければ幸甚です。

# API接続申し込み方法

- 寿命計算をもとにした健康アドバイスサービスです[私の寿命、あと何年？](https://medicalhealth.blob.core.windows.net/medicalhealth/index2.html)（個人使用、公益目的使用は無料）をまずはお試しください。
- 使用後に、[アンケートフォーム](https://docs.google.com/forms/d/e/1FAIpQLScSKMGFgLAcHFeaQ9nG3YozRF3mczSJlH37I0nncOTeQ8oYbg/viewform?usp=sf_link)を通じてメアド等を連絡ください。
