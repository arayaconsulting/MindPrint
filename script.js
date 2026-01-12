/**
 * RE-SYNCHRONIZED SCRIPT MINDPRINT - ARAYA CONSULTING
 * SINKRONISASI BUKU PEDOMAN & RESOLUSI IPAD
 */
const mindprintDescriptions = {
    1: { 
        title: "Si Praktisi Reflektif", 
        intisari: "Sosok paling membumi yang lebih suka bertindak daripada berwacana. Memiliki ketelitian tinggi, stamina fisik kuat, dan kepatuhan pada aturan. Jagonya pekerjaan yang membutuhkan detail visual luar biasa.", 
        successHabit: "Mantra: 'Berkeringat dan Menabung'. Fokus pada spesialisasi, tekuni satu bidang sampai ahli (specialist).", 
        relationship: "Membangun kepercayaan melalui konsistensi dan mencari kestabilan jangka panjang.", 
        communication: "To-the-point, singkat, berbasis fakta, dan tidak suka basa-basi panjang.", 
        study: "Metode Menghafal & Pengulangan. Juara dalam menghafal teks atau urutan prosedur secara mandiri.", 
        positif: "Memori tajam, tangguh, disiplin tinggi, praktis.", 
        negatif: "Terlalu kaku, materialistis, kurang spontan.", 
        karir: "Akuntan, Manajer Operasional, Atlet, Teknisi." 
    },
    2: { 
        title: "Si Praktisi Ekspresif", 
        intisari: "Pemain utama yang paling lincah. Energinya dipicu tantangan luar dan interaksi sosial. Sangat gesit, kompetitif, dan menikmati hidup secara maksimal.", 
        successHabit: "Mantra: 'Tantangan adalah Energi'. Sukses dalam lingkungan kompetitif dengan target atau kuota jelas.", 
        relationship: "Mudah bergaul, membawa suasana ceria, dan menghargai hadiah fisik.", 
        communication: "Ekspresif, menggunakan bahasa tubuh kuat, dan antusias tentang hasil nyata.", 
        study: "Praktik lapangan dan belajar kelompok. Perlu terjun langsung untuk mencoba.", 
        positif: "Lincah, cepat, mahir teknis, sportif.", 
        negatif: "Cepat bosan, boros, terburu-buru.", 
        karir: "Sales/Marketing, Chef, Pilot, Polisi/Militer." 
    },
    3: { 
        title: "Si Konseptor Reflektif", 
        intisari: "Tipe paling mandiri dan mendalam secara intelektual. Sangat logis, objektif, dan perfeksionis dalam hal data melalui filter logika.", 
        successHabit: "Mantra: 'Logika dan Otoritas'. Asah keahlian teknis dan terus belajar ilmu baru (ta'allum).", 
        relationship: "Eksklusif dalam memilih teman dan menghargai privasi pikiran.", 
        communication: "Formal, data-driven, dan argumentatif. Gunakan data, bukan perasaan.", 
        study: "Butuh skema (flowchart) dan waktu untuk analisis mandiri melalui studi literatur.", 
        positif: "Analisis mendalam, mandiri, penjaga kualitas, objektif.", 
        negatif: "Terlalu kritis, sulit kerja di tim berantakan, kurang empati.", 
        karir: "Programmer, Ilmuwan, Konsultan Pajak, Peneliti." 
    },
    4: { 
        title: "Si Konseptor Ekspresif", 
        intisari: "Sosok 'Komandan' yang lahir untuk memimpin. Sangat suka mengatur, membangun struktur organisasi luas, dan berorientasi pada target efisiensi.", 
        successHabit: "Mantra: 'Otoritas dan Ekspansi'. Melatih kemampuan melipatgandakan aset dan SDM.", 
        relationship: "Mencari pasangan yang mendukung status sosial dan karir.", 
        communication: "Lugas, memerintah namun logis, dan menghargai struktur sistematis.", 
        study: "Diskusi terstruktur, menjadi pengajar bagi orang lain, dan bedah studi kasus bisnis.", 
        positif: "Manajerial hebat, tegas, berwibawa, organisatoris.", 
        negatif: "Dominan/Otoriter, kurang sabar, kaku pada hirarki.", 
        karir: "CEO/Direktur, Manajer Proyek, Politisi, Hakim." 
    },
    5: { 
        title: "Si Kreatif Reflektif", 
        intisari: "Pemikir abstrak yang mementingkan kualitas dan kesempurnaan ide. Sangat visioner melihat tren masa depan saat orang lain belum memikirkannya.", 
        successHabit: "Mantra: 'Kualitas dan Ilmu'. Kuncinya adalah 'Inovasi atau Mati'. Berani membumikan ide.", 
        relationship: "Tenang di luar, imajinasi luas, selektif memilih lawan bicara.", 
        communication: "Puitis, penuh simbol, filosofis, dan selektif dalam memilih teman.", 
        study: "Peta konsep (mind mapping) dan menggunakan analogi atau metafora.", 
        positif: "Visioner jangka panjang, perfeksionis ide, abstraksi kuat.", 
        negatif: "Eksklusif, terlalu idealis, skeptis.", 
        karir: "Penulis, Arsitek, Perancang Strategi, Ilmuwan." 
    },
    6: { 
        title: "Si Kreatif Ekspresif", 
        intisari: "Trendsetter paling optimis dan antusias. Tajam melihat peluang keuntungan dan pandai menularkan visi kepada tim agar percaya pada mimpi.", 
        successHabit: "Mantra: 'Inovasi dan Investasi'. Networking dan berani gagal. Latih ketekunan menuntaskan proyek.", 
        relationship: "Butuh dukungan terhadap mimpi besar dan ide kreatifnya.", 
        communication: "Ekspresif, penuh semangat, dan persuasif dengan analogi masa depan.", 
        study: "Brainstorming bebas dan visualisasi gambar (sketsa/proyektor).", 
        positif: "Intuisi bisnis tajam, inovatif, multitalenta.", 
        negatif: "Kurang fokus, kurang detail, risiko tanpa perhitungan.", 
        karir: "Pengusaha, Marketing, Desainer, Investor." 
    },
    7: { 
        title: "Si Empati Reflektif", 
        intisari: "Pribadi idealis yang digerakkan oleh 'Hati'. Memiliki integritas tinggi, pembawa ketenangan, dan fokus pada makna ibadah dalam pekerjaan.", 
        successHabit: "Mantra: 'Cinta dan Keyakinan'. Fokus pada pelayanan dan pembangunan karakter.", 
        relationship: "Mencari kesetiaan murni dan koneksi jiwa (soulmate).", 
        communication: "Lembut, mendalam, tulus, dan menjaga perasaan lawan bicara.", 
        study: "Sentuhan emosional (suka pengajarnya) dan belajar dalam suasana harmoni.", 
        positif: "Integritas, loyalitas, peka rasa, pembawa ketenangan.", 
        negatif: "Mudah tersinggung (baper), tertutup, subjektif.", 
        karir: "Psikolog, Guru/Dosen, Aktivis Kemanusiaan, Coach." 
    },
    8: { 
        title: "Si Empati Ekspresif", 
        intisari: "Magnet sosial dengan kemampuan persuasi luar biasa. Ahli memahami psikologi massa dan memotivasi orang lain melalui kharisma alaminya.", 
        successHabit: "Mantra: 'Pengaruh dan Cinta'. Sukses melalui popularitas dan relasi luas.", 
        relationship: "Membutuhkan apresiasi verbal dan pengakuan emosional hangat.", 
        communication: "Hangat, persuasif, mahir menggunakan intonasi suara emosi.", 
        study: "Diskusi & Tanya Jawab. Semakin banyak bicara, pemahaman semakin dalam.", 
        positif: "Kharisma tinggi, pandai memotivasi, networking luas.", 
        negatif: "Haus pengakuan, manipulatif, mudah terpengaruh.", 
        karir: "Politisi, Motivator, PR, Trainer." 
    },
    9: { 
        title: "Si Adaptif", 
        intisari: "Generalis responsif, serba bisa, dan cinta damai. 'Jembatan' fleksibel yang mampu menghubungkan berbagai pilar lainnya secara naluriah.", 
        successHabit: "Mantra: 'Ketenangan dan Kebermanfaatan'. Melatih ketuntasan (finishing) kerja.", 
        relationship: "Sangat tulus, tidak suka konflik, dan mencari kedamaian.", 
        communication: "Spontan, lugas, santun, dan menghindari perdebatan panjang.", 
        study: "Suasana tenang melalui ringkasan atau gambaran besar (big picture).", 
        positif: "Cepat belajar, responsif, mediator hebat, rela berkorban.", 
        negatif: "Sulit fokus prioritas, trauma konflik, mudah terdistraksi.", 
        karir: "Pekerja Sosial, Seniman Multitalenta, GA, Tenaga Medis." 
    }
};

const fingers = ["ibu jari", "telunjuk", "tengah", "manis", "kelingking"];
let currentFingerIndex = 0, userName = "", birthDate = "", isScanning = false;

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

function showResult() {
    document.getElementById('scan-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    const resNum = calculateNumerology(birthDate);
    const data = mindprintDescriptions[resNum];

    document.getElementById('result-title').textContent = data.title;
    document.getElementById('result-description').textContent = data.intisari;

    // ISI DATA SERTIFIKAT (SINKRON DENGAN ID HTML)
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
    const randomId = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('cert-id').textContent = `MP/${now.getFullYear()}/${randomId}`;
}

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
            windowHeight: 740,
            width: 1080,
            height: 740,
            scrollX: 0, scrollY: 0
        },
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
populateDateFields();
