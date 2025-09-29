// === Assessment & Resit Schedule ===
const assessments = [
    {
        module: "Programming Implementation",
        type: "Original assessment",
        items: [
            { name: "MCQ", week: 3, day: "Thursday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Debugging Exercise", week: 3, day: "Thursday", time: "19:00 - 19:50", duration: "50min" },
            { name: "Fizzbuzz Exercise", week: 3, day: "Friday", time: "18:00 - 19:35", duration: "1h 35min" },
            { name: "Viva", week: 3, day: "Friday", time: "19:35 - 20:05", duration: "30min" }
        ]
    },
    {
        module: "Object Oriented Programming",
        type: "Original assessment",
        items: [
            { name: "Open Text Response", week: 6, day: "Thursday", time: "18:00 - 19:00", duration: "1h" },
            { name: "UML Diagram & Proof of Concept", week: 6, day: "Friday", time: "18:00 - 21:05", duration: "3h 5min" },
            { name: "Viva", week: 6, day: "Friday", time: "21:05 - 21:35", duration: "30min" }
        ]
    },
    {
        module: "Programming Implementation",
        type: "RESIT 1",
        items: [
            { name: "MCQ", week: 7, day: "Thursday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Debugging Exercise", week: 7, day: "Thursday", time: "19:00 - 19:50", duration: "50min" },
            { name: "Fizzbuzz Exercise", week: 7, day: "Friday", time: "18:00 - 19:35", duration: "1h 35min" },
            { name: "Viva", week: 7, day: "Friday", time: "19:35 - 20:05", duration: "30min" }
        ]
    },
    {
        module: "Software Testing",
        type: "Original assessment",
        items: [
            { name: "MCQ", week: 10, day: "Thursday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Software Testing Process", week: 10, day: "Friday", time: "18:00 - 20:10", duration: "2h 10min" },
            { name: "Viva", week: 10, day: "Friday", time: "20:10 - 20:40", duration: "30min" }
        ]
    },
    {
        module: "Object Oriented Programming",
        type: "RESIT 1",
        items: [
            { name: "Open Text Response", week: 11, day: "Thursday", time: "18:00 - 19:00", duration: "1h" },
            { name: "UML Diagram & Proof of Concept", week: 11, day: "Friday", time: "18:00 - 21:05", duration: "3h 5min" },
            { name: "Viva", week: 11, day: "Friday", time: "21:05 - 21:35", duration: "30min" }
        ]
    },
    {
        module: "JavaScript",
        type: "Original assessment",
        items: [
            { name: "MCQ", week: 14, day: "Friday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Project", week: 14, day: "Wednesday-Friday", time: "13:00 - 21:30", duration: "6h approx" },
            { name: "Viva", week: 14, day: "Friday", time: "18:30 - 19:00", duration: "30min" }
        ]
    },
    {
        module: "Software Testing",
        type: "RESIT 1",
        items: [
            { name: "MCQ", week: 15, day: "Thursday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Software Testing Process", week: 15, day: "Friday", time: "18:00 - 20:10", duration: "2h 10min" },
            { name: "Viva", week: 15, day: "Friday", time: "20:10 - 20:40", duration: "30min" }
        ]
    },
    {
        module: "Project Management",
        type: "Original assessment",
        items: [
            { name: "MCQ", week: 18, day: "Wednesday", time: "18:00 - 18:35", duration: "35min" },
            { name: "Project Implementation Document", week: 18, day: "Thursday", time: "18:00 - 21:00", duration: "2h 30min" },
            { name: "Project Execution Phase Task", week: 18, day: "Friday", time: "18:00 - 19:30", duration: "1h 30min" },
            { name: "Viva", week: 18, day: "Friday", time: "19:30 - 20:00", duration: "30min" }
        ]
    },
    {
        module: "Maths for Computing",
        type: "Original assessment",
        items: [
            { name: "MCQ", week: 21, day: "Thursday", time: "18:00 - 21:00", duration: "3h" },
            { name: "Viva", week: 21, day: "Friday", time: "18:00 - 18:30", duration: "30min" }
        ]
    },
    {
        module: "Robot Technology",
        type: "Original assessment",
        items: [
            { name: "MCQ", week: 24, day: "Thursday", time: "18:00 - 18:25", duration: "25min" },
            { name: "Longform", week: 24, day: "Friday", time: "18:00 - 21:10", duration: "3h 10min" },
            { name: "Viva", week: 24, day: "Friday", time: "21:10 - 21:40", duration: "30min" }
        ]
    },
    {
        module: "Programming Implementation",
        type: "RESIT 2",
        items: [
            { name: "MCQ", week: 25, day: "Monday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Debugging Exercise", week: 25, day: "Monday", time: "19:00 - 19:50", duration: "50min" },
            { name: "Fizzbuzz Exercise", week: 25, day: "Tuesday", time: "18:00 - 19:35", duration: "1h 35min" },
            { name: "Viva", week: 25, day: "Tuesday", time: "19:35 - 20:05", duration: "30min" }
        ]
    },
    {
        module: "Software Testing",
        type: "RESIT 2",
        items: [
            { name: "MCQ", week: 25, day: "Wednesday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Software Testing Process", week: 25, day: "Thursday", time: "18:00 - 20:10", duration: "2h 10min" },
            { name: "Viva", week: 25, day: "Thursday", time: "20:10 - 20:40", duration: "30min" }
        ]
    },
    {
        module: "Project Management",
        type: "RESIT 1",
        items: [
            { name: "MCQ", week: 26, day: "Monday", time: "18:00 - 18:35", duration: "35min" },
            { name: "Project Implementation Document", week: 26, day: "Tuesday", time: "18:00 - 21:00", duration: "2h 30min" },
            { name: "Project Execution Phase Task", week: 26, day: "Wednesday", time: "18:00 - 19:30", duration: "1h 30min" },
            { name: "Viva", week: 26, day: "Wednesday", time: "19:30 - 20:00", duration: "30min" }
        ]
    },
    {
        module: "JavaScript",
        type: "RESIT 1",
        items: [
            { name: "MCQ", week: 26, day: "Friday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Project", week: 26, day: "Wednesday-Friday", time: "13:00 - 21:30", duration: "6h approx" },
            { name: "Viva", week: 26, day: "Friday", time: "18:30 - 19:00", duration: "30min" }
        ]
    },
    {
        module: "Robot Technology",
        type: "RESIT 1",
        items: [
            { name: "MCQ", week: 27, day: "Monday", time: "18:00 - 18:25", duration: "25min" },
            { name: "Longform", week: 27, day: "Tuesday", time: "18:00 - 21:10", duration: "3h 10min" },
            { name: "Viva", week: 27, day: "Tuesday", time: "21:10 - 21:40", duration: "30min" }
        ]
    },
    {
        module: "Maths for Computing",
        type: "RESIT 1",
        items: [
            { name: "MCQ", week: 27, day: "Thursday", time: "18:00 - 21:00", duration: "3h" },
            { name: "Viva", week: 27, day: "Friday", time: "18:00 - 18:30", duration: "30min" }
        ]
    },
    {
        module: "Project Management",
        type: "RESIT 2",
        items: [
            { name: "MCQ", week: 28, day: "Monday", time: "18:00 - 18:35", duration: "35min" },
            { name: "Project Implementation Document", week: 28, day: "Tuesday", time: "18:00 - 21:00", duration: "2h 30min" },
            { name: "Project Execution Phase Task", week: 28, day: "Wednesday", time: "18:00 - 19:30", duration: "1h 30min" },
            { name: "Viva", week: 28, day: "Wednesday", time: "19:30 - 20:00", duration: "30min" }
        ]
    },
    {
        module: "Object Oriented Programming",
        type: "RESIT 2",
        items: [
            { name: "Open Text Response", week: 28, day: "Thursday", time: "18:00 - 19:00", duration: "1h" },
            { name: "UML Diagram & Proof of Concept", week: 28, day: "Friday", time: "18:00 - 21:05", duration: "3h 5min" },
            { name: "Viva", week: 28, day: "Friday", time: "21:05 - 21:35", duration: "30min" }
        ]
    },
    {
        module: "Maths for Computing",
        type: "RESIT 2",
        items: [
            { name: "MCQ", week: 29, day: "Monday", time: "18:00 - 21:00", duration: "3h" },
            { name: "Viva", week: 29, day: "Monday", time: "21:00 - 21:30", duration: "30min" }
        ]
    },
    {
        module: "JavaScript",
        type: "RESIT 2",
        items: [
            { name: "MCQ", week: 29, day: "Monday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Project", week: 29, day: "Monday-Wednesday", time: "13:00 - 21:30", duration: "6h approx" },
            { name: "Viva", week: 29, day: "Wednesday", time: "18:30 - 19:00", duration: "30min" }
        ]
    },
    {
        module: "Robot Technology",
        type: "RESIT 2",
        items: [
            { name: "MCQ", week: 29, day: "Thursday", time: "18:00 - 18:25", duration: "25min" },
            { name: "Longform", week: 29, day: "Friday", time: "18:00 - 21:10", duration: "3h 10min" },
            { name: "Viva", week: 29, day: "Friday", time: "21:10 - 21:40", duration: "30min" }
        ]
    }
];

// Map day names to JS day numbers
const dayMap = { "Sunday":0, "Monday":1, "Tuesday":2, "Wednesday":3, "Thursday":4, "Friday":5, "Saturday":6 };

const resetBtn = document.getElementById("resetBtn");
const downloadBtn = document.getElementById("downloadBtn");

// Initially hide buttons
resetBtn.style.display = "none";
downloadBtn.style.display = "none";

// Format date nicely
function formatDate(date) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

// Calculate date of assessment
function getAssessmentDate(startDate, weekNumber, dayName) {
    let date = new Date(startDate);
    date.setDate(date.getDate() + (weekNumber - 1) * 7);
    const targetDay = dayMap[dayName];
    const diff = (targetDay + 7 - date.getDay()) % 7;
    date.setDate(date.getDate() + diff);
    return date;
}
// === Generate Schedule ===
document.getElementById("generateBtn").addEventListener("click", () => {
    const startDateValue = document.getElementById("startDate").value;
    if (!startDateValue) { alert("Please select a cohort start date!"); return; }

    const startDate = new Date(startDateValue);
    const scheduleContainer = document.getElementById("scheduleContainer");
    scheduleContainer.innerHTML = "";

    assessments.forEach(module => {
        // Module header
        const moduleHeader = document.createElement("h3");
        moduleHeader.className = "module-header";
        moduleHeader.textContent = `${module.module} (${module.type})`;
        scheduleContainer.appendChild(moduleHeader);

        // Table per module
        const table = document.createElement("table");
        table.className = "table table-bordered table-striped mb-5";
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Assessment</th>
                    <th>Week</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Duration</th>
                </tr>
            </thead>
        `;
        const tbody = document.createElement("tbody");

        module.items.forEach(item => {
            const row = document.createElement("tr");
            const assessmentDate = getAssessmentDate(startDate, item.week, item.day);
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.week}</td>
                <td>${formatDate(assessmentDate)}</td>
                <td>${item.time}</td>
                <td>${item.duration}</td>
            `;
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        scheduleContainer.appendChild(table);

    });

    document.getElementById("resetBtn").style.display = "inline-block";
    document.getElementById("downloadBtn").style.display = "inline-block";
});

// === Download PDF ===
document.getElementById("downloadBtn").addEventListener("click", () => {
    if (!document.querySelector("#scheduleContainer h3")) {
        alert("No schedule to download!"); 
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let currentY = 20;

    assessments.forEach(module => {
        // Module title
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text(`${module.module} (${module.type})`, 14, currentY);

        // Build rows for this module
        const rows = module.items.map(item => {
            const assessmentDate = getAssessmentDate(
                new Date(document.getElementById("startDate").value),
                item.week, 
                item.day
            );
            return [
                item.name,
                item.week,
                formatDate(assessmentDate),
                item.time,
                item.duration
            ];
        });

        // Add table
        doc.autoTable({
            head: [["Assessment", "Week", "Date", "Time", "Duration"]],
            body: rows,
            startY: currentY + 6,
            styles: { fontSize: 9, cellPadding: 2 },
            headStyles: { fillColor: [52, 58, 64], textColor: 255 },
            alternateRowStyles: { fillColor: [245, 245, 245] }
        });

        // Update Y for next module
        currentY = doc.lastAutoTable.finalY + 10;
    });

    doc.save("Assessment_Schedule.pdf");
});