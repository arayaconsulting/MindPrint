/**
 * FINAL SYNCHRONIZED SCRIPT - ARAYA CONSULTING
 * Sinkronisasi: Buku Pedoman MindPrint & Fix Sertifikat (Nama, ID, Founder)
 */

const mindprintDescriptions = {
    1: { 
        title: "Si Praktisi Reflektif", 
        intisari: "Sosok paling membumi yang lebih suka bertindak daripada berwacana. Memiliki ketelitian tinggi, stamina fisik kuat, dan kepatuhan pada aturan. Jagonya pekerjaan yang membutuhkan detail visual luar biasa.", 
        successHabit: "Mantra: 'Berkeringat dan Menabung'. Fokus pada spesialisasi, tekuni satu bidang sampai ahli, dan lakukan aktivitas fisik rutin.", 
        relationship: "Membangun kepercayaan melalui konsistensi dan mencari kestabilan jangka panjang.", 
        communication: "To-the-point, singkat, berbasis fakta, dan tidak suka basa-basi panjang.", 
        study: "Metode Menghafal & Pengulangan. Juara dalam menghafal teks atau urutan prosedur secara mandiri.", 
        positif: "Memori tajam, tangguh, disiplin tinggi, praktis.", 
        negatif: "Terlalu kaku, materialistis, kurang spontan.", 
        karir: "Akuntan, Manajer Operasional, Atlet, Teknisi, Perbankan." 
    },
    2: { 
        title: "Si Praktisi Ekspresif", 
        intisari: "Pemain utama yang paling lincah. Energinya dipicu tantangan luar dan interaksi sosial. Sangat gesit, kompetitif, dan menikmati hidup secara maksimal.", 
        successHabit: "Mantra: 'Tantangan adalah Energi'. Sukses dalam lingkungan kompetitif dengan target atau kuota yang jelas.", 
        relationship: "Mudah bergaul, membawa suasana ceria, dan menghargai hadiah fisik.", 
        communication: "Ekspresif, menggunakan bahasa tubuh kuat, dan antusias tentang hasil nyata.", 
        study: "Praktik lapangan dan belajar kelompok. Perlu terjun langsung untuk mencoba daripada membaca buku.", 
        positif: "Lincah, cepat, mahir teknis, sportif.", 
        negatif: "Cepat bosan, boros, terburu-buru.", 
        karir: "Sales/Marketing, Chef, Pilot, Polisi/Militer." 
    },
    3: { 
        title: "Si Konseptor Reflektif", 
        intisari: "Tipe paling mandiri dan mendalam secara intelektual. Sangat logis, objektif, dan perfeksionis dalam hal kebenaran data melalui filter logika.", 
        successHabit: "Mantra: 'Logika dan Otoritas'. Asah keahlian teknis dan terus belajar ilmu baru (ta'allum) agar posisi tawar tetap tinggi.", 
        relationship: "Eksklusif dalam memilih teman dan menghargai privasi pikiran.", 
        communication: "Formal, data-driven, dan argumentatif. Gunakan data, bukan perasaan.", 
        study: "Butuh skema (tabel/flowchart) dan waktu untuk analisis mandiri (studi literatur).", 
        positif: "Analisis mendalam, mandiri, penjaga kualitas, objektif.", 
        negatif: "Terlalu kritis, sulit kerja di tim berantakan, kurang empati.", 
        karir: "Programmer, Ilmuwan, Konsultan Pajak, Peneliti, Manajer Produksi." 
    },
    4: { 
        title: "Si Konseptor Ekspresif", 
        intisari: "Sosok 'Komandan' yang lahir untuk memimpin. Sangat suka mengatur, membangun struktur organisasi luas, dan berorientasi pada target efisiensi.", 
        successHabit: "Mantra: 'Otoritas dan Ekspansi'. Perluas jaringan dan kembangkan kemampuan melipatgandakan aset serta SDM.", 
        relationship: "Tegas, berwibawa, namun terkadang kaku pada hirarki jabatan.", 
        communication: "Lugas, memerintah namun logis, dan menghargai struktur bicara sistematis.", 
        study: "Diskusi terstruktur, menjadi pengajar bagi orang lain, dan bedah studi kasus bisnis.", 
        positif: "Manajerial hebat, tegas, berwibawa, organisatoris.", 
        negatif: "Otoriter, kurang sabar, kaku pada hirarki.", 
        karir: "CEO/Direktur, Manajer Proyek, Politisi, Hakim, Pilot." 
    },
    5: { 
        title: "Si Kreatif Reflektif", 
        intisari: "Pemikir abstrak yang mementingkan kualitas dan kesempurnaan ide. Sangat visioner melihat tren masa depan saat orang lain belum memikirkannya.", 
        successHabit: "Mantra: 'Kualitas dan Ilmu'. Kuncinya adalah 'Inovasi atau Mati'. Berani membumikan ide agar dinikmati orang banyak.", 
        relationship: "Tenang di luar, namun memiliki imajinasi luas. Cenderung selektif dalam memilih lawan bicara.", 
        communication: "Puitis, penuh simbol, filosofis, dan selektif memilih lawan bicara.", 
        study: "Peta konsep (mind mapping) dan menggunakan analogi atau metafora.", 
        positif: "Visioner, perfeksionis ide, abstraksi kuat, fokus ilmu.", 
        negatif: "Eksklusif, terlalu idealis, skeptis.", 
        karir: "Penulis, Arsitek, Perancang Strategi, Seniman, Ilmuwan." 
    },
    6: { 
        title: "Si Kreatif Ekspresif", 
        intisari: "Trendsetter yang paling optimis dan antusias. Tajam melihat peluang keuntungan (money making sense) dan pandai menciptakan cara baru.", 
        successHabit: "Mantra: 'Inovasi dan Investasi'. Networking dan berani gagal. Latih ketekunan menuntaskan proyek sebelum pindah ke ide lain.", 
        relationship: "Penyebar antusiasme yang hebat dalam menularkan visi kepada tim.", 
        communication: "Ekspresif, penuh semangat, dan persuasif dengan analogi masa depan.", 
        study: "Brainstorming bebas dan visualisasi gambar (sketsa) untuk menggambarkan ide besar.", 
        positif: "Intuisi bisnis tajam, inovatif, multitalenta.", 
        negatif: "Kurang fokus, kurang detail, risiko tanpa perhitungan.", 
        karir: "Pengusaha, Marketing, Desainer, Sutradara, Investor." 
    },
    7: { 
        title: "Si Empati Reflektif", 
        intisari: "Pribadi idealis yang digerakkan oleh 'Hati'. Memiliki integritas dan loyalitas tinggi. Pembawa ketenangan dan penyejuk dalam tim.", 
        successHabit: "Mantra: 'Cinta dan Keyakinan'. Fokus pada pelayanan dan pembangunan karakter. Latih ketegasan agar perasaan tidak menghalangi profesionalitas.", 
        relationship: "Mencari kesetiaan murni dan koneksi jiwa (soulmate). Sangat menjaga perasaan pasangan.", 
        communication: "Lembut, mendalam, tulus, dan menjaga perasaan lawan bicara.", 
        study: "Sentuhan emosional (suka pengajarnya) dan belajar dalam suasana yang nyaman/harmoni.", 
        positif: "Integritas, loyalitas, peka rasa, pembawa ketenangan.", 
        negatif: "Mudah tersinggung (baper), tertutup, subjektif.", 
        karir: "Psikolog, Guru/Dosen, Konselor, Aktivis Kemanusiaan." 
    },
    8: { 
        title: "Si Empati Ekspresif", 
        intisari: "Magnet sosial dengan kemampuan persuasi luar biasa. Ahli memahami psikologi massa dan memotivasi orang lain melalui kharisma alaminya.", 
        successHabit: "Mantra: 'Pengaruh dan Cinta'. Sukses melalui popularitas dan relasi luas. Latih kemandirian agar tidak haus pujian.", 
        relationship: "Sangat antusias saat berada di tengah banyak orang dan membutuhkan pengakuan emosional.", 
        communication: "Hangat, persuasif, dan mahir menggunakan intonasi untuk menyentuh emosi.", 
        study: "Diskusi & Tanya Jawab. Semakin banyak bicara, pemahaman semakin dalam.", 
        positif: "Persuasif hebat, kharisma tinggi, networking luas.", 
        negatif: "Haus pengakuan, manipulatif, mudah terpengaruh.", 
        karir: "Politisi, Motivator, Public Relations, Sales Manager." 
    },
    9: { 
        title: "Si Adaptif", 
        intisari: "Generalis yang paling responsif dan serba bisa. Sosok jembatan yang cinta damai dan sigap merespons setiap perubahan secara naluriah.", 
        successHabit: "Mantra: 'Ketenangan dan Kebermanfaatan'. Melatih ketuntasan (finishing) kerja agar tidak hanya cepat di awal.", 
        relationship: "Sangat tulus, tidak suka konflik, dan mencari kedamaian bersama.", 
        communication: "Spontan, lugas, namun tetap santun. Menghindari perdebatan panjang.", 
        study: "Suasana tenang (relaksasi) melalui ringkasan atau gambaran besar (big picture).", 
        positif: "Cepat belajar, responsif, mediator hebat, rela berkorban.", 
        negatif: "Sulit fokus prioritas, trauma konflik, mudah terdistraksi.", 
        karir: "Pekerja Sosial, Seniman Multitalenta, GA, Tenaga Medis Darurat." 
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

    // Data Sertifikat (MENGISI DATA NAMA, ID, DAN FOUNDER)
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
    
    // TANGGAL & ID SERTIFIKAT
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
            windowWidth: 1100,
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
