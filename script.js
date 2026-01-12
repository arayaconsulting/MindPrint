/**
 * RE-SYNCHRONIZED SCRIPT - ARAYA CONSULTING
 * Berdasarkan Metodologi & Fix Layout Transparan
 */

const mindprintDescriptions = {
    1: { 
        title: "Si Praktisi Reflektif", 
        intisari: "Sosok paling membumi yang lebih suka bertindak daripada berwacana. Memiliki ketelitian tinggi, stamina fisik kuat, dan kepatuhan pada aturan. Jagonya pekerjaan yang membutuhkan detail visual luar biasa.", 
        successHabit: "Mantra: 'Berkeringat dan Menabung'. Fokus pada spesialisasi, tekuni satu bidang sampai ahli, dan lakukan aktivitas fisik rutin.", 
        relationship: "Membangun kepercayaan melalui konsistensi dan mencari kestabilan jangka panjang.", 
        communication: "To-the-point, singkat, berbasis fakta, dan tidak suka basa-basi panjang.", 
        study: "Metode Menghafal & Pengulangan. Juara dalam menghafal teks secara mandiri.", 
        positif: "Memori tajam, tangguh, disiplin tinggi, praktis.", 
        negatif: "Terlalu kaku, materialistis, kurang spontan.", 
        karir: "Akuntan, Manajer Operasional, Atlet, Teknisi." 
    },
    // (Lanjutkan Deskripsi 2-9 sesuai teks dari dokumen yang sudah kita bahas sebelumnya)
    2: { title: "Si Praktisi Ekspresif", intisari: "Pemain lincah di panggung aksi. Energinya dipicu tantangan luar. Sangat gesit dan kompetitif.", successHabit: "Mantra: 'Tantangan adalah Energi'. Sukses dalam lingkungan kompetitif dengan target jelas.", relationship: "Membawa suasana ceria dan menghargai hadiah fisik.", communication: "Ekspresif, bahasa tubuh kuat, dan antusias.", study: "Praktik lapangan dan belajar kelompok.", positif: "Lincah, cepat, mahir teknis.", negatif: "Cepat bosan, boros, terburu-buru.", karir: "Sales/Marketing, Chef, Pilot." },
    3: { title: "Si Konseptor Reflektif", intisari: "Individu mandiri dan mendalam secara intelektual. Sangat logis, objektif, dan perfeksionis.", successHabit: "Mantra: 'Logika dan Otoritas'. Terus belajar ilmu baru (ta'allum).", relationship: "Menghargai privasi dan diskusi intelektual.", communication: "Formal, data-driven, dan argumentatif.", study: "Butuh skema, tabel, dan analisis mandiri.", positif: "Analisis mendalam, mandiri, penjaga kualitas.", negatif: "Terlalu kritis, kurang empati.", karir: "Programmer, Ilmuwan, Peneliti." },
    4: { title: "Si Konseptor Ekspresif", intisari: "Sosok 'Komandan' yang lahir untuk memimpin. Ahli mengatur dan membangun struktur organisasi.", successHabit: "Mantra: 'Otoritas dan Ekspansi'. Melatih kemampuan melipatgandakan aset dan SDM.", relationship: "Mencari pasangan yang mendukung status sosial dan karir.", communication: "Lugas, memerintah namun logis.", study: "Diskusi terstruktur dan bedah studi kasus bisnis.", positif: "Tegas, berwibawa, organisatoris.", negatif: "Otoriter, kurang sabar.", karir: "CEO/Direktur, Manajer Proyek, Politisi." },
    5: { title: "Si Kreatif Reflektif", intisari: "Pemikir abstrak yang mementingkan kualitas ide. Memiliki dunia imajinasi luas melampaui zaman.", successHabit: "Mantra: 'Kualitas dan Ilmu'. Kuncinya 'Inovasi atau Mati'.", relationship: "Cenderung selektif dalam memilih lawan bicara.", communication: "Puitis, penuh simbol, filosofis.", study: "Mind mapping, analogi, dan metafora.", positif: "Visioner, perfeksionis ide, abstraksi kuat.", negatif: "Eksklusif, terlalu idealis, skeptis.", karir: "Penulis, Arsitek, Ilmuwan." },
    6: { title: "Si Kreatif Ekspresif", intisari: "Trendsetter optimis dan antusias. Tajam melihat peluang keuntungan (money making sense).", successHabit: "Mantra: 'Inovasi dan Investasi'. Networking dan berani gagal.", relationship: "Penyebar antusiasme yang hebat dalam tim.", communication: "Ekspresif, penuh semangat, persuasif.", study: "Brainstorming bebas dan visualisasi gambar.", positif: "Inovatif, multitalenta, antusias.", negatif: "Kurang fokus, kurang detail.", karir: "Pengusaha, Desainer, Investor." },
    7: { title: "Si Empati Reflektif", intisari: "Pribadi idealis yang digerakkan oleh 'Hati'. Memiliki integritas dan loyalitas tinggi.", successHabit: "Mantra: 'Cinta dan Keyakinan'. Fokus pada pelayanan dan karakter.", relationship: "Mencari kesetiaan murni dan koneksi jiwa (soulmate).", communication: "Lembut, mendalam, tulus.", study: "Sentuhan emosional dan suasana harmoni.", positif: "Integritas, loyalitas, peka rasa.", negatif: "Baper, tertutup, subjektif.", karir: "Psikolog, Guru, Konselor, Aktivis." },
    8: { title: "Si Empati Ekspresif", intisari: "Magnet sosial dengan persuasi luar biasa. Ahli memahami psikologi massa.", successHabit: "Mantra: 'Pengaruh dan Cinta'. Sukses melalui popularitas dan relasi.", relationship: "Membutuhkan pengakuan emosional yang hangat.", communication: "Hangat dan mahir menggunakan intonasi emosi.", study: "Diskusi & Tanya Jawab, mengajarkan kembali.", positif: "Kharisma tinggi, motivasi kuat, networking.", negatif: "Haus pengakuan, manipulatif.", karir: "Politisi, Motivator, PR, Trainer." },
    9: { title: "Si Adaptif", intisari: "Generalis responsif dan serba bisa. Jembatan yang cinta damai dan sigap merespons perubahan.", successHabit: "Mantra: 'Ketenangan dan Kebermanfaatan'. Melatih ketuntasan (finishing).", relationship: "Sangat tulus dan mencari kedamaian bersama.", communication: "Spontan, lugas, namun tetap santun.", study: "Suasana tenang melalui gambaran besar (big picture).", positif: "Cepat belajar, responsif, mediator.", negatif: "Sulit fokus prioritas, trauma konflik.", karir: "Pekerja Sosial, Seniman, GA, Medis Darurat." }
};

// ... (Gunakan Fungsi populateDateFields, calculateNumerology, handleScanStart, dll seperti sebelumnya) ...

function showResult() {
    document.getElementById('scan-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    const resNum = calculateNumerology(birthDate);
    const data = mindprintDescriptions[resNum];

    // Info Layar
    document.getElementById('result-title').textContent = data.title;
    document.getElementById('result-description').textContent = data.intisari;

    // Data Sertifikat (PENYELARASAN DENGAN HTML)
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

// PDF DOWNLOAD (STABLE PIXEL MODE)
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
            windowWidth: 1100, // Kunci Lebar agar tidak melar
            windowHeight: 780,
            width: 1100,
            height: 780,
            scrollX: 0,
            scrollY: 0
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape', compress: true }
    };

    html2pdf().set(opt).from(el).save().then(() => {
        el.style.display = 'none';
    });
});

// ... (Sisa Kode Event Listeners Form & Restart Tetap Sama) ...
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
