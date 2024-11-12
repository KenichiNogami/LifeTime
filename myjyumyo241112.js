const fs = require('fs'); // ファイル操作のためのNode.jsモジュールをインポート


module.exports = async function (context, req) {
  if (req.body.age !== undefined 
      && req.body.high !== undefined 
      && req.body.weight !== undefined
      && req.body.pressu !== undefined 
      && req.body.pressd !== undefined 
      && req.body.ast !== undefined 
      && req.body.alt !== undefined 
      && req.body.gtp !== undefined 
      && req.body.tg !== undefined 
      && req.body.hdl !== undefined 
      && req.body.ldl !== undefined 
      && req.body.gender !== undefined 
      && req.body.urs !== undefined 
      && req.body.urp !== undefined 
      && req.body.heart !== undefined 
      && req.body.lung !== undefined
      && req.body.detail !== undefined 
    )
   {
    /** @type {number} */
    let age = Number(req.body.age),
      high = Number(req.body.high),
      weight = Number(req.body.weight),
      pressu = Number(req.body.pressu),
      pressd = Number(req.body.pressd),
      ast = Number(req.body.ast),
      alt = Number(req.body.alt),
      gtp = Number(req.body.gtp),
      tg = Number(req.body.tg),
      hdl = Number(req.body.hdl),
      ldl = Number(req.body.ldl),
      tl = Number(req.body.tl),
      bs = Number(req.body.bs),
      hba = Number(req.body.hba),
      ua = Number(req.body.ua),
      rb = Number(req.body.rb),
      hb = Number(req.body.hb),
      plat = Number(req.body.plat),
      crt = Number(req.body.crt),
      gender = Number(req.body.gender),
      opinion = Number(req.body.opinion),
      urs = Number(req.body.urs),
      urp = Number(req.body.urp),
      heart = Number(req.body.heart),
      lung = Number(req.body.lung),
      cancer = Number(req.body.cancer),
      wine = Number(req.body.wine),
      smoke = Number(req.body.smoke),

      checkup = req.body.checkup,

      protein = req.body.protein,
      oil = req.body.oil,
      wcheck = req.body.wcheck,
      dental = req.body.dental,
      heartbeat = req.body.heartbeat,
      exercise = req.body.exercise,
      diet = req.body.diet,
      vegitable = req.body.vegitable,
      family = req.body.family,
      work = req.body.work,
      sleep = req.body.sleep,
      relax = req.body.relax,
      health = req.body.health,
      disaster = req.body.disaster;
      sunny = req.body.sunny;
      chair = req.body.chair;
      talk = req.body.talk;
      intelli = req.body.intelli;
      hobby = req.body.hobby;
  
      cancert = String(req.body.cancert);
      drugs = String(req.body.drugs);
      drugst = String(req.body.drugst);
      opiniont = String(req.body.opiniont);

      const detail = req.body.detail;//boolean
    if (detail === false) {
      hba = -1; 
      ua = -1;
      rb = -1; 
      hb = -1; 
      plat = -1; 
      crt = -1; 
      tl = -1;
      opinion = 0;
      cancer = 0;
      opiniont = "";
      cancert = "";
      drugs = "";
      drugst = "";
    }
    console.log("drugs: "+drugs);
    console.log("detail: "+detail);

    const optionalItem = [hba, ua, rb, hb, plat, crt, tl];
    const noinfoItem = countMinus(optionalItem,detail);
    console.log("niInfoItem: "+noinfoItem);  



      //標準生命表　δ死亡
       if (gender == 1){
        var qxs=[184,	24,	17,	11,	8,	6,	6,	5,	5,	5,	6,	7,	9,	11,	14,	18,	22,	28,	33,	38,	44,	49,	52,	52,	51,	49,	49,	49,	49,	50,	52,	55,	60,	64,	68,	70,	71,	73,	77,	84,	93,	102,	112,	123,	135,	149,	164,	179,	198,	219,	243,	269,	295,	324,	356,	392,	432,	473,	517,	566,	624,	691,	765,	841,	922,	1010,	1115,	1241,	1378,	1518,	1678,	1843,	2012,	2205,	2423,	2672,	2946,	3251,	3572,	3939,	4384,	4908,	5520,	6226,	7032,	7937,	8965,	10118,	11381,	12734,	14192,	15799,	17586,	19566,	21626,	23661,	25528,	27429,	29363,	31329,	33324,	35346,	37394,	39463,	41552,	43658,	45777,	47905,	50039,	52176,	54310,	56438,	58556,	60658,	100000,100000];
        var qxd=[900,	900,	900,	900,	900,	900,	900,	900,	985,	1556,	1974,	2314,	3303,	3813,	4762,	6184,	9512,	14231,	21509, 21509, 21509, 21509, 21509, 21509];
        }
        else{
        var qxs=[172,	17,	12,	9,	7,	7,	7,	6,	6,	5,	5,	6,	7,	8,	9,	11,	14,	17,	19,	20,	22,	23,	24,	25,	25,	25,	25,	26,	26,	27,	27,	27,	28,	31,	35,	39,	43,	46,	50,	54,	58,	63,	68,	74,	82,	91,	99,	108,	119,	131,	145,	158,	171,	181,	192,	204,	218,	233,	247,	263,	281,	305,	333,	361,	390,	422,	461,	507,	558,	613,	681,	754,	830,	917,	1014,	1127,	1264,	1433,	1626,	1853,	2117,	2423,	2783,	3211,	3713,	4289,	4954,	5726,	6625,	7636,	8770,	10104,	11679,	13477,	15424,	17535,	19558,	21655,	23827,	26070,	28385,	30767,	33214,	35722,	38287,	40903,	43564,	46263,	48993,	51745,	54509,	57276,	60035,	62774,	65482,	100000]; 
        var qxd=[250,	250,	250,	250,	250,	250,	250,	250,	820,	1261,	1681,	1805,	2216,	2801,	3163,	4288,	6272,	10121,	17391, 17391, 17391, 17391, 17391, 17391];
        }

      // ライフスタイルポイント計算
        let lifestylepoint = 0;
        if(detail===true){
          const lifeStyleBoolean = [checkup, exercise, diet, vegitable, family, work, sleep, relax, health, disaster, wine, smoke, protein, oil, wcheck, dental, heartbeat, sunny, chair, talk, intelli, hobby];
          const lifestylepoint = countValues(lifeStyleBoolean); 
           console.log("lifestylepoint: "+lifestylepoint);  
        }  
        function countValues(booleanarray) {
          let trueCount = 0;
          let falseCount = 0;
          let length = booleanarray.length;
          for (let i = 0; i < length; i++) {
            if (booleanarray[i]) {
              trueCount++;
            } else {
              falseCount++;
            }
          }
          r = trueCount - falseCount; 
          return r;
        }

        function countMinus(numbers) {
          let minusCount = 0;
          let length = numbers.length;
          for (let i = 0; i < length; i++) {
            if (numbers[i]<0) {
              minusCount++;
            } 
            }
          if(detail===false){minusCount = 12;}
          return minusCount;
        }
      
      // core function
        
            var qbmi =Qbmi();
            var qpress = Qpress(age,pressu,pressd);
            var qliver = Qliver();
            var qkidney = Qkidney();
            var qfat = Qfat();
            var qsugar = Qsugar();
            var qblood = Qblood();
            var qurp = Qurp();
            var qurs = Qurs();
            var qua = Qua();
            console.log("*************");
            console.log("bmi: "+qbmi);
            console.log("press: "+qpress);
            console.log("liver: "+qliver);
            console.log("kidney: "+qkidney);
            console.log("fat: "+qfat);
            console.log("sugar: "+qsugar);
            console.log("blood: "+qblood);
            console.log("Urp: "+qurp);
            console.log("Urs: "+qurs);
            console.log("Ua: "+qua);

        //寿命計算
            if(detail===true){var mltq = IncreaseQ()-(lifestylepoint+3*wine+2*smoke-3*noinfoItem)*0.01;}
            else{var mltq = IncreaseQ()+0.25;}

            var addq = CurrentCare();
            var canfy = cancer;
            console.log("multiply: "+mltq);
            console.log("add: "+addq);
            console.log("cancer: "+canfy);
            var nLx = Q2L(qxs,1,0,0);
            var nltx = LifetimeCal(nLx);
            var yLx = Q2L(qxs,mltq,addq,canfy);
            var yltx = LifetimeCal(yLx);
        
            function IncreaseQ(){
              var r = 0;
              r += Math.min(qbmi,500);
              r += Math.min(qpress,500);
              r += Math.min(qliver,500);
              r += Math.min(qkidney,500);
              r += Math.min(qfat,500);
              r += Math.min(qsugar,500);
              r += Math.min(qblood,500);
              r += Math.min(qurp,500);
              r += Math.min(qurs,500);
              r += Math.min(qua,500);
              r = Math.min(8,Math.round(r+80)/100);
              return(r);
            }

//寿命悪化要因
            let Physical = Signal(qbmi);
            let Bloodpr = Signal(qpress);
            let Liverdis = Signal(qliver);
            let Fatmetabo = Signal(qfat);
            let Sugarmetabo = Signal(qsugar+qurs);
            let Blooddis = Signal(qblood);
            let Kidneydis = Signal(qkidney+qurp);
            let Currentill = "skip";
            let Medication = "skip";
            let Green = "skip";
            if((lung+heart+opinion+cancer)>0.5){Currentill = "withCurrentIll";}
            if(drugs !== ""){Medication = "withDrug";}

            console.log("drugs: "+drugs);
            console.log("Medication: "+Medication);

            if(Physical+Bloodpr+Liverdis+Fatmetabo+Sugarmetabo+Blooddis+Kidneydis+Currentill+Medication>0.5){Green = 1;}
            console.log("Green: "+Green);

            function Signal(el){
              var r = "skip";
              if(el>100){r = "violet";}
              else if(el>50){r = "red";}
              else if(el>0){r = "yellow";}
              return(r);
            }

//疾病ごとリスク計算関数
        
            function Qpress(a,u,d){
              var r = 0;
              a = BPa(a);
              u = BPu(u);
              d = BPd(d);
              r = BPrate(a,u,d);
              return(r);
            }
            function BPa(a){
              var r = 0;
              if(a<40){r = 0;}
              else if(a<50){r = 1;}
              else if(a<60){r = 2;}
              else{r = 3;}
              return(r);
            } 
            function BPu(u){
              var r = 0;
              var uu = 0;
              uu = 30-Math.floor(u/10);
              if(uu<1){r = 0;}
              else if(uu<10){r = 1;}
              else if(uu>21){r = 14;}
              else{r = uu-8;}
              return(r);
            }
            function BPd(d){
              var r = 0;
              var dd = 0;
              if(d>79 && d<85){d = 79;}
              dd = Math.floor(d/10);
              if(dd<4){r = 0;}
              else if(dd<9){r = dd-3;}
              dd = Math.floor(d/5);
              if(dd>39){r=14;}
              else if(dd>17){
                if(dd<24){r = dd-12;}
                else{r = 13;}
              }
              return(r);
            }
            function BPrate(a,u,d){
              var bp=[500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500, 500,	500,	500,	350,	350,	360,	360,	370,	380,	380,	390,	390,	400,	500, 500,	500,	500,	250,	250,	250,	270,	280,	300,	330,	360,	360,	380,	500, 500,	500,	500,	200,	200,	180,	200,	210,	240,	260,	310,	330,	350,	500, 500,	500,	500,	120,	120,	120,	130,	150,	180,	200,	230,	270,	300,	500, 500,	500,	120,	90,	90,	90,	90,	120,	150,	150,	170,	180,	250,	500, 500,	500, 50,	50,	50,	50,	80,	100,	120,	130,	150,	180,	250,	500, 30,	30,	30,	30,	30,	30,	30,	50,	50,	80,	80,	180,	250,	500, 25,	25,	25,	25,	25,	30,	30,	30,	40,	50,	80,	180,	250,	600, 30,	25,	25,	25,	25,	25,	30,	30,	40,	50,	80,	500,	500,	500, 0,	0,	0,	0,	0,	25,	30,	40,	40,	500,	500,	500,	500,	500, 0,	0,	0,	0,	0,	25,	30,	500,	500,	500,	500,	500,	500,	500, 0,	0,	0,	0,	0,	0,	500,	500,	500,	500,	500,	500,	500,	500, 0,	0,	0,	0,	0,	500,	500,	500,	500,	500,	500, 500,	500,	500, 500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500, 500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500, 500,	500,	500,	310,	310,	320,	320,	330,	330,	350,	350,	360,	370,	500, 500,	500,	500,	210,	210,	230,	240,	250,	250,	300,	300,	330,	340,	500, 500,	500,	500,	160,	160,	150,	160,	200,	200,	230,	250,	300,	320,	500, 500,	500,	500,	90,	100,	100,	120,	130,	130,	140,	180,	250,	300,	500, 500,	500,	80,	70,	80,	90,	90,	100,	100,	110,	150,	220,	280,	500, 500,	500,	40,	40,	30,	30,	30,	90,	90,	90,	100,	150,	200,	500, 25,	25,	25,	25,	25,	30,	30,	30,	30,	60,	80,	150,	200,	500, 25,	25,	25,	25,	25,	25,	25,	25,	30,	40,	70,	150,	200,	500, 25,	25,	25,	25,	25,	25,	25,	25,	25,	30,	70,	500,	500,	500, 0,	0,	0,	0,	0,	0,	30,	30,	30,	500,	500,	500,	500,	500, 0,	0,	0,	0,	0,	0,	25,	500,	500,	500,	500,	500,	500,	500, 0,	0,	0,	0,	0,	0,	500,	500,	500,	500,	500,	500,	500,	500, 0,	0,	0,	0,	0,	500,	500,	500,	500,	500,	500,	500,	500,	500, 500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500, 500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500, 500,	500,	500,	140,	140,	140,	140,	160,	160,	180,	200,	250,	300,	500, 500,	500,	500,	140,	120,	100,	100,	100,	100,	120,	140,	160,	200,	500, 500,	500,	500,	80,	90,	80,	80,	80,	80,	100,	120,	140,	170,	500, 500,	500,	500,	50,	60,	70,	80,	80,	80,	80,	100,	130,	160,	500, 500,	500,	40,	40,	40,	40,	50,	50,	50,	60,	80,	100,	110,	500, 500,	500,	30,	30,	30,	30,	30,	30,	40,	60,	80,	100,	110,	500, 25,	25,	25,	25,	25,	25,	25,	30,	35,	40,	50,	80,	110,	500, 25,	25,	25,	25,	25,	25,	25,	25,	30,	40,	50,	80,	110,	500, 25,	25,	25,	25,	25,	25,	25,	25,	30,	35,	40,	500,	500,	500, 0,	0,	0,	0,	0,	25,	30,	40,	50,	500,	500,	500,	500,	500, 0,	0,	0,	0,	0,	0,	0,	500,	500,	500,	500,	500,	500,	500, 0,	0,	0,	0,	0,	0,	500,	500,	500,	500,	500,	500,	500,	500, 0,	0,	0,	0,	0,	500,	500,	500,	500,	500,	500,	500,	500,	500, 500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500, 500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500, 500,	500,	500,	140,	140,	140,	140,	140,	140,	180,	180,	200,	230,	500, 500,	500,	500,	90,	100,	100,	100,	100,	100,	120,	120,	120,	150,	500, 500,	500,	500,	60,	70,	70,	80,	50,	50,	50,	80,	100,	120,	500, 500,	500,	500,	40,	50,	50,	50,	50,	50,	50,	60,	60,	80,	500, 500,	500,	40,	40,	30,	30,	30,	30,	30,	30,	40,	50,	80,	500, 500,	500,	30,	30,	30,	30,	30,	30,	40,	40,	50,	50,	50,	500, 25,	25,	25,	25,	25,	25,	25,	25,	30,	35,	40,	50,	50,	500, 25,	25,	25,	25,	25,	25,	25,	25,	30,	35,	40,	50,	50,	500, 25,	25,	25,	25,	25,	25,	25,	25,	25,	25,	40,	500,	500,	500, 0,	0,	0,	0,	0,	25,	30,	35,	40,	500,	500,	500,	500,	500, 0,	0,	0,	0,	0,	0,	0,	500,	500,	500,	500,	500,	500,	500, 0,	0,	0,	0,	0,	0,	500,	500,	500,	500,	500,	500,	500,	500, 0,	0,	0,	0,	0,	500,	500,	500,	500,	500,	500,	500,	500,	500, 500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500,	500];
              var r = 0;
              r = bp[a*210+u*14+d];
              return(r);
            }

            function CurrentCare(){
              var r = 0;
              var co = 0+Number(opinion);
              var ch = 0+Number(heart);
              var cl = 0+Number(lung);
              if(co > 1.5||ch > 1.5||cl > 1.5)
              {r = 1;}
              if(Number(cancer)>0){
              r = Math.max(4000,r*qxd[Math.floor(age/5)]);}
              else{r = r*qxd[Math.floor(age/5)]}
              console.log("加算死亡: "+r);
              return(r);
            }
        
            function Q2L(qx,m,a,c){  
              var ql = qx.length;
              for (let i = 0 ; i < ql; i++){qx[i] = m*qx[i];}
              qx[age.value]=qx[age.value]+a;
              if(c>0){
                for(let i = 1 ; i < c; i++){            
                  var x = age+i;
                  qx[x] = qx[x]+a;
                }
              }   
              var lx = [100000];
              for (let i = 0 ; i < ql; i++){
                lx[i+1] = lx[i]*Math.max(0,1-qx[i]/100000);}
              return(lx);
            }
        
            function LifetimeCal(lx){
              var l = lx.length;
              var ktx = [lx[l-1]];
              for (let i = 1; i < l ; i++){
                var lk = ktx.length;
                ktx[lk] = ktx[lk-1]+lx[l-i-1];}
              ltx = [Math.round(10*ktx[l-1]/lx[0])/10-0.5];  
              for (let i = 1; i < l ; i++){
                var lt = ltx.length
                ltx[lt] = Math.round(10*ktx[l-i-1]/lx[i])/10+i-0.5;}
              return(ltx);
            }
            Yage = age;
            YLT = yltx[age];
            NLT = nltx[age];
            if(65>age){
              E65 = Math.round(yLx[65]/yLx[age]*1000)/10;}
            else{E65 = 100;}
            if(70>age){
              E70 = Math.round(yLx[70]/yLx[age]*1000)/10;}
            else{E70 = 100;}
            if(80>age){
              E80 = Math.round(yLx[80]/yLx[age]*1000)/10;}
            else{E80 = 100;}
            if(90>age){
              E90 = Math.round(yLx[90]/yLx[age]*1000)/10;}
            else{E90 = 100;}
            if(100>age){
              E100 = Math.round(yLx[100]/yLx[age]*1000)/10;}
            else{E100 = 100;}
        
              Ylt = yltx[age.value];
              Nlt = nltx[age.value];
              if(65>age){ E65 = Math.round(yLx[65]/yLx[age]*1000)/10;}
              else{E65 = 100;}
              if(70>age){E70 = Math.round(yLx[70]/yLx[age]*1000)/10;}
              else{E70 = 100;}
              if(80>age){E80 = Math.round(yLx[80]/yLx[age]*1000)/10;}
              else{E80 = 100;}
              if(90>age){E90 = Math.round(yLx[90]/yLx[age]*1000)/10;}
              else{E90 = 100;}
              if(100>age){E100 = Math.round(yLx[100]/yLx[age]*1000)/10;}
              else{E100 = 100;}

              Gfr = GFR();  
              
            
            function Qbmi(){
              var r = (10000*weight)/(high*high*22);
              if(r<0.65){r=500;}
              else if(r<0.7){r=50;}
              else if(r<0.85){r=25;}
              else if(r<1.136){r=0;}
              else if(r<1.4){r=25;}
              else if(r<1.5){r=60;}
              else if(r<1.7){
                if(age<40){r=80;}
                else{r=60;}}
              else if(r<1.8){
                if(age<40){r=120;}
                else{r=80;}}
              else{r=500;}  
              return(r);}  
        
            function Qurp(){
              var r =0;
              let c = 0+urp;
              if(c > 8){r=0;}
              else if(c<0.5){r=25;}
              else if(c < 1.5){
                if(age<40){r = 60;}
                else{r = 40;}
              }
              else if(c < 2.5){
                if(age<40){r = 110;}
                else{r = 90;}
              }
              else if(c < 3.5){
                if(age<40){r = 230;}
                else{r = 160;}
              }
              else{r = 500;}
              return(r);
            }
            
            function Qurs(){
              var r =0;
              let c = 0+urs;
              if(c > 8){r = 0;}
              else if(c < 0.5){
                if(age<40){r = 60;}
                else if(age<60){r = 50;}
                else{r = 40;}
              }
              else if(c < 1.5){
                if(age<40){r = 80;}
                else if(age<60){r = 60;}
                else{r = 40;}
              }
              else if(c < 2.5){
                if(age<40){r = 120;}
                else if(age<60){r = 80;}
                else{r = 50;}
              }
              else if(c < 3.5){
                if(age<40){r = 170;}
                else if(age<60){r = 120;}
                else{r = 80;}
              }
              else if(c < 4.5){
                if(age<40){r = 250;}
                else if(age<60){r = 170;}
                else{r = 120;}
              }
              else {r=500;}
              return(r);
            }  
            function Qua(){
              var r = 0;
              let c = 0+ua;
              if(c < 8){r = 0;}
              else if(c < 9){
                if(age<40){r = 20;}
                else{r = 0;}
              }
              else if(c < 10){
                if(age<40){r = 50;}
                else{r = 20;}
              }
              else{
                if(age<40){r = 80;}
                else{r = 50;}
              }
              return(r);
            }

            function Qliver(){
              var at = Math.max(ast,alt);
              var r = 0;
              if(gtp<200){
                if(at<=30){r = 0;}
                else if(at<80){r = 40;}
                else if(at<100){r = 60;}
                else if(at<150){r = 80;}
                else{r = 500;}
              }
              else if(gtp<300){
                if(at<60){r = 40;}
                else if(at<80){r = 50;}
                else if(at<100){r = 60;}
                else if(at<150){r = 120;}
                else{r = 500;}
              }
              else if(gtp<400){
                if(at<60){r = 120;}
                else if(at<100){r = 170;}
                else if(at<150){r = 250;}
                else{r = 500;}
              }
              else if(gtp<500){
                if(at<60){r = 170;}
                else if(at<100){r = 250;}
                else if(at<150){r = 300;}
              else{r = 500;}
              }
              else{r = 500;}
              if(gtp>50){
                if(gtp<100){r = Math.max(r,25);}
                else{r = Math.max(r,60);}
              }
              return(r);
            }
            function GFR(){
              if(crt<0){gfr = -1;}
              else{
               var gfr = 194*Math.pow(age,-0.287)*Math.pow(crt,-1.094);
               if(gender == 2 ){gfr = 0.739*gfr;}}
              return(gfr);
            }

            function Qkidney(){
              if(crt<0){crtm = 0.7;}else{crtm = crt;}
              var gfr = 194*Math.pow(age,-0.287)*Math.pow(crtm,-1.094);
              if(gender == 2 ){gfr = 0.739*gfr;}
              var r = 0;
              if(gender == 1 ){
                if(crtm >= 1.8){
                  r = 500;
                  if(urp == 9 ){r = r/2;}
                }
                if(crtm>1){r = Math.max(25,r);}
              }
              else{
                if(crtm >= 1.4){r = 500;}
                if(urp == 9){r = r/2;}
                if(crtm>1){r = Math.max(40,r);}
              }
              if(gfr < 60){
                if(age<25){r = 500;}
                else if(age < 45){r = 350;}
                else{r = 250;}
                if(urp == 9 ){r = r/2;}
              }
              return(r);
            }
        
            function Qfat(){
              var r=0;
              var l = 0;
              if(tl<=ldl.val+100){l = 100+ldl;}
              else{l = tl;}
              if(age < 40){
                if(l < 200){r=0}
                else if(l < 350){
                  if(hdl <=35){r = 80;}
                  else if(hdl < 55){r = 50;}
                  else {r = 20;}
                }  
                else if(l < 300){
                  if(hdl <=35){r = 110;}
                  else if(hdl < 55){r = 80;}
                  else {r = 50;}
                }  
                else if(l < 500){
                  if(hdl <=35){r = 150;}
                  else if(hdl < 55){r = 120;}
                  else {r = 90;}
                }
                else{r = 500;}
                }
              else if(age < 60){
                if(l < 350){r=0}
                else if(l < 400){
                  if(hdl <=35){r = 80;}
                  else if(hdl < 55){r = 50;}
                  else {r = 40;}
                }
                else if(l < 500){
                  if(hdl <=35){r = 110;}
                  else if(hdl < 55){r = 80;}
                  else {r = 50;}
                }
                else{r = 500;}
                }
              else {
                if(l < 400){r=0}
                else if(l < 500){
                  if(hdl <=35){r = 80;}
                  else if(hdl < 55){r = 50;}
                  else {r = 40;}
                }
                else{r = 500;}
                } 
              if(tg <= 500){r = r;}
              else if(tg <= 750){r = r+80}
              else if(tg < 1000){r = r+120}
              else{r = 500;}
              if(hdl<40){r = Math.max(r,25);}
              if(ldl>100){r = Math.max(r,5);}
              if(ldl>110){r = Math.max(r,15);}
              if(ldl>119){r = Math.max(r,25);}
              if(ldl<60){r = Math.max(r,25);}
              if(tg>149){r = Math.max(r,25);}
              if(tg<30){r = Math.max(r,25);}
              return(r);
            }
        
            function Qsugar(){
              var r = 0;
              var j = 0.98*hba-0.245;
              if(age<40){
                if(j<5.8){r = 0;}
                else if(j<6.5){r = 50;}
                else if(j<7){r = 80}          
                else if(j<8){r = 120}
                else if(j<10){r = 170}
                else{r = 500;}
              }
              else if(age<60){
                if(j<5.8){r = 0;}
                else if(j<6.5){r = 30;}
                else if(j<7){r = 50}          
                else if(j<8){r = 80}
                else if(j<10){r = 120}
                else{r = 500;}
              }
              else{
                if(j<6.5){r = 0;}
                else if(j<7){r = 30}          
                else if(j<8){r = 50}
                else if(j<10){r = 80}
                else{r = 500;}
              }
              if(hba>5.5){r = Math.max(r,25);}
              if(hba>6.0){r = Math.max(r,80);}
              if(hba>6.5){r = Math.max(r,100);}
              if(bs>100){r = Math.max(r,40);}
              if(bs>125){r = Math.max(r,80);}
              return(r);
            }
        
            function Qblood(){
              var r = 0;
              if(rb<0){rbm = 360;}else{rbm = rb;}
              if(hb<0){hbm = 13.5;}else{hbm = hb;}
              if(plat<0){platm = 25;}else{platm = plat;}
              if(gender == 1 ){
                if(rbm<350){r = 500;}
                else if(hbm<12){r = 500;}
                else if(hbm<12.6){
                  if(platm<10){r = 500;}
                  else if(platm<50.1){r = 50;}
                  else{r = 500;}
                }
                else if(hbm<18){
                  if(platm<10){r = 500;}
                  else if(platm<50.1){r = 0;}
                  else{r = 500;}
                }
                else if(hbm<19){
                  if(platm<10){r = 500;}
                  if(platm<50.1){r = 50;}
                  else{r = 500;}  
                }
                else{r = 500;}
                if(hbm<13.1){r = Math.max(r,25);}
                if(hbm>16.3){r = Math.max(r,25);}
                if(platm<14.5){r = Math.max(r,25);}
                if(platm>32.9){r = Math.max(r,25);}
              }
              else{
                if(rbm<300){r = 500;}
                else if(hbm<9){r = 500;}
                else if(hbm<9.6){
                  if(platm<10){r = 500;}
                  else if(platm<50.1){r = 50;}
                  else{r = 500;}
                }
                else if(hbm<16){
                  if(platm<10){r = 500;}
                  else if(platm<50.1){r = 0;}
                  else{r = 500;}
                }
                else if(hbm<17){
                  if(platm<10){r = 500;}
                  else if(platm<50.1){r = 50;}
                  else{r = 500;}  
                }
                else{r = 500;}
                if(hbm<12.1){r = Math.max(r,25);}
                if(hbm>14.5){r = Math.max(r,25);}
                if(platm<14.5){r = Math.max(r,25);}
                if(platm>32.9){r = Math.max(r,25);}
              }
              return(r);
            }

      //Prompt形成

      function setAgenda(ylt, nlt) {
        if (ylt >= nlt) {
            return "健康寿命を伸ばす対策";
        } else if (ylt > (nlt - 8)) {
            return "健康回復策";
        } else {
            return "治療方針";
        }
    }
    
    function setMaxt(ylt, nlt) //最大トークン数
    {
        if (ylt >= nlt) {
            return 3900;
        } else if (ylt > (nlt - 5)) {
            return 4000;
        } else {
            return 4000;
        }
    }
    
    function setGender(ge) {
        return ge < 2 ? "男性" : "女性";
    }
    
    function setUrine(urine) {
        if (urine === 9 || urine === 0) {
            return "問題なし";
        } else {
            return "問題あり";
        }
    }
    
    function setHeart(he) {
      if (he < 0.5) {
          return "異常なし";
      } else if (he < 1.5) {
          return "経過観察中";
      } else if (he < 2.5) {
          return "治療や精密検査が必要";
      } else {
          return "治療中";
      }
    }
    function setLung(lu) {
        if (lu < 0.5) {
            return "異常なし";
        } else if (lu < 1.5) {
            return "経過観察中";
        } else if (lu < 2.5) {
            return "治療や精密検査が必要";
        } else {
            return "治療中";
        }
    }
    
    function setCancer(can) {
        if (can < 0.5) {
            return "いいえ。または癌治療終了後5年以上経過しています。";
        } else if (can < 1.5) {
            return "はい。しかし、癌治療終了後4年以上経過していますが経過観察中です。";
        } else if (can < 2.5) {
            return "はい。しかし、癌治療終了後3年以上経過していますが経過観察中です。";
        } else if (can < 3.5) {
            return "はい。しかし、癌治療終了後2年以上経過していますが経過観察中です。";
        } else if (can < 4.5) {
            return "はい。しかし、癌治療終了後1年以上経過していますが経過観察中です。";
        } else if (can < 5.5) {
            return "はい。しかし、癌治療終了後1年未満で経過観察中です。";
        } else {
            return "はい。そして、がんの治療や投薬中です。";
        }
    }
    
    function setOpinion(op) {
        if (op < 0.5) {
            return "いいえ。";
        } else if (op < 1.5) {
            return "はい。しかし、すでに完治し、経過観察も不要と医師等から言われています。";
        } else if (op < 2.5) {
            return "はい。その病気について、治療・投薬は受けていませんが経過観察中です。";
        } else {
            return "はい。そして、その手術等を行なった病気の後も治療や投薬中です。";
        }
    }
    
    function setMedication(drugs, drugst) {
        const drugsParts = `私は毎日、${drugs}を服用しています。その服薬の目的は${drugst}です。'`;
        return drugsParts;
    }

//飲酒　コンテンツ
    function setWine(wine) {
      if (wine > 1.5) {
          return "禁酒";
      } else if (wine > 0.5) {
          return "月にワイン1本以下を飲む";
      } else if (wine > -1.5) {
          return "月にワイン4本以下を飲む";
      } else {
          return "月にワイン4本超を飲む";
      }
    } 

    function adviceWine(wine) {
      if (wine < 0.5) {
       return[
         {"飲酒を見直すためのメッセージ": "毎晩の晩酌が楽しみな方にとって、「少量の飲酒は健康に良い」という話や、ストレス解消のための飲酒が有益だと信じてしまうことは、とても魅力的に感じるかもしれません。しかし、近年の研究や多くの医療機関の見解によると、少量の飲酒であっても、実際には健康リスクを伴うことが明らかになってきています。"},
         {"1. 「少量の飲酒が健康に良い」というのは誤解": "これまで、少量の飲酒が心臓病や血圧の管理に効果的だとされ、「Jカーブ仮説」として知られる主張がありました。しかし、WHOや米国CDC、日本の厚生労働省など、多くの権威ある機関は近年、この考え方に疑問を呈しています。例えば、少量のアルコールであっても癌、特に乳がんや大腸がんのリスクを増加させることが確認されており、癌の専門家は「飲まないことが最も安全な選択」と断言しています。少しでもアルコールを摂取することが「健康を害する可能性がある」というのは、多くの人にとって驚きかもしれませんが、科学的なデータに基づいた真実なのです。"},
         {"2. アルコールが引き起こす病気の深刻さ": "アルコールは、体の各臓器に大きな負担をかけます。特に肝臓に与えるダメージは甚大で、長期的に飲酒を続けると、肝臓が正常に機能できなくなり、肝硬変や肝臓がんを引き起こす可能性があります。さらに、心臓病、脳卒中、高血圧、不整脈といった心血管疾患のリスクも増加します。また、アルコールは脳にもダメージを与え、認知機能を低下させ、認知症リスクを高めることが報告されています。"},
         {"3. 飲酒がもたらすストレス解消は一時的なもの": "多くの人は「お酒を飲むとストレスが解消される」と感じているかもしれません。しかし、アルコールがもたらすリラックス効果は一時的なものであり、長期的にはストレスホルモン（コルチゾール）の分泌を増加させ、ストレス耐性を低下させることがわかっています。飲酒に頼ったストレス解消は、むしろストレスを悪化させる可能性があるのです。"},
         {"4. アルコールの覚醒作用と中毒性": "アルコールにはリラックス効果があると同時に、覚醒作用もあります。特に夜に飲酒をすると脳が活性化し、深い眠りが妨げられるため、睡眠不足や日中の疲労感を引き起こしやすくなります。さらに、アルコールには中毒性があり、少量から始めても徐々に量が増え、依存症や多量飲酒に陥るリスクがあるため、量を制限することが重要です。"},
         {"5. 赤ワインのポリフェノール神話の否定": "「赤ワインのポリフェノールが健康に良い」という俗説がありますが、アルコール自体の有害性がそれを大きく上回るため、赤ワインを健康のために摂取するのは誤りです。ポリフェノールは他の健康的な食品（ブドウ、ブルーベリーなど）から摂取することができるので、アルコールに頼る必要はありません。"},
         {"6. 「今のままではどうなるか」を考えてみてください": "「自分はまだ健康だから大丈夫」と思うかもしれませんが、アルコールに関連する健康問題はある日突然現れることがあります。体調が悪くなってからでは手遅れです。また、家族や友人にとっても、あなたの健康が損なわれることは悲しいことです。「健康で長生きしてほしい」という大切な人の願いを、どうか考えてみてください。"},
         {"7. 今からでも遅くはありません": "飲酒の習慣を完全にやめることは難しいかもしれません。しかし、まずは量を減らし、飲まない日を設けることから始めてみましょう。研究によると、断酒や減酒を行うと、わずか数週間で体調が改善し、血圧が安定し、睡眠の質が向上することが確認されています。小さな一歩が、あなたの体に大きな変化をもたらします。"},
         {"8. 専門的権威の見解": "WHO（世界保健機関）、米国CDC（疾病対策センター）、日本の厚生労働省などの権威ある機関は、一貫して飲酒の健康リスクを強調しています。WHOは「どのレベルの飲酒でも癌のリスクが上昇する可能性がある」と警告し、少量であっても健康に有害であるとしています。米国CDCは、アルコール関連の死亡数がアメリカで年間約17万8000件に達していると報告し、日本の厚生労働省も「飲酒は少量であってもリスクを伴う」との見解を示しています。これらの見解に基づき、飲酒量を可能な限り抑え、健康を守ることが推奨されています。"}
        ];
      }
      else if(wine < 1.5){
        return[
          {"飲酒を見直すためのメッセージ": "毎晩の晩酌が楽しみな方にとって、「少量の飲酒は健康に良い」という話や、ストレス解消のための飲酒が有益だと信じてしまうことは、とても魅力的に感じるかもしれません。しかし、近年の研究や多くの医療機関の見解によると、少量の飲酒であっても、実際には健康リスクを伴うことが明らかになってきています。"},
          {"1. 「少量の飲酒が健康に良い」というのは誤解": "これまで、少量の飲酒が心臓病や血圧の管理に効果的だとされ、「Jカーブ仮説」として知られる主張がありました。しかし、WHOや米国CDC、日本の厚生労働省など、多くの権威ある機関は近年、この考え方に疑問を呈しています。例えば、少量のアルコールであっても癌、特に乳がんや大腸がんのリスクを増加させることが確認されており、癌の専門家は「飲まないことが最も安全な選択」と断言しています。少しでもアルコールを摂取することが「健康を害する可能性がある」というのは、多くの人にとって驚きかもしれませんが、科学的なデータに基づいた真実なのです。"},
          {"2. アルコールが引き起こす病気の深刻さ": "アルコールは、体の各臓器に大きな負担をかけます。特に肝臓に与えるダメージは甚大で、長期的に飲酒を続けると、肝臓が正常に機能できなくなり、肝硬変や肝臓がんを引き起こす可能性があります。さらに、心臓病、脳卒中、高血圧、不整脈といった心血管疾患のリスクも増加します。また、アルコールは脳にもダメージを与え、認知機能を低下させ、認知症リスクを高めることが報告されています。"},
          {"3. 飲酒がもたらすストレス解消は一時的なもの": "多くの人は「お酒を飲むとストレスが解消される」と感じているかもしれません。しかし、アルコールがもたらすリラックス効果は一時的なものであり、長期的にはストレスホルモン（コルチゾール）の分泌を増加させ、ストレス耐性を低下させることがわかっています。飲酒に頼ったストレス解消は、むしろストレスを悪化させる可能性があるのです。"},
          {"4. アルコールの覚醒作用と中毒性": "アルコールにはリラックス効果があると同時に、覚醒作用もあります。特に夜に飲酒をすると脳が活性化し、深い眠りが妨げられるため、睡眠不足や日中の疲労感を引き起こしやすくなります。さらに、アルコールには中毒性があり、少量から始めても徐々に量が増え、依存症や多量飲酒に陥るリスクがあるため、量を制限することが重要です。"},
          {"5. 赤ワインのポリフェノール神話の否定": "「赤ワインのポリフェノールが健康に良い」という俗説がありますが、アルコール自体の有害性がそれを大きく上回るため、赤ワインを健康のために摂取するのは誤りです。ポリフェノールは他の健康的な食品（ブドウ、ブルーベリーなど）から摂取することができるので、アルコールに頼る必要はありません。"},
          {"6. 専門的権威の見解": "WHO（世界保健機関）、米国CDC（疾病対策センター）、日本の厚生労働省などの権威ある機関は、一貫して飲酒の健康リスクを強調しています。WHOは「どのレベルの飲酒でも癌のリスクが上昇する可能性がある」と警告し、少量であっても健康に有害であるとしています。米国CDCは、アルコール関連の死亡数がアメリカで年間約17万8000件に達していると報告し、日本の厚生労働省も「飲酒は少量であってもリスクを伴う」との見解を示しています。これらの見解に基づき、飲酒量を可能な限り抑え、健康を守ることが推奨されています。"}
         ];
       }
      else{
        return[
          {"禁酒は素晴らしい！": "飲酒は、少量でも健康リスクを伴うことが科学的に証明されています。特に肝臓や心臓、脳などに長期的なダメージを与え、最悪の場合には依存症に至ることもあります。あなたが禁酒を続けていることは、身体的にも精神的にも非常に価値のある選択です。この選択が、あなたの健康と未来を守る大きな力となっていることを忘れないでください。"},
          {"禁酒を続けることの大切さ": "禁酒を続けることは、単にお酒を飲まないという行為以上の意味を持ちます。それは、自己管理の力を強化し、自分の健康を第一に考えられることの証でもあります。時には、誘惑や社会的なプレッシャーに負けそうになることもあるかもしれませんが、その時こそ、なぜ禁酒を始めたのかを思い出してみてください。あなたの努力と決断力は、家族や友人、そして何よりも自分自身を守る力です。禁酒は人生の質を高める選択であり、それを続けることによって得られる恩恵は計り知れません。"},
          {"飲酒している人との交流の仕方": "禁酒をしていると、飲酒する場面でどう対応するか悩むことがあるかもしれません。その場合、無理に飲酒の席を避ける必要はありませんが、自分の意思をしっかりと伝えることが大切です。『今は飲まないと決めているんだ』と率直に伝えると、相手も理解してくれることが多いです。ノンアルコール飲料を選んだり、飲酒以外の楽しみ方を提案したりするのも良い方法です。自分が禁酒を選んでいることに誇りを持ち、自信をもって振る舞いましょう。"},
          {"家族や友人に禁酒を勧める方法": "家族や友人の中に、健康を心配するほどの飲酒習慣を持っている人がいる場合、相手を非難するのではなく、あなた自身が禁酒によってどれだけ心身が楽になったかを伝えることから始めてみましょう。説得するのではなく、自分の経験を共有する形で話すと、相手も自然と耳を傾けてくれることが多いです。また、飲酒の代わりに楽しめる活動（スポーツ、料理、趣味など）を一緒に提案し、禁酒のポジティブな面を感じてもらうことも効果的です。相手のペースを尊重し、無理強いはしないよう心がけましょう。"},
          {"自分を大切にすることの意義": "禁酒を続けているあなたは、すでに自分の健康と幸福を大切にしている証です。どんなに小さな進歩でも、自分を褒めてあげてください。もし挫けそうになった時は、これまでに達成した成果を思い返し、将来の目標を見据えましょう。禁酒によって得られる心身の健康は、あなた自身と周囲の人々にも良い影響を与えます。『自分を大切にする』という信念を持ち続け、これからも禁酒の道を歩み続けてください。"}
        ];
      }
    }

//喫煙　コンテンツ
    function setSmoke(smoke) {
      if (smoke > 0.5) {
          return "禁煙している。喫煙経験もなし。";
      } else if (smoke > -0.5) {
          return "今は禁煙しているが、過去に喫煙していた。";
      } else {
          return "喫煙している。";
      }
    }

    function adviceSmoke(smoke) {
      if (smoke > 0.5) {
       return[         
         {"タバコを吸わないことの素晴らしさ": "あなたはタバコを吸わない選択をしてきたことを誇りに思ってください。それは、健康を守り、将来の病気リスクを大幅に減らしているということです。タバコを吸わないことで、肺や心臓、血管の健康を維持できるだけでなく、身体の機能も常に良好な状態を保つことができます。タバコを一度も吸わずにいることは、長寿を全うし、人生をよりアクティブに楽しむための大きな要因となります。今後もその選択を大切にしてください。"},
         {"タバコに手を出さないことの意義": "タバコに手を出さないことは、自分自身を守るだけでなく、周囲の人々にも良い影響を与える行動です。喫煙者は、非喫煙者の模範的な姿勢を見て自分の行動を見直すことがあるかもしれません。また、周囲に「一度も吸わない」という意思を貫くことで、タバコに対する社会的なイメージの改善にも貢献しています。あなたがこれまで続けてきた選択は、個人の健康だけでなく、社会全体の健康維持においても価値のあるものです。"},  
         {"タバコの誘惑に負けないための心構え": "これまでタバコを吸ったことがなくても、友人や同僚からの軽い勧めや、ストレスの多い場面で一度試してみたくなることがあるかもしれません。しかし、ここで大切なのは、なぜタバコを吸わないと決めたのかを思い出すことです。喫煙は一度始めると依存性が非常に強く、やめることが難しくなる習慣です。『最初の一本』が、長期的な健康被害や後悔を生む原因となる可能性があります。周囲に流されず、自分の意志を強く持ち続けましょう。"},
         {"喫煙者との付き合い方": "タバコを吸わない人でも、喫煙者の友人や家族と過ごすことはあります。その際には、タバコの煙をできる限り避けるようにし、受動喫煙のリスクを減らすことを意識してください。もし同じ空間にいるときは、タバコを吸わない場所を選ぶようにお願いしたり、自分がリラックスできる環境を整えることが大切です。相手が喫煙していても、自分は吸わないという意志を尊重し続けてください。また、相手が禁煙を考えているときには、サポートする姿勢を見せることで一緒に健康を守ることができます。"},
         {"自分の選択を守ることの大切さ": "これまでタバコを吸ったことがないということは、非常に意義深い選択です。その選択は、自分の健康を守り、将来の病気リスクを減らし、生活の質を向上させる力となります。社会の中には、タバコを『カッコいい』や『リラックスできる』といったイメージを持って勧める人もいるかもしれませんが、自分の健康を守る選択は何よりも尊重されるべきものです。今後もその選択を大切にし、自信を持って『吸わない』自分を守り続けてください。"}
       ]}
      else if(smoke > -0.5){
        return[
          {"禁煙を続けることの重要性": "禁煙を続けているあなたは、すでに素晴らしい決断をしています。タバコをやめることで、あなたは自分自身と周囲の健康を守り、将来の病気リスクを大幅に減らすことができるのです。肺や心臓の機能は時間と共に回復し、あなたの体は日に日に強くなっています。禁煙は簡単ではないかもしれませんが、それを続けることはあなた自身の意志と強さの証です。何度も自分の選択を再確認し、健康的なライフスタイルをこれからも大切にしてください。"},
          {"周囲の喫煙者と付き合う際の注意点": "禁煙をしていると、喫煙者の友人や同僚と接するときに葛藤を感じることがあります。その場合、まず自分が禁煙を続けていることを伝えましょう。相手はきっとあなたの意志を尊重し、理解してくれるはずです。また、喫煙の席に招かれた場合は、無理をせずに参加を見送ったり、ノンアルコールやソフトドリンクを楽しむなどの選択をしましょう。重要なのは、自分の意志を守ることです。健康のために選んだ禁煙を貫く自分に誇りを持ちましょう。"},
          {"禁煙を続けるメリット": "禁煙を続けることで、心肺機能の改善、血圧の正常化、免疫機能の回復など、さまざまな健康効果が現れます。例えば、禁煙開始から2〜3週間で、血流や呼吸機能が改善され、運動が楽に感じられるようになります。1年経過すると、心臓病のリスクが喫煙者の半分にまで減少し、5〜10年後には、脳卒中や心血管疾患のリスクが非喫煙者と同レベルまで低下します。これらの効果は、あなたの生活の質を大きく向上させ、将来の健康に対して強力な保険となります。"},
          {"禁煙中のストレス管理法": "禁煙中はストレスを感じることがあり、イライラや不安を経験することがあります。これを和らげるためには、深呼吸や軽いストレッチ、ウォーキングなどのリラックス方法を取り入れてみましょう。また、趣味に没頭することや、家族や友人と過ごす時間を増やすことで気分転換を図りましょう。喫煙を欲する気持ちは時間とともに徐々に薄れていくので、その瞬間を乗り越えることに集中し、自分の努力を認めてあげてください。小さな成功を積み重ねていくことが、最終的に大きな成果につながります。"},
          {"困難な時期を乗り越えるためのアドバイス": "禁煙を続けていると、時には強い誘惑に駆られることがあります。そのような時は、禁煙を始めたときの動機を思い出し、自分の目標を再確認しましょう。また、禁煙の成果を記録し、得られたメリットを振り返ることも効果的です。誘惑を感じたら、すぐに行動を変え、散歩をする、冷たい水を飲む、好きな音楽を聴くなど、気分を切り替える方法を試してみましょう。そして、どんなに小さな達成でも自分を褒め、少しずつ前に進むことを大切にしてください。"},
          {"家族や友人へのサポート方法": "禁煙を成功させたあなたは、同じように禁煙に挑戦しようとしている家族や友人をサポートできる貴重な存在です。無理に禁煙を勧めるのではなく、自分の禁煙経験や感じた効果を共有することで、相手に禁煙のメリットを伝えましょう。また、相手がストレスを感じた時には、ただ話を聞いたり、一緒にできるストレス解消法を提案するなど、精神的な支えとなることも大切です。あなたの経験が、周囲の人々に健康なライフスタイルを選ぶきっかけを与えることができるかもしれません。"}
        ];
      } else {
        return [
          {"喫煙の健康への悪影響": "喫煙は、肺がんや心臓病、COPD（慢性閉塞性肺疾患）、脳卒中など、数多くの致命的な病気と直接関係しています。煙草に含まれるニコチンは非常に中毒性が高く、依存症を引き起こすだけでなく、身体の免疫力を低下させ、体内の細胞や血管に長期的なダメージを与えます。さらに、喫煙によって血流が悪化し、肌の老化が早まるなど美容面でも悪影響が出ることがあります。あなたの健康を守るために、できるだけ早く喫煙習慣を見直しましょう。"},
          {"周りの人への悪影響": "喫煙は、あなた自身だけでなく、家族や友人など周りの人にも大きな影響を及ぼします。タバコの煙には、発がん性物質を含む約200種類以上の有害物質が含まれており、非喫煙者でも同じ部屋にいるだけで健康を害する可能性があります。特に子供や高齢者、呼吸器系に疾患を持つ人にとっては、タバコの煙は深刻なリスクです。あなたが一緒に過ごす大切な人たちの健康を守るために、タバコを手放すことは非常に価値のある決断です。"},
          {"受動喫煙のリスク": "受動喫煙とは、喫煙者が吐き出す煙やタバコの燃焼過程で発生する煙を、非喫煙者が意図せずに吸い込んでしまうことです。受動喫煙によって引き起こされる健康被害は、心臓病や肺がん、喘息の悪化、さらには乳幼児突然死症候群（SIDS）など、喫煙者自身と同様に深刻なリスクを伴います。特に、妊婦が受動喫煙にさらされると、胎児にも悪影響を及ぼし、低体重児や早産のリスクが増加します。受動喫煙を防ぐためにも、禁煙を選択することはあなたの周囲の人々の健康を守ることに繋がります。"},
          {"禁煙の利点": "禁煙を始めると、身体はすぐに回復を始めます。例えば、禁煙開始から20分で心拍数と血圧が正常化し、12時間で血中の一酸化炭素濃度が低下します。1週間後には呼吸機能が改善され、1ヶ月後には運動能力や肺の回復が見られます。1年後には心臓病のリスクが喫煙者の半分にまで低下し、5年〜15年後には脳卒中のリスクが非喫煙者と同じレベルまで低下します。禁煙はあなたの体に劇的な変化をもたらし、健康寿命を延ばす最も確実な方法です。"},
          {"禁煙を始めるための心構え": "禁煙を成功させるためには、まず『なぜ禁煙したいのか』を明確にし、自分自身にとっての動機をしっかりと理解することが大切です。健康のため、大切な人のため、経済的な理由など、動機は何でも構いません。禁煙は決して簡単なことではありませんが、小さな成功体験を積み重ねることで徐々に達成感が得られます。最初は数時間、次に1日、そして1週間と目標を設定し、達成するたびに自分を褒めてください。失敗しても諦めず、禁煙のメリットを常に心に留めながら再挑戦を続けましょう。"},
          {"禁煙後の喫煙者との付き合い方": "禁煙を始めたばかりのときは、喫煙者の友人や同僚とどう接するかに悩むことがあるかもしれません。その場合、まず自分が禁煙を決意したことを率直に伝えましょう。多くの場合、相手はあなたの意志を尊重し、気を使ってくれるはずです。喫煙者と過ごす時間がストレスになるようであれば、一時的に距離を置くことも選択肢の一つです。また、喫煙者に『禁煙しろ』と無理に勧めるのではなく、あなた自身の禁煙による体調の改善などを伝えることで、相手の考え方に影響を与えられるかもしれません。"}
        ];
      }
    }  

//lifestyle contents
    function setLifestyles(checkup, exercise, diet, vegitable, family, work, sleep, relax, health, disaster, protein, oil, wcheck, dental, heartbeat, sunny, chair, talk, intelli, hobby) 
{
      const lifestyleP = {
        checkup: {
            true: "毎年健康診断を受ける。",
            false: "健康診断を定期的に受けない。"
            },
        wcheck: {
            true: "毎日体重を測る。",
            false: "毎日は体重を測定しない。"
            },
        dental: {
            true: "定期的な歯垢除去する。",
            false: "歯科での定期的な歯垢除去はしない。"
          },
        heartbeat: {
            true: "スマートウォッチで心拍を管理する。",
            false: "スマートウォッチで心拍を管理しない。"
            },
        exercise: {
            true: "週に150分以上の有酸素運動を続けている。",
            false: "有酸素運動を週に150分も行わない。"
            },
        diet: {
            true: "糖分や炭水化物を控える。",
            false: "糖分や炭水化物を制限していない。"
            },
        vegitable: {
            true: "多種類の野菜からビタミンを摂取する。",
            false: "多種類の野菜を摂取しない。"
            },
        protein: {
            true: "多様な食材からタンパク質を摂取する。",
            false: "多様な食材からはタンパク質を摂取していない。"
            },
        oil: {
            true: "良質なオイルを摂取する。",
            false: "良質なオイルは摂取できていない。"
            },
        family: {
            true: "家族と同居している。",
            false: "同居している家族がいない。"
            },
        work: {
            true: "週55時間未満の労働時間を守る。",
            false: "週55時間以上の労働になることがある。"
            },
        sleep: {
            true: "平均7時間以上の睡眠を確保する。",
            false: "平均7時間未満の睡眠になる。"
            },
        relax: {
            true: "朝、疲れが取れスッキリ目覚められる。",
            false: "朝目覚めた時に疲れが残っている。"
            },
        health: {
            true: "体力・柔軟性維持のための投資を優先する。",
            false: "健康のための出費・時間は優先度は高くない。"
            },
        disaster: {
            true: "ハザードマップで安全な地域に住んでいる。",
            false: "ハザードマップで安全な地域に住んでいない。"
            },
        sunny: {
            true: "日光を浴びることでビタミンDを維持する。",
            false: "日光を浴びる機会が少ない。"
            },
        chair: {
            true: "長時間座り続けることはない。",
            false: "1日2時間以上座りっぱなしの状態が続く。"
            },
        talk: {
            true: "友人や家族との歓談がよくある。",
            false: "友人や家族と話す機会が少ない。"
            },
        intelli: {
            true: "読書やゲームなどの知的活動を行っている。",
            false: "知的活動をあまり行っていない。"
            },
        hobby: {
            true: "趣味などでストレス解消している。",
            false: "趣味などストレスを適切に解消する方法がない。"
            }
    };

    const lifestylesDescription = {
        "定期健康診断": lifestyleP.checkup[checkup],
        "体重計測": lifestyleP.wcheck[wcheck],
        "歯垢除去": lifestyleP.dental[dental],
        "心拍チェック": lifestyleP.heartbeat[heartbeat],
        "有酸素運動": lifestyleP.exercise[exercise],
        "糖分・粉物の制限": lifestyleP.diet[diet],
        "ビタミン摂取": lifestyleP.vegitable[vegitable],
        "タンパク質摂取": lifestyleP.protein[protein],
        "良質なオイル摂取": lifestyleP.oil[oil],
        "ビタミンD": lifestyleP.sunny[sunny],
        "座りっぱなし": lifestyleP.chair[chair],
        "ストレス・疲労感": lifestyleP.relax[relax],
        "過労": lifestyleP.work[work],
        "睡眠時間": lifestyleP.sleep[sleep],
        "健康への優先度": lifestyleP.health[health],
        "歓談": lifestyleP.talk[talk],
        "趣味": lifestyleP.hobby[hobby],
        "知的活動": lifestyleP.intelli[intelli],
        "ひとり暮らし": lifestyleP.family[family],
        "災害リスク": lifestyleP.disaster[disaster],
    };
    return lifestylesDescription;
}

    function adviceLifestyles(checkup, exercise, diet, vegitable, family, work, sleep, relax, health, disaster, protein, oil, wcheck, dental, heartbeat, sunny, chair, talk, intelli, hobby) 
    {
      const lifestyleDescriptions = {
        checkup: {
            true: "毎年健康診断を受けることは、とても素晴らしい習慣です。日々の健康管理だけでなく、病気の早期発見や予防につながる大切なステップです。例えば、高血圧や糖尿病といった生活習慣病は、初期段階では自覚症状がほとんどありませんが、定期的な検査で早めに発見することで、合併症を防ぐことができます。また、がんや心臓病などの重大な病気も、早期発見が治療成功のカギです。これからもご自身の健康を守るため、ぜひこの習慣を続けてくださいね。",
            false: "健康診断を定期的に受けることは、自身の健康を守るうえでとても重要です。多くの病気は初期段階では症状が出ないため、気づかないうちに進行してしまうことがあります。特に、がんや心疾患、糖尿病、高血圧などは、初期段階で発見すれば治療や生活改善によって進行を抑えられる可能性が高いです。年に一度の健康診断は、病気の早期発見・予防のための大切なチャンスです。時間や手間を惜しまず、自分の健康と将来のために、ぜひ毎年しっかり受診する習慣をつけてください。"       
        },
        wcheck: {
            true: "毎日体重を測ることは、素晴らしい健康管理の習慣です。体重の増減を把握することで、肥満や糖尿病、高血圧といった生活習慣病のリスクを早期に察知し、予防することができます。ぜひこの習慣を続けてくださいね。",
            false: "毎日体重を測定することは、健康管理においてとても大切な習慣です。体重の変化は、体調の変化をいち早く知らせる重要なサインです。例えば、体重の急激な増加や減少は、糖尿病や心疾患、甲状腺の異常など、潜在的な病気の初期兆候を示すことがあります。また、日々の体重管理は、肥満やメタボリックシンドロームなどのリスクを減らし、生活習慣病の予防にもつながります。毎日同じ時間に体重を測ることで、日々の体調を把握し、健康維持に役立てましょう。ぜひ、今日から習慣にしてみてください。"
        },
        dental: {
            true: "定期的な歯垢除去は、素晴らしい習慣です。歯垢の蓄積は虫歯や歯周病だけでなく、心疾患や糖尿病のリスクも高めるとされています。これからもぜひ毎年歯科でのケアを続け、全身の健康を守りましょう。",
            false: "歯科での定期的な歯垢除去は、口腔内だけでなく全身の健康にも大きく関わります。歯垢が蓄積すると、虫歯や歯周病の原因となるだけでなく、歯周病菌が血管を通じて体内に広がり、心疾患や脳梗塞、糖尿病のリスクを高めることが分かっています。また、歯を失うと咀嚼力が低下し、認知症のリスクも増すことが指摘されています。歯垢除去は病気を予防し、健康寿命を延ばすための大切なケアです。ぜひ、定期的に歯科でのチェックとケアを受けてください。"
        },
        heartbeat: {
            true: "スマートウォッチで心拍を管理することは素晴らしい習慣です。異常な心拍数は不整脈や心疾患のサインになることもあり、早期発見に役立ちます。これからも続けて、健康管理を徹底してくださいね。",
            false: "心拍数の管理は、健康を守る上でとても重要です。特に心拍の最大値や変動は、心臓の状態を把握する重要な指標です。異常な心拍数（過度の増加や減少）は、不整脈や心疾患のサインとなることがあり、これらを見逃すと突然の心不全や脳梗塞のリスクが高まることがあります。スマートウォッチを使えば、日々の心拍数を簡単に記録し、異常があれば早期に対処できます。健康管理は小さな積み重ねが大切ですので、ぜひ心拍管理を習慣にして、病気予防に役立ててください。"
        },
        exercise: {
            true: "週に150分以上の有酸素運動を続けることは素晴らしいです。心肺機能を強化し、心疾患や高血圧、糖尿病のリスクを大幅に減らせます。ぜひこの健康習慣を維持し、心身の健康を守り続けてくださいね。",
            false: "有酸素運動を週に150分以上行うことは、健康維持にとても重要です。適度な運動は、心肺機能を高め、血圧や血糖値をコントロールし、心疾患や脳卒中、2型糖尿病などの生活習慣病のリスクを大幅に減らせることが分かっています。逆に、運動不足の状態が続くと、肥満やメタボリックシンドロームのリスクが高まり、日常的なストレスの解消や睡眠の質にも悪影響が出やすくなります。体力や年齢に合わせて少しずつで構いませんので、ぜひ週に150分を目指して運動習慣を取り入れてみてください。"
        },
        diet: {
            true: "糖分や炭水化物を控える習慣は素晴らしいです。これにより、血糖値の急上昇を防ぎ、糖尿病や肥満、メタボリックシンドロームのリスクを減らせます。これからも続けて、健康を守りましょう！",
            false: "糖分や炭水化物（麺類、粉物、ご飯、でん粉）を過剰に摂取することは、健康に大きな影響を与えます。特に、血糖値が急上昇することでインスリンの分泌が増え、これが続くと糖尿病や肥満、高血圧といった生活習慣病のリスクが高まります。また、糖分の過剰摂取は中性脂肪の増加を招き、心疾患や脂肪肝の原因にもなります。食事のバランスを整え、糖質を適度に制限することで、これらの病気の予防ができます。健康を守るために、ぜひ今の食習慣を見直し、改善してみてください。"
        },
        vegitable: {
            true: "多種類の野菜からビタミンを摂取することは素晴らしい習慣です。これにより、免疫力を高め、生活習慣病やがん、老化のリスクを軽減できます。ぜひ今後もバランスの良い食事を続けて、健康を守ってください！",
            false: "多種類の野菜を摂取しないと、必要なビタミンやミネラルが不足し、体に様々な影響を及ぼすことがあります。ビタミンA、C、Eは免疫力を高め、細胞の老化を防ぎますが、これらが不足すると感染症やがんのリスクが増大します。また、葉酸やビタミンB群が不足すると、疲労感や貧血、神経系の異常を引き起こすこともあります。さらに、野菜に含まれる食物繊維は腸内環境を整え、生活習慣病の予防にも重要です。健康維持のため、できるだけ多様な野菜を毎日取り入れて、栄養バランスを意識しましょう。"
        },
        protein: {
            true: "多様な食材からタンパク質を摂取することは素晴らしいです。筋力維持や免疫機能の向上に役立ち、骨粗しょう症やサルコペニア、代謝異常のリスクを減らせます。これからもぜひ続けて健康を保ってくださいね！",
            false: "タンパク質は、筋肉や内臓、肌、髪など体のあらゆる組織を構成する重要な栄養素です。不足すると、筋力低下や免疫力の低下、代謝の低下を引き起こし、疲れやすくなったり、感染症にかかりやすくなったりします。また、特定の食品ばかりからタンパク質を摂取すると、栄養バランスが偏り、ビタミンやミネラルの不足につながります。多様な食材（肉、魚、豆類、乳製品、卵など）からバランスよくタンパク質を摂取することで、体全体の健康が保たれ、生活習慣病の予防にもなります。ぜひ日々の食事を見直して、健康的なタンパク質の摂取を心がけてください。"
        },
        oil: {
            true: "良質なオイルを摂取することは素晴らしい習慣です。オメガ3脂肪酸や不飽和脂肪酸は、心疾患のリスクを減らし、血管を健康に保ちます。これからもぜひ続けて、心身の健康を守りましょう！",
            false: "良質なオイル（青魚に含まれるDHA・EPA、エゴマ油、オリーブオイルなど）を摂取しないと、健康リスクが高まります。これらのオイルは、体内の悪玉コレステロールを減らし、血管を柔軟に保ち、動脈硬化や心疾患、脳卒中のリスクを下げる効果があります。また、オメガ3脂肪酸は脳の働きをサポートし、認知症やうつ病の予防にも役立ちます。逆に、これらを不足すると、血液がドロドロになり、心血管系の病気のリスクが上昇します。バランスの取れた脂質を摂取し、健康な体と心を保つために、日々の食事に良質なオイルを積極的に取り入れてみてください。"
        },
        family: {
            true: "家族と同居することは素晴らしい選択です。日々の交流は心の健康を保ち、孤独による認知症やうつ病のリスクを減らせます。また、万一の事故や急病時にも助け合えるため安心です。ぜひこの生活を続けてくださいね。",
            false: "同居している家族がいない場合、生活習慣が乱れやすく、健康リスクが高まることがあります。例えば、食事や睡眠の不規則さ、運動不足などが続くと、肥満や高血圧、糖尿病などの病気を引き起こしやすくなります。また、孤独感が強まると認知症やうつ病のリスクも増加します。さらに、事故や急病が起きた際、発見が遅れて重症化する恐れもあります。家族との同居や定期的な交流は、生活のリズムを整え、病気予防や安全面でも大きな支えになります。ぜひ家族とのつながりを意識して、心身の健康を守りましょう。"
        },
        work: {
            true: "週55時間未満の労働時間を守ることは素晴らしいです。過労は心疾患や脳卒中、事故のリスクを高め、認知症やうつ病の原因にもなります。これからもバランスの取れた働き方を続けて、健康を守りましょう！",
            false: "週55時間以上の労働は、生活習慣の乱れを招き、心身に大きな負担をかけます。長時間労働は、睡眠不足やストレスの増加につながり、心疾患や脳卒中、うつ病、さらには認知症のリスクを高めることが分かっています。また、過労による集中力の低下は、交通事故や作業ミスの原因にもなり、命に関わる危険性もあります。仕事も大切ですが、健康を守ることが最優先です。労働時間を見直し、休息をしっかりと取ることで、体と心のバランスを整えましょう。これからの健康のために、ぜひ改善を検討してください。"
        },
        sleep: {
            true: "毎晩7時間以上の睡眠を確保することは素晴らしい習慣です。十分な睡眠は、心疾患や糖尿病、認知症のリスクを減らし、注意力を高めて事故も防ぎます。これからもこの習慣を続けて健康を守りましょう！",
            false: "毎晩7時間未満の睡眠が続くと、心身にさまざまなリスクが生じます。睡眠不足は、生活のリズムを乱し、集中力や判断力を低下させるだけでなく、肥満や高血圧、糖尿病などの生活習慣病のリスクも高めます。また、脳の疲労が蓄積すると、認知機能が低下し、長期的には認知症のリスクも増大します。さらに、眠気や注意力の欠如は、交通事故や作業中の怪我の原因にもなりかねません。健康を守り、日々のパフォーマンスを向上させるために、ぜひ毎晩7時間以上の質の良い睡眠を心がけてください。"
        },
        relax: {
            true: "朝、スッキリ目覚められることは素晴らしい状態です。質の良い睡眠は、心身の回復を促し、認知症や生活習慣病のリスクを減らし、集中力を高めて事故も防ぎます。ぜひこの調子を続けて健康を守りましょう！",
            false: "朝目覚めた時に疲れやストレスが残っているのは、体や脳が十分に回復できていないサインです。この状態が続くと、生活習慣が乱れ、集中力や判断力が低下し、作業ミスや交通事故のリスクが高まります。また、慢性的な疲労や睡眠不足は、心疾患や高血圧、糖尿病などの病気リスクを増大させ、さらに脳の機能を低下させることで、認知症のリスクも高めます。健康な日常を取り戻すために、睡眠の質や生活習慣を見直し、しっかりと休息を取るよう心がけてください。自分の体を大切にしましょう。"
        },
        health: {
            true: "体力・柔軟性維持のための投資を優先する姿勢は素晴らしいです。これにより、転倒や怪我のリスクを減らし、心疾患や認知症の予防にもつながります。ぜひこれからも続けて、健康的な生活を守りましょう！",
            false: "健康のための出費・時間は優先度は高くない。体力や柔軟性の維持に投資を怠ることは、将来の健康に大きなリスクをもたらします。体力が低下すると、疲れやすくなり日々の活動量が減ることで生活習慣が乱れ、肥満や高血圧、糖尿病などの病気を引き起こしやすくなります。また、柔軟性が不足すると転倒や怪我のリスクが増え、特に高齢期には寝たきりの原因になることもあります。さらに、運動不足は認知症リスクを高め、心身の健康を損ねる要因です。健康的な未来を築くために、体力維持を優先し、適切な時間と投資をぜひ心がけてください。"
        },
        disaster: {
            true: "ハザードマップで安全な地域を選ぶことは、命を守る賢明な選択です。地震や水害の被害を回避でき、家族の安心も守れます。特に緊急時に逃げ遅れる恐れのある高齢者にとって重要です。これからもこの環境を維持し、災害時のリスクを最小限に抑えましょう！",
            false: "地震や水害のハザードマップ上、リスクの高い地域に住んでいると、自然災害が発生した際に命や財産を守ることが難しくなります。特に大規模な地震や洪水は、建物の倒壊や浸水による怪我や死亡のリスクを高め、避難も困難になることが多いです。特に緊急時に逃げ遅れるリスクの高い高齢者にとって重要です。また、災害が頻発する地域では、復旧や生活再建に多くの時間とコストがかかるため、心身の負担も増大します。安全な環境は命を守る最も重要な要素ですので、可能であれば住む場所を見直し、リスクを減らす選択を検討してみてください。"
        },
        sunny: {
            true: "日光を浴びることでビタミンDを維持でき、骨を強く保ち、認知症や転倒事故のリスクを軽減できます。外出は気分転換にもなり、心身の健康に役立ちますので、これからもぜひ続けてくださいね！",
            false: "日光を浴びる機会が少ないと、体内のビタミンDが不足しやすくなります。ビタミンDは、骨を強く保つだけでなく、免疫力を高め、心の健康を支える大切な栄養素です。不足すると、骨折や筋力低下のリスクが増すほか、認知症のリスクも高まることが指摘されています。1日15～30分程度、外に出て日光を浴びるだけでも効果的です。散歩や軽い運動を取り入れることで、気分転換にもなり、心身の健康が維持しやすくなりますので、ぜひ意識してみてください。"
        },
        chair: {
            true: "長時間座り続けないことは、血流の改善や筋力維持に役立ち、心臓病や認知症のリスクを軽減する効果があります。こまめに体を動かすことは健康維持に大切ですので、ぜひ今の習慣を続けてくださいね！",
            false: "1日2時間以上座りっぱなしの状態が続くと、血流が悪くなり、体重増加や高血圧、心臓病、糖尿病などのリスクが高まります。特に高齢者の場合、座りすぎは筋力の低下やバランス能力の減退を招き、転倒の危険性が増すだけでなく、認知症リスクも上昇することが分かっています。長時間座る際は、30分に一度、立ち上がって軽く体を動かすだけでも効果があります。簡単なストレッチや部屋の中を歩くだけでも健康を保つ助けになりますので、ぜひ取り入れてください。"
        },
        talk: {
            true: "友人や家族との会話は、脳を活性化させ、認知症やストレスのリスクを軽減する効果があります。楽しくお話しすることは心の健康を守り、長寿にもつながる大切な習慣ですので、ぜひこれからも続けてくださいね！",
            false: "友人や家族と話す機会が少ないと、気持ちが落ち込みやすくなり、ストレスが溜まることで心身の健康に悪影響を及ぼす可能性があります。社会的なつながりが少ないことが認知症リスクの増加につながることも分かっています。会話を通じて脳を刺激し、気持ちを前向きに保つことは、病気の予防にも役立ちます。難しく考えず、短い電話や散歩中の挨拶から始めるのでも効果がありますので、少しずつ生活に取り入れてみませんか？"
        },
        intelli: {
            true: "読書やゲームなどの知的活動は、脳を刺激し、認知症や精神的な病気のリスクを軽減する効果があります。これからも楽しく続けることで、心身の健康を維持できますので、ぜひ継続してくださいね！",
            false: "知的活動をあまり行っていないと、脳の働きが低下しやすくなり、認知症のリスクが高まるとされています。脳も筋肉と同じように、使わないと衰えてしまいます。読書やパズル、簡単な学習を取り入れることで脳を活性化させ、認知機能を保つことができ、病気の予防にも役立ちます。特に新しい知識を学ぶことは、脳に刺激を与え、心も生き生きとしてきます。まずは興味のあることを見つけ、小さな習慣から始めてみませんか？日常に少しずつ取り入れるだけでも大きな効果があります。"
        },
        hobby: {
            true: "趣味でのストレス解消は、心の健康を守り、病気や認知症のリスクを軽減する効果があります。楽しい時間を過ごすことは脳や体にとって大切な栄養ですので、ぜひその習慣を続けてくださいね！",
            false: "趣味などストレスを適切に解消する方法がないと、心と体に大きな負担がかかり、免疫力の低下や高血圧など、さまざまな病気のリスクが高まります。特に高齢者の場合、慢性的なストレスが認知症の発症に関わることも分かっています。趣味や楽しみを見つけることは、気分をリフレッシュし、脳を活性化させるためにも非常に重要です。小さなことで構いません。散歩やガーデニング、音楽を聴くなど、自分が「心地よい」と感じる時間を少しずつ増やしてみましょう。健康維持のためにぜひ取り入れてください。"
        }
    };

    const lifestylesParts = {
        "定期健康診断": lifestyleDescriptions.checkup[checkup],
        "体重計測": lifestyleDescriptions.wcheck[wcheck],
        "歯垢除去": lifestyleDescriptions.dental[dental],
        "心拍チェック": lifestyleDescriptions.heartbeat[heartbeat],
        "有酸素運動": lifestyleDescriptions.exercise[exercise],
        "糖分・粉物の制限": lifestyleDescriptions.diet[diet],
        "ビタミン摂取": lifestyleDescriptions.vegitable[vegitable],
        "タンパク質摂取": lifestyleDescriptions.protein[protein],
        "良質なオイル摂取": lifestyleDescriptions.oil[oil],
        "ビタミンD": lifestyleDescriptions.sunny[sunny],
        "座りっぱなし": lifestyleDescriptions.chair[chair],
        "ストレス・疲労感": lifestyleDescriptions.relax[relax],
        "過労": lifestyleDescriptions.work[work],
        "睡眠時間": lifestyleDescriptions.sleep[sleep],
        "健康への優先度": lifestyleDescriptions.health[health],
        "歓談": lifestyleDescriptions.talk[talk],
        "趣味": lifestyleDescriptions.hobby[hobby],
        "知的活動": lifestyleDescriptions.intelli[intelli],
        "ひとり暮らし": lifestyleDescriptions.family[family],
        "災害リスク": lifestyleDescriptions.disaster[disaster],
    };
    return lifestylesParts;
  }

    function createHealthDataString(age, gender, high, weight, wines, smokes, pressu, pressd, ast, alt, gtp, tg, hdl, ldl, tl, bs, hba, urines, rb, hb, plat, urinep, crt, ua, gfr, heart, lung, opinion, opiniont, cancer, cancert) {
        const healthDataParts = [
            age >= 0 ? `年齢：${age}歳` : "",
            gender ? `性別:${gender}` : "",
            high >= 0 ? `身長：${high}cm` : "",
            weight >= 0 ? `体重：${weight}kg` : "",
            wines ? `飲酒:${winesSet}` : "",
            smokes ? `喫煙:${smokes}` : "",
            (pressu >= 0 && pressd >= 0) ? `血圧：${pressu}mmHgから${pressd}mmHg 注　醤油など日本食は塩分が多いことが原因の高血圧は深刻である。` : "",
            ast >= 0 ? `AST:${ast}U/L` : "",
            alt >= 0 ? `ALT:${alt}U/L` : "",
            gtp >= 0 ? `γ-GTP:${gtp}U/L` : "",
            tg >= 0 ? `トリグリセリド：${tg}mg/dl` : "",
            hdl >= 0 ? `HDLコレステロール:${hdl}mg/dl` : "",
            ldl >= 0 ? `LDLコレステロール:${ldl}mg/dl` : "",
            tl >= 0 ? `総コレステロール:${tl}mg/dl` : "",
            bs >= 0 ? `血糖:${bs}mg/dl` : "",
            hba >= 0 ? `HbA1c:${hba}%` : "",
            urines ? `尿糖検査:${urines}` : "",
            ua >= 0 ? `尿酸:${ua}mg/dl` : "",
            rb >= 0 ? `赤血球:${rb}万/μl 注　日本人は睡眠時無呼吸症・多血症が珍しくない。` : "",
            hb >= 0 ? `ヘモグロビン:${hb}g/dl 注　日本人は睡眠時無呼吸症・多血症が珍しくない。` : "",
            plat >= 0 ? `血小板:${plat}万/μl` : "",
            urinep ? `尿蛋白検査:${urinep}` : "",
//            crt >= 0 ? `クレアチニン:${crt}mg/dl 注 日本人の筋肉量等を考慮してeGFRで評価` : "",
            gfr >= 0 ? `eGFR:${gfr}ml/minute/1.73㎡ 注 日本人の年齢別筋肉量等を考慮してクレアチニンから換算。年齢要素は考慮済みの数値である。` : "",
            heart ? `心電図:${heart}` : "",
            lung ? `胸部レントゲン:${lung}` : "",
            opinion ? `過去1年以内に入院・手術・放射線治療を勧められたり、実際に入院や治療を受けたことがありますか？:${opinion}` : "",
            opiniont ? `その病名・治療内容はなんですか？:${opiniont}` : "",
            cancer ? `今までにがんに罹患したことがありますか？:${cancer}` : "",
            cancert ? `そのがんの種類はなんですか？:${cancert}` : ""
        ];
        
        return [healthDataParts.filter(Boolean).join(", ")].concat(healthDataParts);
    }
    
    function generateSessionId() {
        const dateStr = new Date().toISOString().split('T')[0].replace(/-/g, '');
        const randomNumber = Math.floor(100000 + Math.random() * 900000).toString();
        return `${dateStr}-LT${randomNumber}`;
    }
//実行部分 
    const sessionId = generateSessionId();
    const yltFloat = parseFloat(Ylt);
    const nltFloat = parseFloat(Nlt);

    const agenda = setAgenda(yltFloat, nltFloat);
    const genderSet = setGender(gender);
    const urinesSet = setUrine(urs);
    const urinepSet = setUrine(urp);
    const heartSet = setHeart(heart);
    const lungSet = setLung(lung);

    if(detail===true){
    winesSet = setWine(wine);
    wineAdvise = adviceWine(wine);
    smokesSet = setSmoke(smoke);
    smokeAdvise = adviceSmoke(smoke);
    cancerSet = setCancer(cancer);
    opinionSet = setOpinion(opinion);
    lifestylesSet = setLifestyles(checkup, exercise, diet, vegitable, family, work, sleep, relax, health, disaster, protein, oil, wcheck, dental, heartbeat, sunny, chair, talk, intelli, hobby);
    lifestylesPrompt= "私のライフスタイルは、" + lifestylesSet + "です。健康な生活を送るためには、どの点を改めるのが重要か、３点指摘して、それぞれなぜ重要か500字ぐらいで説得的に説明してください。";
    lifestylesAdvise = adviceLifestyles(checkup, exercise, diet, vegitable, family, work, sleep, relax, health, disaster, protein, oil, wcheck, dental, heartbeat, sunny, chair, talk, intelli, hobby);
    medicationsSet = setMedication(drugs, drugst);
    medicationsPrompt = "私の長期に服用している薬は、" + medicationsSet + "です。これらの薬について、副作用や注意点、医者に相談すべきタイミングを説明してください。また、これらの薬と食物や風邪薬・解熱剤・痛み止め等の日常よく使う市販薬との重複服用のリスクについても説明してください。そして、服用中止や民間療法への依存のリスクについて、説得的に注意してください。";
  }
    else{
      winesSet = "";
      smokesSet = "";
      cancerSet = "";
      opinionSet = "";
      lifestylesSet = "";
      medicationsSet = "";
    }

    const healthCheck = createHealthDataString(
      age, genderSet, high, weight, winesSet, smokesSet, pressu, pressd, ast, alt, gtp, tg, hdl, ldl, tl, bs, hba, urinesSet, rb, hb, plat, urinepSet, crt, ua, Gfr, heartSet, lungSet, opinionSet, opiniont, cancerSet, cancert
    );
    healthCheckALLDATA = {
      "定期検診": healthCheck[0],
      "服薬": medicationsSet,
      "ライフスタイル": lifestylesSet,
      };    
    const healthcheckPrompt = `私の健康診断${healthCheck[0]}です。${medicationsSet}  これをあなたの専門知識で分析し、医学の知識がない高齢者でも理解しやすく改善につながるように、説得的に健康診断分析して説明してください。リスクのある項目は、リスクの重要度がわかるように詳しく説明してください。そして、最後に1000字程度で健康改善アドバイスを説得力ある文章で、1000字程度でお願いします。`;

      // 出力オブジェクト応答を返す。
    if(detail===true){
      context.res = {
          status: 200,
          body: {
              yage: age,
              ylt: YLT,
              nlt: NLT,
              e65: E65,
              e70: E70,
              e80: E80,
              e90: E90,
              e100: E100,
//            gfr: Gfr,
              lifestyle: lifestylepoint,
              physical: Physical,
              bloodpr: Bloodpr,
              liverdis: Liverdis,
              fatmetabo: Fatmetabo,
              sugarmetabo: Sugarmetabo,
              blooddis: Blooddis,
              kidneydis: Kidneydis,
              currentill: Currentill,
              medication: Medication,
              green: Green,
              agenda: agenda,
              healthcheck: healthCheck,
              myjumyoid: sessionId,
              medicationsprompt: medicationsSet,
              medicationset: medicationsSet,
              lifestylesprompt: lifestylesPrompt,
              healthcheckprompt: healthcheckPrompt,
              lifestylesadvise: lifestylesAdvise,
              wineadvise: wineAdvise,
              smokeadvise: smokeAdvise,
              healthcheckAllData: healthCheckALLDATA,
          },
          headers: {
              'Content-Type': 'application/json'
          }
      };}
      else{
        context.res = {
          status: 200,
          body: {
              yage: age,
              ylt: YLT,
              nlt: NLT,
              e65: E65,
              e70: E70,
              e80: E80,
              e90: E90,
              e100: E100,
              myjumyoid: sessionId,
              healthcheckprompt: healthcheckPrompt,
          },
          headers: {
            'Content-Type': 'application/json'
        }
      };

  } 
  console.log(context.res.body);
}
  else {
      context.res = {
          status: 400,
          body: "Please provide variable in the request type."
      };
  }
  console.log(context.res.body);
 };
