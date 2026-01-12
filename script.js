/**
 * RE-SYNCHRONIZED SCRIPT MINDPRINT - ARAYA CONSULTING
 * Berdasarkan Dokumen Metodologi MindPrint
 */
const mindprintDescriptions = {
    1: { 
        title: "Konseptor Reflektif", 
        intisari: "Desain genetik pemikir mandiri yang memproses informasi secara internal untuk menghasilkan konsep presisi. Memiliki kedalaman analisis dan objektivitas tinggi.", 
        successHabit: "Membangun sistem atau standar kerja (SOP) mendetail sesuai pilar Konseptor.", 
        relationship: "Menghargai privasi dan diskusi intelektual substansial.", 
        communication: "Berikan data logis dan hargai jeda waktunya untuk merenung.", 
        study: "Mendalami struktur, skema logika, dan pemahaman konsep secara mandiri.", 
        positif: "Analitis, objektif, disiplin, pakar.", 
        negatif: "Kaku, dingin, cenderung sinis terhadap ide tidak logis.", 
        karir: "Ilmuwan, Auditor, Programmer, Analis Data." 
    },
    2: { 
        title: "Empati Ekspresif", 
        intisari: "Memiliki desain penggerak massa. Mampu menginspirasi orang lain secara langsung melalui komunikasi persuasif dan kepekaan emosional tinggi.", 
        successHabit: "Menjaga jejaring sosial dan mengasah kemampuan komunikasi publik.", 
        relationship: "Menghargai apresiasi verbal dan membutuhkan pengakuan sosial tulus.", 
        communication: "Sentuh sisi emosionalnya terlebih dahulu sebelum membahas hal teknis.", 
        study: "Melalui diskusi kelompok, presentasi, dan mengajar kembali.", 
        positif: "Komunikatif, empatik, inspiratif.", 
        negatif: "Subjektif, moody, sangat bergantung pada pujian.", 
        karir: "Politisi, Motivator, Leader, HR Manager." 
    },
    3: { 
        title: "Praktisi Reflektif", 
        intisari: "Sosok dengan daya tahan kerja (stamina) luar biasa. Mengeksekusi tugas dengan ketelitian tinggi melalui perenungan mendalam.", 
        successHabit: "Menjaga stamina fisik dan ketertiban administrasi sebagai pilar kekuatan.", 
        relationship: "Mencari kestabilan jangka panjang dan bukti komitmen nyata.", 
        communication: "Gunakan instruksi praktis, konkret, dan langkah demi langkah.", 
        study: "Metode latihan berulang (drilling) dan penguasaan data detail.", 
        positif: "Teliti, gigih, produktif, loyal.", 
        negatif: "Kaku, sulit adaptasi cepat, terlalu prosedural.", 
        karir: "Atlet, Manajer Operasional, Akuntan." 
    },
    4: { 
        title: "Praktisi Ekspresif", 
        intisari: "Eksekutor lapangan yang cekatan dengan naluri bisnis tajam. Memiliki keberanian besar untuk mengambil peluang segera.", 
        successHabit: "Segera mengeksekusi peluang bisnis tanpa menunda di tahap teori.", 
        relationship: "Senang tantangan baru dan menghargai bukti fisik nyata.", 
        communication: "Langsung pada manfaat praktis dan keuntungan nyata.", 
        study: "Metode 'Learning by Doing' dan simulasi langsung di lapangan.", 
        positif: "Cekatan, gesit, berani, dermawan.", 
        negatif: "Impulsif, ceroboh administrasi, cenderung boros.", 
        karir: "Pengusaha, Marketing, Kontraktor." 
    },
    5: { 
        title: "Empati Reflektif", 
        intisari: "Bergerak berdasarkan panggilan hati nurani dan integritas batin. Sangat setia pada prinsip hidup dan kepekaan rasa mendalam.", 
        successHabit: "Menjaga keselarasan antara perbuatan harian dengan panggilan jiwa.", 
        relationship: "Mencari koneksi jiwa (soulmate) dan kesetiaan murni.", 
        communication: "Gunakan pendekatan personal yang lembut dan hargai prinsipnya.", 
        study: "Mencari makna filosofis dari setiap ilmu dalam suasana tenang.", 
        positif: "Setia, tulus, prinsipil, penuh integritas.", 
        negatif: "Sangat sensitif, mudah memendam kekecewaan, tertutup.", 
        karir: "Psikolog, Penulis, Konselor, Aktivis." 
    },
    6: { 
        title: "Kreatif Ekspresif", 
        intisari: "Inovator yang haus akan ide baru. Melihat peluang visioner dan tidak menyukai rutinitas yang mengekang kebebasan beride.", 
        successHabit: "Terus memperbarui wawasan dan mencari lingkungan pendukung visi.", 
        relationship: "Membutuhkan pasangan yang mampu mendukung mimpi besar.", 
        communication: "Beri ruang eksplorasi ide dan bicarakan visi masa depan.", 
        study: "Gunakan visualisasi, mind mapping, dan eksplorasi kreatif.", 
        positif: "Optimis, visioner, penuh ide, kreatif.", 
        negatif: "Mudah bosan, tidak konsisten, proyek sering tidak tuntas.", 
        karir: "Inovator, Arsitek, Desainer, Pakar Strategi." 
    },
    7: { 
        title: "Kreatif Reflektif", 
        intisari: "Perancang strategi perfeksionis yang bekerja di balik layar untuk menyusun rencana besar dengan standar kualitas tinggi.", 
        successHabit: "Menyusun Master Plan jangka panjang yang terstruktur dan detail.", 
        relationship: "Sangat selektif dalam memilih lingkungan dan menghargai privasi.", 
        communication: "Bicara standar kualitas tinggi dan hargai risetnya.", 
        study: "Menganalisis konsep abstrak dan riset mandiri mendalam.", 
        positif: "Strategis, perfeksionis, sangat visioner.", 
        negatif: "Sangat tertutup, lambat beraksi karena perfeksionis.", 
        karir: "Peneliti, Detektif, Konseptor, Strategist." 
    },
    8: { 
        title: "Konseptor Ekspresif", 
        intisari: "Pengelola sistem yang tegas. Efektif mengatur sumber daya dan memastikan organisasi berjalan sesuai target objektif.", 
        successHabit: "Mendelegasikan tugas teknis untuk fokus pada kebijakan sistem.", 
        relationship: "Mencari hubungan logis yang mendukung pencapaian karir.", 
        communication: "Bicara langsung pada poin (result-oriented) dan otoritas.", 
        study: "Mengorganisir bahan belajar ke struktur sistem efisien.", 
        positif: "Tegas, objektif, pemimpin yang kuat.", 
        negatif: "Otoriter, dominan, kurang peka emosional.", 
        karir: "CEO, Manajer Profesional, Administrator." 
    },
    9: { 
        title: "Adaptif (Naluri)", 
        intisari: "Generalis sejati dengan naluri tajam. Berperan sebagai penyeimbang dan mediator yang adaptif di segala situasi.", 
        successHabit: "Melakukan jeda spiritual untuk menenangkan pikiran dan insting.", 
        relationship: "Sangat tulus, menghindari konflik, pembawa kedamaian.", 
        communication: "Sampaikan informasi lugas (to the point) dalam suasana santai.", 
        study: "Merangkai berbagai informasi menjadi kesimpulan utuh.", 
        positif: "Jujur, responsif, naluri tajam, adaptif.", 
        negatif: "Peragu, pasif saat ditekan, kurang pendirian tetap.", 
        karir: "Mediator, Jurnalis, Aktivis, Chef." 
    }
};

// ... Bagian fingers, currentFingerIndex, userName, birthDate, isScanning TETAP SAMA ...

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

function showResult() {
    document.getElementById('scan-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    const resNum = calculateNumerology(birthDate);
    const data = mindprintDescriptions[resNum];

    document.getElementById('result-title').textContent = data.title;
    document.getElementById('result-description').textContent = data.intisari;

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
    document.getElementById('cert-date').textContent = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    document.getElementById('cert-id').textContent = `MP/${new Date().getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}`;
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
            height: 740
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape', compress: true },
        pagebreak: { mode: 'avoid-all' }
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
