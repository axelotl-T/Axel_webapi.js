// Temporary class database
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
let nextClassId = 4; //Ensures next entry has a unique ID

//Temporary student database
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
let nextStudentId = 3; //Ensures next entry has a unique ID

const enrollments = [];
let nextEnrollmentId = 1;

const assignments = [];
let nextAssignmentId = 1;


// Function 1
// Creating a new class on google classroom
function createClass(className, teacherName){
    const newClass = {
        id: nextClassId++, //Assign current ID then increment for next time
        className,
        teacherName,
        joinCode: Math.random().toString(36).substring(2,8), //Generates a random string, to base 36 and takes 6 characters
    };
    classes.push(newClass); //Saves to database
    return newClass
}

// Function 2
// Adding a new student's account
function addStudent(studentName, email){
    // Validation: Check if email already exists in the students array
    if(students.find((s) => s.email === email)){
        return {error: "Email already registered"};
    }

    //Creates the new student record
    const newStudent = {
        id: nextStudentId++,
        studentName,
        email,
    };
    students.push(newStudent); //Saves to database
    return newStudent;
}

// Function 3
// Enrolling student into a class
function enrollStudent(studentId, classId){
    //Verifies that both the student and the class actually exist
    const Student = students.find((s) => s.id === studentId);
    const Class = classes.find((c) => c.id === classId);

    if (!Student) return {error: "Student Not Found"};
    if (!Class) return {error: "Class Not Found"};

    //Check if this student is already in this specific class to prevent duplicates
    if (enrollments.find((e) => e.studentId === studentId && e.classId === classId)){
        return {error: "Student already enrolled"};
    }

    //Create the enrollment record
    const newEnrollment = {
        enrollmentId: nextEnrollmentId++,
        studentId,
        studentName: Student.studentName,
        classId,
        className: Class.className,
    };
    enrollments.push(newEnrollment); //Saves to database
    return newEnrollment;
}

// Function 4
// Create an assignment for students
function createAssignment(classId, title, dueDate) {
    //Validates class actually exist
    const Class = classes.find((c) => c.id === classId);
    if (!Class) return {error: "Class Not Found"};

    //creates assignment record
    const newAssignment = {
        assignmentId: nextAssignmentId++,
        classId,
        className: Class.className,
        title,
        dueDate,
    };
    assignments.push(newAssignment); //Saves to database
    return newAssignment;
}

// Function 5
// Getting the class list
function getClassList(classId){
    //Validates class actually exist
    const Class = classes.find((c) => c.id === classId);
    if (!Class) return {error: "Class Not Found"};

    //Gets all enrollment records for a specific class
    const classEnrollments = enrollments.filter(
        (e) => e.classId === classId
    );

    //Convvert the enrollment records into student objects
    const List = classEnrollments.map((enrollment) => {
        return students.find((s) => s.id === enrollment.studentId);
    })
    return{
        studentCount: List.length,
        className: Class.className,
        students: List
    }
}

module.exports = {
    createClass,
    addStudent,
    enrollStudent,
    createAssignment,
    getClassList,
}