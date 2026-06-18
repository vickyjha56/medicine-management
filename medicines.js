let medicines = 
    JSON.parse(localStorage.getItem("medicines")) || [];

const medicineTable = document.getElementById("medicineTable");
const medicineCount = document.getElementById("medicineCount");
const searchInput = document.getElementById("searchMedicine");

function saveData() {
    localStorage.setItem("medicines", JSON.stringify(medicines));
}

function displayMedicines() {
    medicineTable.innerHTML = "";
    medicines.forEach((med, index) => {
        medicineTable.innerHTML += `
            <tr>
                <td>${med.name}</td>
                <td>${med.company}</td>
                <td>₹${med.price}</td>
                <td><button onclick="deleteMedicine(${index})">Delete</button></td>
            </tr>
        `;
    });
    medicineCount.textContent = medicines.length;
}

document.getElementById("medicineForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("medicineName").value;
    const company = document.getElementById("companyName").value;
    const price = document.getElementById("medicinePrice").value;

    medicines.push({
        name,
        company,
        price
    });
    let medicineCount = 0; 

function addMedicine() {
    medicineCount++; 
    document.getElementById('medicineCounter').innerText = medicineCount;
}
    saveData();
    displayMedicines();
    this.reset();
});

function deleteMedicine(index) {
    medicines.splice(index, 1);
    saveData();
    displayMedicines();
}

// Search functionality
searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filtered = medicines.filter(med =>
        med.name.toLowerCase().includes(query) ||
        med.company.toLowerCase().includes(query)
    );

    medicineTable.innerHTML = "";
    filtered.forEach((med, index) => {
        medicineTable.innerHTML += `
            <tr>
                <td>${med.name}</td>
                <td>${med.company}</td>
                <td>₹${med.price}</td>
                <td><button onclick="deleteMedicine(${index})">Delete</button></td>
            </tr>
        `;
    });
});
displayMedicines();
function performSearch() {
    const query = document.getElementById('searchMedicine').value.trim().toLowerCase();
    const filtered = medicines.filter(med => 
        med.name.toLowerCase().includes(query) ||
        med.company.toLowerCase().includes(query)
    );

    const table = document.getElementById('medicineTable');
    table.innerHTML = ''; // पहले साफ करो

    if (filtered.length === 0) {
        table.innerHTML = '<tr><td colspan="4">No results found</td></tr>';
    } else {
        filtered.forEach((med, index) => {
            table.innerHTML += `
                <tr>
                    <td>${med.name}</td>
                    <td>${med.company}</td>
                    <td>${med.price}</td>
                    <td><button onclick="deleteMedicine(${index})">Delete</button></td>
                </tr>
            `;
        });
    }
}