// Data untuk hasil MindPrint (berdasarkan numerologi)
const mindprintDescriptions = {
    1: { title: "Si Konseptor Reflektif" },
    2: { title: "Si Empati Ekspresif" },
    3: { title: "Si Praktisi Reflektif" },
    4: { title: "Si Praktisi Ekspresif" },
    5: { title: "Si Empati Reflektif" },
    6: { title: "Si Kreatif Ekspresif" },
    7: { title: "Si Kreatif Reflektif" },
    8: { title: "Si Konseptor Ekspresif" },
    9: { title: "Si Adaptif" }
};

const fingers = ["ibu jari", "telunjuk", "tengah", "manis", "kelingking"];
let currentFingerIndex = 0;
let userName = "";
let birthDate = "";
let bloodType = "";

const introContainer = document.getElementById('intro-container');
const scanContainer = document.getElementById('scan-container');
const resultContainer = document.getElementById('result-container');
const userForm = document.getElementById('user-form');
const userNameInput = document.getElementById('user-name');
const daySelect = document.getElementById('day');
const monthSelect = document.getElementById('month');
const yearSelect = document.getElementById('year');
const bloodTypeSelect = document.getElementById('blood-type');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const restartButton = document.getElementById('restart-button');
const fingerprintScanner = document.getElementById('fingerprint-scanner');
const scanText = document.getElementById('scan-text');
const scanLoadingText = document.getElementById('scan-loading-text');
const startButton = document.getElementById('start-button');

// Fungsi Utama
function populateDateFields() {
    // Mengisi opsi hari
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = String(i).padStart(2, '0');
        option.textContent = i;
        daySelect.appendChild(option);
    }
    // Mengisi opsi bulan
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    for (let i = 0; i < months.length; i++) {
        const option = document.createElement('option');
        option.value = String(i + 1).padStart(2, '0');
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }
    // Mengisi opsi tahun (dari 1950 hingga tahun sekarang)
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1950; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

function calculateNumerology(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);
    let sum = day + month + year;
    
    function reduceToSingleDigit(number) {
        while (number > 9) {
            number = String(number).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        }
        return number;
    }
    
    return reduceToSingleDigit(sum);
}

function startScan(event) {
    event.preventDefault();
    if (currentFingerIndex < fingers.length) {
        scanLoadingText.textContent = `Sedang memproses **${fingers[currentFingerIndex]}**...`;
        fingerprintScanner.classList.add('scanning');
        
        setTimeout(() => {
            fingerprintScanner.classList.remove('scanning');
            currentFingerIndex++;
            if (currentFingerIndex < fingers.length) {
                scanLoadingText.textContent = `Silakan letakkan **jari ${fingers[currentFingerIndex]}** Anda.`;
            } else {
                scanLoadingText.textContent = "Semua jari sudah dipindai. Menganalisis...";
                setTimeout(showResult, 2000);
            }
        }, 3000); // Durasi pemindaian per jari
    }
}

function showResult() {
    scanContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    const numerologyNumber = calculateNumerology(birthDate);
    const mindprintResult = mindprintDescriptions[numerologyNumber].title;

    resultTitle.textContent = `Hasil MindPrint Anda: ${mindprintResult}`;
    resultDescription.textContent = "Untuk penjelasan lebih detail dari kepribadian tersebut, akan dijelaskan dalam sesi bersama Mas Ali Mahfud.";
}

function restartApp() {
    resultContainer.classList.add('hidden');
    introContainer.classList.remove('hidden');
    userForm.reset();
    fingerprintScanner.classList.remove('scanning');
    currentFingerIndex = 0;
}

// Event Listeners
userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    userName = userNameInput.value;
    const day = daySelect.value;
    const month = monthSelect.value;
    const year = yearSelect.value;
    
    if (!day || !month || !year) {
        alert("Mohon lengkapi tanggal lahir Anda.");
        return;
    }
    
    birthDate = `${year}-${month}-${day}`;
    bloodType = bloodTypeSelect.value;
    
    introContainer.classList.add('hidden');
    scanContainer.classList.remove('hidden');
    
    scanText.textContent = "Silakan Letakkan Jari Anda";
    scanLoadingText.textContent = `Silakan letakkan **ibu jari** Anda di area ini.`;

    fingerprintScanner.addEventListener('click', startScan);
    fingerprintScanner.addEventListener('touchstart', startScan);
});

restartButton.addEventListener('click', restartApp);

document.addEventListener('DOMContentLoaded', populateDateFields);
