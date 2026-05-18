let userInfo = {
    name: 'Amit Sah',
    age: 26,
    array: [1, 2, 3, 4, { name: 'hello', array: [1, 2, 3] }],
    socialAccounts: {
        linkedIn: 'abc@linkedin.com',
        gmail: 'abc@gmail.com',
        facebook: 'abc@facebook.com',
        others: {
            github: 'abc@github.com',
            codeForces: {
                gmail: 'abc@codeForces.com',
                contributedQuestions: ['122A', '123s', {
                    contest1: '111A',
                    contest2: '222B'
                }]
            }
        }
    }

}


let shallowCopy = { ...userInfo }; // this only copy the first of the object not the nested one 

let deepCopyBrute = JSON.parse(JSON.stringify(userInfo)); // brute method ie first make the object as a string and then make a copy of it 


function deepCopy(data) {
    if (typeof (data) !== 'object' || data === null) {
        return data
    }

    let copiedData = Array.isArray(data) ? [] : {};
    let keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
        copiedData[keys[i]] = deepCopy(data[keys[i]])
    }
    return copiedData
}

let copy = deepCopy(userInfo)
console.log(copy)