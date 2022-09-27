let data = [
    {
        name: "aditya", 
        age: "21"
    },
    {
        name: "abhinav", 
        age: "21"
    },
    {
        name: "ayush", 
        age: "20"
    },
    {
        name: "aman", 
        age: "21"
    },
    {
        name: "atharva", 
        age: "20"
    },
    {
        name: "adarsh", 
        age: "21"
    }
]

const info =  document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>'
})

info.innerHTML = details.join('\n');