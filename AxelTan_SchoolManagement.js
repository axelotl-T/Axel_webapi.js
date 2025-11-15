const classes = [
    {
        id: 1,
        className: "Science",
        teacherName: "Mr Alex Tan",
        joinCode: "123abc",
    },
    {
        id: 2,
        className: "Math",
        teacherName: "Ms Fiona Loh",
        joinCode: "679ezy",
    },
    {
        id: 3,
        className: "English",
        teacherName: "Mr Sarvesh Raj",
        joinCode: "789xyz",
    },
];
let nextClassId = 4;

const students = [
    {
        id: 301,
        studentName: "Axel Tan",
        email: "axeltan16@gmail.com",
    },
    {
        id: 302,
        studentName: "Athena Chiu",
        email: "athenachiu16@gmail.com",
    },
];
let nextStudentId = 3;

const enrollments = [];
let nextEnrollmentId = 1;

const assignments = [];
let nextAssignmentId = 1;


// Function 1
// Creating a new class on google classroom
function createClass(className, teacherName){
    const newClass = {
        id: newClassId++,
        className,
        teacherName,
        joinCode: Math.random().toString(36).substring(2,8),
    };
    classes.push(newClass);
    return newClass
}

// Function 2
// Adding a new student's account
function AddStudent(studentName, email){
    if(students.find((s) => s.email === email)){
        return {error: "Email already registered"};
    }

    const newStudent = {
        id: nextStudentId++,
        studentName,
        email,
    };
    students.push(newStudent);
    return newStudent;
}

// Function 3
// Enrolling student into a class

function enrollStudent(studentId, classId){
    const Student = students.find((s) => s.id === studentId);
    const Class = classes.find((c) => c.id === classId);

    if (!Student) return {error: "Student Not Found"};
    if (!Class) return {error: "Class Not Found"};

    if (enrollments.find((e) => e.studentId === studentId && e.classId === classId)){
        return {error: "Student already enrolled"};
    }

    const newEnrollment = {
        enrollmentId: nextEnrollmentId++,
        studentId,
        classId,
    };
    enrollments.push(newEnrollment);
    return newEnrollment;
}

// Function 4
// Create an assignment for students
function createAssignment(classId, title, dueDate) {
    const Class = courses.find((c) => c.id === classId);
    if (!Class) return {error: "Class Not Found"};

    const newAssignment = {
        assignmentId: nextAssignmentId++,
        classId,
        title,
        dueDate,
    };
    assignments.push(newAssignment);
    return newAssignment;
}

// Function 5
// Getting the class list
function getClassList(classId){
    const Class = classes.find((c) => c.id === classId);
    if (!Class) return {error: "Class Not Found"};

    const classEnrollments = enrollments.filter(
        (e) => e.classId === classId
    );

    const List = classEnrollments.map((enrollment) => {
        return students.find((s) => s.id === enrollment.studentId);
    })
    return List;
}

module.exports = {
    createClass,
    AddStudent,
    enrollStudent,
    createAssignment,
    getClassList,
}