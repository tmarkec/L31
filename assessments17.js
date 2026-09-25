// === 17-Week Assessment & Resit Schedule ===
const assessments = [
    {
        module: "Programming Implementation",
        type: "Original assessment",
        items: [
            { name: "MCQ", week: 3, day: "Thursday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Longform - Debugging Exercise", week: 3, day: "Thursday", time: "19:00 - 19:50", duration: "50min" },
            { name: "Longform - Examine the code: Fizzbuzz", week: 3, day: "Friday", time: "18:00 - 19:35", duration: "1h 35min" },
            { name: "Viva", week: 3, day: "Friday", time: "19:35 - 20:05", duration: "30min" }
        ]
    },
    {
        module: "Object Oriented Programming",
        type: "Original assessment",
        items: [
            { name: "Longform - Open Text Response", week: 6, day: "Thursday", time: "18:00 - 19:00", duration: "1h" },
            { name: "Longform - Documentation (UML diagram) and Proof of concept Code", week: 6, day: "Friday", time: "18:00 - 21:05", duration: "3h 5min" },
            { name: "Viva", week: 6, day: "Friday", time: "21:05 - 21:35", duration: "30min" }
        ]
    },
    {
        module: "Programming Implementation",
        type: "Resit 1",
        items: [
            { name: "MCQ", week: 7, day: "Thursday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Longform - Debugging Exercise", week: 7, day: "Thursday", time: "19:00 - 19:50", duration: "50min" },
            { name: "Longform - Examine the code: Fizzbuzz", week: 7, day: "Friday", time: "18:00 - 19:35", duration: "1h 35min" },
            { name: "Viva", week: 7, day: "Friday", time: "19:35 - 20:05", duration: "30min" }
        ]
    },
    {
        module: "Software Testing",
        type: "Original assessment",
        items: [
            { name: "MCQ", week: 10, day: "Thursday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Software testing Process", week: 10, day: "Friday", time: "18:00 - 20:10", duration: "2h (+10min reading)" },
            { name: "Viva", week: 10, day: "Friday", time: "20:10 - 20:40", duration: "30min" }
        ]
    },
    {
        module: "Object Oriented Programming",
        type: "Resit 1",
        items: [
            { name: "Longform - Open Text Response", week: 11, day: "Thursday", time: "18:00 - 19:00", duration: "1h" },
            { name: "Longform - Documentation (UML diagram) and Proof of concept Code", week: 11, day: "Friday", time: "18:00 - 21:05", duration: "3h 5min" },
            { name: "Viva", week: 11, day: "Friday", time: "21:05 - 21:35", duration: "30min" }
        ]
    },
    {
        module: "JavaScript",
        type: "Original assessment",
        items: [
            { name: "MCQ", week: 14, day: "Friday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Project", week: 14, day: "Wednesday-Friday", time: "13:00 - 21:30", duration: "Untimed (approx 6h)" },
            { name: "Viva", week: 14, day: "Friday", time: "18:30 - 19:00", duration: "30min" }
        ]
    },
    {
        module: "Project Management",
        type: "Original assessment",
        items: [
            { name: "MCQ", week: 17, day: "Wednesday", time: "18:00 - 18:35", duration: "35min" },
            { name: "Longform - Project Implementation Document (PID)", week: 17, day: "Thursday", time: "18:00 - 21:00", duration: "2h 30min (+30min reading)" },
            { name: "Longform - Project Execution Phase Task: Risk management", week: 17, day: "Friday", time: "18:00 - 19:30", duration: "1h 30min" },
            { name: "Viva", week: 17, day: "Friday", time: "19:30 - 20:00", duration: "30min" }
        ]
    },
    {
        module: "Software Testing",
        type: "Resit 1",
        items: [
            { name: "MCQ", week: 18, day: "Monday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Software testing Process", week: 18, day: "Tuesday", time: "18:00 - 20:10", duration: "2h (+10min reading)" },
            { name: "Viva", week: 18, day: "Tuesday", time: "20:10 - 20:40", duration: "30min" }
        ]
    },
    {
        module: "JavaScript",
        type: "Resit 1",
        items: [
            { name: "MCQ", week: 18, day: "Friday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Project", week: 18, day: "Wednesday-Friday", time: "13:00 - 21:30", duration: "Untimed (approx 6h)" },
            { name: "Viva", week: 18, day: "Friday", time: "18:30 - 19:00", duration: "30min" }
        ]
    },
    {
        module: "Programming Implementation",
        type: "Resit 2",
        items: [
            { name: "MCQ", week: 19, day: "Monday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Longform - Debugging Exercise", week: 19, day: "Monday", time: "19:00 - 19:50", duration: "50min" },
            { name: "Longform - Examine the code: Fizzbuzz", week: 19, day: "Tuesday", time: "18:00 - 19:35", duration: "1h 35min" },
            { name: "Viva", week: 19, day: "Tuesday", time: "19:35 - 20:05", duration: "30min" }
        ]
    },
    {
        module: "Project Management",
        type: "Resit 1",
        items: [
            { name: "MCQ", week: 19, day: "Wednesday", time: "18:00 - 18:35", duration: "35min" },
            { name: "Longform - Project Implementation Document (PID)", week: 19, day: "Thursday", time: "18:00 - 21:00", duration: "2h 30min (+30min reading)" },
            { name: "Longform - Project Execution Phase Task: Risk management", week: 19, day: "Friday", time: "18:00 - 19:30", duration: "1h 30min" },
            { name: "Viva", week: 19, day: "Friday", time: "19:30 - 20:00", duration: "30min" }
        ]
    },
    {
        module: "Software Testing",
        type: "Resit 2",
        items: [
            { name: "MCQ", week: 20, day: "Monday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Software testing Process", week: 20, day: "Tuesday", time: "18:00 - 20:10", duration: "2h (+10min reading)" },
            { name: "Viva", week: 20, day: "Tuesday", time: "20:10 - 20:40", duration: "30min" }
        ]
    },
    {
        module: "Object Oriented Programming",
        type: "Resit 2",
        items: [
            { name: "Longform - Open Text Response", week: 20, day: "Thursday", time: "18:00 - 19:00", duration: "1h" },
            { name: "Longform - Documentation (UML diagram) and Proof of concept Code", week: 20, day: "Friday", time: "18:00 - 21:05", duration: "3h 5min" },
            { name: "Viva", week: 20, day: "Friday", time: "21:05 - 21:35", duration: "30min" }
        ]
    },
    {
        module: "Project Management",
        type: "Resit 2",
        items: [
            { name: "MCQ", week: 21, day: "Monday", time: "18:00 - 18:35", duration: "35min" },
            { name: "Longform - Project Implementation Document (PID)", week: 21, day: "Tuesday", time: "18:00 - 21:00", duration: "2h 30min (+30min reading)" },
            { name: "Longform - Project Execution Phase Task: Risk management", week: 21, day: "Wednesday", time: "18:00 - 19:30", duration: "1h 30min" },
            { name: "Viva", week: 21, day: "Wednesday", time: "19:30 - 20:00", duration: "30min" }
        ]
    },
    {
        module: "JavaScript",
        type: "Resit 2",
        items: [
            { name: "MCQ", week: 21, day: "Friday", time: "18:00 - 18:30", duration: "30min" },
            { name: "Project", week: 21, day: "Wednesday-Friday", time: "13:00 - 21:30", duration: "Untimed (approx 6h)" },
            { name: "Viva", week: 21, day: "Friday", time: "18:30 - 19:00", duration: "30min" }
        ]
    }
];

// Map day names to JS day numbers
const dayMap = { "Sunday":0, "Monday":1, "Tuesday":2, "Wednesday":3, "Thursday":4, "Friday":5, "Saturday":6 };

const resetBtn = document.getElementById("resetBtn");
const downloadBtn = document.getElementById("downloadBtn");

// Initially hide buttons safely
if (resetBtn) resetBtn.style.display = "none";
if (downloadBtn) downloadBtn.style.display = "none";

// Format date nicely
function formatDate(date) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: '2-digit' };
    return date.toLocaleDateString('en-US', options);
}

// Calculate date of assessment dynamically (accounting for holidays and timezones)
function getAssessmentDate(startDateValue, weekNumber, dayName) {
    // 1. Bypass timezone bugs by explicitly splitting the local date string components
    const [year, month, day] = startDateValue.split('-');
    let current = new Date(year, month - 1, day);
    let currentWeek = 1;

    // 2. Step through week by week to check for the Christmas break
    while (currentWeek < weekNumber) {
        current.setDate(current.getDate() + 7);
        
        // CHRISTMAS BREAK LOGIC:
        // If a teaching week begins between Dec 18 and Dec 31, it intersects the holidays.
        // We pause the schedule by adding 14 days (2 weeks).
        if (current.getMonth() === 11 && current.getDate() >= 18) {
            current.setDate(current.getDate() + 14);
        }
        currentWeek++;
    }
    
    // 3. Find the right day of the week
    const singleDay = dayName.includes('-') ? dayName.split('-')[0].trim() : dayName;
    const targetDayOfWeek = dayMap[singleDay];
    
    // Determine what day of the week the cohort started on
    const startDayOfWeek = new Date(year, month - 1, day).getDay();
    
    let dayOffset = targetDayOfWeek - startDayOfWeek;
    // If the target day is earlier in the week than the start day, push it to the correct day of THAT cohort week
    if (dayOffset < 0) {
        dayOffset += 7;
    }
    
    current.setDate(current.getDate() + dayOffset);
    return current;
}

// === Generate Schedule ===
document.getElementById("generateBtn").addEventListener("click", () => {
    const startDateValue = document.getElementById("startDate").value;
    if (!startDateValue) { alert("Please select a cohort start date!"); return; }

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
            // Important: We now pass the string directly, not a Date object
            const assessmentDate = getAssessmentDate(startDateValue, item.week, item.day);
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

    if (resetBtn) resetBtn.style.display = "inline-block";
    if (downloadBtn) downloadBtn.style.display = "inline-block";
});

// === Reset Button ===
document.getElementById("resetBtn").addEventListener("click", () => {
    const scheduleContainer = document.getElementById("scheduleContainer");
    scheduleContainer.innerHTML = "";
    document.getElementById("startDate").value = "";
    if (resetBtn) resetBtn.style.display = "none";
    if (downloadBtn) downloadBtn.style.display = "none";
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
    const startDateValue = document.getElementById("startDate").value;

    assessments.forEach(module => {
        // Module title
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text(`${module.module} (${module.type})`, 14, currentY);

        // Build rows for this module
        const rows = module.items.map(item => {
            // Important: We now pass the string directly, not a Date object
            const assessmentDate = getAssessmentDate(startDateValue, item.week, item.day);
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

    doc.save("Assessment_Schedule_17Week.pdf");
});
