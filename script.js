/**
 * FINAL SCRIPT MINDPRINT - SINKRONISASI TOTAL
 */
const mindprintDescriptions = {
    1: { 
        title: "Si Praktisi Reflektif", 
        intisari: "Sosok paling membumi yang lebih suka bertindak daripada berwacana. Memiliki ketelitian tinggi, stamina fisik kuat, dan kepatuhan pada aturan. Jagonya pekerjaan yang membutuhkan detail visual luar biasa.", 
        successHabit: "Fokus pada spesialisasi. Jangan menjadi 'Palugada'. Tekuni satu bidang sampai ahli dan pastikan aktivitas fisik rutin.", 
        relationship: "Membangun kepercayaan melalui konsistensi dan mencari kestabilan jangka panjang.", 
        communication: "To-the-point, singkat, berbasis fakta, dan tidak suka basa-basi panjang.", 
        study: "Metode Menghafal & Pengulangan. Juara dalam menghafal teks atau urutan prosedur secara mandiri.", 
        positif: "Memori tajam, tangguh, disiplin.", 
        negatif: "Terlalu kaku, materialistis.", 
        karir: "Akuntan, Manajer Operasional, Atlet." 
    },
    2: { 
        title: "Si Praktisi Ekspresif", 
        intisari: "Pemain utama yang paling lincah di panggung aksi. Energinya dipicu tantangan luar dan interaksi sosial. Sangat gesit, kompetitif, dan menikmati hidup secara maksimal.", 
        successHabit: "Skala dan Persaingan. Sukses dalam lingkungan kompetitif dengan target atau kuota yang jelas.", 
        relationship: "Mudah bergaul, membawa suasana ceria, dan menghargai hadiah fisik.", 
        communication: "Ekspresif, menggunakan bahasa tubuh kuat, dan antusias tentang hasil nyata.", 
        study: "Praktik lapangan dan belajar kelompok. Perlu terjun langsung untuk mencoba sendiri.", 
        positif: "Lincah, responsif, sportif.", 
        negatif: "Cepat bosan, boros, terburu-buru.", 
        karir: "Marketing, Chef, Pilot, Polisi." 
    },
    3: { 
        title: "Si Konseptor Reflektif", 
        intisari: "Tipe paling mandiri dan mendalam secara intelektual. Sangat logis, objektif, dan perfeksionis dalam hal kebenaran data melalui filter logika.", 
        successHabit: "Asah keahlian teknis dan otoritas. Terus mengasah otak dengan ilmu baru agar posisi tawar tetap tinggi.", 
        relationship: "Eksklusif dalam memilih teman dan menghargai privasi pikiran.", 
        communication: "Formal, data-driven, dan argumentatif. Gunakan data, bukan perasaan.", 
        study: "Butuh skema (tabel/flowchart) dan waktu untuk analisis mandiri (studi literatur).", 
        positif: "Analisis mendalam, mandiri, objektif.", 
        negatif: "Terlalu kritis, kurang empati.", 
        karir: "Programmer, Peneliti, Konsultan Pajak." 
    },
    4: { 
        title: "Si Konseptor Ekspresif", 
        intisari: "Sosok 'Komandan' yang lahir untuk memimpin. Sangat suka mengatur, membangun struktur organisasi luas, dan berorientasi pada target efisiensi.", 
        successHabit: "Memperluas jaringan dan kekuasaan. Melatih kemampuan melipatgandakan aset dan sumber daya manusia.", 
        relationship: "Mendukung status sosial dan karir dalam hubungan.", 
        communication: "Lugas, memerintah namun logis, dan menghargai struktur bicara sistematis.", 
        study: "Diskusi terstruktur, menjadi pengajar bagi orang lain, dan bedah studi kasus bisnis.", 
        positif: "Manajerial hebat, tegas, berwibawa.", 
        negatif: "Dominan, otoriter, kurang sabar.", 
        karir: "CEO, Direktur, Manajer Proyek, Politisi." 
    },
    5: { 
        title: "Si Kreatif Reflektif", 
        intisari: "Pemikir abstrak mementingkan kualitas dan kesempurnaan ide. Sangat visioner melihat tren masa depan saat orang lain belum memikirkannya.", 
        successHabit: "Menjadi ahli di bidang unik. Inovasi atau Mati. Berani membumikan ide agar dinikmati orang banyak.", 
        relationship: "Tenang di luar, imajinasi luas, selektif memilih lawan bicara.", 
        communication: "Puitis, penuh simbol, filosofis, dan selektif memilih lawan bicara.", 
        study: "Peta konsep (mind mapping) dan menggunakan perumpamaan atau analogi.", 
        positif: "Visioner, perfeksionis ide, abstrak.", 
        negatif: "Eksklusif, terlalu idealis, skeptis.", 
        karir: "Arsitek, Penulis, Perancang Strategi." 
    },
    6: { 
        title: "Si Kreatif Ekspresif", 
        intisari: "Trendsetter paling optimis dan antusias. Tajam melihat peluang keuntungan dan pandai menularkan visi kepada tim agar percaya pada mimpi.", 
        successHabit: "Networking dan berani gagal. Latih ketekunan menuntaskan proyek sebelum pindah ke ide lain.", 
        relationship: "Membutuhkan dukungan terhadap mimpi besar dan ide kreatifnya.", 
        communication: "Ekspresif, penuh semangat, dan persuasif dengan analogi masa depan.", 
        study: "Brainstorming bebas dan visualisasi gambar untuk menggambarkan ide-ide besar.", 
        positif: "Inovatif, multitalenta, antusias.", 
        negatif: "Kurang fokus, detail, risiko tinggi.", 
        karir: "Pengusaha, Investor, Marketing, Desainer." 
    },
    7: { 
        title: "Si Empati Reflektif", 
        intisari: "Pribadi idealis yang digerakkan oleh 'Hati'. Memiliki integritas tinggi, pembawa ketenangan, dan fokus pada makna ibadah dalam pekerjaan.", 
        successHabit: "Fokus pada pelayanan dan pembangunan karakter. Melatih ketegasan profesional.", 
        relationship: "Mencari kesetiaan murni dan koneksi jiwa (soulmate).", 
        communication: "Lembut, mendalam, tulus, dan sangat menjaga perasaan lawan bicara.", 
        study: "Sentuhan emosional (suka pengajarnya) dan belajar dalam suasana yang nyaman.", 
        positif: "Integritas, loyalitas, peka rasa.", 
        negatif: "Baper, tertutup, subjektif.", 
        karir: "Psikolog, Guru, Aktivis, Coach." 
    },
    8: { 
        title: "Si Empati Ekspresif", 
        intisari: "Magnet sosial dengan kemampuan persuasi luar biasa. Ahli memahami psikologi massa dan memenangkan hati orang lain melalui kharisma alaminya.", 
        successHabit: "Popularitas dan relasi. Melatih kemandirian agar tidak bergantung pada pujian orang lain.", 
        relationship: "Membutuhkan apresiasi verbal dan pengakuan emosional yang hangat.", 
        communication: "Hangat, persuasif, mahir intonasi untuk menyentuh emosi.", 
        study: "Diskusi & Tanya Jawab. Semakin banyak bicara, pemahaman semakin dalam.", 
        positif: "Kharismatik, inspiratif, networking.", 
        negatif: "Haus pengakuan, manipulatif, terpengaruh.", 
        karir: "Politisi, Motivator, PR, Trainer." 
    },
    9: { 
        title: "Si Adaptif", 
        intisari: "Generalis responsif, serba bisa, dan cinta damai. 'Jembatan' fleksibel yang mampu menghubungkan berbagai pilar lainnya secara naluriah.", 
        successHabit: "Ketenangan dan Kebermanfaatan. Melatih ketuntasan (finishing) kerja agar selesai dengan baik.", 
        relationship: "Sangat tulus, tidak suka konflik, dan mencari kedamaian bersama.", 
        communication: "Spontan, lugas, santun, dan menghindari perdebatan panjang.", 
        study: "Belajar dalam suasana relaksasi melalui ringkasan gambar besar (big picture).", 
        positif: "Refleks cepat, responsif, mediator hebat.", 
        negatif: "Sulit fokus, trauma konflik, terdistraksi.", 
        karir: "Pekerja Sosial, Seniman, Medis Darurat." 
    }
};

const fingers = ["ibu jari", "telunjuk", "tengah", "manis", "kelingking"];
let currentFingerIndex = 0, userName = "", birthDate = "", isScanning = false;

// 1. POPULASI TANGGAL (PILIHAN TANGGAL AKAN MUNCUL)
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
    const scanner = document.getElementById('fingerprint-scanner'), text = document.getElementById('scan-text');
    text.textContent = `Memindai ${fingers[currentFingerIndex]}...`;
    scanner.classList.add('scanning');
    setTimeout(() => {
        scanner.classList.remove('scanning');
        isScanning = false;
        if (currentFingerIndex < fingers.length - 1) {
            text.textContent = `${fingers[currentFingerIndex].toUpperCase()} BERHASIL.`;
            document.getElementById('next-finger-button').classList.remove('hidden'); 
        } else {
            text.textContent = "MENGANALISIS MINDPRINT...";
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

// 4. HASIL SERTIFIKAT
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
    
    const now = new Date();
    document.getElementById('cert-date').textContent = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    document.getElementById('cert-id').textContent = `MP/${now.getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}`;
}

// 5. PDF DOWNLOAD (RESOLUSI FIX IPAD)
document.getElementById('download-btn').addEventListener('click', () => {
    const el = document.getElementById('certificate-template');
    el.style.display = 'block';
    const opt = {
        margin: 0,
        filename: `Laporan_MindPrint_${userName}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 2, useCORS: true, logging: false, windowWidth: 1080, windowHeight: 740, width: 1080, height: 740, scrollX: 0, scrollY: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape', compress: true },
        pagebreak: { mode: 'avoid-all' }
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

// WAJIB DIPANGGIL DI AKHIR AGAR DROPDOWN MUNCUL
populateDateFields();
