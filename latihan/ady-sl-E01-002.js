function soal2(param) {
    // your code here
    let result = []
    for (let i = 0; i < param.length; i++) {
        let temp = {}
        for (let j = 0; j < param[i].length; j++) {
            if (param[i][j] === param[i][0]) {
                temp.firstName = param[i][j]
            } else if (param[i][j] === param[i][1]) {
                temp.lastName = param[i][j]
            } else if (param[i][j] === param[i][2]) {
                let hobby = []
                for (let k = 0; k < param[i][j].length; k++) {
                    hobby.push(param[i][j][k])
                }
                temp.hobbies = hobby
            } else if (param[i][j] === param[i][3]) {
                temp.profession = param[i][j]
            }
        }
        result.push(temp)
    }
    return result
}

console.log(soal2([ ['Aries','Dimas',['coding','pubg','anime'],'Web Developer'] , 
['Radit','Dika',['manga','gaming'],'Web Developer'] ]));

/* output 
  
  [
    {
        firtName:"Aries",
        lastName:"Dimas",
        hobbies:['coding','pubg','anime'],
        profession:'Web Developer'
    },
    {
        firtName:"Radit",
        lastName:"Dika",
        hobbies:['manga','gaming'],
        profession:'Web Developer'
    }
  ]
*/ 

console.log(soal2([ ['Awtian','Akbar',['coding','main kucing','anime'],'Web Instructur'] , 
['Megalo','Maniak',['metal music','maniac'],'Maniac Expert'] ]));