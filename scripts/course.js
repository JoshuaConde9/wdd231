const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]



const buttons = document.querySelector(".certificates");

//buttons
const allCourses = document.createElement("button");
allCourses.textContent = "All Courses";
allCourses.classList.add("all-courses", "buttons");
buttons.appendChild(allCourses);

const wddCourses = document.createElement("button");
wddCourses.textContent = "WDD Courses";
wddCourses.classList.add("wdd-courses", "buttons");
buttons.appendChild(wddCourses);

const cseCourses = document.createElement("button");
cseCourses.textContent = "CSE Courses";
cseCourses.classList.add("cse-courses", "buttons");
buttons.appendChild(cseCourses);

//courses
const coursesDiv = document.createElement("div");
coursesDiv.classList.add("container");
buttons.appendChild(coursesDiv);

//display courses
function displayCourse(course) {
    const p = document.createElement("p");
    const status = course.completed ? "✅" : "⏳";
    if (course.completed == true) {
        p.classList.add("completed");
    }
    else {
        p.classList.add("incomplete");
    }
    p.textContent = `${status} ${course.subject} ${course.number}`;
    return p;
}

function renderCourses(courseList) {
    coursesDiv.innerHTML = "";

    courseList.forEach(course => {
        coursesDiv.appendChild(displayCourse(course));
    });

    const totalCredits = courseList.reduce((sum, course) => sum + course.credits, 0);

    const creditsInfo = document.createElement("p");
    creditsInfo.textContent = `Total Credits: ${totalCredits}`;
    creditsInfo.classList.add("credits-total");
    coursesDiv.appendChild(creditsInfo);
}



//filters
renderCourses(courses);

allCourses.addEventListener("click", () => renderCourses(courses));

wddCourses.addEventListener("click", () => {
    const filtered = courses.filter(course => course.subject === "WDD");
    renderCourses(filtered);
});

cseCourses.addEventListener("click", () => {
    const filtered = courses.filter(course => course.subject === "CSE");
    renderCourses(filtered);
});
