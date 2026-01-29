/**
 * MINDPRINT SYSTEM - ARAYA CONSULTING
 * OWNER: ALI MAHFUD
 * VERSION: 19.0 (FIXED TWIN PANEL DISPLAY & PERSONALITY PLUS RENDER)
 */

const mindprintDescriptions = {
    1: { title: "Si Konseptor Reflektif (The Master Strategist)", intisari: "Si Konseptor Reflektif adalah tipe yang paling mandiri dan mendalam secara intelektual dengan dominasi otak kiri atas (Pilar Konseptor) dan kemudi Reflektif. Mereka adalah individu yang sangat logis, objektif, dan perfeksionis dalam hal kebenaran data; segalanya harus melewati filter logika yang ketat. Hebat dalam analisis mendalam membedah masalah kompleks dan konsisten menjaga standar kualitas tinggi. Namun, sering terlihat dingin atau terlalu kritis mengoreksi kesalahan orang lain secara tajam, sulit bekerja dalam tim yang berantakan, serta kurang empati karena terlalu fokus pada fakta objektif.", successHabit: "Mantra: 'Logika dan Otoritas'. Kunci Sukses: Keahlian Teknis and Kekuasaan. Sukses jika memiliki otoritas atau kendali atas sistem. Terus asah otak dengan belajar ilmu-ilmu baru (ta'allum) agar posisi tawar tetap tinggi.", relationship: "Eksklusif dalam memilih teman dan sangat menghargai privasi pikiran.", communication: "Formal, data-driven, dan sangat argumentatif. Gunakan data konkret untuk meyakinkan, bukan perasaan.", positif: "Analisis Mendalam, Kemandirian Tinggi, Objektivitas.", negatif: "Terlalu Kritis, Dingin, Kurang Empati.", motivasi: "Berikan akses terhadap data/ilmu baru, hargai kemandiriannya, dan libatkan dalam perancangan sistem logis.", karir: "Programmer, Ilmuwan, Akuntan Publik, Peneliti, Ahli Strategi.", study: "Belajar melalui Skema dan Struktur (bagan/tabel), studi literatur mandiri yang mendalam, serta Problem Solving kasus logika." },
    2: { title: "Si Empati Ekspresif (The Charismatic Leader)", intisari: "Si Empati Ekspresif didominasi otak kanan bawah dengan kemudi luar (Ekspresif). Sosok 'Magnet Sosial' dengan kemampuan persuasi luar biasa dan kharisma tinggi yang menginspirasi orang lain. Ahli dalam memahami psikologi massa dan membangkitkan semangat tim melalui kata-kata. Energinya meluap saat berada di tengah banyak orang. Namun, tantangannya adalah sangat haus akan pengakuan and apresiasi, bisa menjadi manipulatif jika tanpa integritas, serta suasana hati yang sangat bergantung pada perlakuan orang lain terhadapnya.", successHabit: "Mantra: 'Pengaruh and Cinta'. Kunci Sukses: Popularitas and Relasi. Sukses jika memiliki banyak pengikut/jaringan luas. Latih kemandirian agar tidak terlalu bergantung pada pujian and tetap fokus target nyata.", relationship: "Membutuhkan apresiasi verbal and pengakuan emosional yang hangat.", communication: "Hangat, penuh ekspresi, persuasif, and mahir menggunakan intonasi suara untuk menyentuh emosi.", positif: "Kemampuan Persuasi, Kharisma Tinggi, Pandai Memotivasi.", negatif: "Haus Pengakuan, Manipulatif, Mudah Terpengaruh.", motivasi: "Berikan apresiasi publik (pujian di depan orang), jadikan juru bicara, and berikan dukungan emosional.", karir: "Politisi, Motivator, Public Relations, Sales Manager, Presenter/Trainer.", study: "Diskusi & Tanya Jawab interaktif, Mengajarkan Kembali materi, and menyukai pembelajaran Audio-Visual (storytelling)." },
    3: { title: "Si Praktisi Reflektif (The Discipline Specialist)", intisari: "Si Praktisi Reflektif adalah sosok yang paling membumi dalam keluarga besar Mindprint. Dominasi otak kiri bawah (Pilar Praktisi) yang digerakkan dari dalam ke luar (Reflektif) menjadikannya seorang pekerja keras yang sangat mandiri. Mereka adalah tipe orang yang lebih suka 'bertindak' daripada sekadar 'berwacana'. Jika ada pekerjaan yang membutuhkan ketelitian tinggi, stamina fisik yang kuat, and kepatuhan pada aturan, mereka adalah jagonya. Memiliki kekuatan utama pada memori yang tajam dalam merekam data, ketangguhan fisik yang stabil, serta kedisiplinan tinggi terhadap SOP. Namun, tantangannya adalah kecenderungan bersikap kaku, kurang spontan, and seringkali mengukur kesuksesan hanya dari angka atau aset yang terlihat (materialistis).", successHabit: "Mantra: 'Berkeringat and Menabung'. Kunci Sukses: Fokus pada spesialisasi. Jangan menjadi Palugada. Pilihlah satu bidang, tekuni sampai menjadi ahli (specialist), and pastikan ada aktivitas fisik rutin untuk menjaga mood tetap stabil.", relationship: "Membangun kepercayaan melalui konsistensi and kejujuran berbasis fakta.", communication: "To-the-point, singkat, and berbasis fakta. Tidak menyukai basa-basi yang terlalu panjang.", positif: "Disiplin Tinggi, Memori Tajam, Tangguh Fisik.", negatif: "Terlalu Kaku, Materialistis, Kurang Spontan.", motivasi: "Berikan instruksi yang jelas, target realistis, serta apresiasi berupa aset atau jaminan keamanan materi.", karir: "Akuntan, Manajer Operasional, Atlet, Teknisi, Perbankan.", study: "Metode Menghafal & Pengulangan teks/prosedur, Visual-Kinestetik (contoh nyata & praktik langsung), serta latihan mandiri di tempat tenang." },
    4: { title: "Si Praktisi Ekspresif (The Dynamic Performer)", intisari: "Si Praktisi Ekspresif memiliki mesin kecerdasan Pilar Praktisi namun dengan kemudi Ekspresif, di mana energi dipicu oleh tantangan luar, interaksi sosial, and suasana ramai. Mereka adalah tipe orang yang paling gesit, senang berkompetisi, and memiliki kemampuan menikmati hidup dengan panca indra secara maksimal. Memiliki kelincahan and respon lapangan yang cepat serta kemampuan teknis motorik yang hebat. Namun, tantangannya adalah mudah merasa bosan jika suasana monoton, cenderung boros karena sangat menikmati kenyamanan fisik, serta terkadang terburu-buru mengambil tindakan sebelum memikirkan konsekuensi jangka panjang.", successHabit: "Mantra: 'Tantangan adalah Energi'. Kunci Sukses: Skala and Persaingan. Sukses jika berada dalam lingkungan kompetitif. Berikan target atau kuota, maka tenaga akan melipat ganda. Harus 'berkeringat' untuk mendapatkan kemakmuran.", relationship: "Mudah bergaul, membawa suasana ceria, and menghargai hadiah fisik.", communication: "Ekspresif, menggunakan bahasa tubuh yang kuat, and antusias pada hasil nyata.", positif: "Lincah & Cepat, Sportif, Menyenangkan (Easy Going).", negatif: "Cepat Bosan, Boros, Terburu-buru.", motivasi: "Berikan tantangan kompetitif, bonus instan, serta lingkungan kerja yang dinamis and mobilitas tinggi.", karir: "Sales/Marketing, Atlet Profesional, Chef, Pilot, Polisi/Militer.", study: "Praktik Lapangan langsung (bukan sekadar buku), Belajar Kelompok untuk memicu keaktifan otak, and Metode Demonstrasi (modelling)." },
    5: { title: "Si Empati Reflektif (The Principled Soul)", intisari: "Si Empati Reflektif didominasi otak kanan bawah dengan kemudi hati yang sangat kuat (Reflektif). Sosok paling idealis yang digerakkan oleh perasaan and prinsip hidup. Memiliki integritas and loyalitas luar biasa pada janji, peka rasa terhadap suasana hati orang lain, and menjadi penyejuk tim yang berkonflik. Selalu mencari 'makna' atau nilai ibadah di balik pekerjaan. Namun, tantangannya adalah mudah tersinggung (baper) terhadap kritik profesional, cenderung memendam perasaan yang bisa menjadi bom waktu emosional, serta bersikap subjektif jika sudah menyangkut orang yang disayangi.", successHabit: "Mantra: 'Cinta and Keyakinan'. Kunci Sukses: Fokus pada pelayanan and pembangunan karakter. Sukses jika merasa dicintai and dihargai. Latih ketegasan agar perasaan tidak menghalangi profesionalitas.", relationship: "Mencari kesetiaan murni and koneksi jiwa (soulmate) yang mendalam.", communication: "Lembut, mendalam, tulus, and sangat menjaga perasaan lawan bicara.", positif: "Integritas & Loyalitas, Kepekaan Rasa, Pembawa Ketenangan.", negatif: "Mudah Tersinggung (Baper), Tertutup, Subjektif.", motivasi: "Sentuh sisi spiritual/makna kerja, berikan lingkungan harmonis, serta perhatian personal.", karir: "Psikolog, Guru/Dosen, Penulis Puisi, Aktivis Kemanusiaan, Coach.", study: "Sentuhan Emosional (suka dengan pengajarnya), Audio-Mood (suasana tenang), and lingkungan belajar yang harmonis." },
    6: { title: "Si Kreatif Ekspresif (The Trendsetter & Entrepreneur)", intisari: "Si Kreatif Ekspresif didominasi otak kanan atas dengan kemudi luar (Ekspresif). Sosok paling optimis, penuh antusiasme, and selalu terlihat 'kekinian'. Memiliki intuisi bisnis yang sangat tajam dalam melihat peluang keuntungan (money making sense) and inovatif dalam menyelesaikan masalah. Hebat dalam menularkan visi kepada tim agar percaya pada mimpi besar. Namun, tantangannya adalah kurang fokus karena terlalu banyak ide (mudah pindah mainan), meremehkan detail administrasi, serta berani mengambil risiko tinggi tanpa perhitungan matang.", successHabit: "Mantra: 'Inovasi and Investasi'. Kunci Sukses: Networking and Berani Gagal. Sukses jika berada di lingkungan dinamis. Latih ketekunan untuk menuntaskan satu proyek besar sebelum pindah ke proyek lain.", relationship: "Membutuhkan dukungan penuh terhadap mimpi-mimpi besar and ide kreatifnya.", communication: "Ekspresif, penuh semangat, menggunakan analogi masa depan, and sangat persuasif.", positif: "Intuisi Bisnis Kuat, Inovatif & Out of the Box, Penyebar Antusiasme.", negatif: "Kurang Fokus, Abaikan Detail, Risiko Terlalu Tinggi.", motivasi: "Libatkan dalam proyek inovatif, berikan panggung presentasi, serta insentif berbasis profit.", karir: "Pengusaha, Marketing, Desainer, Sutradara, Investor, Konsultan Kreatif.", study: "Brainstorming bebas, penggunaan Visualisasi & Gambar (sketsa), serta belajar dari kasus sukses inovator dunia." },
    7: { title: "Si Kreatif Reflektif (The Quality Visionary)", intisari: "Si Kreatif Reflektif didominasi otak kanan atas (Pilar Kreatif) dengan kemudi internal (Reflektif). Sosok pemikir abstrak yang sangat mementingkan orisinalitas and kesempurnaan ide melampaui zaman. Cenderung tenang di luar namun memiliki dunia imajinasi yang sangat luas and mendalam. Sangat kuat dalam abstraksi filosofis and strategi jangka panjang. Namun, sering merasa tidak nyambung dengan orang awam (eksklusif), terlalu idealis hingga sulit membumikan ide menjadi aksi praktis, serta skeptis terhadap hal yang tidak memiliki landasan filosofis jelas.", successHabit: "Mantra: 'Kualitas and Ilmu'. Kunci Sukses: Menjadi ahli di bidang yang spesifik and unik. Kuncinya adalah 'Inovasi atau Mati'. Harus berani membumikan idenya agar bisa dinikmati orang banyak.", relationship: "Sangat selektif dalam memilih lingkungan sosial and sangat menghargai privasi pikiran.", communication: "Puitis, penuh simbol, filosofis, and cenderung selektif dalam memilih lawan bicara.", positif: "Visioner Jangka Panjang, Perfeksionis Ide, Abstraksi Kuat.", negatif: "Eksklusif/Menyendiri, Terlalu Idealis, Skeptis.", motivasi: "Hargai orisinalitas idenya, berikan waktu and ruang privat, serta dukung visi jangka panjangnya.", karir: "Penulis, Peneliti, Arsitek, Strategist Bisnis, Seniman Konseptual.", study: "Peta Konsep (Mind Mapping), penggunaan Analogi & Metafora (simbol), serta membaca literatur yang membahas 'Why' secara mendalam." },
    8: { title: "Si Konseptor Ekspresif (The Great Manager)", intisari: "Si Konseptor Ekspresif didominasi otak kiri atas yang digerakkan oleh stimulasi dari luar (Ekspresif). Mereka adalah sosok 'Komandan' yang lahir untuk memimpin, sangat suka mengatur, and membangun struktur organisasi yang luas. Energinya muncul saat memiliki kekuasaan atau kendali atas proyek besar. Memiliki kemampuan manajerial hebat dalam delegasi serta berorientasi kuat pada target and efisiensi hasil akhir. Namun, tantangannya adalah kecenderungan bersikap dominan/otoriter (bossy), kurang sabar pada orang yang lambat, serta terkadang kaku pada hirarki jabatan.", successHabit: "Mantra: 'Otoritas and Ekspansi'. Kunci Sukses: Memperluas jaringan and kekuasaan. Sukses jika diberikan tanggung jawab besar mengelola banyak orang. Latih kemampuan melipatgandakan aset and SDM.", relationship: "Mendukung status sosial and pencapaian karir dalam hubungan.", communication: "Lugas, memerintah (namun logis), and sangat menghargai struktur bicara yang sistematis.", positif: "Manajerial Hebat, Tegas & Berwibawa, Organisatoris.", negatif: "Dominan/Otoriter, Kurang Sabar, Kaku pada Hirarki.", motivasi: "Berikan otoritas, tanggung jawab memimpin tim besar, serta pengakuan atas jabatan and prestasi.", karir: "CEO/Direktur, Manajer Proyek, Politisi, Hakim, Pengusaha Skala Korporasi.", study: "Diskusi Terstruktur (debat logis), Menjadi Pengajar (menjelaskan kembali materi), and mempelajari Studi Kasus Bisnis besar." },
    9: { title: "Si Adaptif (The Responsive Generalist)", intisari: "Si Adaptif didominasi oleh Otak Tengah yang bersifat netral and responsif tanpa kemudi dominan. Sosok yang paling serba bisa, cinta damai, and memiliki kecepatan refleks luar biasa baik fisik maupun mental. Menjadi 'jembatan' penghubung berbagai tipe kepribadian karena sifatnya yang fleksibel and rela berkorban demi harmoni tim. Namun, tantangannya adalah sulit menentukan prioritas atau tujuan hidup spesifik (sulit fokus), trauma terhadap konflik (cenderung menghindari masalah), serta mudah terdistraksi sehingga terlihat kurang memiliki prinsip teguh.", successHabit: "Mantra: 'Ketenangan and Kebermanfaatan'. Kunci Sukses: Kebahagiaan and Spiritualitas. Sukses jika hati tenang and merasa berguna bagi banyak orang. Latih ketuntasan (finishing) agar pekerjaan tidak hanya cepat di awal.", relationship: "Sangat tulus, tidak suka konflik, and pembawa harmoni bagi sekitar.", communication: "Spontan, lugas, namun tetap santun. Cenderung tidak suka perdebatan panjang.", positif: "Kecepatan Belajar (Generalis), Respon Refleks Cepat, Cinta Damai.", negatif: "Sulit Fokus, Trauma Konflik, Mudah Terdistraksi.", motivasi: "Berikan ketenangan pikiran, hindari konflik menekan, and yakinkan bahwa kehadirannya sangat bermanfaat.", karir: "Pekerja Sosial, Seniman Multitalenta, Bagian Umum (GA), Relawan, Medis Darurat.", study: "Suasana Tenang (Relaksasi), Belajar melalui Ringkasan (ikhtisar/big picture), and Belajar Sambil Melakukan." }
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

// LOGIKA MUNCULKAN PANEL TWIN (METODE PAKSA)
document.getElementById('is-twin').addEventListener('change', function() {
    const panel = document.getElementById('twin-panel');
    if (this.checked) {
        panel.setAttribute('style', 'display: block !important; text-align: left; margin: 10px 0;');
    } else {
        panel.setAttribute('style', 'display: none !important;');
    }
});

document.getElementById('unknown-time').addEventListener('change', function() {
    document.getElementById('birth-hour').disabled = this.checked;
    document.getElementById('birth-minute').disabled = this.checked;
});

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
    
    let resNum = calculateNumerology(birthDate);
    const isTwin = document.getElementById('is-twin').checked;

    if (isTwin) {
        const isTimeUnknown = document.getElementById('unknown-time').checked;
        const order = document.getElementById('twin-order').value;
        if (!isTimeUnknown) {
            const h = parseInt(document.getElementById('birth-hour').value) || 0;
            const m = parseInt(document.getElementById('birth-minute').value) || 0;
            resNum = (resNum + (h + m)) % 9 || 9;
        }
        if (order === 'adik') {
            const pairMap = { 1: 8, 8: 1, 3: 4, 4: 3, 5: 2, 2: 5, 7: 6, 6: 7, 9: 9 };
            resNum = pairMap[resNum] || resNum;
        }
    }

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

    setTimeout(() => {
        const opt = {
            margin: 0,
            filename: `Laporan_MindPrint_${userName}.pdf`,
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 2, useCORS: true, scrollY: 0, scrollX: 0, letterRendering: true, windowWidth: 1122, windowHeight: 794 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
        };
        html2pdf().set(opt).from(el).toPdf().get('pdf').then(function (pdf) {
            const totalPages = pdf.internal.getNumberOfPages();
            for (let i = totalPages; i > 1; i--) { pdf.deletePage(i); }
        }).save().then(() => {
            el.style.display = 'none';
        });
    }, 500); 
});

document.getElementById('restart-button').addEventListener('click', () => location.reload());
window.onload = populateDateFields;
