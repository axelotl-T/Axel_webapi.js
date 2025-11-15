const SchoolManagementModule = require("./AxelTan_SchoolManagement.js");

console.log("=====School Management Module=====");

// Testing Function 1
console.log("\n=== (1) Create Class ===");
const newClass = SchoolManagementModule.createClass(
    "Chinese", "Mdm Chua Li Ting"
);
console.log(`${newClass.className} class created`);
console.log(newClass, "\n");

// Testing Function 2
console.log("\n=== (2) Add Student ===");
const newStudent = SchoolManagementModule.addStudent(
    "Ang Wee Jun",
    "angweejun16@gmail.com"
);
console.log(`${newStudent.studentName}'s account has been created`);
console.log(newStudent, "\n");

// Testing Function 3
console.log("\n=== (3) Enroll Student ===");
const newEnrollment = SchoolManagementModule.enrollStudent(301,1);
console.log(`New enrollment: ${newEnrollment.studentName} in ${newEnrollment.className}`);
console.log(newEnrollment,"\n");

const newEnrollment2 = SchoolManagementModule.enrollStudent(302,1);
console.log(`New enrollment: ${newEnrollment2.studentName} in ${newEnrollment2.className}`);
console.log(newEnrollment2,"\n");

const newEnrollment3 = SchoolManagementModule.enrollStudent(301,2);
console.log(`New enrollment: ${newEnrollment3.studentName} in ${newEnrollment3.className}`);
console.log(newEnrollment3,"\n");

// Testing Function 4
console.log("\n=== (4) Create Assignment ===");
const newAssignment = SchoolManagementModule.createAssignment(
    1,
    "Assignment 1 - Plants",
    "07-12-2025"
);
console.log(`${newAssignment.title} added to ${newAssignment.className}. Due Date: ${newAssignment.dueDate}.`);
console.log(newAssignment,"\n");

// Testing Function 5
console.log("\n=== (5) Get Class List ===");
const List = SchoolManagementModule.getClassList(1);
console.log(`Student(s): ${List.length}`);
console.log(List,"\n");

console.log("=====Moudle Test End=====");