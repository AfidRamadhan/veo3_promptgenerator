document.getElementById('generateBtn').addEventListener('click', () => {
    // Get all input values
    const judulScane = document.getElementById('judul_scane').value;
    const deskripsiKarakter = document.getElementById('deskripsi_karakter').value;
    const suaraKarakter = document.getElementById('suara_karakter').value;
    const aksiKarakter = document.getElementById('aksi_karakter').value;
    const ekspresiKarakter = document.getElementById('ekspresi_karakter').value;
    const latarTempatWaktu = document.getElementById('latar_tempat_waktu').value;
    const detailVisual = document.getElementById('detail_visual').value;
    const gerakanKamera = document.getElementById('gerakan_kamera').value;
    const suasanaKeseluruhan = document.getElementById('suasana_keseluruhan').value;
    const suaraLingkungan = document.getElementById('suara_lingkungan').value;
    const dialogKarakter = document.getElementById('dialog_karakter').value;
    const negativePrompt = document.getElementById('negative_prompt').value;

    // --- Generate Indonesian Prompt ---
    let promptIndonesia = `**Judul Scane:** ${judulScane}\n\n`;
    promptIndonesia += `**Deskripsi Karakter Inti:**\n${deskripsiKarakter}\n\n`;
    promptIndonesia += `**Detail Suara Karakter:**\n${suaraKarakter}\n\n`;
    promptIndonesia += `**Aksi Karakter:**\n${aksiKarakter}\n\n`;
    promptIndonesia += `**Ekspresi Karakter:**\n${ekspresiKarakter}\n\n`;
    promptIndonesia += `**Latar Tempat & Waktu:**\n${latarTempatWaktu}\n\n`;
    promptIndonesia += `**Detail Visual Tambahan:**\nGerakan Kamera: ${gerakanKamera}\n${detailVisual}\n\n`;
    promptIndonesia += `**Suasana Keseluruhan:**\n${suasanaKeseluruhan}\n\n`;
    promptIndonesia += `**Suara Lingkungan/Ambience:**\n${suaraLingkungan}\n\n`;
    promptIndonesia += `**Dialog Karakter:**\n${dialogKarakter}\n\n`;
    promptIndonesia += `**Negative Prompt:**\n${negativePrompt}`;

    document.getElementById('output_indonesia').value = promptIndonesia;

    // --- Generate English Prompt ---
    // Simple "translation" by changing labels to English.
    // The core content remains in the original language as we can't translate it.
    
    // Extract the camera motion's English part
    const cameraMotionEnglish = gerakanKamera.split('(')[0].trim();

    let promptEnglish = `**Scene Title:** A cinematic shot of "${judulScane}".\n\n`;
    promptEnglish += `**Core Character Description:**\nA detailed description of the main character: ${deskripsiKarakter}\n\n`;
    promptEnglish += `**Character Voice Details:**\nThe character's voice is described as: ${suaraKarakter}\n\n`;
    promptEnglish += `**Character Action:**\nThe character is performing the following action: ${aksiKarakter}\n\n`;
    promptEnglish += `**Character Expression:**\nThe character displays the following expression: ${ekspresiKarakter}\n\n`;
    promptEnglish += `**Setting & Time:**\nThe scene is set at: ${latarTempatWaktu}\n\n`;
    promptEnglish += `**Additional Visual Details:**\nCamera Movement: ${cameraMotionEnglish}. ${detailVisual}\n\n`;
    promptEnglish += `**Overall Atmosphere:**\nThe overall atmosphere of the scene is: ${suasanaKeseluruhan}\n\n`;
    promptEnglish += `**Environmental Sound/Ambience:**\n${suaraLingkungan}\n\n`;
    
    // The dialog is added as is, without translation, as requested.
    let dialogOnly = dialogKarakter.replace(/DIALOG dalam Bahasa Indonesia: Karakter berkata:/i, '').trim();
    if (dialogOnly) {
        promptEnglish += `**Character Dialogue (in Indonesian):**\nDIALOGUE: The character says: "${dialogOnly}"\n\n`;
    }

    promptEnglish += `**Negative Prompt:**\n${negativePrompt}`;

    document.getElementById('output_english').value = promptEnglish;
}); 