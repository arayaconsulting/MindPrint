/** MINDPRINT SYSTEM - ARAYA CONSULTING | VERSION 41.0 | CERTIFICATE LAYOUT LOCK */
'use strict';

// Seluruh 9 profil dari v40.0 tetap dipertahankan.
const mindprintDescriptions = {
  1: {
    title: 'Si Konseptor Reflektif (The Master Strategist)',
    intisari: 'Si Konseptor Reflektif adalah tipe yang paling mandiri dan mendalam secara intelektual dengan dominasi otak kiri atas (Pilar Konseptor) dan kemudi Reflektif. Mereka adalah individu yang sangat logis, objektif, dan perfeksionis dalam hal kebenaran data; segalanya harus melewati filter logika yang ketat. Hebat dalam analisis mendalam membedah masalah kompleks dan konsisten menjaga standar kualitas tinggi. Namun, sering terlihat dingin atau terlalu kritis mengoreksi kesalahan orang lain secara tajam, sulit bekerja dalam tim yang berantakan, serta kurang empati karena terlalu fokus pada fakta objektif.',
    successHabit: "Mantra: 'Logika dan Otoritas'. Kunci Sukses: Keahlian Teknis dan Kekuasaan. Sukses jika memiliki otoritas atau kendali atas sistem. Terus asah otak dengan belajar ilmu-ilmu baru (ta'allum) agar posisi tawar tetap tinggi.",
    relationship: 'Eksklusif dalam memilih teman dan sangat menghargai privasi pikiran.',
    communication: 'Formal, data-driven, dan sangat argumentatif. Gunakan data konkret untuk meyakinkan, bukan perasaan.',
    positif: 'Analisis Mendalam, Kemandirian Tinggi, Objektivitas.',
    negatif: 'Terlalu Kritis, Dingin, Kurang Empati.',
    motivasi: 'Berikan akses terhadap data/ilmu baru, hargai kemandiriannya, dan libatkan dalam perancangan sistem logis.',
    karir: 'Programmer, Ilmuwan, Akuntan Publik, Peneliti, Ahli Strategi.',
    study: 'Belajar melalui Skema dan Struktur (bagan/tabel), studi literatur mandiri yang mendalam, serta Problem Solving kasus logika.'
  },
  2: {
    title: 'Si Empati Ekspresif (The Charismatic Leader)',
    intisari: "Si Empati Ekspresif didominasi otak kanan bawah dengan kemudi luar (Ekspresif). Sosok 'Magnet Sosial' dengan kemampuan persuasi luar biasa dan kharisma tinggi yang menginspirasi orang lain. Ahli dalam memahami psikologi massa dan membangkitkan semangat tim melalui kata-kata. Energinya meluap saat berada di tengah banyak orang. Namun, tantangannya adalah sangat haus akan pengakuan dan apresiasi, bisa menjadi manipulatif jika tanpa integritas, serta suasana hati yang sangat bergantung pada perlakuan orang lain terhadapnya.",
    successHabit: "Mantra: 'Pengaruh dan Cinta'. Kunci Sukses: Popularitas dan Relasi. Sukses jika memiliki banyak pengikut/jaringan luas. Latih kemandirian agar tidak terlalu bergantung pada pujian dan tetap fokus target nyata.",
    relationship: 'Membutuhkan apresiasi verbal dan pengakuan emosional yang hangat.',
    communication: 'Hangat, penuh ekspresi, persuasif, dan mahir menggunakan intonasi suara untuk menyentuh emosi.',
    positif: 'Kemampuan Persuasi, Kharisma Tinggi, Pandai Memotivasi.',
    negatif: 'Haus Pengakuan, Manipulatif, Mudah Terpengaruh.',
    motivasi: 'Berikan apresiasi publik (pujian di depan orang), jadikan juru bicara, dan berikan dukungan emosional.',
    karir: 'Politisi, Motivator, Public Relations, Sales Manager, Presenter/Trainer.',
    study: 'Diskusi & Tanya Jawab interaktif, Mengajarkan Kembali materi, dan menyukai pembelajaran Audio-Visual (storytelling).'
  },
  3: {
    title: 'Si Praktisi Reflektif (The Discipline Specialist)',
    intisari: "Si Praktisi Reflektif adalah sosok yang paling membumi dalam keluarga besar Mindprint. Dominasi otak kiri bawah (Pilar Praktisi) yang digerakkan dari dalam ke luar (Reflektif) menjadikannya seorang pekerja keras yang sangat mandiri. Mereka adalah tipe orang yang lebih suka 'bertindak' daripada sekadar 'berwacana'. Jika ada pekerjaan yang membutuhkan ketelitian tinggi, stamina fisik yang kuat, dan kepatuhan pada aturan, mereka adalah jagonya. Memiliki kekuatan utama pada memori yang tajam dalam merekam data, ketangguhan fisik yang stabil, serta kedisiplinan tinggi terhadap SOP. Namun, tantangannya adalah kecenderungan bersikap kaku, kurang sulit, dan seringkali mengukur kesuksesan hanya dari angka atau aset yang terlihat (materialistis).",
    successHabit: "Mantra: 'Berkeringat dan Menabung'. Kunci Sukses: Fokus pada spesialisasi. Jangan menjadi Palugada. Pilihlah satu bidang, tekuni sampai menjadi ahli (specialist), dan pastikan ada aktivitas fisik rutin untuk menjaga mood tetap stabil.",
    relationship: 'Membangun kepercayaan melalui konsistensi dan kejujuran berbasis fakta.',
    communication: 'To-the-point, singkat, dan berbasis fakta. Tidak menyukai basa-basi yang terlalu panjang.',
    positif: 'Disiplin Tinggi, Memori Tajam, Tangguh Fisik.',
    negatif: 'Terlalu Kaku, Materialistis, Kurang Spontan.',
    motivasi: 'Berikan instruksi yang jelas, target realistis, serta apresiasi berupa aset atau jaminan keamanan materi.',
    karir: 'Akuntan, Manajer Operasional, Atlet, Teknisi, Perbankan.',
    study: 'Metode Menghafal & Pengulangan teks/prosedur, Visual-Kinestetik (contoh nyata & praktik langsung), serta latihan mandiri di tempat tenang.'
  },
  4: {
    title: 'Si Praktisi Ekspresif (The Dynamic Performer)',
    intisari: 'Si Praktisi Ekspresif memiliki mesin kecerdasan Pilar Praktisi namun dengan kemudi Ekspresif, di mana energi dipicu oleh tantangan luar, interaksi sosial, dan suasana ramai. Mereka adalah tipe orang yang paling gesit, senang berkompetisi, dan memiliki kemampuan menikmati hidup dengan panca indra secara maksimal. Memiliki kelincahan dan respon lapangan yang cepat serta kemampuan teknis motorik yang hebat. Namun, tantangannya adalah mudah merasa bosan jika suasana monoton, cenderung boros karena sangat menikmati kenyamanan fisik, serta terkadang terburu-buru mengambil tindakan sebelum memikirkan konsekuensi jangka panjang.',
    successHabit: "Mantra: 'Tantangan adalah Energi'. Kunci Sukses: Skala dan Persaingan. Sukses jika berada dalam lingkungan kompetitif. Berikan target atau kuota, maka tenaga akan melipat ganda. Harus 'berkeringat' untuk mendapatkan kemakmuran.",
    relationship: 'Mudah bergaul, membawa suasana ceria, dan menghargai hadiah fisik.',
    communication: 'Ekspresif, menggunakan bahasa tubuh yang kuat, dan antusias pada hasil nyata.',
    positif: 'Lincah & Cepat, Sportif, Menyenangkan (Easy Going).',
    negatif: 'Cepat Bosan, Boros, Terburu-buru.',
    motivasi: 'Berikan tantangan kompetitif, bonus instan, serta lingkungan kerja yang dinamis dan mobilitas tinggi.',
    karir: 'Sales/Marketing, Atlet Profesional, Chef, Pilot, Polisi/Militer.',
    study: 'Praktik Lapangan langsung (bukan sekadar buku), Belajar Kelompok untuk memicu keaktifan otak, dan Metode Demonstrasi (modelling).'
  },
  5: {
    title: 'Si Empati Reflektif (The Principled Soul)',
    intisari: "Si Empati Reflektif didominasi otak kanan bawah dengan kemudi hati yang sangat kuat (Reflektif). Sosok paling idealis yang digerakkan oleh perasaan dan prinsip hidup. Memiliki integritas dan loyalitas luar biasa pada janji, peka rasa terhadap suasana hati orang lain, dan menjadi penyejuk tim yang berkonflik. Selalu mencari 'makna' atau nilai ibadah di balik pekerjaan. Namun, tantangannya adalah mudah tersinggung (baper) terhadap kritik profesional, cenderung memendam perasaan yang bisa menjadi bom waktu emosional, serta bersikap subjektif jika sudah menyangkut orang yang disayangi.",
    successHabit: "Mantra: 'Cinta dan Keyakinan'. Kunci Sukses: Fokus pada pelayanan dan pembangunan karakter. Sukses jika merasa dicintai dan dihargai. Latih ketegasan agar perasaan tidak menghalangi profesionalitas.",
    relationship: 'Mencari kesetiaan murni dan koneksi jiwa (soulmate) yang mendalam.',
    communication: 'Lembut, mendalam, tulus, dan sangat menjaga perasaan lawan bicara.',
    positif: 'Integritas & Loyalitas, Kepekaan Rasa, Pembawa Ketenangan.',
    negatif: 'Mudah Tersinggung (Baper), Tertutup, Subjektif.',
    motivasi: 'Sentuh sisi spiritual/makna kerja, berikan lingkungan harmonis, serta perhatian personal.',
    karir: 'Psikolog, Guru/Dosen, Penulis Puisi, Aktivis Kemanusiaan, Coach.',
    study: 'Sentuhan Emosional (suka dengan pengajarnya), Audio-Mood (suasana tenang), dan lingkungan belajar yang harmonis.'
  },
  6: {
    title: 'Si Kreatif Ekspresif (The Trendsetter & Entrepreneur)',
    intisari: "Si Kreatif Ekspresif didominasi otak kanan atas dengan kemudi luar (Ekspresif). Sosok paling optimis, penuh antusiasme, dan selalu terlihat 'kekinian'. Memiliki intuisi bisnis yang sangat tajam dalam melihat peluang keuntungan (money making sense) dan inovatif dalam menyelesaikan masalah. Hebat dalam menularkan visi kepada tim agar percaya pada mimpi besar. Namun, tantangannya adalah kurang fokus karena terlalu banyak ide (mudah pindah mainan), meremehkan detail administrasi, serta berani mengambil risiko tinggi tanpa perhitungan matang.",
    successHabit: "Mantra: 'Inovasi dan Investasi'. Kunci Sukses: Networking dan Berani Gagal. Sukses jika berada di lingkungan dinamis. Latih ketekunan untuk menuntaskan satu proyek besar sebelum pindah ke proyek lain.",
    relationship: 'Membutuhkan dukungan penuh terhadap mimpi-mimpi besar dan ide kreatifnya.',
    communication: 'Ekspresif, penuh semangat, menggunakan analogi masa depan, dan sangat persuasif.',
    positif: 'Intuisi Bisnis Kuat, Inovatif & Out of the Box, Penyebar Antusiasme.',
    negatif: 'Kurang Fokus, Abaikan Detail, Risiko Terlalu Tinggi.',
    motivasi: 'Libatkan dalam proyek inovatif, berikan panggung presentasi, serta insentif berbasis profit.',
    karir: 'Pengusaha, Marketing, Desainer, Sutradara, Investor, Konsultan Kreatif.',
    study: 'Brainstorming bebas, penggunaan Visualisasi & Gambar (sketsa), serta belajar dari kasus sukses inovator dunia.'
  },
  7: {
    title: 'Si Kreatif Reflektif (The Quality Visionary)',
    intisari: 'Si Kreatif Reflektif didominasi otak kanan atas (Pilar Kreatif) dengan kemudi internal (Reflektif). Sosok pemikir abstrak yang sangat mementingkan orisinalitas dan kesempurnaan ide melampaui zaman. Cenderung tenang di luar namun memiliki dunia imajinasi yang sangat luas dan mendalam. Sangat kuat dalam abstraksi filosofis dan strategi jangka panjang. Namun, sering merasa tidak nyambung dengan orang awam (eksklusif), terlalu idealis hingga sulit membumikan ide menjadi aksi praktis, serta skeptis terhadap hal yang tidak memiliki landasan filosofis jelas.',
    successHabit: "Mantra: 'Kualitas dan Ilmu'. Kunci Sukses: Menjadi ahli di bidang yang spesifik dan unik. Kuncinya adalah 'Inovasi atau Mati'. Harus berani membumikan idenya agar bisa dinikmati orang banyak.",
    relationship: 'Sangat selektif dalam memilih lingkungan sosial dan sangat menghargai privasi pikiran.',
    communication: 'Puitis, penuh simbol, filosofis, dan cenderung selektif dalam memilih lawan bicara.',
    positif: 'Visioner Jangka Panjang, Perfeksionis Ide, Abstraksi Kuat.',
    negatif: 'Eksklusif/Menyendiri, Terlalu Idealis, Skeptis.',
    motivasi: 'Hargai orisinalitas idenya, berikan waktu dan ruang privat, serta dukung visi jangka panjangnya.',
    karir: 'Penulis, Peneliti, Arsitek, Strategist Bisnis, Seniman Konseptual.',
    study: "Peta Konsep (Mind Mapping), penggunaan Analogi & Metafora (simbol), serta membaca literatur yang membahas 'Why' secara mendalam."
  },
  8: {
    title: 'Si Konseptor Ekspresif (The Great Manager)',
    intisari: "Si Konseptor Ekspresif didominasi otak kiri atas yang digerakkan oleh stimulasi dari luar (Ekspresif). Mereka adalah sosok 'Komandan' yang lahir untuk memimpin, sangat suka mengatur, dan membangun struktur organisasi yang luas. Energinya muncul saat memiliki kekuasaan atau kendali atas proyek besar. Memiliki kemampuan manajerial hebat dalam delegasi serta berorientasi kuat pada target dan efisiensi hasil akhir. Namun, tantangannya adalah kecenderungan bersikap dominan/otoriter (bossy), kurang sabar pada orang yang lambat, serta terkadang kaku pada hirarki jabatan.",
    successHabit: "Mantra: 'Otoritas dan Ekspansi'. Kunci Sukses: Memperluas jaringan dan kekuasaan. Sukses jika diberikan tanggung jawab besar mengelola banyak orang. Latih kemampuan melipatgandakan aset dan SDM.",
    relationship: 'Mendukung status sosial dan pencapaian karir dalam hubungan.',
    communication: 'Lugas, memerintah (namun logis), dan sangat menghargai struktur bicara yang sistematis.',
    positif: 'Manajerial Hebat, Tegas & Berwibawa, Organisatoris.',
    negatif: 'Dominan/Otoriter, Kurang Sabar, Kaku pada Hirarki.',
    motivasi: 'Berikan otoritas, tanggung jawab memimpin tim besar, serta pengakuan atas jabatan dan prestasi.',
    karir: 'CEO/Direktur, Manajer Proyek, Politisi, Hakim, Pengusaha Skala Korporasi.',
    study: 'Diskusi Terstruktur (debat logis), Menjadi Pengajar (menjelaskan kembali materi), dan mempelajari Studi Kasus Bisnis besar.'
  },
  9: {
    title: 'Si Adaptif (The Responsive Generalist)',
    intisari: "Si Adaptif didominasi oleh Otak Tengah yang bersifat netral dan responsif tanpa kemudi dominan. Sosok yang paling serba bisa, cinta damai, dan memiliki kecepatan refleks luar biasa baik fisik maupun mental. Menjadi 'jembatan' penghubung berbagai tipe kepribadian karena sifatnya yang fleksibel dan rela berkorban demi harmoni tim. Namun, tantangannya adalah sulit menentukan prioritas atau tujuan hidup spesifik (sulit fokus), trauma terhadap konflik (cenderung menghindari masalah), serta mudah terdistraksi sehingga terlihat kurang memiliki prinsip teguh.",
    successHabit: "Mantra: 'Ketenangan dan Kebermanfaatan'. Kunci Sukses: Kebahagiaan dan Spiritualitas. Sukses jika hati tenang dan merasa berguna bagi banyak orang. Latih ketuntasan (finishing) agar pekerjaan tidak hanya cepat di awal.",
    relationship: 'Sangat tulus, tidak suka konflik, dan pembawa harmoni bagi sekitar.',
    communication: 'Spontan, lugas, namun tetap santun. Cenderung tidak suka perdebatan panjang.',
    positif: 'Kecepatan Belajar (Generalis), Respon Refleks Cepat, Cinta Damai.',
    negatif: 'Sulit Fokus, Trauma Konflik, Mudah Terdistraksi.',
    motivasi: 'Berikan ketenangan pikiran, hindari konflik menekan, dan yakinkan bahwa kehadirannya sangat bermanfaat.',
    karir: 'Pekerja Sosial, Seniman Multitalenta, Bagian Umum (GA), Relawan, Medis Darurat.',
    study: 'Suasana Tenang (Relaksasi), Belajar melalui Ringkasan (ikhtisar/big picture), dan Belajar Sambil Melakukan.'
  }
};

const $ = id => document.getElementById(id);
const fingers = ['ibu jari', 'telunjuk', 'tengah', 'manis', 'kelingking'];
const MONTHS = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember'];
let currentFingerIndex = 0;
let userName = '';
let birthDate = '';
let isScanning = false;
let isSensorLocked = false;
let scanTimeout = null;
let finishTimeout = null;
let activePointerId = null;

function populateDateFields() {
  const d = $('day'), m = $('month'), y = $('year');
  d.innerHTML = '<option value="" disabled selected>Hari</option>';
  m.innerHTML = '<option value="" disabled selected>Bulan</option>';
  y.innerHTML = '<option value="" disabled selected>Tahun</option>';
  for (let i = 1; i <= 31; i++) d.add(new Option(String(i), String(i).padStart(2, '0')));
  MONTHS.forEach((mon, i) => m.add(new Option(mon, String(i + 1).padStart(2, '0'))));
  for (let i = new Date().getFullYear(); i >= 1950; i--) y.add(new Option(String(i), String(i)));
}

function isRealDate(date) {
  const [y, m, d] = date.split('-').map(Number);
  const v = new Date(y, m - 1, d);
  return v.getFullYear() === y && v.getMonth() + 1 === m && v.getDate() === d && v <= new Date();
}

$('is-twin').addEventListener('change', e => $('twin-panel').classList.toggle('hidden', !e.target.checked));
$('unknown-time').addEventListener('change', e => {
  $('birth-hour').disabled = e.target.checked;
  $('birth-minute').disabled = e.target.checked;
});

$('user-form').addEventListener('submit', e => {
  e.preventDefault();
  userName = $('user-name').value.trim().replace(/\s+/g, ' ');
  birthDate = `${$('year').value}-${$('month').value}-${$('day').value}`;
  if (!userName || !isRealDate(birthDate)) { alert('Mohon masukkan nama dan tanggal lahir yang valid.'); return; }
  if ($('is-twin').checked && !$('unknown-time').checked) {
    if ($('birth-hour').value === '' || $('birth-minute').value === '') {
      alert('Isi jam dan menit kelahiran, atau pilih Tidak tahu.'); return;
    }
    if (Number($('birth-hour').value) > 23 || Number($('birth-hour').value) < 0 || Number($('birth-minute').value) > 59 || Number($('birth-minute').value) < 0) {
      alert('Jam lahir tidak valid.'); return;
    }
  }
  currentFingerIndex = 0; isSensorLocked = false; isScanning = false;
  $('intro-container').classList.add('hidden');
  $('scan-container').classList.remove('hidden');
  $('scan-text').textContent = `Silakan tahan area gambar untuk simulasi ${fingers[0].toUpperCase()}.`;
});

const scanner = $('fingerprint-scanner');
function startScanning(e) {
  if (e) e.preventDefault();
  if (isScanning || isSensorLocked || $('scan-container').classList.contains('hidden')) return;
  isScanning = true;
  scanner.classList.add('scanning');
  $('scan-text').textContent = `Simulasi pola ${fingers[currentFingerIndex].toUpperCase()} sedang berlangsung...`;
  scanTimeout = setTimeout(finishScan, 3000);
}
function cancelScanning(e) {
  if (e) e.preventDefault();
  if (!isScanning) return;
  clearTimeout(scanTimeout);
  isScanning = false;
  scanner.classList.remove('scanning');
  $('scan-text').textContent = `Simulasi terhenti. Tahan kembali area gambar untuk ${fingers[currentFingerIndex].toUpperCase()}.`;
}
// Safari iOS: touch events harus dibatalkan secara eksplisit agar sentuhan lama
// tidak membuka pemilihan teks, magnifier, drag image, atau context menu.
// Touch dan mouse dipisah agar tidak terjadi double-trigger.
let lastTouchAt = -100000;
let touchId = null;
scanner.addEventListener('touchstart', e => {
  if (e.cancelable) e.preventDefault();
  if (e.touches.length !== 1 || isSensorLocked) return;
  lastTouchAt = Date.now();
  touchId = e.changedTouches[0].identifier;
  startScanning();
}, {passive:false});
scanner.addEventListener('touchend', e => {
  if (e.cancelable) e.preventDefault();
  if (touchId !== null && [...e.changedTouches].some(t => t.identifier === touchId)) {
    touchId = null;
    cancelScanning();
  }
}, {passive:false});
scanner.addEventListener('touchcancel', e => {
  if (e.cancelable) e.preventDefault();
  touchId = null; cancelScanning();
}, {passive:false});
scanner.addEventListener('mousedown', e => {
  if (Date.now() - lastTouchAt < 900 || e.button !== 0) return;
  startScanning(e);
});
window.addEventListener('mouseup', () => { if (Date.now() - lastTouchAt >= 900) cancelScanning(); });
// Setelah gesture touch berakhir, mouse compatibility events dapat tetap muncul.
scanner.addEventListener('contextmenu', e => e.preventDefault());
scanner.addEventListener('dragstart', e => e.preventDefault());
scanner.addEventListener('selectstart', e => e.preventDefault());
$('scan-container').addEventListener('contextmenu', e => e.preventDefault());
$('scan-container').addEventListener('selectstart', e => e.preventDefault());
scanner.addEventListener('keydown', e => {
  if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) startScanning(e);
});
scanner.addEventListener('keyup', e => { if (e.key === ' ' || e.key === 'Enter') cancelScanning(e); });

function finishScan() {
  if (!isScanning) return;
  isScanning = false;
  isSensorLocked = true;
  scanner.classList.remove('scanning');
  if (currentFingerIndex < fingers.length - 1) {
    const doneFinger = fingers[currentFingerIndex];
    currentFingerIndex++;
    $('scan-text').textContent = `SIMULASI ${doneFinger.toUpperCase()} SELESAI. Klik LANJUTKAN untuk jari berikutnya.`;
    $('next-finger-button').classList.remove('hidden');
  } else {
    $('scan-text').textContent = 'SIMULASI SELESAI. Menyiapkan profil...';
    finishTimeout = setTimeout(showResult, 700);
  }
}
$('next-finger-button').addEventListener('click', () => {
  $('next-finger-button').classList.add('hidden');
  isSensorLocked = false;
  $('scan-text').textContent = `Siap untuk simulasi ${fingers[currentFingerIndex].toUpperCase()}. Tahan area gambar.`;
});

function calculateNumerology(dateString) {
  const digits = dateString.replace(/-/g, '').split('').map(Number);
  let sum = digits.reduce((a, b) => a + b, 0);
  while (sum > 9) sum = String(sum).split('').reduce((a, d) => a + Number(d), 0);
  return sum || 9;
}

function determineProfile() {
  let resNum = calculateNumerology(birthDate);
  if ($('is-twin').checked) {
    if (!$('unknown-time').checked) {
      const h = Number($('birth-hour').value);
      const m = Number($('birth-minute').value);
      resNum = (resNum + h + m) % 9 || 9;
    }
    if ($('twin-order').value === 'adik') {
      const pairMap = {1:8,8:1,3:4,4:3,5:2,2:5,7:6,6:7,9:9};
      resNum = pairMap[resNum] || resNum;
    }
  }
  return mindprintDescriptions[resNum];
}

function put(id, value) { $(id).textContent = value || ''; }
function showResult() {
  $('scan-container').classList.add('hidden');
  $('result-container').classList.remove('hidden');
  const data = determineProfile();
  put('display-intisari', data.intisari);
  put('result-title', data.title);
  put('cert-name', userName);
  put('cert-result', data.title);
  put('cert-intisari', data.intisari);
  put('cert-motivasi', data.motivasi);
  put('cert-study', data.study);
  put('cert-success', data.successHabit);
  put('cert-relationship', data.relationship);
  put('cert-communication', data.communication);
  put('cert-karir', data.karir);
  put('cert-positif', data.positif);
  put('cert-negatif', data.negatif);
  const now = new Date();
  put('cert-date', now.toLocaleDateString('id-ID', {day:'numeric',month:'long',year:'numeric'}));
  // ID hanya untuk identifikasi berkas, bukan nomor sertifikat terverifikasi dari server.
  const random = (typeof crypto !== 'undefined' && crypto.getRandomValues)
    ? crypto.getRandomValues(new Uint32Array(1))[0] % 900000 + 100000
    : Math.floor(Math.random() * 900000 + 100000);
  put('cert-id', `MP/${now.getFullYear()}/${random}`);

  const payload = {
    nama: userName, tgl_lahir: birthDate,
    gol_darah: $('blood-type').value,
    hasil_tes: data.title,
    urutan_lahir: $('is-twin').checked ? $('twin-order').value : 'Bukan Kembar'
  };
  // Kirim data hanya jika fitur pencatatan diaktifkan; no-cors tidak membuktikan server berhasil menyimpan.
  if (window.MINDPRINT_ENABLE_SYNC !== false) {
    fetch('https://script.google.com/macros/s/AKfycbxQfvrjrmiqikcam3RZJLMqpfmYvKtm8awadV_GMTJ2yEhv-K7JUo5zns13lZHA01Eo/exec', {
      method:'POST', mode:'no-cors', body:JSON.stringify(payload)
    }).catch(err => console.warn('Pengiriman data gagal:', err));
  }
}

// PDF v42.2: satu tombol unduh PDF dan tata letak adaptif.
// Sertifikat tetap satu halaman; isi tidak boleh bertabrakan atau terpotong.
async function waitForImage(img) {
  if (img.complete && img.naturalWidth > 0) return;
  if (img.complete && img.naturalWidth === 0) throw new Error(`Gambar gagal dimuat: ${img.getAttribute('src')}`);
  await new Promise((resolve, reject) => {
    img.addEventListener('load', resolve, {once:true});
    img.addEventListener('error', () => reject(new Error(`Gambar gagal dimuat: ${img.getAttribute('src')}`)), {once:true});
  });
}
function setPdfStatus(message, error=false) {
  const target = $('pdf-status');
  target.textContent = message;
  target.classList.toggle('is-error', error);
}
// Perbesar teks ketika tersedia ruang; rapatkan seperlunya untuk uraian panjang.
// Tiap kolom diukur setelah terisi; jika terlalu panjang, ukuran diturunkan bertahap.
function fitCertificateText() {
  const cert = $('certificate-template');
  const colWrap = cert.querySelector('.cert-columns');
  const columns = [...cert.querySelectorAll('.cert-column')];
  const fits = () => {
    const bottom = colWrap.getBoundingClientRect().bottom - 2;
    return columns.every(col => {
      const sections = [...col.querySelectorAll('.cert-section')];
      return !sections.length || sections[sections.length - 1].getBoundingClientRect().bottom <= bottom;
    });
  };
  const presets = [
    [12.8, 12.2, 14, 1.40],
    [12.5, 12, 12, 1.38],
    [12.2, 11.8, 11, 1.37],
    [11.9, 11.6, 9, 1.36],
    [11.5, 11.4, 8, 1.34],
    [11.1, 11.2, 7, 1.33],
    [10.7, 11, 6, 1.32]
  ];
  for (const [body, heading, gap, line] of presets) {
    cert.style.setProperty('--body-size', body + 'px');
    cert.style.setProperty('--heading-size', heading + 'px');
    cert.style.setProperty('--section-gap', gap + 'px');
    cert.style.setProperty('--body-line', String(line));
    if (fits()) return true;
  }
  return fits();
}

function validateCertificate() {
  const el = $('certificate-template');
  if (!fitCertificateText()) throw new Error('Narasi terlalu panjang untuk satu halaman sertifikat.');
  const rect = el.getBoundingClientRect();
  if (Math.abs(rect.width - 1122) > 2 || Math.abs(rect.height - 794) > 2) {
    throw new Error('Ukuran sertifikat tidak sesuai A4 landscape.');
  }
  const columns = el.querySelector('.cert-columns').getBoundingClientRect();
  const footer = el.querySelector('.cert-footer').getBoundingClientRect();
  const header = el.querySelector('.cert-header').getBoundingClientRect();
  if (columns.top < header.bottom - 2 || columns.bottom > footer.top + 2) {
    throw new Error('Tata letak bertabrakan. Coba nama lebih singkat atau tinjau konten.');
  }
  // Periksa posisi akhir isi, bukan scrollHeight flexbox (yang berbeda antarbrowser).
  for (const section of el.querySelectorAll('.cert-section')) {
    if (section.getBoundingClientRect().bottom > columns.bottom + 3) {
      throw new Error('Narasi sertifikat terlalu panjang dan akan terpotong.');
    }
  }
  return el;
}
function suggestedFileName() {
  const safe = userName.replace(/[\\/:*?"<>|]/g,'').replace(/\s+/g,'_').slice(0,75) || 'Peserta';
  return `Laporan_MindPrint_${safe}.pdf`;
}
$('download-btn').addEventListener('click', async function () {
  const btn = this;
  const stage = $('certificate-stage');
  const previousLeft = stage.style.left;
  const oldText = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'MEMBUAT PDF...';
  setPdfStatus('Menyiapkan satu halaman sertifikat...');
  try {
    if (typeof window.html2canvas !== 'function' || !window.jspdf?.jsPDF) {
      throw new Error('Komponen pembuat PDF belum dimuat. Periksa koneksi internet lalu muat ulang halaman.');
    }
    const el = $('certificate-template');
    if (document.fonts?.ready) await document.fonts.ready;
    await Promise.all([...el.querySelectorAll('img')].map(waitForImage));
    stage.style.left = '0px';
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    validateCertificate();
    // 1.5x menghindari lonjakan memori kanvas pada Safari iPad.
    const canvas = await window.html2canvas(el, {
      scale:1.5, width:1122, height:794, backgroundColor:'#ffffff',
      useCORS:true, logging:false, scrollX:0, scrollY:0,
      windowWidth:1122,windowHeight:794
    });
    if (!canvas.width || !canvas.height) throw new Error('Gagal merender sertifikat.');
    const pdf = new window.jspdf.jsPDF({orientation:'landscape',unit:'mm',format:'a4',compress:true});
    const pdfW = pdf.internal.pageSize.getWidth();
    const pdfH = pdf.internal.pageSize.getHeight();
    pdf.addImage(canvas.toDataURL('image/jpeg',0.92),'JPEG',0,0,pdfW,pdfH);
    if (pdf.internal.getNumberOfPages() !== 1) throw new Error('PDF melebihi satu halaman.');
    pdf.save(suggestedFileName());
    setPdfStatus('PDF diproses. Di Safari, periksa menu Unduhan atau lembar berbagi jika file tidak langsung muncul.');
  } catch(err) {
    console.error('[MindPrint PDF v42]',err);
    setPdfStatus('Gagal membuat PDF: '+err.message,true);
  } finally {
    stage.style.left = previousLeft;
    btn.disabled = false;
    btn.textContent = oldText;
  }
});
$('restart-button').addEventListener('click', () => {
  clearTimeout(scanTimeout); clearTimeout(finishTimeout);
  location.reload();
});
populateDateFields();
