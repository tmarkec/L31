const modules = {
  "Programming Implementation": [
    { section: "Programming Principles and Concepts", topics: ["Introduction", "What are computer programs?", "What are programming languages?", "What are algorithms?", "What is debugging"] },
    { section: "Variables", topics: ["Introduction", "Numbers", "Strings", "Debugging"] },
    { section: "Selection (Logic)", topics: ["Booleans", "Comparison operators", "if/else Statements", "Debugging"] },
    { section: "Data Structures", topics: ["Lists", "Dictionaries"] },
    { section: "Iteration (Loops)", topics: ["Introduction to loops", "Debugging loops"] },
    { section: "Functions", topics: ["Functions"] },
    { section: "Coding best practices", topics: ["Coding best practices"] },
    { section: "Requirements and testing", topics: ["Introduction to requirements and testing", "Requirements", "Testing", "End of module feedback"] }
  ],

  "Project Management": [
    { section: "Introduction to IT Project Management", topics: ["Welcome", "Why do we need project management?", "What Is IT Project Management?", "The project life cycle"] },
    { section: "Starting an IT Project", topics: ["How IT projects are being started", "Identifying pros and cons", "Preparing for project authorization"] },
    { section: "Planning an IT project", topics: ["Defining project specifics", "Creating the project plan", "Completing the planning phase"] },
    { section: "Executing and closing an IT project", topics: ["Executing the project", "Executing and closing an IT project"] },
    { section: "Project management methodologies", topics: ["Agile IT Project Management", "End of module feedback"] }
  ],

  "Object Oriented Programming": [
    { section: "Introduction to object-oriented programming", topics: ["Welcome", "Why do I need to learn this?", "What happens in a restaurant - comparing paradigms", "Make it so - declarative programming", "The nuts and bolts - imperative programming", "What just happened?", "Conclusion"] },
    { section: "Objects and classes", topics: [] },
    { section: "OOP Concepts: Abstraction", topics: ["Deep dive"] },
    { section: "OOP Concepts: Encapsulation", topics: ["Deep dive"] },
    { section: "OOP Concepts: Inheritance", topics: ["Deep dive"] },
    { section: "OOP Concepts: Polymorphism", topics: ["Deep dive"] },
    { section: "Let’s get coding", topics: ["Introduction", "OOP in Python"] },
    { section: "Let’s Get Coding Again", topics: ["OOP in Python"] },
    { section: "Conclusion", topics: ["Conclusion"] }
  ],

  "Software Testing": [
    { section: "Introduction to software testing", topics: ["Software testing overview"] },
    { section: "Software testing life cycle", topics: ["Software testing life cycle"] },
    { section: "Test strategies", topics: ["Testing visibility", "Testing approach"] },
    { section: "The testing process", topics: ["Project introduction", "The testing approach", "Building a simple test suite in Python"] },
    { section: "Beyond basic tests", topics: ["Test driven development"] },
    { section: "Conclusion", topics: ["Conclusion"] }
  ],

  "Programming with JavaScript": [
    { section: "Welcome", topics: ["Introduction to JavaScript"] },
    { section: "Working with pure JavaScript", topics: ["JavaScript data types & variables", "Control flow & operators", "JavaScript functions"] },
    { section: "JavaScript and the web", topics: ["Introduction to HTML & CSS", "Manipulating a webpage with JavaScript"] },
    { section: "Handling user interactions with JavaScript", topics: ["Event handlers", "Forms and JavaScript"] }
  ],

  "Maths for Computing": [
    { section: "Welcome", topics: ["Introduction to maths"] },
    { section: "Prerequisites", topics: ["Boolean logic", "Sets"] },
    { section: "Cardinality and Number Systems", topics: ["Combinatorics", "Number Systems"] },
    { section: "Discrete mathematics", topics: ["Sequences and series", "Recursion", "Discrete probability"] },
    { section: "Interpreting Data", topics: ["Gathering Data", "Descriptive Statistics"] },
    { section: "Matrix methods", topics: ["Vectors", "Matrices", "End of module feedback"] }
  ],

  "Robot Technology": [
    { section: "Robot Principles", topics: ["Introduction", "Robot uses", "Robot design", "Robot controls", "End effectors"] },
    { section: "Robot Programming", topics: ["Programming a robot to carry out a function"] },
    { section: "Robot Ethics", topics: ["Robots and society"] },
    { section: "Safety and robots", topics: ["Introduction"] },
    { section: "Maintaining robots", topics: ["Inspection and cleaning", "Preventive Maintenance"] },
    { section: "Conclusion", topics: ["Conclusion to robot technology"] }
  ]
};
const moduleSelect = document.getElementById("moduleSelect");
const resetBtn = document.getElementById("resetBtn");
const downloadBtn = document.getElementById("downloadBtn");

// Initially hide buttons
resetBtn.style.display = "none";
downloadBtn.style.display = "none";

// Populate the module dropdown
Object.keys(modules).forEach(module => {
    const option = document.createElement("option");
    option.value = module;
    option.textContent = module;
    moduleSelect.appendChild(option);
});

// Format date as "Mon - Sep 08 2025"
function formatDate(date) {
    const day = date.toDateString().split(' ')[0]; // Mon
    const rest = date.toDateString().split(' ').slice(1).join(' '); // Sep 08 2025
    return `${day} - ${rest}`;
}

document.getElementById("generateBtn").addEventListener("click", () => {
    const selectedModule = moduleSelect.value;
    const startDateValue = document.getElementById("startDate").value;

    if (!selectedModule || !startDateValue) {
        alert("Please select a module and starting date!");
        return;
    }

    const startDate = new Date(startDateValue);
    const scheduleContainer = document.getElementById("scheduleContainer");
    scheduleContainer.innerHTML = "";

    // Flatten topics with head-topic for each lesson
    const allLessons = [];
    modules[selectedModule].forEach(section => {
        if (section.topics.length === 0) {
            allLessons.push({ head: section.section, lesson: "" });
        } else {
            section.topics.forEach(lesson => {
                allLessons.push({ head: section.section, lesson: lesson });
            });
        }
    });

    const totalLearningDays = 13; // Weekdays only

    // Create table
    const table = document.createElement("table");
    table.className = "table table-bordered table-striped";

    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>Date</th>
            <th>Head Topic</th>
            <th>Lesson</th>
        </tr>
    `;
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    let lessonIndex = 0;
    let learningDaysCount = 0;
    let currentDate = new Date(startDate);

    // Generate learning days (Mon-Fri)
    while (learningDaysCount < totalLearningDays) {
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) { // skip weekends
            let dayLessons = [];

            if (lessonIndex < allLessons.length) {
                const remainingLessons = allLessons.length - lessonIndex;
                const remainingDays = totalLearningDays - learningDaysCount;
                let lessonsToday = remainingLessons <= remainingDays ? 1 : Math.ceil(remainingLessons / remainingDays);
                dayLessons = allLessons.slice(lessonIndex, lessonIndex + lessonsToday);
                lessonIndex += lessonsToday;
            } else {
                dayLessons.push({ head: "Revision / Study", lesson: "" });
            }

            dayLessons.forEach((item, idx) => {
                const row = document.createElement("tr");

                const dateCell = document.createElement("td");
                dateCell.textContent = idx === 0 ? formatDate(currentDate) : "";
                row.appendChild(dateCell);

                const headCell = document.createElement("td");
                headCell.innerHTML = `<strong>${item.head}</strong>`;
                row.appendChild(headCell);

                const lessonCell = document.createElement("td");
                lessonCell.textContent = item.lesson;
                row.appendChild(lessonCell);

                tbody.appendChild(row);
            });

            learningDaysCount++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // Add 2 Assessment/Project days, skipping weekends
    let assessmentsAdded = 0;
    while (assessmentsAdded < 2) {
        if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
            const row = document.createElement("tr");

            const dateCell = document.createElement("td");
            dateCell.textContent = formatDate(currentDate);
            row.appendChild(dateCell);

            const headCell = document.createElement("td");
            headCell.colSpan = 2;
            headCell.innerHTML = "<strong>Assessments</strong>";
            row.appendChild(headCell);

            tbody.appendChild(row);
            assessmentsAdded++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
    }

    table.appendChild(tbody);
    scheduleContainer.appendChild(table);

    // Show reset and download buttons after schedule is generated
    resetBtn.style.display = "inline-block";
    downloadBtn.style.display = "inline-block";
});

document.getElementById("resetBtn").addEventListener("click", () => {
    const scheduleContainer = document.getElementById("scheduleContainer");

    // Clear schedule table
    scheduleContainer.innerHTML = "";

    // Reset module dropdown to default
    moduleSelect.selectedIndex = 0;

    // Clear date picker
    document.getElementById("startDate").value = "";

    // Hide buttons again
    resetBtn.style.display = "none";
    downloadBtn.style.display = "none";
});

// Download as PDF (same as your previous code)
document.getElementById("downloadBtn").addEventListener("click", () => {
    const scheduleTable = document.querySelector("#scheduleContainer table");
    const selectedModule = document.getElementById("moduleSelect").value;

    if (!scheduleTable) {
        alert("No schedule to download!");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add module title
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text(selectedModule, 14, 16);

    // Extract table headers
    const headers = [];
    scheduleTable.querySelectorAll("thead th").forEach(th => {
        headers.push(th.textContent);
    });

    // Extract table body rows
    const rows = [];
    scheduleTable.querySelectorAll("tbody tr").forEach(tr => {
        const row = [];
        tr.querySelectorAll("td").forEach(td => {
            row.push(td.textContent);
        });
        rows.push(row);
    });

    // Generate PDF table below the title
    doc.autoTable({
    head: [headers],
    body: rows,
    startY: 20,
    styles: { fontSize: 10, cellPadding: 3 },
    headStyles: { fillColor: [10, 34, 57], textColor: 255 }, // dark blue
    alternateRowStyles: { fillColor: [241, 249, 250] } // light turquoise tint
});

    doc.save("Schedule.pdf");
});
