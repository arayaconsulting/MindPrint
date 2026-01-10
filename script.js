/**
 * DATA STRATEGIS MINDPRINT - ARAYA CONSULTING
 * Berbasis Analisis Numerologi Karakter
 */
const mindprintDescriptions = {
    1: { 
        title: "Si Konseptor Reflektif",
        intisari: "Karakter yang sangat analitis, mendalam, dan mandiri. Anda memproses informasi secara internal untuk menghasilkan konsep yang presisi dan sistematis.",
        successHabit: "Membangun sistem atau standar kerja (SOP) yang sangat mendetail.",
        relationship: "Menghargai waktu sendiri dan diskusi intelektual yang substansial.",
        communication: "Berikan data logis dan hargai ruang privasinya untuk berpikir.",
        study: "Mendalami struktur dan skema logika secara spesifik.",
        positif: "Analitis, objektif, disiplin, pakar.",
        negatif: "Kaku, dingin, terlalu kritis.",
        karir: "Ilmuwan, Auditor, Programmer, Analis Data."
    },
    2: { 
        title: "Si Empati Ekspresif",
        intisari: "Pemimpin alami yang komunikatif dan persuasif. Anda memiliki kemampuan tinggi untuk merasakan energi sosial dan menggerakkan orang lain.",
        successHabit: "Menjaga hubungan sosial dan jejaring (networking) secara aktif.",
        relationship: "Membutuhkan apresiasi verbal dan pengakuan emosional yang hangat.",
        communication: "Sentuh perasaannya terlebih dahulu sebelum masuk ke topik teknis.",
        study: "Melalui diskusi kelompok dan mengajar kembali kepada orang lain.",
        positif: "Komunikatif, empatik, persuasif.",
        negatif: "Subjektif, mudah terpengaruh suasana hati.",
        karir: "Politisi, Motivator, Leader, HR Manager."
    },
    3: { 
        title: "Si Praktisi Reflektif",
        intisari: "Pekerja keras yang gigih dan sangat teliti. Anda memproses instruksi secara internal untuk menghasilkan eksekusi yang sempurna dan terukur.",
        successHabit: "Menjaga stamina fisik dan ketertiban administrasi aset.",
        relationship: "Mencari kestabilan jangka panjang dan bukti kesetiaan nyata.",
        communication: "Gunakan instruksi yang praktis, konkret, dan langkah demi langkah.",
        study: "Latihan fisik berulang (drilling) dan menghafal data detail.",
        positif: "Teliti, disiplin tinggi, produktif.",
        negatif: "Kaku terhadap perubahan mendadak.",
        karir: "Atlet, Manajer Operasional, Akuntan."
    },
    4: { 
        title: "Si Praktisi Ekspresif",
        intisari: "Karakter yang gesit, cekatan, dan dermawan. Anda senang beraksi langsung di lapangan dan mendapatkan hasil yang nyata secara cepat.",
        successHabit: "Mengeksekusi peluang bisnis segera tanpa berlama-lama pada teori.",
        relationship: "Senang diajak bertualang dan menghargai hadiah fisik.",
        communication: "Langsung pada manfaat praktis dan keuntungan yang akan didapat.",
        study: "Learning by doing dan simulasi langsung di lapangan.",
        positif: "Cekatan, gesit, dermawan.",
        negatif: "Kurang perencanaan jangka panjang.",
        karir: "Pengusaha, Marketing, Kontraktor."
    },
    5: { 
        title: "Si Empati Reflektif",
        intisari: "Pribadi idealis yang memiliki keyakinan hati sangat kuat. Anda bergerak berdasarkan prinsip moral dan panggilan jiwa yang mendalam.",
        successHabit: "Menjaga integritas antara perbuatan dan panggilan hati nurani.",
        relationship: "Mencari kesetiaan murni dan koneksi jiwa (soulmate).",
        communication: "Hargai prinsip pribadinya dan gunakan pendekatan personal.",
        study: "Mencari makna mendalam dalam suasana tenang.",
        positif: "Setia, tulus, prinsip kuat.",
        negatif: "Sensitif dan sering memendam masalah.",
        karir: "Psikolog, Penulis, Konselor, Aktivis."
    },
    6: { 
        title: "Si Kreatif Ekspresif",
        intisari: "Pencipta peluang yang visioner dan haus inovasi. Anda pandai merakit ide baru untuk membawa perubahan besar di lingkungan Anda.",
        successHabit: "Terus memperbarui ilmu pengetahuan dan mencari mentor visioner.",
        relationship: "Membutuhkan pasangan yang mendukung mimpi besar dan ide kreatifnya.",
        communication: "Berikan ruang untuk beride dan bicarakan visi masa depan.",
        study: "Mind mapping dan visualisasi gambar.",
        positif: "Kreatif, optimis, visioner.",
        negatif: "Mudah kehilangan fokus pada detail teknis.",
        karir: "Inovator, Arsitek, Desainer, Pakar Strategi."
    },
    7: { 
        title: "Si Kreatif Reflektif",
        intisari: "Perancang strategi perfeksionis dengan imajinasi kuat. Anda mengutamakan kualitas tinggi dan perencanaan matang di atas segalanya.",
        successHabit: "Menyusun Master Plan jangka panjang yang mendetail.",
        relationship: "Eksklusif dalam memilih teman dan menghargai privasi pikiran.",
        communication: "Bicara pada standar kualitas tinggi dan hargai risetnya.",
        study: "Menganalisis konsep abstrak dan riset mandiri.",
        positif: "Strategis, perfeksionis, visioner.",
        negatif: "Terlalu tertutup dan sulit dipuaskan.",
        karir: "Peneliti, Detektif, Konseptor, Strategist."
    },
    8: { 
        title: "Si Konseptor Ekspresif",
        intisari: "Manajer sistem yang tegas dan objektif. Anda fokus pada pencapaian target kerja dan efisiensi pengelolaan sumber daya secara luas.",
        successHabit: "Mendelegasikan tugas teknis untuk fokus pada kontrol sistem.",
        relationship: "Mencari pasangan logis yang mendukung status sosial dan karir.",
        communication: "Bicara langsung pada hasil (result-oriented) dan otoritas.",
        study: "Mengorganisir bahan belajar ke dalam sistem yang efisien.",
        positif: "Tegas, objektif, manajerial kuat.",
        negatif: "Cenderung otoriter.",
        karir: "CEO, Manajer Profesional, Administrator."
    },
    9: { 
        title: "Si Adaptif",
        intisari: "Karakter yang responsif dan serba bisa (generalis). Anda memiliki naluri tajam untuk beradaptasi cepat dalam situasi apa pun.",
        successHabit: "Rutin melakukan jeda spiritual untuk menajamkan naluri/insting.",
        relationship: "Sangat tulus, tidak suka konflik, dan mencari kedamaian.",
        communication: "Bicara langsung pada poinnya (to the point) dalam suasana santai.",
        study: "Merangkai potongan informasi menjadi rangkuman utuh.",
        positif: "Jujur, responsif, naluri tajam.",
        negatif: "Temperamental jika tertekan, peragu.",
        karir: "Mediator, Jurnalis, Aktivis, Chef."
    }
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

function generateCertificateID() {
    return `MP/${new Date().getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}`;
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
    document.getElementById('cert-relationship').textContent = data.relationship || "Bangun harmoni melalui komunikasi yang tepat.";
    document.getElementById('cert-communication').textContent = data.communication;
    document.getElementById('cert-study').textContent = data.study;
    document.getElementById('cert-positif').textContent = data.positif;
    document.getElementById('cert-negatif').textContent = data.negatif;
    document.getElementById('cert-karir').textContent = data.karir;
    document.getElementById('cert-date').textContent = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    document.getElementById('cert-id').textContent = generateCertificateID();
}

// PDF DOWNLOAD (LOCKED TO 1080x740)
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
            windowWidth: 1080,
            width: 1080,
            height: 740
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape', compress: true },
        pagebreak: { mode: 'avoid-all' }
    };
    html2pdf().set(opt).from(el).save().then(() => el.style.display = 'none');
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
