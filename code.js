$("#projLink").click((e) =>{
    e.preventDefault()
    $("#projects").show()
    $("#aboutSection").hide()
    $("#schoolProjects").hide()
    $("#personalProjects").show()
})

$("#projectLinksPersonal").click((e) =>{
    e.preventDefault()
    $("#schoolProjects").hide()
    $("#personalProjects").show()
})

$("#projectLinksPersonal").click((e) =>{
    e.preventDefault()
    $("#schoolProjects").show()
    $("#personalProjects").hide()
})

$("#aboutLink").click((e) => {
    e.preventDefault()
    $("#aboutSection").show()
    $("#projects").hide()
})

function generateHTML(data, id){
    var projects = document.getElementById(id);

    for(var i = 0; i < data.length; i++){
        let elem = document.createElement("li")
        var title = document.createElement("h2")
        var desc = document.createElement("p")
        var link = document.createElement("a")
        
        title.innerHTML = data[i].title
        desc.innerHTML = data[i].description
        link.innerHTML = data[i].github
        link.setAttribute("href", data[i].github)
        elem.appendChild(title)
        elem.appendChild(desc)
        elem.appendChild(link)
        projects.appendChild(elem)

    } // for
} // generateHTML




fetch("projects.json")
    .then(res => res.json())
    .then(data => generateHTML(data, "personalProjects"))

fetch("schoolProjects.json")
    .then(res => res.json())
    .then(data => generateHTML(data, "schoolProjects"))