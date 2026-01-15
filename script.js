/**
 * MINDPRINT SYSTEM - ARAYA CONSULTING
 * VERSION: 5.8 (FULL DATA & PROPORTIONAL FIX)
 */

const mindprintDescriptions = {
    1: { 
        title: "Si Praktisi Reflektif (The Discipline Specialist)", 
        intisari: "Si Praktisi Reflektif adalah sosok yang paling membumi dalam keluarga besar Mindprint. Dominasi otak kiri bawah (Pilar Praktisi) yang digerakkan dari dalam ke luar (Reflektif) menjadikannya seorang pekerja keras yang sangat mandiri. Mereka adalah tipe orang yang lebih suka 'bertindak' daripada sekadar 'berwacana'. Jika ada pekerjaan yang membutuhkan ketelitian tinggi, stamina fisik yang kuat, dan kepatuhan pada aturan, mereka adalah jagonya. Memiliki kekuatan utama pada memori yang tajam dalam merekam data, ketangguhan fisik yang stabil, serta kedisiplinan tinggi terhadap SOP. Namun, tantangannya adalah kecenderungan bersikap kaku dan kurang spontan.", 
        successHabit: "Mantra: 'Berkeringat dan Menabung'. Kunci Sukses: Fokus pada spesialisasi. Jangan menjadi Palugada. Pilihlah satu bidang, tekuni sampai menjadi ahli.", 
        relationship: "Membangun kepercayaan melalui konsistensi dan kejujuran berbasis fakta.", 
        communication: "To-the-point, singkat, dan berbasis fakta. Tidak menyukai basa-basi yang terlalu panjang.", 
        positif: "Disiplin Tinggi, Memori Tajam, Tangguh Fisik.", 
        negatif: "Terlalu Kaku, Materialistis, Kurang Spontan.", 
        motivasi: "Instruksi yang jelas, target realistis, serta apresiasi berupa jaminan keamanan materi.", 
        karir: "Akuntan, Manajer Operasional, Atlet, Teknisi, Perbankan.", 
        study: "Metode Menghafal & Pengulangan, Visual-Kinestetik (contoh nyata), serta latihan mandiri di tempat tenang." 
    },
    2: { 
        title: "Si Praktisi Ekspresif (The Dynamic Performer)", 
        intisari: "Si Praktisi Ekspresif memiliki energi yang dipicu oleh tantangan luar, interaksi sosial, dan suasana ramai. Mereka adalah tipe orang yang paling gesit, senang berkompetisi, dan memiliki kemampuan menikmati hidup dengan panca indra secara maksimal. Memiliki kelincahan dan respon lapangan yang cepat. Namun, tantangannya adalah mudah merasa bosan jika suasana monoton, serta cenderung terburu-buru mengambil tindakan sebelum memikirkan konsekuensi jangka panjang.", 
        successHabit: "Mantra: 'Tantangan adalah Energi'. Kunci Sukses: Skala dan Persaingan. Sukses jika berada dalam lingkungan kompetitif. Berikan target atau kuota pemicu tenaga.", 
        relationship: "Mudah bergaul, membawa suasana ceria, dan menghargai hadiah fisik.", 
        communication: "Ekspresif, menggunakan bahasa tubuh yang kuat, dan sangat antusias pada hasil nyata.", 
        positif: "Lincah & Cepat, Sportif, Menyenangkan (Easy Going).", 
        negatif: "Cepat Bosan, Boros, Terburu-buru.", 
        motivasi: "Tantangan kompetitif, bonus instan, serta lingkungan kerja dinamis.", 
        karir: "Sales/Marketing, Atlet Profesional, Chef, Pilot, Militer.", 
        study: "Praktik Lapangan langsung, Belajar Kelompok untuk memicu otak, dan Metode Demonstrasi." 
    },
    3: { 
        title: "Si Konseptor Reflektif (The Master Strategist)", 
        intisari: "Individu yang paling mandiri dan mendalam secara intelektual dengan dominasi otak kiri atas. Mereka sangat logis, objektif, dan perfeksionis dalam hal kebenaran data; segalanya harus melewati filter logika. Hebat dalam analisis mendalam membedah masalah kompleks. Namun, sering terlihat dingin atau terlalu kritis mengoreksi kesalahan orang lain, sulit bekerja dalam tim yang berantakan, serta kurang empati.", 
        successHabit: "Mantra: 'Logika dan Otoritas'. Kunci Sukses: Keahlian Teknis dan Kekuasaan. Sukses jika memiliki kendali atas sistem. Terus asah otak dengan ilmu baru (ta'allum).", 
        relationship: "Eksklusif dalam memilih teman dan sangat menghargai privasi pikiran.", 
        communication: "Formal, data-driven, dan argumentatif. Gunakan data konkret untuk meyakinkan.", 
        positif: "Analisis Mendalam, Kemandirian Tinggi, Objektivitas.", 
        negatif: "Terlalu Kritis, Dingin, Kurang Empati.", 
        motivasi: "Akses terhadap data/ilmu baru, hargai kemandirian, dan perancangan sistem logis.", 
        karir: "Programmer, Ilmuwan, Akuntan Publik, Ahli Strategi.", 
        study: "Skema dan Struktur (bagan/tabel), studi literatur mandiri, serta Problem Solving logika." 
    },
    4: { 
        title: "Si Konseptor Ekspresif (The Great Manager)", 
        intisari: "Sosok 'Komandan' yang lahir untuk memimpin, sangat suka mengatur, dan membangun struktur organisasi yang luas. Energinya muncul saat memiliki kekuasaan atau kendali atas proyek besar. Memiliki kemampuan manajerial hebat dalam delegasi serta berorientasi kuat pada efisiensi hasil akhir. Namun, tantangannya adalah aura dominan yang terlihat otoriter (bossy) dan kurang sabar.", 
        successHabit: "Mantra: 'Otoritas dan Ekspansi'. Kunci Sukses: Memperluas jaringan dan kekuasaan. Sukses jika diberikan tanggung jawab besar mengelola banyak orang.", 
        relationship: "Mendukung status sosial dan pencapaian karir dalam hubungan.", 
        communication: "Lugas, memerintah (logis), dan menghargai struktur bicara sistematis.", 
        positif: "Manajerial Hebat, Tegas & Berwibawa, Organisatoris.", 
        negatif: "Dominan/Otoriter, Kurang Sabar, Kaku pada Hirarki.", 
        motivasi: "Otoritas, tanggung jawab memimpin tim besar, serta pengakuan atas jabatan.", 
        karir: "CEO/Direktur, Manajer Proyek, Politisi, Hakim, Pengusaha.", 
        study: "Diskusi Terstruktur (debat), Menjadi Pengajar, dan mempelajari Studi Kasus Bisnis." 
    },
    5: { 
        title: "Si Kreatif Reflektif (The Quality Visionary)", 
        intisari: "Sosok pemikir abstrak yang sangat mementingkan orisinalitas dan kesempurnaan ide melampaui zaman. Cenderung tenang di luar namun memiliki dunia imajinasi yang luas dan mendalam. Sangat kuat dalam abstraksi filosofis. Namun, sering merasa tidak nyambung dengan orang awam, terlalu idealis hingga sulit membumikan ide, serta skeptis terhadap hal tanpa landasan filosofis.", 
        successHabit: "Mantra: 'Kualitas dan Ilmu'. Kunci Sukses: Menjadi ahli di bidang spesifik dan unik. Kuncinya adalah 'Inovasi atau Mati'. Berani membumikan ide.", 
        relationship: "Sangat selektif memilih lingkungan sosial dan menghargai privasi.", 
        communication: "Puitis, penuh simbol, filosofis, dan cenderung selektif memilih lawan bicara.", 
        positif: "Visioner Jangka Panjang, Perfeksionis Ide, Abstraksi Kuat.", 
        negatif: "Eksklusif/Menyendiri, Terlalu Idealis, Skeptis.", 
        motivasi: "Hargai orisinalitas idenya, berikan waktu/ruang privat, dan dukung visi jangka panjang.", 
        karir: "Penulis, Peneliti, Arsitek, Strategist Bisnis, Seniman.", 
        study: "Peta Konsep (Mind Mapping), penggunaan Analogi/Metafora, serta literatur mendalam." 
    },
    6: { 
        title: "Si Kreatif Ekspresif (The Trendsetter)", 
        intisari: "Sosok paling optimis, penuh antusiasme, dan selalu terlihat 'kekinian'. Memiliki intuisi bisnis yang sangat tajam dalam melihat peluang keuntungan dan inovatif menyelesaikan masalah. Hebat menularkan visi kepada tim. Namun, tantangannya adalah kurang fokus karena terlalu banyak ide, meremehkan administrasi, serta berani ambil risiko tinggi tanpa perhitungan.", 
        successHabit: "Mantra: 'Inovasi dan Investasi'. Kunci Sukses: Networking dan Berani Gagal. Latih ketekunan untuk menuntaskan satu proyek sebelum pindah.", 
        relationship: "Membutuhkan dukungan penuh terhadap mimpi besar dan ide kreatifnya.", 
        communication: "Ekspresif, penuh semangat, menggunakan analogi masa depan, persuasif.", 
        positif: "Intuisi Bisnis Kuat, Inovatif, Penyebar Antusiasme.", 
        negatif: "Kurang Fokus, Abaikan Detail, Risiko Terlalu Tinggi.", 
        motivasi: "Proyek inovatif, panggung presentasi, serta insentif berbasis profit.", 
        karir: "Pengusaha, Marketing, Desainer, Kreator Konten, Konsultan.", 
        study: "Brainstorming bebas, penggunaan Visualisasi & Gambar, serta belajar dari kasus sukses." 
    },
    7: { 
        title: "Si Empati Reflektif (The Principled Soul)", 
        intisari: "Sosok paling idealis yang digerakkan oleh perasaan dan prinsip hidup. Memiliki integritas dan loyalitas luar biasa pada janji, peka rasa terhadap suasana hati orang lain, dan menjadi penyejuk tim. Selalu mencari 'makna' di balik pekerjaan. Namun, mudah tersinggung (baper) terhadap kritik profesional dan cenderung memendam perasaan.", 
        successHabit: "Mantra: 'Cinta dan Keyakinan'. Kunci Sukses: Fokus pada pelayanan dan karakter. Latih ketegasan agar perasaan tidak menghalangi profesionalitas.", 
        relationship: "Mencari kesetiaan murni dan koneksi jiwa (soulmate) yang mendalam.", 
        communication: "Lembut, mendalam, tulus, dan sangat menjaga perasaan lawan bicara.", 
        positif: "Integritas & Loyalitas, Kepekaan Rasa, Pembawa Ketenangan.", 
        negatif: "Mudah Tersinggung (Baper), Tertutup, Subjektif.", 
        motivasi: "Sisi spiritual/makna kerja, lingkungan harmonis, serta perhatian personal.", 
        karir: "Psikolog, Guru/Dosen, Penulis, Coach, Aktivis.", 
        study: "Sentuhan Emosional, Audio-Mood (suasana tenang), dan lingkungan belajar harmonis." 
    },
    8: { 
        title: "Si Empati Ekspresif (The Charismatic Leader)", 
        intisari: "Sosok 'Magnet Sosial' dengan kemampuan persuasi luar biasa dan kharisma tinggi. Ahli memahami psikologi massa dan membangkitkan semangat tim melalui kata-kata. Energinya meluap saat berada di tengah banyak orang. Namun, sangat haus akan pengakuan dan apresiasi, serta suasana hati sangat bergantung pada perlakuan orang lain.", 
        successHabit: "Mantra: 'Pengaruh dan Cinta'. Kunci Sukses: Popularitas dan Relasi. Latih kemandirian agar tidak terlalu bergantung pada pujian dan fokus target.", 
        relationship: "Membutuhkan apresiasi verbal dan pengakuan emosional yang hangat.", 
        communication: "Hangat, ekspresif, persuasif, dan mahir menggunakan intonasi suara emosional.", 
        positif: "Kemampuan Persuasi, Kharisma Tinggi, Pandai Memotivasi.", 
        negatif: "Haus Pengakuan, Manipulatif, Mudah Terpengaruh.", 
        motivasi: "Apresiasi publik, peran juru bicara, dan dukungan emosional.", 
        karir: "Politisi, Motivator, PR, Sales Manager, Presenter.", 
        study: "Diskusi & Tanya Jawab, Mengajarkan Kembali materi, dan pembelajaran Audio-Visual." 
    },
    9: { 
        title: "Si Adaptif (The Responsive Generalist)", 
        intisari: "Sosok paling serba bisa, cinta damai, dan memiliki kecepatan refleks luar biasa baik fisik maupun mental. Menjadi 'jembatan' penghubung berbagai tipe kepribadian karena fleksibel dan rela berkorban. Namun, sulit menentukan prioritas hidup spesifik, trauma terhadap konflik, serta mudah terdistraksi.", 
        successHabit: "Mantra: 'Ketenangan dan Kebermanfaatan'. Kunci Sukses: Kebahagiaan dan Spiritualitas. Latih ketuntasan (finishing) agar pekerjaan selesai dengan baik.", 
        relationship: "Sangat tulus, tidak suka konflik, dan pembawa harmoni.", 
        communication: "Spontan, lugas, santun. Cenderung tidak suka perdebatan panjang.", 
        positif: "Kecepatan Belajar (Generalis), Respon Refleks, Cinta Damai.", 
        negatif: "Sulit Fokus, Trauma Konflik, Mudah Terdistraksi.", 
        motivasi: "Ketenangan pikiran, hindari konflik, dan yakinkan kehadirannya bermanfaat.", 
        karir: "Pekerja Sosial, Seniman, Bagian Umum (GA), Medis Darurat.", 
        study: "Suasana Tenang (Relaksasi), Ringkasan (big picture), dan Belajar Sambil Melakukan." 
    }
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
    scanTimeout = setTimeout(() => { finishScan(); }, 3000);
}

function cancelScanning(e) {
    if(e) e.preventDefault();
    if(!isScanning) return;
    clearTimeout(scanTimeout);
    isScanning = false;
    scanner.classList.remove('scanning'); 
    scanText.textContent = "GAGAL! Jari terlepas. Tempelkan kembali.";
}

if(scanner) {
    scanner.addEventListener('touchstart', startScanning, {passive: false});
    scanner.addEventListener('touchend', cancelScanning, {passive: false});
    scanner.addEventListener('mousedown', startScanning);
    window.addEventListener('mouseup', cancelScanning);
}

function finishScan() {
    isScanning = false;
    scanner.classList.remove('scanning');
    if (currentFingerIndex < fingers.length - 1) {
        currentFingerIndex++;
        scanText.textContent = `${fingers[currentFingerIndex-1].toUpperCase()} BERHASIL.`;
        document.getElementById('next-finger-button').classList.remove('hidden');
    } else {
        scanText.textContent = "MENGANALISIS DATA...";
        setTimeout(showResult, 1500);
    }
}

document.getElementById('next-finger-button').addEventListener('click', function() {
    this.classList.add('hidden');
    scanText.textContent = `Letakkan ${fingers[currentFingerIndex]} Anda.`;
});

function calculateNumerology(dateString) {
    const digits = dateString.replace(/-/g, '').split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);
    while (sum > 9) sum = String(sum).split('').reduce((acc, d) => acc + parseInt(d), 0);
    return sum || 9;
}

function showResult() {
    document.getElementById('scan-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    const resNum = calculateNumerology(birthDate);
    const data = mindprintDescriptions[resNum];

    document.getElementById('display-intisari').textContent = data.intisari;
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
    html2pdf().set(opt).from(el).save().then(() => { el.style.display = 'none'; });
});

document.getElementById('restart-button').addEventListener('click', () => location.reload());
window.onload = populateDateFields;
