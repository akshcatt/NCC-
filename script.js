let name = document.querySelector("#fullName");
let branch = document.querySelector("#branch");
let year = document.querySelector("#year");
let contact = document.querySelector("#contactNumber");
let activity = document.querySelector("#activity");
let file = document.querySelector("#documentUpload");
let btn = document.querySelector("form button");
let doc = file.files;


let students = [];


btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let student = {
        "name": name.value,
        "branch": branch.value,
        "year": year.value,
        "contact": contact.value,
        "activity": activity.value,
        "file": doc.name
    }
    alert("login succesful!!")
    students.push(student);

    let existingStudents = localStorage.getItem("students");

    if (existingStudents) {
        existingStudents = JSON.parse(existingStudents);
        existingStudents.push(student);
        students = existingStudents;
    }

    localStorage.setItem("students", JSON.stringify(students));
    console.log(students);
}
);