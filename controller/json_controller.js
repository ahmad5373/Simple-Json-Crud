const req = require("express/lib/request");
const json = require("../JSON/pakistan.json");

exports.postprovance = (req, res, next) => {
  const prvn = [json];

  prvn.push(req.body.provances);

  return res.send(prvn);
};

exports.postcities = (req, res, next) => {
  const cit = [json];

  console.log("JSON", cit);

  const pro = json.provances;

  console.log("provances", pro);

  const nam = json.provances[0].name;
  console.log("Provancename", nam);

  const lng = json.provances[1].language;
  console.log("language", lng);

  const cty = json.provances[0].cities;
  console.log("citites", cty);

  cty.push(req.body);
  return res.send(cit);
};

exports.postlanguage = (req, res, next) => {
  const lang = [json];

  const lng = json.provances[1].languages;
  lng.push(req.body.language);
  console.log("Languages", lng);
  return res.send(lang);
};

exports.getjson = (req, res, next) => {
  const p = "punjab";
  json.provances.map((pr) => {
    if (p == pr.name) {
      pr.name = "Gilgat";
    }
  });
  return res.send(json);
};

exports.updateprovance = (req, res, next) => {
  const uppro = [json];
  pro = req.body.Oldname;

  json.provances.map((ct) => {
    console.log("check condition", pro == ct.name);

    if (pro == ct.name) {
      ct.name = req.body.name;
    }
    // console.log('ct.name', ct.name);
  });

  return res.send(uppro);
};

exports.updatecities = (req, res, next) => {
  const upcty = [json];
  const pr = req.body.prname;
  const city = req.body.Oldname;

  json.provances.map((prvn) => {
    console.log("check 1st", pr == prvn.name);
    if(pr == prvn.name)
        prvn.cities.map((cty) =>{
            console.log("check condition" ,city == cty.name);
            if(city == cty.name){
                cty.name = req.body.name;
            }
            console.log("cty.name",cty.name)

        })
    
  });
  return res.send(upcty);
};


exports.updatelanguage = (req , res , next)=>{
    const lang =[json];
    const par = req.body.prname
    const lng = req.body.Oldlanguage

    json.provances.map((prn)=>{
        console.log("Check 1st " ,par ==prn.name);
        if(par ==prn.name)
        console.log("prvnce" , prn.languages);
        prn.languages.map((lg , index)=>{
            console.log("Check condition",lng==lg )
            if(lng == lg){
                lg = req.body.language;
            }
            // console.log('language',req.body.language);
            console.log('language',lg,index);
            // console.log("index",index);
        })
    });
    return res.send(lang);
}

exports.deleteprovance = (req , res , next)=>{
  const delpro = [json];
  pro = req.body.proname;
  
  json.provances.filter((prvn)=>{
    console.log("Condition check" , pro == prvn.name)
    if (pro == prvn.name){
    }
  });
  return res.send(delpro);
}
