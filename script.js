/**
 * RE-SYNCHRONIZED FINAL SCRIPT - ARAYA CONSULTING
 * Full Fix: Motivasi, Karir, Dinamika & Dropdown
 */
const mindprintDescriptions = {
    1: { 
        title: "Si Praktisi Reflektif", 
        intisari: "Sosok paling membumi yang didominasi otak kiri bawah dengan kemudi dari dalam. Anda adalah pekerja keras mandiri yang lebih suka bertindak nyata daripada sekadar berwacana, jago dalam pekerjaan yang membutuhkan ketelitian tinggi, stamina fisik kuat, serta kepatuhan mutlak pada aturan.", 
        successHabit: "Fokus pada spesialisasi bidang tertentu dan menjaga aktivitas fisik rutin.", 
        relationship: "Membangun kepercayaan melalui konsistensi dan mencari kestabilan jangka panjang.", 
        communication: "Lugas, singkat, dan berbasis fakta. Tidak menyukai basa-basi.", 
        study: "Metode menghafal dan pengulangan prosedur secara mandiri.", 
        positif: "Memiliki memori tajam, tangguh secara fisik, serta disiplin tinggi.", 
        negatif: "Terlalu kaku, materialistis, serta kurang spontan.", 
        motivasi: "Berikan instruksi jelas, target realistis, serta apresiasi berupa aset materi.",
        karir: "Akuntan, Manajer Operasional, Atlet, Teknisi, Perbankan." 
    },
    2: { 
        title: "Si Praktisi Ekspresif", 
        intisari: "Pemain utama yang sangat lincah di panggung aksi dengan energi yang dipicu tantangan luar. Anda memiliki mesin kecerdasan fisik gesit, kompetitif, serta mampu menikmati hidup secara maksimal.", 
        successHabit: "Sukses dalam lingkungan kompetitif dengan target atau kuota jelas.", 
        relationship: "Mudah bergaul, ceria, dan menghargai hadiah fisik.", 
        communication: "Ekspresif, bahasa tubuh kuat, dan antusias.", 
        study: "Praktik lapangan, belajar kelompok, dan metode peniruan (modelling).", 
        positif: "Sangat lincah, sportif, responsif, serta mahir kemampuan teknis.", 
        negatif: "Cepat bosan, boros, serta sering bertindak terburu-buru.", 
        motivasi: "Berikan tantangan, bonus instan, serta lingkungan kerja dinamis.",
        karir: "Marketing, Chef, Pilot, Polisi, Atlet Profesional." 
    },
    3: { 
        title: "Si Konseptor Reflektif", 
        intisari: "Individu mandiri dan intelektual. Anda adalah sosok logis, objektif, dan perfeksionis di mana segala informasi harus melewati filter logika ketat.", 
        successHabit: "Asah keahlian teknis guna menjaga otoritas dalam sistem.", 
        relationship: "Eksklusif dalam memilih teman dan menghargai privasi pikiran.", 
        communication: "Formal, data-driven, dan argumentatif.", 
        study: "Menganalisis skema besar dan riset mandiri.", 
        positif: "Analisis sangat mendalam, mandiri, serta fokus pada standar.", 
        negatif: "Terlalu kritis, dingin, serta kurang memiliki empati.", 
        motivasi: "Berikan akses ilmu baru, hargai kemandirian, dan libatkan dalam sistem.",
        karir: "Programmer, Ilmuwan, Konsultan, Peneliti, Strategist." 
    },
    4: { 
        title: "Si Konseptor Ekspresif", 
        intisari: "Sosok 'Komandan' yang lahir memimpin. Ahli dalam mengatur strategi, mendelegasikan tugas, dan membangun struktur organisasi yang luas.", 
        successHabit: "Memperluas jaringan kekuasaan dan melipatgandakan aset.", 
        relationship: "Mendukung status sosial dan pencapaian karir.", 
        communication: "Lugas, memerintah namun logis, dan sistematis.", 
        study: "Diskusi terstruktur, menjadi pengajar, dan bedah studi kasus.", 
        positif: "Kemampuan manajerial hebat, tegas, berwibawa, serta organisatoris.", 
        negatif: "Dominan otoriter, kurang sabar, serta kaku pada hirarki.", 
        motivasi: "Berikan otoritas, tanggung jawab memimpin, serta pengakuan jabatan.",
        karir: "CEO, Direktur, Manajer Proyek, Politisi, Hakim." 
    },
    5: { 
        title: "Si Kreatif Reflektif", 
        intisari: "Pemikir abstrak dengan imajinasi luas. Visioner yang mementingkan orisinalitas serta kualitas ide yang melampaui zaman.", 
        successHabit: "Inovasi berkelanjutan dan pendalaman intelektual.", 
        relationship: "Sangat selektif dan menghargai privasi pikiran.", 
        communication: "Puitis, penuh simbol, filosofis, dan selektif.", 
        study: "Mind mapping dan menggunakan perumpamaan atau analogi.", 
        positif: "Visioner jangka panjang, perfeksionis ide, serta abstraksi kuat.", 
        negatif: "Eksklusif menyendiri, terlalu idealis, serta skeptis.", 
        motivasi: "Hargai orisinalitas idenya, berikan waktu dan ruang privat.",
        karir: "Arsitek, Penulis, Strategist, Ilmuwan, Seniman." 
    },
    6: { 
        title: "Si Kreatif Ekspresif", 
        intisari: "Trendsetter optimis dan antusias. Memiliki intuisi bisnis tajam dalam melihat peluang dan menularkan visi kepada tim.", 
        successHabit: "Networking luas dan melatih ketekunan menuntaskan proyek.", 
        relationship: "Membutuhkan dukungan terhadap mimpi besar dan ide kreatif.", 
        communication: "Ekspresif, semangat, dan persuasif dengan analogi masa depan.", 
        study: "Brainstorming bebas dan visualisasi gambar.", 
        positif: "Intuisi bisnis kuat, inovatif, serta penyebar antusiasme.", 
        negatif: "Kurang fokus detail, ceroboh, serta risiko tanpa perhitungan.", 
        motivasi: "Libatkan proyek inovatif, berikan panggung, dan insentif profit.",
        karir: "Pengusaha, Investor, Desainer, Kreator Konten." 
    },
    7: { 
        title: "Si Empati Reflektif", 
        intisari: "Pribadi idealis digerakkan hati. Memiliki integritas tinggi, setia pada janji, dan pembawa ketenangan dalam tim.", 
        successHabit: "Pelayanan dan pembangunan karakter melalui integritas batin.", 
        relationship: "Mencari kesetiaan murni dan koneksi jiwa (soulmate).", 
        communication: "Lembut, mendalam, tulus, dan menjaga perasaan.", 
        study: "Sentuhan emosional dan belajar dalam suasana harmonis.", 
        positif: "Integritas tinggi, loyal, peka rasa, pembawa ketenangan.", 
        negatif: "Mudah tersinggung, tertutup memendam perasaan, serta subjektif.", 
        motivasi: "Sentuh sisi spiritual, berikan harmoni, dan perhatian personal.",
        karir: "Psikolog, Guru, Coach, Aktivis, Pemuka Agama." 
    },
    8: { 
        title: "Si Empati Ekspresif", 
        intisari: "Magnet Sosial berkarisma tinggi. Ahli dalam memahami psikologi massa, persuasi, dan memotivasi orang lain.", 
        successHabit: "Membangun relasi luas tanpa haus akan pujian luar.", 
        relationship: "Membutuhkan apresiasi verbal dan pengakuan hangat.", 
        communication: "Hangat, persuasif, dan mahir menggunakan intonasi.", 
        study: "Diskusi interaktif, tanya jawab, dan mengajarkan kembali.", 
        positif: "Sangat kharismatik, inspiratif, serta networking luas.", 
        negatif: "Haus pengakuan, manipulatif, serta mudah terpengaruh.", 
        motivasi: "Berikan apresiasi publik, jadikan juru bicara, dan dukungan emosional.",
        karir: "Politisi, Motivator, PR, Sales Manager, Presenter." 
    },
    9: { 
        title: "Si Adaptif", 
        intisari: "Generalis responsif dan cinta damai. 'Jembatan' fleksibel yang mampu menghubungkan pilar lain secara naluriah.", 
        successHabit: "Menjaga spiritualitas dan melatih ketuntasan (finishing).", 
        relationship: "Tulus, menghindari konflik, dan pembawa harmoni.", 
        communication: "Spontan, lugas, santun, dan tidak suka debat.", 
        study: "Mempelajari ringkasan gambar besar dalam suasana rileks.", 
        positif: "Refleks sangat cepat, responsif, serta mediator hebat.", 
        negatif: "Sulit fokus prioritas, trauma konflik, serta terdistraksi.", 
        motivasi: "Berikan ketenangan, hindari konflik, dan yakinkan kebermanfaatannya.",
        karir: "Pekerja Sosial, Seniman, Medis, General Affairs." 
    }
};

const fingers = ["ibu jari", "telunjuk", "tengah", "manis", "kelingking"];
let currentFingerIndex = 0, userName = "", birthDate = "", isScanning = false;

// 1. DROPDOWN TANGGAL
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

// 2. LOGIKA NUMEROLOGI
function calculateNumerology(dateString) {
    const digits = dateString.replace(/-/g, '').split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);
    while (sum > 9) sum = String(sum).split('').reduce((acc, d) => acc + parseInt(d), 0);
    return sum || 9;
}

// 3. SCAN JARI
function handleScanStart(e) {
    if (e) e.preventDefault();
    if (isScanning) return;
    isScanning = true;
    const s = document.getElementById('fingerprint-scanner'), t = document.getElementById('scan-text');
    t.textContent = `Memindai ${fingers[currentFingerIndex]}...`;
    s.classList.add('scanning');
    setTimeout(() => {
        s.classList.remove('scanning');
        isScanning = false;
        if (currentFingerIndex < fingers.length - 1) {
            t.textContent = `${fingers[currentFingerIndex].toUpperCase()} BERHASIL.`;
            document.getElementById('next-finger-button').classList.remove('hidden'); 
        } else {
            t.textContent = "MENGANALISIS DATA...";
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

// 4. HASIL (TAMPILAN LAYAR & SERTIFIKAT)
function showResult() {
    document.getElementById('scan-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    const resNum = calculateNumerology(birthDate);
    const data = mindprintDescriptions[resNum];

    // ISI LAYAR
    document.getElementById('result-title').textContent = data.title;
    document.getElementById('screen-intisari').textContent = data.intisari;
    document.getElementById('screen-motivasi').textContent = data.motivasi;
    document.getElementById('screen-karir').textContent = data.karir;

    // ISI SERTIFIKAT
    document.getElementById('cert-name').textContent = userName;
    document.getElementById('cert-result').textContent = data.title;
    document.getElementById('cert-intisari').textContent = data.intisari;
    document.getElementById('cert-motivasi').textContent = data.motivasi; 
    document.getElementById('cert-success').textContent = data.successHabit;
    document.getElementById('cert-relationship').textContent = data.relationship;
    document.getElementById('cert-communication').textContent = data.communication;
    document.getElementById('cert-positif').textContent = data.positif;
    document.getElementById('cert-negatif').textContent = data.negatif;
    document.getElementById('cert-karir').textContent = data.karir;
    
    const now = new Date();
    document.getElementById('cert-date').textContent = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const randomId = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('cert-id').textContent = `MP/${now.getFullYear()}/${randomId}`;
}

// 5. DOWNLOAD PDF
document.getElementById('download-btn').addEventListener('click', () => {
    const el = document.getElementById('certificate-template');
    el.style.display = 'block';
    const opt = {
        margin: 0,
        filename: `Laporan_MindPrint_${userName}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2, useCORS: true, logging: false, windowWidth: 1080, windowHeight: 740, width: 1080, height: 740, scrollX: 0, scrollY: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape', compress: true }
    };
    html2pdf().set(opt).from(el).save().then(() => { el.style.display = 'none'; });
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

// JALANKAN DROPDOWN
populateDateFields();
