<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>MindPrint Analysis - Araya Consulting</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div id="certificate-template" style="display: none; width: 1080px; height: 740px; background: #fff; position: relative; box-sizing: border-box; border: 18px solid #1a3a5a; color: #333; overflow: hidden; font-family: Arial, sans-serif; padding: 40px 60px;">
        
        <div style="position: absolute; top: 12px; left: 12px; right: 12px; bottom: 12px; border: 3px solid #d4af37; pointer-events: none; z-index: 5;"></div>

        <div style="position: relative; z-index: 10; display: flex; flex-direction: column; height: 100%;">
            
            <div style="text-align: center; margin-bottom: 20px;">
                <img src="logo.png" style="width: 180px; display: block; margin: 0 auto 15px auto;">
                <h2 style="font-size: 19px; border-bottom: 2px solid #1a3a5a; display: inline-block; padding-bottom: 5px; color: #1a3a5a; margin: 0;">SERTIFIKAT ANALISIS MINDPRINT</h2>
                <p style="margin: 10px 0 5px 0; font-size: 11px;">Diberikan kepada:</p>
                <h3 style="font-size: 26px; color: #1a3a5a; margin: 0; text-transform: uppercase; font-weight: bold;"><span id="cert-name"></span></h3>
                <div style="margin-top: 10px; background: #1a3a5a; color: white; padding: 6px 30px; border-radius: 6px; display: inline-block;">
                    <strong style="font-size: 15px; color: #d4af37;" id="cert-result"></strong>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; font-size: 9px; line-height: 1.3;">
                <div style="padding-right: 20px; border-right: 2px solid #1a3a5a;"> <p><strong>INTISARI KARAKTER:</strong><br><span id="cert-intisari" style="text-align: justify; display: block;"></span></p>
                    <p><strong>CARA MEMOTIVASI:</strong><br><span id="cert-motivasi"></span></p>
                    <p><strong>TIPS INTERAKSI:</strong><br><span id="cert-relationship"></span></p>
                </div>
                <div>
                    <p><strong>GAYA KOMUNIKASI:</strong><br><span id="cert-communication"></span></p>
                    <p><strong>SUCCESS HABIT:</strong><br><span id="cert-success"></span></p>
                    <p><strong>POTENSI KARIR:</strong><br><span id="cert-karir"></span></p>
                    <p><strong>DINAMIKA KEPRIBADIAN:</strong><br>
                        <span style="color: #27ae60; font-weight: bold;">(+) <span id="cert-positif"></span></span><br>
                        <span style="color: #c0392b; font-weight: bold;">(-) <span id="cert-negatif"></span></span>
                    </p>
                </div>
            </div>

            <div style="position: absolute; bottom: 10px; left: 0; right: 0; display: flex; justify-content: space-between; align-items: flex-end;">
                <div style="font-size: 9px; color: #666;">
                    <p style="margin: 0;">ID MindPrint: <strong id="cert-id" style="color: #333;"></strong></p>
                    <p style="margin: 0;">Tanggal: <span id="cert-date" style="color: #333;"></span></p>
                    <p style="margin: 5px 0 0 0; color: #d4af37; font-weight: bold;">Araya Consulting - Your Growth Partner</p>
                </div>
                <div style="text-align: center;">
                    <p style="margin-bottom: 40px; font-size: 10px;">Disahkan oleh,</p>
                    <strong style="font-size: 16px; color: #1a3a5a; text-transform: uppercase; border-bottom: 2px solid #1a3a5a; display: inline-block; padding-bottom: 2px;">Ali Mahfud</strong>
                    <span style="color: #d4af37; font-weight: bold; font-size: 10px; display: block; margin-top: 5px;">Founder Araya Consulting</span>
                </div>
            </div>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
