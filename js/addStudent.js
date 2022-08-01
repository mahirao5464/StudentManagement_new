var students = [];
var localStorageKey = "students";
var nextStudentSrNo = 1;
window.addEventListener("load", function () {
  let studentsString = localStorage.getItem(localStorageKey);
  students = JSON.parse(studentsString) || [];
 
  students.forEach((student)=>{
      addStudent(student);
  });


  
  var addStudentBtn = document.getElementById("addStudentBtn");

  addStudentBtn.addEventListener("click", function () {
    let isStudentValid = validateStudent();
    if (!isStudentValid) return;
    const formDataObj = {};
    const myFormData = new FormData(document.querySelector("#addStudentForm"));
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    addToLocalStorage(formDataObj);
    addStudent(formDataObj);
  });

  var validateStudent = function () {
    var form = document.querySelectorAll(".needs-validation")[0];
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      return false;
    }
    return true;
  };

function addToLocalStorage(student){
  students.push(student);
  localStorage.setItem(localStorageKey,JSON.stringify(students));
}
function isStudentExists(PhoneNumber){

}
  function addStudent(student) {
    let tableBody = document.getElementById("tbody");
    document.getElementById("nodatamsg").style.display="none";
    let newRow = `
            <tr>
                <td>${nextStudentSrNo++}</td>
                <td>${student.name}</td>
                <td>${student.class}</td>
                <td>${student.subjects}</td>
                <td>${student.phone}</td>
                <td>action</td>
              </tr>
    `;
    tableBody.innerHTML += newRow;
  }
});
