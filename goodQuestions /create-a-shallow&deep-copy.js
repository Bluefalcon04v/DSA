const user = {
    name: "Amit Sah",

    contact: {
        email: "amit@gmail.com",
        city: "Mumbai",
    },

    skills: ["JavaScript", "React", "Node.js"],

    projects: [
        {
            name: "E-Commerce App",
            tech: ["React", "MongoDB"],
        },
    ],

    settings: {
        darkMode: true,
        notifications: {
            email: true,
            sms: false,
        },
    },
};

let shallowCopy = { ...userInfo };
let deepCopyBrute = JSON.parse(JSON.stringify(userInfo)); // does the work **Not Preferred in Interviews**

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