/**
 * FINAL SCRIPT MINDPRINT - ARAYA CONSULTING
 * Fokus: Layout Padat, ID MP, dan PDF Anti-Potong
 */

const mindprintDescriptions = {
    1: { title: "Si Konseptor Reflektif", intisari: "Anda adalah pribadi yang sangat analitis dan mandiri dalam berpikir. Anda memiliki kemampuan alami untuk memproses informasi rumit secara internal hingga menghasilkan konsep yang presisi, logis, dan sistematis. Namun, kedalaman fokus ini terkadang membuat Anda terjebak dalam pikiran sendiri, sehingga perlu waspada agar tidak terlalu menarik diri secara ekstrem atau menjadi terlalu sinis terhadap ide yang dianggap tidak memenuhi standar logika Anda.", successHabit: "Membangun sistem atau standar kerja (SOP) yang sangat mendetail.", relationship: "Menghargai waktu sendiri dan diskusi intelektual yang substansial.", communication: "Berikan data logis dan hargai ruang privasinya untuk berpikir.", study: "Mendalami struktur dan skema logika secara spesifik.", positif: "Analitis, objektif, disiplin, pakar.", negatif: "Kaku, kaku, terlalu kritis, dan sinis.", karir: "Ilmuwan, Auditor, Programmer, Analis Data." },
    2: { title: "Si Empati Ekspresif", intisari: "Anda adalah pemimpin alami yang memiliki kemampuan komunikasi persuasif yang luar biasa. Anda sangat peka terhadap energi emosional di sekitar dan mampu menggunakannya untuk menginspirasi serta menggerakkan orang lain. Di balik kemudahan Anda bergaul, terdapat kebutuhan besar akan pengakuan sosial yang jika tidak dikelola dengan baik, dapat membuat Anda mudah kehilangan fokus atau terlalu bergantung pada persetujuan orang lain.", successHabit: "Menjaga hubungan sosial dan jejaring (networking) secara aktif.", relationship: "Membutuhkan apresiasi verbal dan pengakuan emosional yang hangat.", communication: "Sentuh perasaannya terlebih dahulu sebelum masuk ke topik teknis.", study: "Melalui diskusi kelompok dan mengajar kembali kepada orang lain.", positif: "Komunikatif, empatik, persuasif.", negatif: "Subjektif, moody, haus pujian.", karir: "Politisi, Motivator, Leader, HR Manager." },
    3: { title: "Si Praktisi Reflektif", intisari: "Anda adalah sosok pekerja keras yang gigih, teliti, dan memiliki daya tahan yang luar biasa. Anda lebih suka memproses instruksi secara mendalam sebelum mengeksekusinya dengan kesempurnaan yang terukur. Keteguhan Anda pada prosedur adalah kekuatan besar, meski di sisi lain hal ini bisa menjadi penghambat jika Anda terlalu kaku dan sulit beradaptasi terhadap perubahan situasi yang terjadi secara mendadak.", successHabit: "Menjaga stamina fisik dan ketertiban administrasi aset.", relationship: "Mencari kestabilan jangka panjang dan bukti kesetiaan nyata.", communication: "Gunakan instruksi yang praktis, konkret, dan langkah demi langkah.", study: "Latihan fisik berulang (drilling) dan menghafal data detail.", positif: "Teliti, disiplin tinggi, produktif.", negatif: "Kaku, sulit adaptasi, lambat berubah.", karir: "Atlet, Manajer Operasional, Akuntan." },
    4: { title: "Si Praktisi Ekspresif", intisari: "Anda adalah pribadi yang gesit, cekatan, dan memiliki naluri bisnis yang tajam. Anda senang beraksi langsung di lapangan dan memiliki keberanian untuk mengambil peluang demi hasil yang nyata secara cepat. Namun, antusiasme Anda yang tinggi terkadang memicu tindakan impulsif yang mengabaikan perencanaan matang, sehingga Anda perlu berhati-hati agar tidak meremehkan detail administratif yang krusial.", successHabit: "Mengeksekusi peluang bisnis segera tanpa berlama-lama pada teori.", relationship: "Senang diajak bertualang dan menghargai hadiah fisik.", communication: "Langsung pada manfaat praktis dan keuntungan yang akan didapat.", study: "Learning by doing dan simulasi langsung di lapangan.", positif: "Cekatan, gesit, dermawan.", negatif: "Impulsif, boros, ceroboh.", karir: "Pengusaha, Marketing, Kontraktor." },
    5: { title: "Si Empati Reflektif", intisari: "Anda adalah pribadi idealis yang memiliki keyakinan hati sangat kuat. Anda bergerak bukan berdasarkan logika semata, melainkan panggilan moral dan integritas jiwa yang mendalam. Kelembutan hati Anda adalah anugerah, namun waspadalah terhadap kecenderungan untuk terlalu sensitif dan memendam kekecewaan sendirian, yang jika dibiarkan dapat menjadi beban emosional yang menguras energi batin Anda.", successHabit: "Menjaga integritas antara perbuatan dan panggilan hati nurani.", relationship: "Mencari kesetiaan murni dan koneksi jiwa (soulmate).", communication: "Hargai prinsip pribadinya dan gunakan pendekatan personal.", study: "Mencari makna mendalam dalam suasana tenang.", positif: "Setia, tulus, prinsip kuat.", negatif: "Sangat sensitif, mudah tersinggung.", karir: "Psikolog, Penulis, Konselor, Aktivis." },
    6: { title: "Si Kreatif Ekspresif", intisari: "Anda adalah seorang visioner yang selalu haus akan inovasi dan ide-ide baru. Anda memiliki kemampuan untuk melihat peluang yang tidak dilihat orang lain dan merakitnya menjadi sebuah terobosan besar. Kebebasan berekspresi adalah napas Anda, namun ingatlah bahwa ledakan ide yang terus-menerus bisa membuat Anda mudah bosan dengan rutinitas dan cenderung meninggalkan proyek sebelum benar-benar tuntas.", successHabit: "Terus memperbarui ilmu pengetahuan dan mencari mentor visioner.", relationship: "Membutuhkan pasangan yang mendukung mimpi besar dan ide kreatifnya.", communication: "Berikan ruang untuk beride dan bicarakan visi masa depan.", study: "Mind mapping dan visualisasi gambar.", positif: "Kreatif, optimis, visioner.", negatif: "Mudah bosan, tidak konsisten.", karir: "Inovator, Arsitek, Desainer, Pakar Strategi." },
    7: { title: "Si Kreatif Reflektif", intisari: "Anda adalah perancang strategi yang perfeksionis dengan imajinasi yang sangat kuat. Sebelum bertindak, Anda akan menyusun rencana jangka panjang yang matang dengan standar kualitas yang sangat tinggi. Namun, keinginan Anda untuk mencapai kesempurnaan mutlak seringkali menjadi bumerang yang membuat Anda terlalu tertutup atau menunda eksekusi karena merasa hasil riset belum mencapai standar ideal Anda.", successHabit: "Menyusun Master Plan jangka panjang yang mendetail.", relationship: "Eksklusif dalam memilih teman dan menghargai privasi pikiran.", communication: "Bicara pada standar kualitas tinggi dan hargai risetnya.", study: "Menganalisis konsep abstrak dan riset mandiri.", positif: "Strategis, perfeksionis, visioner.", negatif: "Terlalu tertutup, lambat beraksi.", karir: "Peneliti, Detektif, Konseptor, Strategist." },
    8: { title: "Si Konseptor Ekspresif", intisari: "Anda adalah sosok manajer sistem yang tegas, objektif, dan berorientasi pada hasil. Fokus utama Anda adalah efisiensi pengelolaan sumber daya melalui kendali organisasi yang kuat. Ketegasan Anda sangat efektif untuk memimpin, namun Anda perlu menyadari bahwa fokus yang terlalu besar pada target kerja terkadang membuat Anda terlihat otoriter dan kurang peka terhadap sisi emosional orang-orang di sekitar Anda.", successHabit: "Mendelegasikan tugas teknis untuk fokus pada kontrol sistem.", relationship: "Mencari pasangan logis yang mendukung status sosial dan karir.", communication: "Bicara langsung pada hasil (result-oriented) and otoritas.", study: "Mengorganisir bahan belajar ke dalam sistem yang efisien.", positif: "Tegas, objektif, manajerial kuat.", negatif: "Otoriter, dominan, menggurui.", karir: "CEO, Manajer Profesional, Administrator." },
    9: { title: "Si Adaptif", intisari: "Anda adalah pribadi yang memiliki naluri tajam dan kemampuan adaptasi yang luar biasa dalam situasi apa pun. Kejujuran dan ketulusan adalah karakter dasar Anda. Anda adalah generalis sejati yang mencari keharmonisan sosial, namun sifat cinta damai ini terkadang membuat Anda menjadi peragu, kurang memiliki pendirian tetap, atau terlalu sering mengorbankan diri demi menghindari konflik.", successHabit: "Rutin melakukan jeda spiritual untuk menajamkan naluri/insting.", relationship: "Sangat tulus, tidak suka konflik, dan mencari kedamaian.", communication: "Bicara langsung pada poinnya (to the point) dalam suasana santai.", study: "Merangkai potongan informasi menjadi rangkuman utuh.", positif: "Jujur, responsif, naluri tajam.", negatif: "Peragu, pasif, kurang pendirian.", karir: "Mediator, Jurnalis, Aktivis, Chef." }
};

const fingers = ["ibu jari", "telunjuk", "tengah", "manis", "kelingking"];
let currentFingerIndex = 0;
let userName = "";
let birthDate = "";
let isScanning = false;

function populateDateFields() {
    const d = document.getElementById('day'), m = document.getElementById('month'), y = document.getElementById('year');
    if(!d || !m || !y) return;
    d.innerHTML = '<option value="" disabled selected>Hari</option>';
    m.innerHTML = '<option value="" disabled selected>Bulan</option>';
    y.innerHTML = '<option value="" disabled selected>Tahun</option>';
    for(let i=1; i<=31; i++) d.innerHTML += `<option value="${String(i).padStart(2,'0')}">${i}</option>`;
    const months = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    months.forEach((mon, i) => m.innerHTML += `<option value="${String(i+1).padStart(2,'0')}">${mon}</option>`);
    const currentYear = new Date().getFullYear();
    for(let i=currentYear; i>=1950; i--) y.innerHTML += `<option value="${i}">${i}</option>`;
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
    const scanner = document.getElementById('fingerprint-scanner');
    const text = document.getElementById('scan-text');
    text.textContent = `Memindai ${fingers[currentFingerIndex]}...`;
    scanner.classList.add('scanning');
    setTimeout(() => {
        scanner.classList.remove('scanning');
        isScanning = false;
        if (currentFingerIndex < fingers.length - 1) {
            text.textContent = `${fingers[currentFingerIndex].toUpperCase()} BERHASIL.`;
            document.getElementById('next-finger-button').classList.remove('hidden'); 
        } else {
            text.textContent = "MENGANALISIS MINDPRINT...";
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
    
    // TANGGAL & ID MP
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
            scrollX: 0,
            scrollY: 0
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape', compress: true }
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
