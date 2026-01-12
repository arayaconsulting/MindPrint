/**
 * RE-SYNCHRONIZED FINAL SCRIPT - ARAYA CONSULTING
 */
const mindprintDescriptions = {
    1: { 
        title: "Si Praktisi Reflektif", 
        intisari: "Sosok paling membumi yang didominasi otak kiri bawah dengan kemudi dari dalam. Anda pekerja keras mandiri yang lebih suka bertindak nyata daripada berwacana, sangat jago dalam ketelitian tinggi dan kepatuhan mutlak pada aturan.", 
        successHabit: "Fokus pada spesialisasi bidang tertentu dan menjaga aktivitas fisik rutin.", 
        relationship: "Membangun kepercayaan melalui konsistensi dan kestabilan jangka panjang.", 
        communication: "Lugas, singkat, dan berbasis fakta. Tidak menyukai basa-basi panjang.", 
        study: "Metode menghafal dan pengulangan prosedur secara mandiri di tempat tenang.", 
        positif: "Memiliki memori sangat tajam, tangguh secara fisik, serta disiplin tinggi.", 
        negatif: "Cenderung terlalu kaku, materialistis, serta kurang spontan dalam bertindak.", 
        motivasi: "Berikan instruksi yang jelas, target realistis, serta apresiasi berupa aset fisik.", 
        karir: "Akuntan, Manajer Operasional, Atlet, Teknisi, Perbankan." 
    },
    2: { 
        title: "Si Praktisi Ekspresif", 
        intisari: "Pemain utama lincah di panggung aksi dengan energi yang dipicu tantangan luar. Anda memiliki kecerdasan fisik gesit dan kompetitif untuk menjadi nomor satu.", 
        successHabit: "Sukses dalam lingkungan kompetitif dengan target atau kuota yang jelas.", 
        relationship: "Mudah bergaul, membawa suasana ceria, dan menghargai hadiah fisik.", 
        communication: "Ekspresif, bahasa tubuh kuat, dan antusias pada hasil nyata.", 
        study: "Praktik lapangan, belajar kelompok, dan metode peniruan (modelling).", 
        positif: "Sangat lincah, sportif, responsif, serta mahir kemampuan teknis.", 
        negatif: "Mudah cepat merasa bosan, boros, serta sering terburu-buru.", 
        motivasi: "Berikan tantangan kompetitif, bonus instan, serta lingkungan kerja dinamis.", 
        karir: "Marketing, Chef, Pilot, Polisi/Militer, Atlet Profesional." 
    },
    3: { 
        title: "Si Konseptor Reflektif", 
        intisari: "Individu mandiri dan mendalam secara intelektual. Anda sosok sangat logis, objektif, dan perfeksionis di mana informasi harus melewati filter logika ketat.", 
        successHabit: "Asah keahlian teknis dan belajar ilmu baru guna menjaga otoritas sistem.", 
        relationship: "Eksklusif dalam memilih teman dan sangat menghargai privasi pikiran.", 
        communication: "Formal, data-driven, dan argumentatif. Gunakan data konkret untuk meyakinkan.", 
        study: "Menganalisis skema besar, riset mandiri, dan teka-teki logika kompleks.", 
        positif: "Mampu analisis sangat mendalam, mandiri, serta fokus pada standar.", 
        negatif: "Terlalu kritis terhadap orang, dingin, serta kurang memiliki empati.", 
        motivasi: "Berikan akses data/ilmu baru, hargai kemandirian, dan libatkan dalam sistem.", 
        karir: "Programmer, Ilmuwan, Konsultan Pajak, Peneliti, Ahli Strategi." 
    },
    4: { 
        title: "Si Konseptor Ekspresif", 
        intisari: "Sosok 'Komandan' yang lahir memimpin dengan stimulasi energi dunia luar. Anda ahli mengatur strategi, mendelegasikan tugas, dan membangun struktur luas.", 
        successHabit: "Memperluas jaringan kekuasaan dan melatih kemampuan melipatgandakan aset.", 
        relationship: "Mendukung status sosial dan pencapaian karir dalam hubungan.", 
        communication: "Lugas, memerintah namun logis, dan menghargai struktur sistematis.", 
        study: "Diskusi terstruktur, menjadi pengajar, dan bedah studi kasus bisnis.", 
        positif: "Kemampuan manajerial hebat, tegas, berwibawa, serta organisatoris.", 
        negatif: "Cenderung dominan otoriter, kurang sabar, serta kaku pada hirarki.", 
        motivasi: "Berikan otoritas/kekuasaan, tanggung jawab memimpin, serta pengakuan jabatan.", 
        karir: "CEO, Direktur, Manajer Proyek, Politisi, Hakim." 
    },
    5: { 
        title: "Si Kreatif Reflektif", 
        intisari: "Pemikir abstrak dengan imajinasi sangat luas. Anda visioner yang mementingkan orisinalitas ide melampaui zaman melalui konsep mendalam.", 
        successHabit: "Menjadi ahli di bidang unik melalui inovasi dan pendalaman intelektual.", 
        relationship: "Sangat selektif memilih lingkungan sosial dan menghargai privasi.", 
        communication: "Puitis, penuh simbol, filosofis, dan selektif memilih lawan bicara.", 
        study: "Mind mapping, penggunaan analogi, perumpamaan, serta literatur mendalam.", 
        positif: "Sangat visioner jangka panjang, perfeksionis ide, serta abstraksi kuat.", 
        negatif: "Cenderung eksklusif menyendiri, terlalu idealis, serta bersikap skeptis.", 
        motivasi: "Hargai orisinalitas ide, berikan ruang privat, dan dukung visi jangka panjang.", 
        karir: "Arsitek, Penulis, Strategist, Ilmuwan, Seniman Konseptual." 
    },
    6: { 
        title: "Si Kreatif Ekspresif", 
        intisari: "Trendsetter optimis dan antusias dengan energi meledak saat menemukan ide baru. Anda memiliki intuisi bisnis tajam melihat peluang keuntungan.", 
        successHabit: "Membangun networking luas dan melatih ketekunan menuntaskan proyek.", 
        relationship: "Membutuhkan dukungan penuh terhadap mimpi-mimpi besar dan ide kreatif.", 
        communication: "Ekspresif, penuh semangat, dan persuasif dengan analogi masa depan.", 
        study: "Brainstorming bebas, stimulasi visual, dan kisah sukses tokoh inovator.", 
        positif: "Intuisi bisnis kuat, sangat inovatif, multitalenta, serta penyebar semangat.", 
        negatif: "Kurang fokus pada detail, ceroboh, serta berani risiko tanpa perhitungan.", 
        motivasi: "Libatkan proyek inovatif, berikan panggung ide, dan insentif berbasis profit.", 
        karir: "Pengusaha, Investor, Desainer, Kreator Konten, Konsultan Kreatif." 
    },
    7: { 
        title: "Si Empati Reflektif", 
        intisari: "Pribadi idealis digerakkan hati dengan prinsip tidak tergoyahkan. Anda memiliki integritas tinggi, setia pada janji, dan pembawa ketenangan dalam tim.", 
        successHabit: "Fokus pelayanan dan pembangunan karakter melalui integritas batin.", 
        relationship: "Mencari kesetiaan murni dan koneksi jiwa (soulmate) yang mendalam.", 
        communication: "Lembut, mendalam, tulus, dan sangat menjaga perasaan lawan bicara.", 
        study: "Sentuhan emosional, audio-mood, dan belajar dalam suasana harmonis.", 
        positif: "Memiliki integritas tinggi, loyal, sangat peka rasa, pembawa tenang.", 
        negatif: "Mudah tersinggung atau baper, tertutup, serta bersikap subjektif.", 
        motivasi: "Sentuh sisi spiritual, berikan harmoni, dan perhatian personal tulus.", 
        karir: "Psikolog, Guru, Coach, Aktivis Kemanusiaan, Pemuka Agama." 
    },
    8: { 
        title: "Si Empati Ekspresif", 
        intisari: "Magnet Sosial berkarisma tinggi dengan persuasi memikat. Anda ahli memahami psikologi massa dan membangkitkan semangat tim yang jatuh.", 
        successHabit: "Membangun relasi luas dan melatih kemandirian tanpa haus pujian luar.", 
        relationship: "Membutuhkan apresiasi verbal dan pengakuan emosional yang hangat.", 
        communication: "Hangat, persuasif, dan mahir intonasi untuk menyentuh emosi.", 
        study: "Diskusi interaktif, tanya jawab, dan mengajarkan kembali materi.", 
        positif: "Sangat kharismatik, inspiratif, serta kemampuan networking luas.", 
        negatif: "Sangat butuh pengakuan orang, manipulatif, serta mudah terpengaruh.", 
        motivasi: "Berikan apresiasi publik, jadikan juru bicara, dan dukungan emosional.", 
        karir: "Politisi, Motivator, PR, Sales Manager, Presenter." 
    },
    9: { 
        title: "Si Adaptif", 
        intisari: "Generalis responsif yang serba bisa dan mendambakan cinta damai. Anda jembatan fleksibel yang mampu menghubungkan pilar lain secara naluriah.", 
        successHabit: "Menjaga spiritualitas dan melatih ketuntasan (finishing) pekerjaan.", 
        relationship: "Sangat tulus, menghindari konflik, dan pembawa harmoni.", 
        communication: "Spontan, lugas, santun, dan menghindari perdebatan panjang.", 
        study: "Mempelajari ringkasan gambar besar dalam suasana yang rileks.", 
        positif: "Refleks sangat cepat, responsif, mediator hebat, serta rela berkorban.", 
        negatif: "Sangat sulit fokus prioritas, trauma konflik, serta mudah terdistraksi.", 
        motivasi: "Berikan ketenangan, hindari konflik, dan yakinkan kebermanfaatannya.", 
        karir: "Pekerja Sosial, Seniman Multitalenta, Medis Darurat, General Affairs." 
    }
};

// ... BAGIAN TANGGAL, SCAN, NUMEROLOGI TETAP SAMA ...
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
            t.textContent = "MENGANALISIS DATA...";
            setTimeout(showResult, 1500);
        }
    }, 2000);
}

// ... EVENT LISTENER SCAN JARI ...
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

// FUNGSI TAMPIL HASIL (PERBAIKAN KRUSIAL)
function showResult() {
    document.getElementById('scan-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    const resNum = calculateNumerology(birthDate);
    const data = mindprintDescriptions[resNum];

    // ISI LAYAR
    document.getElementById('result-title').textContent = data.title;
    document.getElementById('display-intisari').textContent = data.intisari;
    document.getElementById('display-motivasi').textContent = data.motivasi;
    document.getElementById('display-karir').textContent = data.karir;

    // ISI SERTIFIKAT
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
    document.getElementById('cert-motivasi').textContent = data.motivasi; 
    
    const now = new Date();
    document.getElementById('cert-date').textContent = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    const randomId = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('cert-id').textContent = `MP/${now.getFullYear()}/${randomId}`;
}

// DOWNLOAD PDF
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
populateDateFields();
