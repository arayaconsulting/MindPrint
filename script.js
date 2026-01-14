/**
 * MINDPRINT SYSTEM - ARAYA CONSULTING
 * OWNER: ALI MAHFUD
 * STABLE VERSION WITH STUDY METHOD
 */

const mindprintDescriptions = {
    1: { title: "Si Praktisi Reflektif", intisari: "Sosok paling membumi dalam keluarga Mindprint yang didominasi otak kiri bawah dengan kemudi dari dalam. Anda adalah pekerja keras mandiri yang lebih suka bertindak nyata daripada sekadar berwacana, sangat jago dalam pekerjaan yang membutuhkan ketelitian tinggi.", successHabit: "Fokus pada spesialisasi bidang tertentu dan menjaga aktivitas fisik rutin.", relationship: "Membangun kepercayaan melalui konsistensi dan mencari kestabilan.", communication: "Lugas, singkat, dan berbasis fakta. Tidak menyukai basa-basi.", positif: "Memori tajam, tangguh fisik, disiplin tinggi.", negatif: "Kaku, materialistis, kurang spontan.", motivasi: "Instruksi yang jelas, target realistis, dan apresiasi materi.", karir: "Akuntan, Manajer Ops, Atlet, Teknisi.", study: "Latihan berulang (drilling), praktik langsung, dan menghafal data detail." },
    2: { title: "Si Praktisi Ekspresif", intisari: "Pemain utama yang sangat lincah di panggung aksi dengan energi dari tantangan luar. Anda memiliki mesin kecerdasan fisik yang gesit, kompetitif, serta mahir menikmati hidup melalui panca indra secara maksimal.", successHabit: "Sukses dalam lingkungan kompetitif dengan target atau kuota yang jelas.", relationship: "Mudah bergaul, membawa suasana ceria, dan menghargai hadiah fisik.", communication: "Ekspresif, menggunakan bahasa tubuh kuat, dan antusias pada hasil.", positif: "Lincah, sportif, responsif.", negatif: "Mudah bosan, boros, terburu-buru.", motivasi: "Tantangan kompetitif, bonus instan, dan lingkungan dinamis.", karir: "Marketing, Chef, Pilot, Atlet Profesional.", study: "Belajar sambil melakukan (learning by doing) dan simulasi lapangan." },
    3: { title: "Si Konseptor Reflektif", intisari: "Individu mandiri dan mendalam secara intelektual dengan dominasi otak kiri atas (internal). Anda sangat logis, objektif, dan perfeksionis dalam validasi data serta filter logika yang ketat.", successHabit: "Mengasah keahlian teknis dan belajar ilmu baru guna menjaga otoritas.", relationship: "Eksklusif dalam memilih teman dan sangat menghargai privasi pikiran.", communication: "Formal, data-driven, dan argumentatif. Gunakan data konkret.", positif: "Analisis dalam, mandiri, fokus pada standar.", negatif: "Terlalu kritis, dingin, kurang empati.", motivasi: "Akses terhadap data/ilmu baru dan kemandirian dalam sistem.", karir: "Programmer, Ilmuwan, Analis Data.", study: "Mendalami struktur logika, analisis mendalam, dan riset mandiri." },
    4: { title: "Si Konseptor Ekspresif", intisari: "Sosok 'Komandan' yang lahir untuk memimpin dengan stimulasi energi dunia luar. Anda hebat dalam mengelola sumber daya, mengatur strategi, dan mengontrol organisasi secara efisien.", successHabit: "Mendelegasikan tugas teknis untuk fokus pada kontrol sistem.", relationship: "Mendukung status sosial dan pencapaian karir dalam hubungan.", communication: "Lugas, memerintah namun logis, menghargai struktur bicara.", positif: "Tegas, manajerial hebat, adil.", negatif: "Otoriter, dominan, kurang empati.", motivasi: "Otoritas, tanggung jawab tim besar, dan pengakuan jabatan.", karir: "CEO, Direktur, Manajer Proyek.", study: "Mengatur bahan belajar ke dalam sistem efisien dan fokus pada hasil." },
    5: { title: "Si Kreatif Reflektif", intisari: "Pemikir abstrak dengan imajinasi luas yang didominasi otak kanan atas (internal). Visioner yang mementingkan orisinalitas serta kualitas ide melampaui zaman melalui filosofi.", successHabit: "Menyusun Master Plan jangka panjang yang mendetail melalui inovasi.", relationship: "Sangat selektif dalam memilih lingkungan sosial dan privasi pikiran.", communication: "Puitis, penuh simbol, filosofis, dan cenderung selektif.", positif: "Strategis, perfeksionis ide, visioner.", negatif: "Tertutup, lambat beraksi, skeptis.", motivasi: "Hargai orisinalitas ide, waktu dan ruang privat, serta visi jangka panjang.", karir: "Arsitek, Penulis, Konsultan Kreatif.", study: "Menganalisis konsep abstrak, visualisasi ide, dan eksplorasi teori baru." },
    6: { title: "Si Kreatif Ekspresif", intisari: "Trendsetter yang optimis, penuh antusiasme, dan kekinian. Inovator visioner yang mampu melihat peluang masa depan dan merakitnya menjadi terobosan bisnis.", successHabit: "Membangun networking luas dan terus memperbarui ilmu pengetahuan.", relationship: "Membutuhkan pasangan yang mendukung mimpi besar dan ide kreatifnya.", communication: "Ekspresif, penuh semangat, dan persuasif dengan analogi.", positif: "Kreatif, optimis, inovatif.", negatif: "Mudah bosan, tidak konsisten, kurang fokus.", motivasi: "Proyek inovatif, panggung presentasi, dan insentif berbasis profit.", karir: "Inovator, Desainer, Kreator Konten.", study: "Gunakan peta pikiran (mind mapping) dan belajar dalam suasana santai." },
    7: { title: "Si Empati Reflektif", intisari: "Pribadi idealis yang digerakkan hati dengan integritas moral kuat. Memimpin dengan integritas jiwa, loyalitas tinggi, dan kelembutan hati yang tidak tergoyahkan.", successHabit: "Menjaga integritas antara perbuatan dan panggilan hati melalui pelayanan.", relationship: "Mencari kesetiaan murni dan koneksi jiwa (soulmate) yang mendalam.", communication: "Lembut, mendalam, tulus, dan menjaga perasaan lawan bicara.", positif: "Setia, tulus, memiliki integritas tinggi.", negatif: "Sangat sensitif, moody, memendam kekecewaan.", motivasi: "Sentuhan spiritual, makna kerja, dan perhatian personal.", karir: "Psikolog, Konselor, Penulis.", study: "Mencari makna mendalam dalam materi dan suasana belajar tenang." },
    8: { title: "Si Empati Ekspresif", intisari: "Sosok 'Magnet Sosial' dengan kharisma tinggi dan persuasif empatik. Anda mampu menginspirasi, meyakinkan, dan menggerakkan banyak orang dengan mudah.", successHabit: "Menjaga hubungan sosial dan jejaring (networking) secara aktif.", relationship: "Membutuhkan apresiasi verbal dan pengakuan emosional yang hangat.", communication: "Hangat, persuasif, mahir menyentuh emosi lawan bicara.", positif: "Kharismatik, inspiratif, networking luas.", negatif: "Subjektif, haus pujian, mudah terpengaruh.", motivasi: "Apresiasi publik (pujian), jadikan juru bicara, dan dukungan emosional.", karir: "Politisi, Motivator, Sales Manager.", study: "Diskusi kelompok, mengajar kembali, dan interaksi sosial aktif." },
    9: { title: "Si Adaptif", intisari: "Generalis responsif yang serba bisa dan cinta damai. 'Jembatan' fleksibel (mediator) yang mampu menghubungkan berbagai pilar lainnya secara naluriah.", successHabit: "Rutin melakukan jeda spiritual untuk menajamkan naluri dan harmoni.", relationship: "Sangat tulus, tidak suka konflik, dan pembawa ketenangan.", communication: "Spontan, lugas, santun, dan menghindari perdebatan.", positif: "Jujur, responsif, mediator hebat.", negatif: "Peragu, pasif, sulit fokus prioritas.", motivasi: "Ketenangan pikiran, hindari konflik menekan, yakinkan kehadirannya bermanfaat.", karir: "Mediator, Jurnalis, Pekerja Sosial.", study: "Merangkai rangkuman utuh dari berbagai potongan informasi berbeda." }
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
    scanText.textContent = `Memindai ${fingers[currentFingerIndex]}... JANGAN DILEPAS!`;
    scanTimeout = setTimeout(() => { finishScan(); }, 2000);
}

function cancelScanning() {
    if(!isScanning) return;
    clearTimeout(scanTimeout);
    isScanning = false;
    scanner.classList.remove('scanning');
    scanText.textContent = "GAGAL! Jari terlepas. Tempelkan kembali.";
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
        scanText.textContent = `${fingers[currentFingerIndex].toUpperCase()} BERHASIL.`;
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
    document.getElementById('cert-study').textContent = data.study;
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
        html2canvas: { scale: 3, useCORS: true, letterRendering: true, scrollY: 0, scrollX: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape', compress: true }
    };
    html2pdf().set(opt).from(el).save().then(() => {
        el.style.display = 'none';
    });
});

document.getElementById('restart-button').addEventListener('click', () => location.reload());
populateDateFields();
