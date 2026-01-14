/**
 * MINDPRINT SYSTEM - ARAYA CONSULTING
 * OWNER: ALI MAHFUD
 * STABLE PDF RENDERING ENGINE
 */

const mindprintDescriptions = {
    1: { title: "Si Praktisi Reflektif", intisari: "Sosok paling membumi dalam keluarga Mindprint yang didominasi otak kiri bawah dengan kemudi dari dalam. Anda adalah pekerja keras mandiri yang lebih suka bertindak nyata daripada sekadar berwacana, sangat jago dalam pekerjaan yang membutuhkan ketelitian tinggi, stamina fisik kuat, serta kepatuhan mutlak pada aturan dan SOP.", successHabit: "Fokus pada spesialisasi bidang tertentu dan menjaga aktivitas fisik rutin untuk stabilitas mood.", relationship: "Membangun kepercayaan melalui konsistensi dan mencari kestabilan jangka panjang.", communication: "Lugas, singkat, dan berbasis fakta. Tidak menyukai basa-basi yang terlalu panjang.", positif: "Memiliki memori sangat tajam, tangguh secara fisik, serta disiplin tinggi.", negatif: "Kaku, terlalu prosedural, cenderung tertutup.", motivasi: "Berikan instruksi yang jelas, target yang realistis, serta apresiasi berupa aset atau jaminan keamanan materi.", karir: "Akuntan, Manajer Ops, Atlet, Teknisi, Perbankan." },
    2: { title: "Si Praktisi Ekspresif", intisari: "Pemain utama yang sangat lincah di panggung aksi dengan energi yang dipicu oleh tantangan luar dan interaksi sosial. Anda memiliki mesin kecerdasan fisik yang gesit, sangat kompetitif untuk menjadi nomor satu, serta memiliki kemampuan luar biasa untuk menikmati hidup melalui panca indra secara maksimal.", successHabit: "Sukses dalam lingkungan kompetitif dengan target atau kuota yang jelas.", relationship: "Mudah bergaul, membawa suasana ceria, dan menghargai hadiah fisik.", communication: "Ekspresif, menggunakan bahasa tubuh kuat, dan antusias pada hasil nyata.", positif: "Lincah, sportif, responsif, serta mahir dalam kemampuan teknis.", negatif: "Mudah cepat merasa bosan, boros, serta sering bertindak terburu-buru.", motivasi: "Berikan tantangan kompetitif, bonus instan, serta lingkungan kerja yang dinamis.", karir: "Marketing, Chef, Pilot, Polisi, Atlet Profesional." },
    3: { title: "Si Konseptor Reflektif", intisari: "Individu yang paling mandiri dan mendalam secara intelektual dengan dominasi otak kiri atas yang digerakkan dari dalam. Anda adalah sosok yang sangat logis, objektif, dan perfeksionis dalam validasi data, di mana segala informasi harus melewati filter logika yang ketat.", successHabit: "Mengasah keahlian teknis dan belajar ilmu baru guna menjaga otoritas dalam sistem.", relationship: "Menghargai ruang privasi dan diskusi intelektual yang substansial.", communication: "Formal, data-driven, dan argumentatif. Gunakan data konkret untuk meyakinkan.", positif: "Analitis, objektif, pakar.", negatif: "Dingin, terlalu kritis, sinis.", motivasi: "Berikan akses terhadap data/ilmu baru, hargai kemandiriannya, dan libatkan dalam sistem logis.", karir: "Ilmuwan, Auditor, Programmer, Analis Data." },
    4: { title: "Si Konseptor Ekspresif", intisari: "Sosok 'Komandan' yang lahir untuk memimpin dengan stimulasi energi dari dunia luar. Anda adalah manajer sistem yang tegas dan berorientasi pada hasil. Anda hebat dalam mengelola sumber daya dan mengontrol organisasi secara efisien.", successHabit: "Mendelegasikan tugas teknis untuk fokus pada kontrol sistem.", relationship: "Mendukung status sosial dan pencapaian karir dalam hubungan.", communication: "Lugas, memerintah namun logis, dan menghargai struktur bicara sistematis.", positif: "Tegas, manajerial kuat, adil.", negatif: "Otoriter, dominan, kurang empati.", motivasi: "Berikan otoritas, tanggung jawab memimpin tim besar, serta pengakuan atas jabatan.", karir: "CEO, Direktur, Manajer Proyek, Politisi, Hakim." },
    5: { title: "Si Kreatif Reflektif", intisari: "Pemikir abstrak dengan imajinasi sangat luas yang didominasi otak kanan atas dengan kemudi dari dalam. Anda adalah visioner yang mementingkan orisinalitas serta kualitas ide melampaui zaman melalui konsep dan filosofi.", successHabit: "Menyusun Master Plan jangka panjang yang mendetail melalui inovasi berkelanjutan.", relationship: "Sangat selektif dalam memilih lingkungan sosial dan menghargai privasi pikiran.", communication: "Puitis, penuh simbol, filosofis, dan cenderung selektif memilih lawan bicara.", positif: "Strategis, perfeksionis ide, visioner.", negatif: "Tertutup, lambat beraksi, skeptis.", motivasi: "Hargai orisinalitas idenya, berikan waktu dan ruang privat, serta dukung visi jangka panjangnya.", karir: "Arsitek, Penulis, Strategist, Ilmuwan, Seniman Konseptual." },
    6: { title: "Si Kreatif Ekspresif", intisari: "Trendsetter yang sangat optimis, penuh antusiasme, dan selalu terlihat kekinian. Anda memiliki intuisi bisnis yang sangat tajam dalam melihat peluang keuntungan serta pandai menularkan visi dan semangat kepada tim.", successHabit: "Membangun networking luas dan terus memperbarui ilmu pengetahuan.", relationship: "Membutuhkan dukungan penuh terhadap mimpi-mimpi besar dan ide kreatifnya.", communication: "Ekspresif, penuh semangat, dan persuasif dengan analogi masa depan.", positif: "Kreatif, optimis, inovatif.", negatif: "Mudah bosan, tidak konsisten, kurang fokus.", motivasi: "Libatkan dalam proyek inovatif, berikan panggung presentasi, serta insentif berbasis profit.", karir: "Inovator, Arsitek, Desainer, Kreator Konten, Pengusaha." },
    7: { title: "Si Empati Reflektif", intisari: "Pribadi paling idealis yang digerakkan sepenuhnya oleh hati dengan keyakinan prinsip yang tidak tergoyahkan. Memimpin dengan integritas jiwa, loyalitas tinggi, dan kelembutan hati.", successHabit: "Menjaga integritas antara perbuatan dan panggilan hati melalui pelayanan.", relationship: "Mencari kesetiaan murni dan koneksi jiwa (soulmate) yang mendalam.", communication: "Lembut, mendalam, tulus, dan sangat menjaga perasaan lawan bicara.", positif: "Setia, tulus, memiliki integritas tinggi.", negatif: "Sangat sensitif, moody, memendam kekecewaan.", motivasi: "Sentuh sisi spiritual/makna kerja, berikan lingkungan harmonis, serta perhatian personal.", karir: "Psikolog, Guru, Coach, Aktivis Kemanusiaan, Penulis." },
    8: { title: "Si Empati Ekspresif", intisari: "Sosok 'Magnet Sosial' dengan kharisma tinggi dan komunikator persuasif yang sangat empatik. Anda mampu menginspirasi, meyakinkan, dan menggerakkan banyak orang dengan mudah.", successHabit: "Menjaga hubungan sosial dan jejaring (networking) secara aktif.", relationship: "Membutuhkan apresiasi verbal dan pengakuan emosional yang hangat.", communication: "Hangat, persuasif, dan mahir menggunakan intonasi untuk menyentuh emosi.", positif: "Kharismatik, inspiratif, networking luas.", negatif: "Subjektif, haus pujian, mudah terpengaruh.", motivasi: "Berikan apresiasi publik (pujian di depan orang), jadikan juru bicara, dan dukungan emosional.", karir: "Politisi, Motivator, PR, Sales Manager, Leader." },
    9: { title: "Si Adaptif", intisari: "Generalis responsif yang serba bisa dan sangat mendambakan cinta damai. Anda adalah 'jembatan' fleksibel (mediator) yang mampu menghubungkan berbagai pilar lainnya secara naluriah.", successHabit: "Rutin melakukan jeda spiritual untuk menajamkan naluri dan menjaga harmoni.", relationship: "Sangat tulus, tidak suka konflik, dan pembawa ketenangan.", communication: "Spontan, lugas, santun, dan menghindari perdebatan panjang.", positif: "Jujur, responsif, mediator hebat.", negatif: "Peragu, pasif, sulit fokus prioritas.", motivasi: "Berikan ketenangan pikiran, hindari konflik menekan, yakinkan kehadirannya bermanfaat.", karir: "Mediator, Jurnalis, Aktivis, Pekerja Sosial, General Affairs." }
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
    const months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    months.forEach((mon, i) => m.innerHTML += `<option value="${String(i+1).padStart(2,'0')}">${mon}</option>`);
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
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true, scrollY: 0, scrollX: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape', compress: true }
    };
    html2pdf().set(opt).from(el).save().then(() => { el.style.display = 'none'; });
});

document.getElementById('restart-button').addEventListener('click', () => location.reload());
populateDateFields();
