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
const daySelect = document.getElementById('day');
const monthSelect = document.getElementById('month');
const yearSelect = document.getElementById('year');
const bloodTypeSelect = document.getElementById('blood-type');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');
const restartButton = document.getElementById('restart-button');
const scanText = document.getElementById('scan-text');
const scanLoadingText = document.getElementById('scan-loading-text');

const fingerScanners = document.querySelectorAll('.fingerprint-scanner');

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

function handleFingerScan(event) {
    const fingerIndex = Number(event.currentTarget.id.split('-')[1]);

    if (fingerIndex === currentFingerIndex) {
        event.currentTarget.classList.add('scanned');
        event.currentTarget.classList.remove('active');

        currentFingerIndex++;

        if (currentFingerIndex < fingers.length) {
            scanLoadingText.textContent = `Silakan letakkan **jari ${fingers[currentFingerIndex]}** Anda.`;
            fingerScanners[currentFingerIndex].classList.add('active');
        } else {
            scanLoadingText.textContent = "Semua jari sudah dipindai. Menganalisis...";
            setTimeout(showResult, 2000);
        }
    } else {
        // Beri tahu pengguna bahwa mereka menekan jari yang salah
        alert(`Mohon sentuh ${fingers[currentFingerIndex]} terlebih dahulu.`);
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
    
    fingerScanners.forEach(finger => {
        finger.classList.remove('scanned');
        finger.classList.remove('active');
    });
    currentFingerIndex = 0;
}

// Event Listeners
userForm.addEventListener('submit', function(event) {
    event.preventDefault();
    userName = userForm.querySelector('#user-name').value;
    const day = userForm.querySelector('#day').value;
    const month = userForm.querySelector('#month').value;
    const year = userForm.querySelector('#year').value;
    
    if (!day || !month || !year) {
        alert("Mohon lengkapi tanggal lahir Anda.");
        return;
    }
    
    birthDate = `${year}-${month}-${day}`;
    bloodType = userForm.querySelector('#blood-type').value;
    
    introContainer.classList.add('hidden');
    scanContainer.classList.remove('hidden');
    
    // Mulai proses pemindaian
    scanText.textContent = "Silakan Letakkan Jari Anda";
    scanLoadingText.textContent = `Silakan letakkan **ibu jari** Anda di area ini.`;
    fingerScanners[0].classList.add('active'); // Aktifkan jari pertama
});

fingerScanners.forEach(finger => {
    finger.addEventListener('click', handleFingerScan);
    finger.addEventListener('touchstart', handleFingerScan);
});

restartButton.addEventListener('click', restartApp);

document.addEventListener('DOMContentLoaded', populateDateFields);
