/**
 * RE-SYNCHRONIZED SCRIPT MINDPRINT - ARAYA CONSULTING
 */
const mindprintDescriptions = {
    1: { title: "Si Konseptor Reflektif", intisari: "Karakter analitis, mendalam, dan mandiri. Memproses konsep secara sistematis.", successHabit: "Membangun sistem atau SOP mendetail.", relationship: "Menghargai waktu sendiri dan diskusi intelektual.", communication: "Berikan data logis dan hargai privasinya.", study: "Mendalami skema logika spesifik.", positif: "Analitis, objektif, pakar.", negatif: "Kaku, terlalu kritis.", karir: "Ilmuwan, Auditor, Programmer." },
    2: { title: "Si Empati Ekspresif", intisari: "Pemimpin alami komunikatif. Memiliki kemampuan persuasi dan energi sosial tinggi.", successHabit: "Menjaga jejaring sosial secara aktif.", relationship: "Membutuhkan apresiasi verbal yang hangat.", communication: "Sentuh perasaannya sebelum topik teknis.", study: "Diskusi kelompok dan mengajar orang lain.", positif: "Komunikatif, empatik.", negatif: "Subjektif, moody.", karir: "Politisi, Motivator, Leader." },
    3: { title: "Si Praktisi Reflektif", intisari: "Pekerja keras gigih dan teliti. Menghasilkan eksekusi sempurna dan terukur.", successHabit: "Menjaga stamina fisik dan tertib administrasi.", relationship: "Mencari kestabilan jangka panjang.", communication: "Instruksi praktis dan langkah demi langkah.", study: "Latihan fisik berulang (drilling).", positif: "Teliti, disiplin tinggi.", negatif: "Kaku terhadap perubahan.", karir: "Atlet, Manajer, Akuntan." },
    4: { title: "Si Praktisi Ekspresif", intisari: "Gesit, cekatan, dan dermawan. Senang beraksi langsung untuk hasil instan.", successHabit: "Segera mengeksekusi peluang tanpa banyak teori.", relationship: "Senang petualangan dan hadiah fisik.", communication: "Fokus pada manfaat praktis segera.", study: "Learning by doing di lapangan.", positif: "Cekatan, gesit, dermawan.", negatif: "Kurang rencana jangka panjang.", karir: "Pengusaha, Marketing." },
    5: { title: "Si Empati Reflektif", intisari: "Pribadi idealis dengan keyakinan hati kuat. Bergerak berdasarkan panggilan jiwa.", successHabit: "Menjaga integritas dan panggilan hati.", relationship: "Mencari kesetiaan murni dan koneksi jiwa.", communication: "Hargai prinsip dan pendekatan personal.", study: "Mencari makna dalam suasana tenang.", positif: "Setia, tulus, prinsipil.", negatif: "Sensitif, memendam masalah.", karir: "Psikolog, Penulis, Aktivis." },
    6: { title: "Si Kreatif Ekspresif", intisari: "Visioner pencipta peluang. Pandai merakit ide baru pembawa perubahan.", successHabit: "Terus upgrade ilmu dan mencari mentor.", relationship: "Butuh dukungan terhadap mimpi besar.", communication: "Beri ruang ide dan visi masa depan.", study: "Mind mapping dan visualisasi.", positif: "Kreatif, optimis, visioner.", negatif: "Kurang fokus detail.", karir: "Inovator, Arsitek, Desainer." },
    7: { title: "Si Kreatif Reflektif", intisari: "Perancang strategi perfeksionis. Mengutamakan kualitas dan rencana matang.", successHabit: "Menyusun Master Plan mendetail.", relationship: "Eksklusif dan menghargai privasi pikiran.", communication: "Bicara standar kualitas tinggi.", study: "Analisis konsep abstrak dan riset.", positif: "Strategis, perfeksionis.", negatif: "Tertutup, sulit dipuaskan.", karir: "Peneliti, Detektif, Strategist." },
    8: { title: "Si Konseptor Ekspresif", intisari: "Manajer sistem tegas dan objektif. Fokus target dan efisiensi pengelolaan.", successHabit: "Fokus pada kontrol sistem dan delegasi.", relationship: "Mendukung status sosial dan karir.", communication: "Bicara hasil (result-oriented).", study: "Mengorganisir bahan secara efisien.", positif: "Tegas, objektif, manajerial.", negatif: "Cenderung otoriter.", karir: "CEO, Manajer Profesional." },
    9: { title: "Si Adaptif", intisari: "Responsif dan serba bisa. Memiliki naluri tajam untuk beradaptasi cepat.", successHabit: "Jeda spiritual untuk menajamkan naluri.", relationship: "Sangat tulus dan mencari kedamaian.", communication: "Langsung pada poin (to the point).", study: "Merangkai potongan informasi.", positif: "Jujur, responsif, insting tajam.", negatif: "Temperamental, peragu.", karir: "Mediator, Jurnalis, Chef." }
};

const fingers = ["ibu jari", "telunjuk", "tengah", "manis", "kelingking"];
let currentFingerIndex = 0;
let userName = "";
let birthDate = "";
let isScanning = false;

// INITIALIZATION
function populateDateFields() {
    const d = document.getElementById('day'), m = document.getElementById('month'), y = document.getElementById('year');
    if(!d || !m || !y) return;
    d.innerHTML = '<option value="" disabled selected>Hari</option>';
    m.innerHTML = '<option value="" disabled selected>Bulan</option>';
    y.innerHTML = '<option value="" disabled selected>Tahun</option>';
    for(let i=1; i<=31; i++) d.innerHTML += `<option value="${String(i).padStart(2,'0')}">${i}</option>`;
    ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"].forEach((mon,i) => {
        m.innerHTML += `<option value="${String(i+1).padStart(2,'0')}">${mon}</option>`;
    });
    for(let i=new Date().getFullYear(); i>=1950; i--) y.innerHTML += `<option value="${i}">${i}</option>`;
}

function calculateNumerology(dateString) {
    const digits = dateString.replace(/-/g, '').split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);
    while (sum > 9) sum = String(sum).split('').reduce((acc, d) => acc + parseInt(d), 0);
    return sum || 9;
}

// SCANNING
function handleScanStart(e) {
    if (e) e.preventDefault();
    if (isScanning) return;
    isScanning = true;
    const s = document.getElementById('fingerprint-scanner');
    const t = document.getElementById('scan-text');
    t.textContent = `Memindai ${fingers[currentFingerIndex]}...`;
    s.classList.add('scanning');
    setTimeout(() => {
        s.classList.remove('scanning');
        isScanning = false;
        if (currentFingerIndex < fingers.length - 1) {
            t.textContent = `${fingers[currentFingerIndex].toUpperCase()} BERHASIL.`;
            document.getElementById('next-finger-button').classList.remove('hidden'); 
        } else {
            t.textContent = "MENGANALISIS MINDPRINT...";
            setTimeout(showResult, 1500);
        }
    }, 2000);
}

const scannerElement = document.getElementById('fingerprint-scanner');
if(scannerElement) {
    scannerElement.addEventListener('mousedown', handleScanStart);
    scannerElement.addEventListener('touchstart', handleScanStart);
}

document.getElementById('next-finger-button').addEventListener('click', function() {
    currentFingerIndex++;
    this.classList.add('hidden');
    document.getElementById('scan-text').textContent = `Letakkan ${fingers[currentFingerIndex]} Anda.`;
});

// RESULTS
function showResult() {
    document.getElementById('scan-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    const resNum = calculateNumerology(birthDate);
    const data = mindprintDescriptions[resNum];

    document.getElementById('result-title').textContent = data.title;
    document.getElementById('result-description').textContent = data.intisari;

    document.getElementById('cert-name').textContent = userName;
    document.getElementById('cert-result').textContent = data.title;
    document.getElementById('cert-intisari').textContent = data.intisari;
    document.getElementById('cert-success').textContent = data.successHabit;
    document.getElementById('cert-relationship').textContent = data.relationship;
    document.getElementById('cert-communication').textContent = data.communication;
    document.getElementById('cert-study').textContent = data.study;
    document.getElementById('cert-positif').textContent = data.positif;
    document.getElementById('cert-negatif').textContent = data.negatif;
    document.getElementById('cert-karir').textContent = data.karir;
    document.getElementById('cert-date').textContent = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    document.getElementById('cert-id').textContent = `MP/${new Date().getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}`;
}

// PDF DOWNLOAD (FORCE VIRTUAL RESOLUTION)
document.getElementById('download-btn').addEventListener('click', () => {
    const el = document.getElementById('certificate-template');
    el.style.display = 'block';
    
    const opt = {
        margin: 0,
        filename: `Laporan_MindPrint_${userName}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
            scale: 2, 
            useCORS: true, 
            logging: false,
            // KUNCI RESOLUSI: Mengabaikan ukuran layar tablet/HP
            windowWidth: 1080,
            windowHeight: 740,
            width: 1080,
            height: 740
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape', compress: true },
        pagebreak: { mode: 'avoid-all' }
    };

    html2pdf().set(opt).from(el).save().then(() => {
        el.style.display = 'none';
    });
});

document.getElementById('user-form').addEventListener('submit', (e) => {
    e.preventDefault();
    userName = document.getElementById('user-name').value;
    birthDate = `${document.getElementById('year').value}-${document.getElementById('month').value}-${document.getElementById('day').value}`;
    document.getElementById('intro-container').classList.add('hidden');
    document.getElementById('scan-container').classList.remove('hidden');
    document.getElementById('scan-text').textContent = `Letakkan ${fingers[0]} Anda.`;
});

document.getElementById('restart-button').addEventListener('click', () => location.reload());
populateDateFields();
