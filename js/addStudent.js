var studentStore = [];
window.addEventListener("load", function () {
  let studentsString = this.localStorage.getItem("students");
  let students = JSON.parse(studentsString) || [];
  console.log(student);
  students.forEach((el)=>{
      addStudent(student, index);
  });


  var nextStudentSrNo = 1;
  var addStudentBtn = document.getElementById("addStudentBtn");

  addStudentBtn.addEventListener("click", function () {
    let isStudentValid = validateStudent();
    if (!isStudentValid) return;
    const formDataObj = {};
    const myFormData = new FormData(document.querySelector("#addStudentForm"));
    myFormData.forEach((value, key) => (formDataObj[key] = value));
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

  function addStudent(student) {
    let tableBody = document.getElementById("tbody");
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
