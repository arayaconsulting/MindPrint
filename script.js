/**
 * MINDPRINT SYSTEM - ARAYA CONSULTING
 * OWNER: ALI MAHFUD
 * VERSION: 5.0 (Extended Character Essence)
 */

const mindprintDescriptions = {
    1: { 
        title: "Si Praktisi Reflektif", 
        intisari: "Sosok mandiri yang didominasi otak kiri bawah (Pilar Praktisi) dengan kemudi internal. Anda adalah pekerja keras yang lebih suka bertindak nyata daripada sekadar berwacana, sangat unggul dalam pekerjaan yang membutuhkan ketelitian tinggi, stamina fisik kuat, serta kepatuhan mutlak pada aturan dan SOP. Kekuatan utama Anda terletak pada memori yang tajam dalam merekam detail visual, ketangguhan fisik yang stabil, serta kedisiplinan tinggi. Tantangan pengembangan Anda adalah kecenderungan bersikap kaku terhadap perubahan mendadak serta sudut pandang yang terkadang terlalu materialistis dalam mengukur kesuksesan.", 
        successHabit: "Mantra: 'Berkeringat dan Menabung'. Fokus pada spesialisasi bidang tertentu dan pastikan ada aktivitas fisik rutin untuk menjaga stabilitas mood.", 
        relationship: "Membangun kepercayaan melalui konsistensi dan kejujuran fakta.", 
        communication: "Lugas, singkat, dan berbasis fakta. Tidak menyukai basa-basi yang terlalu panjang.", 
        positif: "Disiplin, Memori Tajam, Tangguh.", 
        negatif: "Kaku, Materialistis, Kurang Spontan.", 
        motivasi: "Instruksi jelas, target realistis, dan apresiasi berbasis aset.", 
        karir: "Akuntan, Manajer Ops, Atlet, Teknisi, Perbankan.", 
        study: "Metode menghafal & pengulangan prosedur, Visual-Kinestetik (contoh nyata), dan latihan mandiri di tempat tenang." 
    },
    2: { 
        title: "Si Praktisi Ekspresif", 
        intisari: "Pribadi lincah yang energinya dipicu oleh tantangan luar, interaksi sosial, dan suasana dinamis. Sebagai pemilik mesin kecerdasan fisik dengan kemudi ekspresif, Anda adalah orang yang paling responsif terhadap keadaan lapangan dan memiliki kemampuan teknis luar biasa dalam koordinasi motorik. Anda membawa suasana ceria dan sportif, namun memiliki tantangan berupa rasa bosan yang cepat muncul jika suasana monoton, serta kecenderungan terburu-buru dalam mengambil tindakan tanpa memikirkan konsekuensi jangka panjang.", 
        successHabit: "Mantra: 'Tantangan adalah Energi'. Tempatkan diri dalam lingkungan kompetitif dengan target atau kuota yang jelas untuk melipatgandakan produktivitas.", 
        relationship: "Mudah bergaul, membawa keceriaan, dan menghargai apresiasi fisik.", 
        communication: "Ekspresif, menggunakan bahasa tubuh yang kuat, dan antusias pada hasil nyata.", 
        positif: "Gesit, Sportif, Responsif.", 
        negatif: "Cepat Bosan, Boros, Terburu-buru.", 
        motivasi: "Tantangan kompetitif, bonus instan, dan mobilitas tinggi.", 
        karir: "Marketing, Chef, Pilot, Polisi, Atlet Profesional.", 
        study: "Praktik lapangan langsung, belajar kelompok untuk memicu keaktifan otak, dan demonstrasi (modelling)." 
    },
    3: { 
        title: "Si Konseptor Reflektif", 
        intisari: "Individu yang paling mandiri dan mendalam secara intelektual dengan dominasi otak kiri atas yang digerakkan dari dalam. Anda sangat logis, objektif, dan perfeksionis dalam validasi data. Kekuatan Anda adalah kemampuan membedah masalah kompleks menjadi bagian logis serta menjadi penjaga kualitas yang konsisten pada standar. Namun, standar tinggi ini sering membuat Anda terlihat terlalu kritis atau dingin, dan Anda berisiko kehilangan empati karena terlalu fokus pada fakta dan kebenaran objektif.", 
        successHabit: "Mantra: 'Logika dan Otoritas'. Fokus pada penguasaan keahlian teknis dan kendali atas sistem. Teruslah belajar ilmu baru untuk menjaga posisi tawar tetap tinggi.", 
        relationship: "Eksklusif dalam memilih teman dan sangat menghargai privasi pikiran.", 
        communication: "Formal, data-driven, dan argumentatif. Sertakan data konkret untuk meyakinkan Anda.", 
        positif: "Analitis, Mandiri, Fokus Kualitas.", 
        negatif: "Terlalu Kritis, Dingin, Kurang Empati.", 
        motivasi: "Akses data/ilmu baru, kemandirian, dan keterlibatan dalam sistem logis.", 
        karir: "Programmer, Ilmuwan, Auditor, Peneliti, Ahli Strategi.", 
        study: "Ringkasan berbentuk bagan/tabel, studi literatur mandiri, dan pemecahan kasus logika." 
    },
    4: { 
        title: "Si Konseptor Ekspresif", 
        intisari: "Sosok 'Komandan' alami yang didominasi otak kiri atas dengan stimulasi energi dari luar. Anda sangat hebat dalam mendelegasikan tugas, mengelola sumber daya, dan membangun struktur organisasi yang luas secara efisien. Anda tegas, berwibawa, dan selalu berorientasi pada hasil akhir. Tantangan utama Anda adalah aura dominan yang terkadang terlihat otoriter, serta kurangnya kesabaran terhadap orang lain yang tidak mampu memenuhi standar kecepatan kerja Anda.", 
        successHabit: "Mantra: 'Otoritas dan Ekspansi'. Terus latih kemampuan melipatgandakan aset dan SDM melalui jaringan dan kekuasaan yang terukur.", 
        relationship: "Mendukung status sosial dan pencapaian karir dalam hubungan.", 
        communication: "Lugas, memerintah (logis), dan sangat menghargai struktur bicara yang sistematis.", 
        positif: "Manajerial Hebat, Tegas, Adil.", 
        negatif: "Otoriter, Kurang Sabar, Kaku pada Hirarki.", 
        motivasi: "Otoritas, tanggung jawab besar, dan pengakuan atas jabatan.", 
        karir: "CEO, Direktur, Manajer Proyek, Politisi, Hakim.", 
        study: "Diskusi terstruktur (debat logis), menjadi pengajar/presenter, dan analisis studi kasus bisnis." 
    },
    5: { 
        title: "Si Kreatif Reflektif", 
        intisari: "Pemikir abstrak visioner yang didominasi otak kanan atas dengan kemudi internal. Anda memiliki imajinasi luas dan sangat mementingkan orisinalitas serta kualitas ide yang melampaui zaman. Anda adalah perancang strategi yang perfeksionis dalam konsep dan filosofi. Namun, idealisme yang tinggi sering membuat Anda terlihat eksklusif dan sulit membumikan ide kreatif menjadi aksi praktis yang bisa dinikmati orang banyak.", 
        successHabit: "Mantra: 'Kualitas dan Ilmu'. Menjadi ahli di bidang yang unik. Kuncinya adalah 'Inovasi atau Mati' dengan berani mengeksekusi ide ke dunia nyata.", 
        relationship: "Sangat selektif dalam lingkungan sosial dan menghargai kedalaman privasi pikiran.", 
        communication: "Puitis, penuh simbol, filosofis, dan cenderung selektif memilih lawan bicara.", 
        positif: "Visioner, Strategis, Orisinal.", 
        negatif: "Skeptis, Terlalu Idealis, Menyendiri.", 
        motivasi: "Penghargaan orisinalitas, ruang privat, dan dukungan pada visi jangka panjang.", 
        karir: "Peneliti, Arsitek, Perancang Strategi, Seniman Konseptual, Ilmuwan.", 
        study: "Peta konsep (Mind Mapping), penggunaan analogi/simbol, dan membaca literatur mendalam (Why)." 
    },
    6: { 
        title: "Si Kreatif Ekspresif", 
        intisari: "Pribadi yang optimis, penuh antusiasme, dan memiliki intuisi bisnis yang sangat tajam dalam melihat peluang keuntungan. Sebagai pemilik pilar kreatif dengan kemudi ekspresif, Anda adalah inovator yang benci cara konvensional dan selalu punya cara berbeda untuk menyelesaikan masalah. Tantangan Anda adalah kurangnya fokus pada detail administrasi serta kecenderungan berpindah ke proyek baru sebelum menuntaskan apa yang sudah dimulai.", 
        successHabit: "Mantra: 'Inovasi dan Investasi'. Bangun networking luas dan latih ketekunan untuk menuntaskan satu proyek besar sebelum beralih ke peluang lain.", 
        relationship: "Membutuhkan dukungan penuh terhadap mimpi-mimpi besar dan ide kreatifnya.", 
        communication: "Penuh semangat, persuasif, dan suka menggunakan analogi masa depan.", 
        positif: "Intuisi Bisnis, Inovatif, Antusias.", 
        negatif: "Kurang Fokus, Abaikan Detail, Risiko Tinggi.", 
        motivasi: "Proyek inovatif, panggung presentasi, dan insentif berbasis profit.", 
        karir: "Pengusaha, Desainer, Investor, Konsultan Kreatif, Kreator Konten.", 
        study: "Brainstorming bebas, penggunaan visualisasi gambar/sketsa, dan belajar dari kasus sukses inovator." 
    },
    7: { 
        title: "Si Empati Reflektif", 
        intisari: "Sosok idealis yang didominasi otak kanan bawah dengan kemudi hati yang sangat kuat. Anda adalah pembawa ketenangan dengan integritas jiwa dan loyalitas yang tidak tergoyahkan pada prinsip. Anda bekerja berdasarkan makna dan nilai, bukan sekadar angka. Tantangan Anda adalah perasaan yang sangat sensitif (baper) terhadap kritik, serta kecenderungan memendam masalah emosional yang bisa menjadi beban di kemudian hari.", 
        successHabit: "Mantra: 'Cinta dan Keyakinan'. Fokus pada pelayanan dan pembangunan karakter. Latihlah ketegasan agar perasaan tidak menghalangi profesionalitas Anda.", 
        relationship: "Mencari kesetiaan murni dan koneksi jiwa (soulmate) yang mendalam.", 
        communication: "Lembut, mendalam, tulus, dan sangat menjaga perasaan lawan bicara.", 
        positif: "Integritas Tinggi, Setia, Empati Dalam.", 
        negatif: "Mudah Tersinggung, Tertutup, Subjektif.", 
        motivasi: "Makna spiritual dalam kerja, harmoni lingkungan, dan perhatian personal.", 
        karir: "Psikolog, Coach, Aktivis Kemanusiaan, Guru, Pemuka Agama.", 
        study: "Keterikatan emosional dengan pengajar, audio-mood (nada tenang), dan lingkungan belajar harmonis." 
    },
    8: { 
        title: "Si Empati Ekspresif", 
        intisari: "Sosok 'Magnet Sosial' yang memiliki kharisma tinggi dan kemampuan komunikasi persuasif yang luar biasa. Anda sangat hebat dalam memahami psikologi massa dan memotivasi orang lain melalui kekuatan kata-kata. Namun, Anda memiliki ketergantungan yang besar terhadap apresiasi dan pengakuan dari lingkungan, serta berisiko menjadi manipulatif jika tidak dibimbing oleh integritas moral yang kuat.", 
        successHabit: "Mantra: 'Pengaruh dan Cinta'. Perluas jaringan dan relasi sosial. Latih kemandirian emosional agar tidak terlalu bergantung pada pujian orang lain.", 
        relationship: "Membutuhkan apresiasi verbal dan pengakuan emosional yang hangat.", 
        communication: "Hangat, mahir menggunakan intonasi suara, dan menyentuh emosi pembicara.", 
        positif: "Kharismatik, Persuasif, Networking Luas.", 
        negatif: "Haus Pujian, Manipulatif, Mudah Terpengaruh.", 
        motivasi: "Apresiasi publik, peran sebagai juru bicara, dan dukungan emosional.", 
        karir: "Politisi, Motivator, Public Relations, Sales Manager, Presenter.", 
        study: "Diskusi & tanya jawab interaktif, mengajarkan kembali materi, dan storytelling audio-visual." 
    },
    9: { 
        title: "Si Adaptif", 
        intisari: "Sosok 'Jembatan' yang paling responsif, serba bisa, dan cinta damai. Dengan dominasi otak tengah, Anda memiliki refleks cepat dalam menghadapi keadaan darurat dan mampu menghubungkan berbagai tipe kepribadian lainnya. Kekuatan Anda adalah fleksibilitas dan jiwa penolong yang tinggi, namun Anda seringkali sulit menentukan prioritas hidup yang spesifik serta cenderung menghindari konflik daripada menyelesaikannya.", 
        successHabit: "Mantra: 'Ketenangan dan Kebermanfaatan'. Fokus pada kebahagiaan batin dan spiritualitas. Latih ketuntasan (finishing) agar pekerjaan tidak hanya cepat di awal.", 
        relationship: "Sangat tulus, tidak suka konflik, dan pembawa harmoni.", 
        communication: "Spontan, lugas, namun tetap santun. Menghindari perdebatan panjang.", 
        positif: "Refleks Cepat, Mediator Hebat, Jujur.", 
        negatif: "Sulit Fokus, Trauma Konflik, Mudah Terdistraksi.", 
        motivasi: "Ketenangan pikiran, lingkungan non-konflik, dan perasaan berguna.", 
        karir: "Pekerja Sosial, Medis Darurat, Bagian Umum, Mediator, Relawan.", 
        study: "Suasana tenang tanpa tekanan, ringkasan gambaran besar (big picture), dan pengamatan singkat." 
    }
};

// ... (Sisa fungsi Numerologi, Scanner, showResult, dan Download tetap sama)

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
    document.getElementById('cert-motivasi').textContent = data.successHabit; // Mengambil successHabit sebagai rujukan motivasi sukses
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

// Fungsi Download PDF (PENTING: Scale 3 untuk ketajaman)
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
