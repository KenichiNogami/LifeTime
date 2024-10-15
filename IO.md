定期健康診断（40歳位以上の特定健診）の必須検査項目をINPUTして、それに基づき、寿命推定や節目の年齢までの生存確率の推定を行います。

加えて、GPT-4oに使えるプロンプトを返します。


# INPUT形式(JSON)


|KEY|形式|説明|必須・任意|
|-|-|-|-|
|yyyymm|number|検査時の年月を６桁で設定|必須項目|
|age|number|検査時の年齢を年数で設定|必須項目|
|gender|number|性別（男:1, 女:2)で設定|必須項目|
|high|number|身長をcmで設定|必須項目|
|weight|number|体重をkgで設定|必須項目|
|pressu|number|収縮期血圧（上の血圧）をmmHgで設定|必須項目|
|pressd|number|拡張期血圧(下の血圧）をmmHgで設定|必須項目|
|ast|number|肝機能検査の血中AST(GOT)をU/Lで設定|必須項目|
|alt|number|肝機能検査の血中ALT（GPT)をU/Lで設定|必須項目|
|gtp|number|肝機能検査の血中γ-GTPをU/Lで設定|必須項目|
|tg|number|脂質検査の血中中性脂肪（TG)をmg/dLで設定|必須項目|
|hdl|number|脂質検査の血中善玉コレステロール（HDL)をmg/dLで設定|必須項目|
|ldl|number|脂質検査の血中悪玉コレステロール（LDL)をmg/dLで設定|必須項目|
|urs|number|尿糖を変換表Aで設定|必須項目|
|urp|number|尿蛋白を変換表Aで設定|必須項目|
|heart|number|心電図の所見を変換表Bで設定|必須項目|
|lung|number|肺レントゲンの所見を変換表Bで設定|必須項目|
|detail|boolean|"false"を設定してください。|必須項目|


#

|変換表A||
|-|-|
|-|9|
|±|0|
|+|1|
|++|2|
|+++|3|
|++++|4|
|+++++|5|

#

|変換表B||
|-|-|
|治療中|3|
|治療や精密検査が必要|2|
|経過観察中|1|
|所見なし|0|



# OUTPUT形式(JSON)

|KEY|形式|説明|
|-|-|-|
|ylt|number|被験者の寿命年齢|
|nlt|number|被験者年齢の寿命年齢（国民平均）|
|e65|number|65歳までの生存確率（％）|
|e70|number|70歳までの生存確率（％）|
|e80|number|80歳までの生存確率（％）|
|e90|number|90歳までの生存確率（％）|
|e100|number|100歳までの生存確率（％）|
|healthcheckprompt|stringの配列|GPT-4oのAPIで使用可能なPrompt|
