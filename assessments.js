// === Assessment & Resit Schedule ===
const assessments = [
    {
        module: "Programming Implementation",
        type: "Normal",
        items: [
            { name: "MCQ", week: 3, day: "Thursday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Debugging Exercise", week: 3, day: "Thursday", time: "19:00 - 19:50", duration: "50min" },
            { name: "Fizzbuzz Exercise", week: 3, day: "Friday", time: "18:00 - 19:35", duration: "1h 35min" },
            { name: "Viva", week: 3, day: "Friday", time: "19:35 - 20:05", duration: "30min" }
        ]
    },
    {
        module: "Object Oriented Programming",
        type: "Normal",
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
        type: "Normal",
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
        type: "Normal",
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
        type: "Normal",
        items: [
            { name: "MCQ", week: 18, day: "Wednesday", time: "18:00 - 18:35", duration: "35min" },
            { name: "Project Implementation Document", week: 18, day: "Thursday", time: "18:00 - 21:00", duration: "2h 30min" },
            { name: "Project Execution Phase Task", week: 18, day: "Friday", time: "18:00 - 19:30", duration: "1h 30min" },
            { name: "Viva", week: 18, day: "Friday", time: "19:30 - 20:00", duration: "30min" }
        ]
    },
    {
        module: "Maths for Computing",
        type: "Normal",
        items: [
            { name: "MCQ", week: 21, day: "Thursday", time: "18:00 - 21:00", duration: "3h" },
            { name: "Viva", week: 21, day: "Friday", time: "18:00 - 18:30", duration: "30min" }
        ]
    },
    {
        module: "Robot Technology",
        type: "Normal",
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

    const table = document.createElement("table");
    table.className = "table table-bordered table-striped";
    table.innerHTML = `
        <thead>
            <tr>
                <th>Module</th>
                <th>Type</th>
                <th>Assessment</th>
                <th>Week</th>
                <th>Date</th>
                <th>Time</th>
                <th>Duration</th>
            </tr>
        </thead>
    `;
    const tbody = document.createElement("tbody");

    assessments.forEach(module => {
        module.items.forEach(item => {
            const row = document.createElement("tr");
            const assessmentDate = getAssessmentDate(startDate, item.week, item.day);
            row.innerHTML = `
                <td>${module.module}</td>
                <td>${module.type}</td>
                <td>${item.name}</td>
                <td>${item.week}</td>
                <td>${formatDate(assessmentDate)}</td>
                <td>${item.time}</td>
                <td>${item.duration}</td>
            `;
            tbody.appendChild(row);
        });
    });

    table.appendChild(tbody);
    scheduleContainer.appendChild(table);

    document.getElementById("resetBtn").style.display = "inline-block";
    document.getElementById("downloadBtn").style.display = "inline-block";
});

// === Reset ===
document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("scheduleContainer").innerHTML = "";
    document.getElementById("startDate").value = "";
    document.getElementById("resetBtn").style.display = "none";
    document.getElementById("downloadBtn").style.display = "none";
});

// === Download PDF ===
document.getElementById("downloadBtn").addEventListener("click", () => {
    const table = document.querySelector("#scheduleContainer table");
    if (!table) { alert("No schedule to download!"); return; }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const headers = [];
    table.querySelectorAll("thead th").forEach(th => headers.push(th.textContent));

    const rows = [];
    table.querySelectorAll("tbody tr").forEach(tr => {
        const row = [];
        tr.querySelectorAll("td").forEach(td => row.push(td.textContent));
        rows.push(row);
    });

    doc.autoTable({
        head: [headers],
        body: rows,
        startY: 20,
        styles: { fontSize: 9, cellPadding: 2 },
        headStyles: { fillColor: [52, 58, 64], textColor: 255 },
        alternateRowStyles: { fillColor: [245, 245, 245] }
    });

    doc.save("Assessment_Schedule.pdf");
});
