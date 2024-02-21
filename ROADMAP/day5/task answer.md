let jsonObject = {
    "name": "kalai",
    "age": 26,
    "city": "paris"
};

For loop:
for (let i = 0; i < Object.keys(jsonObject).length; i++) {
    console.log(Object.keys(jsonObject)[i] + ": " + Object.values(jsonObject)[i]);
}

For in loop:
for (let key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
        console.log(key + ": " + jsonObject[key]);
    }
}

For of loop:
for (let value of Object.values(jsonObject)) {
    console.log(value);
}

ForEach loop:
Object.keys(jsonObject).forEach(key => {
    console.log(key + ": " + jsonObject[key]);
});


--**Resume in JSON format*--
let resume={
    "personal_info":{
        "name":"KALAIYARASAN DASS",
        "email":"kalaiarasan2796@gmail.com",
        "phone":"9578095265"
    },
    "education":[
        {
            "degree": "B.Tech IT",
            "university": "CAHCET",
            "year": "2014 - 2018"
        },
        {
            "degree": "M.S Embedded system",
            "university": "ISEP",
            "year": "2019-2022"
        }
    ],
   "skills": ["JavaScript", "Python", "SQL"]
};

console.log(JSON.stringify(resume, null, 2));
     


