/**
 * RE-SYNCHRONIZED FINAL SCRIPT - ARAYA CONSULTING
 */
const mindprintDescriptions = {
    1: { 
        title: "Si Praktisi Reflektif", 
        intisari: "Sosok membumi, mandiri, dan lebih suka bertindak daripada berwacana. Ahli dalam pekerjaan yang membutuhkan ketelitian tinggi dan kepatuhan pada aturan (SOP).", 
        successHabit: "Fokus pada spesialisasi bidang tertentu dan menjaga aktivitas fisik rutin untuk stabilitas mood.", 
        relationship: "Membangun kepercayaan melalui konsistensi dan mencari kestabilan jangka panjang.", 
        communication: "Lugas, singkat, dan berbasis fakta. Tidak menyukai basa-basi yang terlalu panjang.", 
        study: "Metode menghafal dan pengulangan prosedur secara mandiri di lingkungan yang tenang.", 
        positif: "Memori tajam, tangguh, disiplin.", 
        negatif: "Kaku, kurang spontan.", 
        karir: "Akuntan, Manajer Ops, Atlet, Teknisi." 
    },
    2: { 
        title: "Si Praktisi Ekspresif", 
        intisari: "Pemain utama yang lincah di panggung aksi. Energinya dipicu tantangan luar dan interaksi sosial. Sangat gesit, kompetitif, dan menikmati hidup.", 
        successHabit: "Sukses dalam lingkungan kompetitif dengan target atau kuota yang jelas.", 
        relationship: "Mudah bergaul, membawa suasana ceria, dan menghargai hadiah fisik.", 
        communication: "Ekspresif, menggunakan bahasa tubuh kuat, dan antusias pada hasil nyata.", 
        study: "Praktik lapangan, belajar kelompok, dan metode peniruan (modelling) secara langsung.", 
        positif: "Lincah, sportif, responsif.", 
        negatif: "Cepat bosan, ceroboh.", 
        karir: "Marketing, Chef, Pilot, Polisi." 
    },
    3: { 
        title: "Si Konseptor Reflektif", 
        intisari: "Individu mandiri dan intelektual. Sangat logis, objektif, dan perfeksionis dalam validasi data. Segalanya harus melewati filter logika.", 
        successHabit: "Mengasah keahlian teknis dan belajar ilmu baru guna menjaga otoritas dalam sistem.", 
        relationship: "Eksklusif dalam memilih teman dan sangat menghargai privasi pikiran.", 
        communication: "Formal, data-driven, dan argumentatif. Gunakan data konkret untuk meyakinkan.", 
        study: "Menganalisis skema besar, riset mandiri, dan memecahkan teka-teki logika kompleks.", 
        positif: "Analisis dalam, mandiri, objektif.", 
        negatif: "Kritis, dingin, kurang empati.", 
        karir: "Programmer, Ilmuwan, Konsultan, Peneliti." 
    },
    4: { 
        title: "Si Konseptor Ekspresif", 
        intisari: "Komandan yang lahir untuk memimpin. Ahli dalam mendelegasikan tugas, membangun struktur organisasi, dan berorientasi pada target.", 
        successHabit: "Memperluas jaringan kekuasaan dan melatih kemampuan melipatgandakan aset serta SDM.", 
        relationship: "Mendukung status sosial dan pencapaian karir dalam hubungan.", 
        communication: "Lugas, memerintah namun logis, dan menghargai struktur bicara sistematis.", 
        study: "Diskusi terstruktur, menjadi pengajar bagi orang lain, dan bedah studi kasus bisnis.", 
        positif: "Manajerial hebat, tegas, berwibawa.", 
        negatif: "Otoriter, dominan, kurang sabar.", 
        karir: "CEO, Direktur, Manajer Proyek." 
    },
    5: { 
        title: "Si Kreatif Reflektif", 
        intisari: "Pemikir abstrak dengan imajinasi luas. Visioner yang mementingkan orisinalitas dan kualitas ide melampaui zaman.", 
        successHabit: "Menjadi ahli di bidang unik melalui inovasi berkelanjutan dan pendalaman intelektual.", 
        relationship: "Sangat selektif dalam memilih lingkungan sosial dan menghargai privasi pikiran.", 
        communication: "Puitis, penuh simbol, filosofis, dan cenderung selektif memilih lawan bicara.", 
        study: "Mind mapping, penggunaan analogi, perumpamaan, serta membaca literatur mendalam.", 
        positif: "Visioner, perfeksionis ide, kreatif.", 
        negatif: "Menyendiri, terlalu idealis.", 
        karir: "Arsitek, Penulis, Strategist, Ilmuwan." 
    },
    6: { 
        title: "Si Kreatif Ekspresif", 
        intisari: "Trendsetter optimis dan antusias. Tajam melihat peluang keuntungan dan pandai menularkan visi kepada tim.", 
        successHabit: "Membangun networking luas dan melatih ketekunan untuk menuntaskan satu proyek besar.", 
        relationship: "Membutuhkan dukungan penuh terhadap mimpi-mimpi besar dan ide kreatifnya.", 
        communication: "Ekspresif, penuh semangat, dan persuasif dengan analogi masa depan.", 
        study: "Brainstorming bebas, stimulasi visual, dan mempelajari kisah sukses tokoh inovator.", 
        positif: "Intuisi bisnis, inovatif, antusias.", 
        negatif: "Kurang fokus, risiko tanpa perhitungan.", 
        karir: "Pengusaha, Investor, Desainer, Kreator." 
    },
    7: { 
        title: "Si Empati Reflektif", 
        intisari: "Pribadi idealis yang digerakkan oleh hati. Memiliki integritas tinggi, setia pada janji, dan pembawa ketenangan dalam tim.", 
        successHabit: "Fokus pada pelayanan dan pembangunan karakter melalui integritas antara batin dan perbuatan.", 
        relationship: "Mencari kesetiaan murni dan koneksi jiwa (soulmate) yang mendalam.", 
        communication: "Lembut, mendalam, tulus, dan sangat menjaga perasaan lawan bicara.", 
        study: "Sentuhan emosional, audio-mood, dan belajar dalam suasana yang harmonis.", 
        positif: "Integritas, peka rasa, pembawa tenang.", 
        negatif: "Mudah tersinggung, subjektif.", 
        karir: "Psikolog, Guru, Coach, Aktivis." 
    },
    8: { 
        title: "Si Empati Ekspresif", 
        intisari: "Magnet sosial dengan kharisma tinggi. Ahli dalam memahami psikologi massa, persuasi, dan memotivasi orang lain.", 
        successHabit: "Membangun relasi luas dan melatih kemandirian agar tidak haus akan pujian luar.", 
        relationship: "Membutuhkan apresiasi verbal dan pengakuan emosional yang hangat.", 
        communication: "Hangat, persuasif, dan mahir menggunakan intonasi untuk menyentuh emosi.", 
        study: "Diskusi interaktif, tanya jawab, dan mengajarkan kembali materi kepada orang lain.", 
        positif: "Kharismatik, inspiratif, networking.", 
        negatif: "Manipulatif, mudah terpengaruh.", 
        karir: "Politisi, Motivator, PR, Sales Manager." 
    },
    9: { 
        title: "Si Adaptif", 
        intisari: "Generalis responsif dan cinta damai. 'Jembatan' fleksibel yang mampu menghubungkan pilar lain secara naluriah.", 
        successHabit: "Menjaga spiritualitas dan melatih ketuntasan (finishing) dalam setiap pekerjaan.", 
        relationship: "Sangat tulus, menghindari konflik, dan pembawa harmoni bagi sekitar.", 
        communication: "Spontan, lugas, santun, dan menghindari perdebatan panjang.", 
        study: "Mempelajari ringkasan (ikhtisar) gambar besar dalam suasana yang rileks.", 
        positif: "Refleks cepat, responsif, mediator.", 
        negatif: "Sulit fokus, trauma konflik.", 
        karir: "Pekerja Sosial, Seniman, Medis, GA." 
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

// WAJIB DIPANGGIL DI AKHIR SCRIPT
populateDateFields();
