/**
 * RE-SYNCHRONIZED SCRIPT MINDPRINT - ARAYA CONSULTING
 * Fokus: Integrasi Pedoman Karakteristik & Fix Tampilan Sertifikat
 */

const mindprintDescriptions = {
    1: { 
        title: "Si Praktisi Reflektif (The Discipline Specialist)", 
        intisari: "Sosok paling membumi yang lebih suka bertindak daripada berwacana. Memiliki ketelitian tinggi, stamina fisik kuat, dan sangat mandiri dalam bekerja.", 
        successHabit: "Mantra: 'Berkeringat dan Menabung'. Fokus pada spesialisasi dan tekuni satu bidang sampai menjadi ahli (specialist).", 
        relationship: "Mencari kestabilan jangka panjang dan bukti kesetiaan nyata.", 
        communication: "To-the-point, singkat, dan berbasis fakta. Tidak suka basa-basi panjang.", 
        study: "Metode menghafal dan pengulangan. Harus melihat contoh nyata (visual) dan langsung praktik (hands-on).", 
        positif: "Memori tajam, tangguh, disiplin tinggi, praktis.", 
        negatif: "Terlalu kaku, materialistis, kurang spontan.", 
        karir: "Akuntan, Manajer Operasional, Atlet, Teknisi." 
    },
    2: { 
        title: "Si Praktisi Ekspresif (The Dynamic Performer)", 
        intisari: "Pemain utama yang lincah di panggung aksi. Energinya dipicu tantangan luar dan interaksi sosial. Sangat gesit dan kompetitif.", 
        successHabit: "Mantra: 'Tantangan adalah Energi'. Sukses dalam lingkungan kompetitif dengan target atau kuota yang jelas.", 
        relationship: "Senang diajak bertualang dan menghargai hadiah fisik.", 
        communication: "Ekspresif, bahasa tubuh kuat, dan antusias tentang hasil nyata.", 
        study: "Praktik lapangan dan belajar kelompok. Perlu terjun langsung untuk mencoba.", 
        positif: "Lincah, cepat, mahir teknis, sportif.", 
        negatif: "Cepat bosan, boros, terburu-buru.", 
        karir: "Sales/Marketing, Chef, Pilot, Polisi/Militer." 
    },
    3: { 
        title: "Si Konseptor Reflektif (The Master Strategist)", 
        intisari: "Individu paling mandiri dan mendalam secara intelektual. Sangat logis, objektif, dan perfeksionis dalam hal kebenaran data.", 
        successHabit: "Mantra: 'Logika dan Otoritas'. Terus mengasah otak dengan ilmu baru (ta'allum) agar posisi tawar tetap tinggi.", 
        relationship: "Eksklusif dalam memilih teman dan menghargai privasi pikiran.", 
        communication: "Formal, data-driven, dan argumentatif. Gunakan data, bukan perasaan.", 
        study: "Butuh skema, struktur (flowchart), dan waktu untuk analisis mandiri.", 
        positif: "Analisis mendalam, mandiri, penjaga kualitas.", 
        negatif: "Terlalu kritis, sulit kerja di tim berantakan, kurang empati.", 
        karir: "Programmer, Ilmuwan, Peneliti, Manajer Produksi." 
    },
    4: { 
        title: "Si Konseptor Ekspresif (The Great Manager)", 
        intisari: "Sosok 'Komandan' yang lahir untuk memimpin. Ahli dalam mengatur, mengelola orang lain, dan membangun struktur organisasi yang luas.", 
        successHabit: "Mantra: 'Otoritas dan Ekspansi'. Sukses jika diberi tanggung jawab besar mengelola banyak orang dan melipatgandakan aset.", 
        relationship: "Mencari pasangan yang mendukung status sosial dan karir.", 
        communication: "Lugas, memerintah namun logis, dan menghargai struktur sistematis.", 
        study: "Diskusi terstruktur, menjadi pengajar, dan bedah studi kasus bisnis.", 
        positif: "Tegas, berwibawa, organisatoris, manajerial hebat.", 
        negatif: "Dominan/Otoriter, kurang sabar, kaku pada hirarki.", 
        karir: "CEO/Direktur, Manajer Proyek, Politisi, Hakim." 
    },
    5: { 
        title: "Si Kreatif Reflektif (The Quality Visionary)", 
        intisari: "Pemikir abstrak yang mementingkan kualitas dan orisinalitas ide. Memiliki dunia imajinasi luas yang melampaui zaman.", 
        successHabit: "Mantra: 'Kualitas dan Ilmu'. Kuncinya adalah 'Inovasi atau Mati'. Harus berani membumikan ide agar dinikmati orang.", 
        relationship: "Sangat selektif dalam memilih lingkungan dan menghargai privasi.", 
        communication: "Puitis, penuh simbol, filosofis, dan selektif memilih lawan bicara.", 
        study: "Mind mapping, analogi, metafora, dan membaca literatur mendalam.", 
        positif: "Visioner, perfeksionis ide, abstraksi kuat.", 
        negatif: "Eksklusif, terlalu idealis, skeptis.", 
        karir: "Penulis, Arsitek, Perancang Strategi, Ilmuwan." 
    },
    6: { 
        title: "Si Kreatif Ekspresif (The Trendsetter & Entrepreneur)", 
        intisari: "Sosok paling optimis dan antusias. Tajam melihat peluang uang (money making sense) dan pandai menularkan visi kepada tim.", 
        successHabit: "Mantra: 'Inovasi dan Investasi'. Networking dan berani gagal. Perlu melatih ketekunan menyelesaikan proyek.", 
        relationship: "Membutuhkan dukungan terhadap mimpi besar dan ide kreatifnya.", 
        communication: "Ekspresif, penuh semangat, dan persuasif dengan analogi masa depan.", 
        study: "Brainstorming bebas dan visualisasi gambar (sketsa/proyektor).", 
        positif: "Inovatif, multitalenta, penyebar antusiasme.", 
        negatif: "Kurang fokus, kurang detail, risiko tanpa perhitungan.", 
        karir: "Pengusaha, Marketing, Desainer, Investor." 
    },
    7: { 
        title: "Si Empati Reflektif (The Principled Soul)", 
        intisari: "Pribadi idealis yang digerakkan oleh 'Hati'. Memiliki inner power kuat, sangat setia pada janji, prinsip hidup, dan makna pekerjaan.", 
        successHabit: "Mantra: 'Cinta dan Keyakinan'. Fokus pada pelayanan dan pembangunan karakter. Melatih ketegasan profesional.", 
        relationship: "Mencari kesetiaan murni dan koneksi jiwa (soulmate).", 
        communication: "Lembut, mendalam, tulus, dan menjaga perasaan lawan bicara.", 
        study: "Sentuhan emosional, audio-mood, dan harmoni lingkungan belajar.", 
        positif: "Integritas, loyalitas, peka rasa, pembawa ketenangan.", 
        negatif: "Mudah tersinggung (baper), tertutup, subjektif.", 
        karir: "Psikolog, Guru/Dosen, Aktivis Kemanusiaan, Coach." 
    },
    8: { 
        title: "Si Empati Ekspresif (The Charismatic Leader)", 
        intisari: "Sosok 'Magnet Sosial' dengan kemampuan persuasi luar biasa. Ahli memahami psikologi massa dan memotivasi orang lain.", 
        successHabit: "Mantra: 'Pengaruh dan Cinta'. Sukses melalui popularitas dan relasi. Melatih kemandirian agar tidak haus pujian.", 
        relationship: "Membutuhkan apresiasi verbal dan pengakuan emosional yang hangat.", 
        communication: "Hangat, persuasif, dan mahir menggunakan intonasi emosi.", 
        study: "Diskusi & Tanya Jawab, mengajarkan kembali, dan audio-visual.", 
        positif: "Kharisma tinggi, pandai memotivasi, networking luas.", 
        negatif: "Haus pengakuan, manipulatif, mudah terpengaruh.", 
        karir: "Politisi, Motivator, Public Relations, Trainer." 
    },
    9: { 
        title: "Si Adaptif (The Responsive Generalist)", 
        intisari: "Sosok responsif, serba bisa, dan cinta damai. 'Jembatan' yang menghubungkan berbagai pilar karena sifat fleksibelnya.", 
        successHabit: "Mantra: 'Ketenangan dan Kebermanfaatan'. Melatih ketuntasan (finishing) agar pekerjaan tidak hanya cepat di awal.", 
        relationship: "Sangat tulus, tidak suka konflik, dan mencari kedamaian.", 
        communication: "Spontan, lugas, namun santun. Menghindari perdebatan panjang.", 
        study: "Suasana tenang (relaksasi), ringkasan gambar besar, dan belajar sambil melakukan.", 
        positif: "Cepat belajar, responsif, mediator hebat, rela berkorban.", 
        negatif: "Sulit fokus prioritas, trauma konflik, mudah terdistraksi.", 
        karir: "Pekerja Sosial, Seniman Multitalenta, GA, Tenaga Medis." 
    }
};

const fingers = ["ibu jari", "telunjuk", "tengah", "manis", "kelingking"];
let currentFingerIndex = 0;
let userName = "";
let birthDate = "";
let isScanning = false;

// 1. INITIALIZATION
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

// 2. SCANNING LOGIC
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

// 3. SHOW RESULTS (PUSH DATA TO HTML)
function showResult() {
    document.getElementById('scan-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    const resNum = calculateNumerology(birthDate);
    const data = mindprintDescriptions[resNum];

    // Info Layar
    document.getElementById('result-title').textContent = data.title;
    document.getElementById('result-description').textContent = data.intisari;

    // Data Sertifikat (PENTING: Gunakan ID sesuai HTML Terakhir)
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
    
    // Tanggal & ID Unik
    const now = new Date();
    document.getElementById('cert-date').textContent = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const randomId = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('cert-id').textContent = `MP/${now.getFullYear()}/${randomId}`;
}

// 4. PDF DOWNLOAD (STABLE PIXEL MODE)
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
            windowWidth: 1100, // Mengikuti lebar CSS template
            windowHeight: 780,
            width: 1100,
            height: 780,
            scrollX: 0,
            scrollY: 0
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape', compress: true }
    };

    html2pdf().set(opt).from(el).save().then(() => {
        el.style.display = 'none';
    });
});

// 5. FORM SUBMIT
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
