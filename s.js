// const symptoms = [
//     "G1: Peka terhadap cahaya (fotofobia)",
//     "G2: Terasa nyeri",
//     "G3: Tampak bintik nanah berwarna kuning keputihan pada kornea",
//     "G4: Terdapat kotoran mata",
//     "G5: Kelopak mata membengkak",
//     "G6: Mengalami iritasi",
//     "G7: Terjadi pembengkakan bundar pada kelopak mata dan tumbuh secara perlahan",
//     "G8: Terbentuk daerah kemerahan/abu-abu di bawah kelopak mata",
//     "G9: Bulu mata rontok",
//     "G10: Mata sukar dibuka ketika bangun dipagi hari",
//     "G11: Alergi",
//     "G12: Mata terasa panas",
//     "G13: Mata seperti kelilipan",
//     "G14: Mata berair",
//     "G15: Nyeri pada tepi kelopak mata",
//     "G16: Kornea tampak keruh",
//     "G17: Konjungtiva meradang",
//     "G18: Penglihatan kabur",
//     "G19: Terlihat bentuk-bentuk ireguler yang melayang-layang atau kilatan cahaya",
//     "G20: Hilangnya fungsi penglihatan pada salah satu mata, yang kemudian menyebar sejalan perkembangan ablasio",
//     "G21: Kesulitan melihat di malam hari",
//     "G22: Penurunan ketajaman penglihatan (bahkan siang hari)",
//     "G23: Kemerahan pada sklera",
//     "G24: Mata menonjol",
//     "G25: Demam",
//     "G26: Bola mata bengkak dan tampak berkabut",
//     "G27: Mata merah",
//     "G28: Mata terasa gatal",
//     "G29: Mata terasa perih",
//     "G30: Konjungtiva menjadi merah",
//     "G31: Konjungtiva bengkak",
//     "G32: Peradangan mata yang agak menonjol dan berwarna kuning",
//     "G33: Mata nyeri bila ditekan",
//     "G34: Gangguan Penglihatan",
//     "G35: Sakit kepala",
//     "G36: Koma",
//     "G37: Kejang",
//     "G38: Sakit dengan gerakan mata",
//     "G39: Kehilangan penglihatan",
//     "G40: Nyeri di daerah sekitar kantong air mata",
//     "G41: Mata mengeluarkan nanah",
//     "G42: Pusing karena lelah",
//     "G43: Mengalami mual dan muntah",
//     "G44: Pupil melebar dan tidak mengecil jika diberi sinar yang terang"
// ];

// const diseases = {
//     "Ulkus Kornea": ["G1", "G2", "G3", "G4", "G14", "G27", "G28", "G34"],
//     "Keratokonus": ["G1", "G14", "G18", "G21"],
//     "Kalazion": ["G5", "G6", "G7", "G8"],
//     "Blefaritis": ["G5", "G9", "G10", "G11", "G12", "G27", "G28"],
//     "Hordeolum (Stye)": ["G13", "G14", "G15", "G27"],
//     "Konjungtivitis": ["G1", "G2", "G12", "G14", "G28"],
//     "Trakoma": ["G5", "G16", "G17"],
//     "Ablasio Retina": ["G18", "G19", "G20"],
//     "Retinopati Diabetikum": ["G18", "G19"],
//     "Glaukoma": ["G2", "G5", "G14", "G27", "G35", "G43", "G44"],
//     "Katarak": ["G1", "G6", "G21", "G22"],
//     "Uveitis": ["G1", "G18", "G23"],
//     "Selulitis Orbitalis": ["G2", "G5", "G25", "G26"],
//     "Eksoftalmus": ["G24"],
//     "Keratitis Pungtata Superfisialis": ["G1", "G2", "G14", "G18", "G27", "G28", "G29"],
//     "Alergi Mata Merah": ["G12", "G28", "G30", "G31"],
//     "Endoftalmitis": ["G1", "G18", "G23", "G34"],
//     "Trombosis Sinus Kavernosus": ["G25", "G35", "G36", "G37"],
//     "Optic Neuritis": ["G38", "G39"],
//     "Dakriotis": ["G14", "G25", "G27", "G40", "G41"]
// };

// function populateSymptoms(searchTerm = '') {
//     const symptomsList = document.getElementById('symptoms-list');
//     symptomsList.innerHTML = '';
//     symptoms.forEach(symptom => {
//         if (symptom.toLowerCase().includes(searchTerm.toLowerCase())) {
//             const div = document.createElement('div');
//             div.className = 'symptom-item';
//             div.innerHTML = `
//                 <input type="checkbox" id="${symptom.split(':')[0]}" name="symptom">
//                 <label for="${symptom.split(':')[0]}">${symptom}</label>
//             `;
//             symptomsList.appendChild(div);
//         }
//     });
// }

// function diagnose() {
//     const selectedSymptoms = Array.from(document.querySelectorAll('input[name="symptom"]:checked'))
//         .map(checkbox => checkbox.id);
    
//     const possibleDiseases = {};
//     for (const [disease, symptoms] of Object.entries(diseases)) {
//         const matchingSymptoms = symptoms.filter(symptom => selectedSymptoms.includes(symptom));
//         if (matchingSymptoms.length > 0) {
//             possibleDiseases[disease] = {
//                 matching: matchingSymptoms.length,
//                 total: symptoms.length
//             };
//         }
//     }

//     const resultContainer = document.getElementById('result-container');
//     const diagnosisElement = document.getElementById('diagnosis');
//     const recommendationElement = document.getElementById('recommendation');

//     if (Object.keys(possibleDiseases).length > 0) {
//         const sortedDiseases = Object.entries(possibleDiseases)
//             .sort((a, b) => (b[1].matching / b[1].total) - (a[1].matching / a[1].total))
//             .map(([disease, data]) => {
//                 const description = getDiseaseDescription(disease);
//                 return `${disease} (${data.matching} dari ${data.total} gejala cocok)<br>${description}`;
//             })
//             .join('<br><br>');
        
//         diagnosisElement.innerHTML = sortedDiseases;
//         recommendationElement.textContent = "Untuk lebih lanjut silahkan melakukan konsultasi kepada dokter spesialis mata terdekat di wilayah Anda.";
//     } else {
//         diagnosisElement.textContent = "Tidak ada penyakit mata yang terdeteksi";
//         recommendationElement.textContent = "Silahkan pilih gejala terlebih dahulu.";
//     }

//     resultContainer.style.display = 'block';
// }

// function getDiseaseDescription(disease) {
//     switch (disease) {
//         case "Ulkus Kornea":
//             return "Ulkus kornea adalah luka terbuka pada kornea, bagian bening mata yang menutupi iris dan pupil. Kondisi ini dapat disebabkan oleh infeksi, cedera, atau kekurangan air mata, dan menyebabkan rasa sakit, penglihatan kabur, dan mata merah.";
//         case "Keratokonus":
//             return "Penyakit ini menyebabkan kornea menipis dan berubah bentuk menjadi seperti kerucut, yang mengganggu penglihatan. Penyebabnya belum sepenuhnya dipahami, tetapi dapat dikaitkan dengan faktor genetik.";
//         case "Kalazion":
//             return "Kalazion adalah benjolan yang muncul di kelopak mata karena penyumbatan kelenjar meibomian. Tidak menimbulkan nyeri tetapi bisa mengganggu penampilan dan penglihatan jika besar.";
//         case "Blefaritis":
//             return "Radang pada kelopak mata yang sering disebabkan oleh bakteri atau ketombe di pangkal bulu mata. Gejalanya meliputi mata merah, gatal, kelopak mata bengkak, dan rasa terbakar.";
//         case "Hordeolum (Stye)":
//             return "Infeksi pada kelenjar minyak di tepi kelopak mata yang menghasilkan benjolan kecil berisi nanah dan menyebabkan rasa nyeri.";
//         case "Konjungtivitis":
//             return "Peradangan pada konjungtiva, lapisan transparan yang menutupi bagian putih mata dan bagian dalam kelopak mata. Penyebabnya bisa infeksi, alergi, atau iritasi.";
//         case "Trakoma":
//             return "Infeksi bakteri kronis pada mata yang bisa menyebabkan kebutaan jika tidak diobati. Ini disebabkan oleh bakteri *Chlamydia trachomatis* dan sering ditemukan di daerah dengan sanitasi buruk.";
//         case "Ablasio Retina":
//             return "Kondisi medis serius di mana retina terlepas dari lapisan jaringan di bawahnya. Ini dapat menyebabkan kebutaan jika tidak segera ditangani.";
//         case "Retinopati Diabetikum":
//             return "Komplikasi diabetes yang mempengaruhi pembuluh darah di retina. Jika tidak diobati, bisa menyebabkan kebutaan.";
//         case "Glaukoma":
//             return "Penyakit mata yang menyebabkan kerusakan saraf optik karena peningkatan tekanan pada mata. Bisa menyebabkan kehilangan penglihatan permanen.";
//         case "Katarak":
//             return "Kondisi di mana lensa mata menjadi keruh, menyebabkan penglihatan kabur atau terhalang. Biasanya terkait dengan penuaan.";
//         case "Uveitis":
//             return "Radang pada uvea, lapisan mata yang berisi sebagian besar pembuluh darah. Penyakit ini bisa menyebabkan nyeri mata, penglihatan kabur, dan sensitivitas terhadap cahaya.";
//         case "Selulitis Orbitalis":
//             return "Infeksi pada jaringan lunak di sekitar mata yang bisa menyebabkan bengkak, kemerahan, dan nyeri. Ini adalah kondisi serius yang memerlukan pengobatan segera.";
//         case "Eksoftalmus":
//             return "Mata yang tampak menonjol keluar dari rongganya, biasanya disebabkan oleh hipertiroidisme atau kondisi medis lain.";
//         case "Keratitis Pungtata Superfisialis":
//             return "Peradangan kornea yang melibatkan lapisan permukaan kornea. Ini bisa menyebabkan penglihatan kabur, fotofobia, dan rasa sakit pada mata.";
//         case "Alergi Mata Merah":
//             return "Reaksi alergi yang menyebabkan mata merah, gatal, berair, dan sensitif terhadap cahaya.";
//         case "Endoftalmitis":
//             return "Infeksi serius pada bagian dalam bola mata, seringkali setelah cedera atau operasi mata. Ini adalah keadaan darurat medis yang bisa menyebabkan kebutaan.";
//         case "Trombosis Sinus Kavernosus":
//             return "Penggumpalan darah di sinus kavernosus, vena besar yang berada di dasar otak. Kondisi ini bisa menyebabkan sakit kepala parah, demam, dan kehilangan penglihatan.";
//         case "Optic Neuritis":
//             return "Peradangan saraf optik, yang sering menyebabkan rasa nyeri saat menggerakkan mata dan kehilangan penglihatan. Bisa dikaitkan dengan penyakit autoimun seperti multiple sclerosis.";
//         case "Dakriotis":
//             return "Infeksi pada kelenjar lakrimal atau saluran air mata, menyebabkan pembengkakan, nyeri, dan nanah di area mata.";
//         default:
//             return "";
//     }
// }

// function reset() {
//     document.querySelectorAll('input[name="symptom"]').forEach(checkbox => checkbox.checked = false);
//     document.getElementById('result-container').style.display = 'none';
// }

// document.getElementById('search-button').addEventListener('click', () => {
//     const searchTerm = document.getElementById('search-input').value;
//     populateSymptoms(searchTerm);
// });

// document.getElementById('diagnose-button').addEventListener('click', diagnose);
// document.getElementById('reset-button').addEventListener('click', reset);
// document.getElementById('exit-button').addEventListener('click', () => window.close());

// // Initialize symptoms list
// populateSymptoms();
