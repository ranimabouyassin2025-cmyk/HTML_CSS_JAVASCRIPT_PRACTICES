const students = [
  { id: 1, name: "Ranim", grade: 88 },
  { id: 2, name: "Ali", grade: 62 },
  { id: 3, name: "Sara", grade: 95 },
  { id: 4, name: "Omar", grade: 45 }
];

function calculateAverage(students) {
    if(students.length==0)
        return 0;
    const grades= students.map((student)=>{return student.grade})
    //console.log(grades);
    const sum=grades.reduce((accumulator,currentItem)=>{return accumulator+currentItem},0);
    const average=sum/grades.length;
    return average;
}

function getStudentStatus(grade) {
  
    if(grade>=70)
        return "Passed";
    else 
        return "Failed";
}

function displayStudents() {
    const list=document.querySelector("#studentList");
    const Studentlist=students.forEach((student)=>{
    const article=document.createElement("article");
    const h3=document.createElement("h3");
    const p=document.createElement("p");
    const p2=document.createElement("p");
    h3.textContent=`Name: ${student.name}`;
    p.textContent=`Grade: ${student.grade}`;
    p2.textContent=`Status: ${getStudentStatus(student.grade)}`;
    article.appendChild(h3);
    article.appendChild(p);
     article.appendChild(p2);
     list.appendChild(article);
    });
  
}

function displayClassInformation() {
    const av=document.querySelector("#classAverage");
    const pass=document.querySelector("#passingStudents");
    const average=calculateAverage(students);
    av.textContent=(`Average is ${average}`);
    const passing=students.filter((student)=>{return student.grade>=70});
    const names=passing.map((student)=>student.name)
    pass.textContent=(`passing students are ${names}`);
    


}
//console.log(calculateAverage(students))
//console.log(displayStudents());
displayStudents();
displayClassInformation();
