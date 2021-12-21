$("#projLink").click((e) =>{
    e.preventDefault()
    $("#projects").show()
    $("#aboutSection").hide()
    }
)

$("#aboutLink").click((e) => {
    e.preventDefault()
    $("#aboutSection").show()
    $("#projects").hide()
})

function generateHTML(data){
    var projects = document.getElementById("projects");

    for(var i = 0; i < data.length; i++){
        let elem = document.createElement("li")

        var title = document.createElement("h2")
        var desc = document.createElement("p")
        var link = document.createElement("a")

        console.log(data[i])

        title.innerHTML = data[i].title
        desc.innerHTML = data[i].description
        link.innerHTML = data[i].github
        link.setAttribute("href", data[i].github)
        elem.appendChild(title)
        elem.appendChild(desc)
        elem.appendChild(link)

        projects.appendChild(elem)

    }
    //document.getElementById("projects").appendChild(elements)

}
function printData(data){
    for(var i = 0; i < data.length; i++){
        console.log(data[i]);
    }
}
fetch("projects.json")
    .then(res => res.json())
    .then(data => generateHTML(data))
