/**
 * MINDPRINT SYSTEM - ARAYA CONSULTING
 * OWNER: ALI MAHFUD
 * FINAL STABLE VERSION
 */

const mindprintDescriptions = {
    1: { title: "Si Praktisi Reflektif", intisari: "Sosok paling membumi dalam keluarga Mindprint yang didominasi otak kiri bawah dengan kemudi dari dalam. Anda adalah pekerja keras mandiri yang lebih suka bertindak nyata daripada sekadar berwacana, sangat jago dalam pekerjaan yang membutuhkan ketelitian tinggi, stamina fisik kuat, serta kepatuhan mutlak pada aturan dan SOP.", successHabit: "Fokus pada spesialisasi bidang tertentu dan menjaga aktivitas fisik rutin untuk stabilitas mood.", relationship: "Membangun kepercayaan melalui konsistensi dan mencari kestabilan jangka panjang.", communication: "Lugas, singkat, dan berbasis fakta. Tidak menyukai basa-basi yang terlalu panjang.", positif: "Memiliki memori sangat tajam, tangguh secara fisik, serta disiplin tinggi.", negatif: "Kaku, kurang spontan, cenderung tertutup.", motivasi: "Berikan instruksi yang jelas, target yang realistis, serta apresiasi berupa aset atau jaminan keamanan materi.", karir: "Akuntan, Manajer Ops, Atlet, Teknisi, Perbankan." },
    2: { title: "Si Praktisi Ekspresif", intisari: "Pemain utama yang sangat lincah di panggung aksi dengan energi yang dipicu oleh tantangan luar dan interaksi sosial. Anda memiliki mesin kecerdasan fisik yang gesit, sangat kompetitif untuk menjadi nomor satu, serta memiliki kemampuan luar biasa untuk menikmati hidup melalui panca indra secara maksimal.", successHabit: "Sukses dalam lingkungan kompetitif dengan target atau kuota yang jelas.", relationship: "Mudah bergaul, membawa suasana ceria, dan menghargai hadiah fisik.", communication: "Ekspresif, menggunakan bahasa tubuh kuat, dan antusias pada hasil nyata.", positif: "Lincah, sportif, responsif, serta mahir dalam kemampuan teknis.", negatif: "Mudah cepat merasa bosan, boros, serta sering bertindak terburu-buru.", motivasi: "Berikan tantangan kompetitif, bonus instan, serta lingkungan kerja yang dinamis.", karir: "Marketing, Chef, Pilot, Polisi, Atlet Profesional." },
    3: { title: "Si Konseptor Reflektif", intisari: "Individu yang paling mandiri dan mendalam secara intelektual dengan dominasi otak kiri atas yang digerakkan dari dalam. Anda adalah sosok yang sangat logis, objektif, dan perfeksionis dalam validasi data, di mana segala informasi harus melewati filter logika yang ketat.", successHabit: "Mengasah keahlian teknis dan belajar ilmu baru guna menjaga otoritas dalam sistem.", relationship: "Eksklusif dalam memilih teman dan sangat menghargai privasi pikiran.", communication: "Formal, data-driven, dan argumentatif. Gunakan data konkret untuk meyakinkan.", positif: "Mampu analisis sangat mendalam, mandiri, serta sangat fokus pada standar.", negatif: "Terlalu kritis terhadap orang, dingin, serta terkadang kurang memiliki empati.", motivasi: "Berikan akses terhadap data/ilmu baru, hargai kemandiriannya, dan libatkan dalam sistem logis.", karir: "Programmer, Ilmuwan, Konsultan Pajak, Peneliti, Ahli Strategi." },
    4: { title: "Si Konseptor Ekspresif", intisari: "Sosok 'Komandan' yang lahir untuk memimpin dengan stimulasi energi dari dunia luar. Anda sangat ahli dalam mengatur strategi, mendelegasikan tugas secara efisien, membangun struktur organisasi yang luas, serta selalu berorientasi pada pencapaian target.", successHabit: "Memperluas jaringan kekuasaan dan melatih kemampuan melipatgandakan aset serta SDM.", relationship: "Mendukung status sosial dan pencapaian karir dalam hubungan.", communication: "Lugas, memerintah namun logis, dan menghargai struktur bicara sistematis.", positif: "Kemampuan manajerial hebat, tegas, berwibawa, serta sangat organisatoris.", negatif: "Cenderung dominan otoriter, kurang sabar, serta kaku pada hirarki jabatan.", motivasi: "Berikan otoritas, tanggung jawab memimpin tim besar, serta pengakuan atas jabatan.", karir: "CEO, Direktur, Manajer Proyek, Politisi, Hakim." },
    5: { title: "Si Kreatif Reflektif", intisari: "Pemikir abstrak dengan imajinasi sangat luas yang didominasi otak kanan atas dengan kemudi dari dalam. Anda adalah visioner yang mementingkan orisinalitas serta kualitas ide melampaui zaman, selalu berusaha merancang masa depan melalui konsep dan filosofi.", successHabit: "Menjadi ahli di bidang unik melalui inovasi berkelanjutan dan pendalaman intelektual.", relationship: "Sangat selektif dalam memilih lingkungan sosial dan menghargai privasi pikiran.", communication: "Puitis, penuh simbol, filosofis, dan cenderung selektif memilih lawan bicara.", positif: "Sangat visioner jangka panjang, perfeksionis ide, serta memiliki abstraksi kuat.", negatif: "Cenderung eksklusif menyendiri, terlalu idealis, serta sering bersikap sangat skeptis.", motivasi: "Hargai orisinalitas idenya, berikan waktu dan ruang privat, serta dukung visi jangka panjangnya.", karir: "Arsitek, Penulis, Strategist, Ilmuwan, Seniman Konseptual." },
    6: { title: "Si Kreatif Ekspresif", intisari: "Trendsetter yang sangat optimis, penuh antusiasme, dan selalu terlihat kekinian. Anda memiliki intuisi bisnis yang sangat tajam dalam melihat peluang keuntungan serta pandai menularkan visi dan semangat kepada tim agar percaya pada mimpi besar.", successHabit: "Membangun networking luas dan melatih ketekunan untuk menuntaskan proyek besar.", relationship: "Membutuhkan dukungan penuh terhadap mimpi-mimpi besar dan ide kreatifnya.", communication: "Ekspresif, penuh semangat, dan persuasif dengan analogi masa depan.", positif: "Intuisi bisnis kuat, sangat inovatif, multitalenta, serta penyebar antusiasme.", negatif: "Kurang fokus pada detail, ceroboh, serta berani risiko tanpa perhitungan.", motivasi: "Libatkan dalam proyek inovatif, beranggung presentasi, serta insentif berbasis profit.", karir: "Pengusaha, Investor, Desainer, Kreator Konten, Konsultan Kreatif." },
    7: { title: "Si Empati Reflektif", intisari: "Pribadi paling idealis yang digerakkan sepenuhnya oleh hati dengan keyakinan prinsip yang tidak tergoyahkan. Anda memiliki integritas dan loyalitas yang sangat tinggi, setia pada janji, serta selalu menjadi pembawa ketenangan dalam tim.", successHabit: "Fokus pada pelayanan dan pembangunan karakter melalui integritas antara batin dan perbuatan.", relationship: "Mencari kesetiaan murni dan koneksi jiwa (soulmate) yang mendalam.", communication: "Lembut, mendalam, tulus, dan sangat menjaga perasaan lawan bicara.", positif: "Memiliki integritas tinggi, loyal, sangat peka rasa, pembawa ketenangan.", negatif: "Mudah tersinggung atau baper, tertutup memendam perasaan, serta bersikap subjektif.", motivasi: "Sentuh sisi spiritual/makna kerja, berikan lingkungan harmonis, serta perhatian personal.", karir: "Psikolog, Guru, Coach, Aktivis Kemanusiaan, Pemuka Agama." },
    8: { title: "Si Empati Ekspresif", intisari: "Sosok 'Magnet Sosial' dengan kharisma tinggi dan kemampuan komunikasi persuasif yang memikat. Anda adalah ahli dalam memahami psikologi massa, sangat hebat dalam meyakinkan orang lain, serta mampu membangkitkan semangat tim yang jatuh.", successHabit: "Membangun relasi luas dan melatih kemandirian agar tidak haus akan pujian luar.", relationship: "Membutuhkan apresiasi verbal dan pengakuan emosional yang hangat.", communication: "Hangat, persuasif, dan mahir menggunakan intonasi untuk menyentuh emosi.", positif: "Sangat kharismatik, inspiratif, serta memiliki kemampuan networking luas.", negatif: "Haus pengakuan orang, terkadang manipulatif, serta mudah sekali terpengaruh.", motivasi: "Berikan apresiasi publik (pujian di depan orang), jadikan juru bicara, dan dukungan emosional.", karir: "Politisi, Motivator, PR, Sales Manager, Presenter." },
    9: { title: "Si Adaptif", intisari: "Generalis responsif yang serba bisa dan sangat mendambakan cinta damai. Anda adalah 'jembatan' fleksibel yang mampu menghubungkan berbagai pilar lainnya secara naluriah, memiliki kecepatan refleks yang luar biasa.", successHabit: "Menjaga spiritualitas dan melatih ketuntasan (finishing) dalam setiap pekerjaan.", relationship: "Sangat tulus, menghindari konflik, dan pembawa harmoni bagi sekitar.", communication: "Spontan, lugas, santun, dan menghindari perdebatan panjang.", positif: "Memiliki refleks sangat cepat, responsif, mediator hebat, serta rela berkorban.", negatif: "Sangat sulit fokus prioritas, trauma terhadap konflik, serta mudah terdistraksi.", motivasi: "Berikan ketenangan pikiran, hindari konflik menekan, yakinkan kehadirannya bermanfaat.", karir: "Pekerja Sosial, Seniman Multitalenta, Medis Darurat, General Affairs." }
};

const fingers = ["ibu jari", "telunjuk", "tengah", "manis", "kelingking"];
let currentFingerIndex = 0, userName = "", birthDate = "", isScanning = false, scanTimeout;

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

document.getElementById('user-form').addEventListener('submit', (e) => {
    e.preventDefault();
    userName = document.getElementById('user-name').value;
    birthDate = `${document.getElementById('year').value}-${document.getElementById('month').value}-${document.getElementById('day').value}`;
    document.getElementById('intro-container').classList.add('hidden');
    document.getElementById('scan-container').classList.remove('hidden');
    document.getElementById('scan-text').textContent = `Tempelkan ${fingers[0]} Anda...`;
});

const scanner = document.getElementById('fingerprint-scanner');
const scanText = document.getElementById('scan-text');

function startScanning(e) {
    if(e) e.preventDefault();
    if(isScanning) return;
    isScanning = true;
    scanner.classList.add('scanning');
    scanText.textContent = `Memindai ${fingers[currentFingerIndex]}... Jangan dilepas!`;
    scanTimeout = setTimeout(() => { finishScan(); }, 2000);
}

function cancelScanning() {
    if(!isScanning) return;
    clearTimeout(scanTimeout);
    isScanning = false;
    scanner.classList.remove('scanning');
    scanText.textContent = "Gagal! Jari terlepas. Tempelkan kembali.";
}

if(scanner) {
    scanner.addEventListener('mousedown', startScanning);
    scanner.addEventListener('touchstart', startScanning);
    window.addEventListener('mouseup', cancelScanning);
    window.addEventListener('touchend', cancelScanning);
}

function finishScan() {
    isScanning = false;
    scanner.classList.remove('scanning');
    if (currentFingerIndex < fingers.length - 1) {
        scanText.textContent = `${fingers[currentFingerIndex].toUpperCase()} BERHASIL DIPINDAI.`;
        document.getElementById('next-finger-button').classList.remove('hidden');
    } else {
        scanText.textContent = "MENGANALISIS DATA...";
        setTimeout(showResult, 1500);
    }
}

document.getElementById('next-finger-button').addEventListener('click', function() {
    currentFingerIndex++;
    this.classList.add('hidden');
    scanText.textContent = `Letakkan ${fingers[currentFingerIndex]} Anda.`;
});

function showResult() {
    document.getElementById('scan-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    const resNum = calculateNumerology(birthDate);
    const data = mindprintDescriptions[resNum];

    document.getElementById('display-intisari').textContent = data.intisari;
    document.getElementById('display-motivasi').textContent = data.motivasi;
    document.getElementById('result-title').textContent = data.title;

    document.getElementById('cert-name').textContent = userName;
    document.getElementById('cert-result').textContent = data.title;
    document.getElementById('cert-intisari').textContent = data.intisari;
    document.getElementById('cert-motivasi').textContent = data.motivasi;
    document.getElementById('cert-success').textContent = data.successHabit;
    document.getElementById('cert-relationship').textContent = data.relationship;
    document.getElementById('cert-communication').textContent = data.communication;
    document.getElementById('cert-karir').textContent = data.karir;
    document.getElementById('cert-positif').textContent = data.positif;
    document.getElementById('cert-negatif').textContent = data.negatif;
    
    const now = new Date();
    document.getElementById('cert-date').textContent = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    document.getElementById('cert-id').textContent = `MP/${now.getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}`;
}

document.getElementById('download-btn').addEventListener('click', () => {
    const el = document.getElementById('certificate-template');
    el.style.display = 'block';
    const opt = {
        margin: 0,
        filename: `Laporan_MindPrint_${userName}.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { scale: 3, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape', compress: true }
    };
    html2pdf().set(opt).from(el).save().then(() => { el.style.display = 'none'; });
});

document.getElementById('restart-button').addEventListener('click', () => location.reload());
populateDateFields();
