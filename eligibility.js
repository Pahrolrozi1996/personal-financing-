/* =====================================================
   ELIGIBILITY ENGINE V2.0
===================================================== */

function validate() {

    const sektor = document.getElementById("sektor").value;

    let result;

    switch (sektor) {

        case "kerajaan":
        case "berkanun":
            result = validateKerajaan();
            break;

        case "glc":
            result = validateGLC();
            break;

        case "professional":
            result = validateProfessional();
            break;

        case "swasta":
            result = validateSwasta();
            break;

        default:
            result = {
                pass: false,
                reasons: [
                    "Sila pilih sektor pekerjaan."
                ]
            };

    }

    showResult(result);

}

/* =====================================================
   KERAJAAN / BADAN BERKANUN
===================================================== */

function validateKerajaan() {

    const status = document.getElementById("status").value;

    const service = document.getElementById("service").value;

    const basic = Number(document.getElementById("basic").value || 0);

    const allowance = Number(document.getElementById("allowance").value || 0);

    const income = basic + allowance;

    let reasons = [];

    if (status === "tetap") {

        if (income < 2000) {

            reasons.push(
                "Jumlah Gaji Pokok dan Elaun Tetap minimum RM2,000."
            );

        }

    }

    else if (status === "kontrak") {

        if (service !== "2plus") {

            reasons.push(
                "Tempoh Perkhidmatan minimum 2 tahun."
            );

        }

        if (income < 3000) {

            reasons.push(
                "Jumlah Gaji Pokok dan Elaun Tetap minimum RM3,000."
            );

        }

    }

    else {

        reasons.push(
            "Status jawatan tidak memenuhi syarat."
        );

    }

    return {

        pass: reasons.length === 0,

        reasons,

        category: "Kerajaan"

    };

}

/* =====================================================
   GLC
===================================================== */

function validateGLC() {

    const status = document.getElementById("status").value;

    const service = document.getElementById("service").value;

    const basic = Number(document.getElementById("basic").value || 0);

    let reasons = [];

    if (status !== "tetap") {

        reasons.push(
            "Status jawatan mestilah Permanent & Confirmed."
        );

    }

    if (service !== "6plus") {

        reasons.push(
            "Tempoh Perkhidmatan minimum 6 bulan."
        );

    }

    if (basic < 2000) {

        reasons.push(
            "Gaji Pokok minimum RM2,000."
        );

    }

    return {

        pass: reasons.length === 0,

        reasons,

        category: "GLC"

    };

}

/* =====================================================
   PROFESSIONAL
===================================================== */

function validateProfessional() {

    const profession = document.getElementById("profession").value;

    const status = document.getElementById("status").value;

    const service = document.getElementById("service").value;

    const basic = Number(document.getElementById("basic").value || 0);

    let reasons = [];

    // Mesti pilih profesion
    if (!profession) {

        reasons.push(
            "Sila pilih profesion."
        );

    }

    // Permanent & Confirmed sahaja
    if (status !== "tetap") {

        reasons.push(
            "Status jawatan mestilah Permanent & Confirmed."
        );

    }

    // Minimum 6 bulan
    if (service !== "6plus") {

        reasons.push(
            "Tempoh Perkhidmatan minimum 6 bulan."
        );

    }

    // Gaji minimum
    if (basic < 2000) {

        reasons.push(
            "Gaji Pokok minimum RM2,000."
        );

    }

    return {

        pass: reasons.length === 0,

        reasons,

        category: "Professional"

    };

}

/* =====================================================
   SYARIKAT SWASTA
===================================================== */

function validateSwasta() {

    const category = document.getElementById("category").value;

    const industry = document.getElementById("industry").value;

    const status = document.getElementById("status").value;

    const service = document.getElementById("service").value;

    const operation = document.getElementById("operation")
        ? document.getElementById("operation").value
        : "";

    const basic = Number(document.getElementById("basic").value || 0);

    let reasons = [];

    // Permanent & Confirmed
    if (status !== "tetap") {

        reasons.push(
            "Status jawatan mestilah Permanent & Confirmed."
        );

    }

    // PLC / MNC
    if (category === "plc_mnc") {

        if (service !== "6plus") {

            reasons.push(
                "Tempoh Perkhidmatan minimum 6 bulan."
            );

        }

        if (basic < 2000) {

            reasons.push(
                "Gaji Pokok minimum RM2,000."
            );

        }

    }

    // Prominent Company
    else if (category === "prominent") {

        if (service !== "2plus") {

            reasons.push(
                "Tempoh Perkhidmatan minimum 2 tahun."
            );

        }

        if (operation !== "over5") {

            reasons.push(
                "Syarikat mestilah telah beroperasi sekurang-kurangnya 5 tahun."
            );

        }

        if (basic < 2000) {

            reasons.push(
                "Gaji Pokok minimum RM2,000."
            );

        }

    }

    // Syarikat Swasta Biasa
    else if (category === "private") {

        if (service !== "2plus") {

            reasons.push(
                "Tempoh Perkhidmatan minimum 2 tahun."
            );

        }

        if (operation !== "over5") {

            reasons.push(
                "Syarikat mestilah telah beroperasi sekurang-kurangnya 5 tahun."
            );

        }

        if (basic < 2000) {

            reasons.push(
                "Gaji Pokok minimum RM2,000."
            );

        }

    }

    // Industri khas
    if (
        industry === "manufacturing" ||
        industry === "transport" ||
        industry === "construction"
    ) {

        if (basic < 5000) {

            reasons.push(
                "Bagi sektor Manufacturing, Transportation dan Construction, Gaji Pokok minimum ialah RM5,000."
            );

        }

    }

    return {

        pass: reasons.length === 0,

        reasons,

        category: "Syarikat Swasta"

    };

}

/* =====================================================
   RESULT MODAL
===================================================== */

function showResult(result) {

    const modal = document.getElementById("resultModal");

    const body = document.getElementById("modalBody");

    modal.style.display = "flex";

    if (result.pass) {

        body.innerHTML = `

            <div class="result-success">

                <div class="result-icon">✅</div>

                <h2>Berpotensi Memenuhi Kriteria Asas</h2>

                <p>

                    Berdasarkan maklumat yang diberikan,
                    anda berpotensi memenuhi syarat asas
                    Pembiayaan Peribadi-i.

                </p>

                <button
                    id="continueWhatsapp"
                    class="submit-btn">

                    Teruskan ke WhatsApp

                </button>

            </div>

        `;

        document
            .getElementById("continueWhatsapp")
            .addEventListener("click", sendToWhatsApp);

    }

    else {

        body.innerHTML = `

            <div class="result-fail">

                <div class="result-icon">❌</div>

                <h2>Belum Memenuhi Kriteria Asas</h2>

                <p>

                    Berdasarkan maklumat yang diberikan,
                    anda belum memenuhi syarat asas.

                </p>

                <ul class="reason-list">

                    ${result.reasons
                        .map(item => `<li>${item}</li>`)
                        .join("")}

                </ul>

                <button
                    class="submit-btn"
                    onclick="sendToWhatsApp()">

                    Hubungi Perunding

                </button>

            </div>

        `;

    }

    document
        .querySelector(".close-modal")
        .onclick = function () {

            modal.style.display = "none";

        };

    window.onclick = function (e) {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    };

}

/* =====================================================
   SEND TO WHATSAPP
===================================================== */

function sendToWhatsApp() {

    const nama = document.getElementById("nama")?.value || "";

    const tarikhLahir = document.getElementById("tarikhLahir")?.value || "";
    
  const umur = document.getElementById("umur")?.value || "";

    const sektor = document.getElementById("sektor")?.value || "";

   const profession = document.getElementById("profession")?.value || "";

const category = document.getElementById("category")?.value || "";

const industry = document.getElementById("industry")?.value || "";

const company = document.getElementById("company")?.value || "";

const position = document.getElementById("position")?.value || "";

const status = document.getElementById("status")?.value || "";

const service = document.getElementById("service")?.value || "";

const operation = document.getElementById("operation")?.value || "";
    const basic = document.getElementById("basic")?.value || "0";

    const allowance = document.getElementById("allowance")?.value || "0";

    let text = `Assalamualaikum.

Saya ingin membuat semakan lanjut Pembiayaan Peribadi-i.

━━━━━━━━━━━━━━━━━━

*Nama:* ${nama}
*Tarikh Lahir:* ${tarikhLahir}
*Umur:* ${umur}
*Sektor:* ${sektor}
`;

if (profession) {
    text += `*Profesion:* ${profession}\n`;
}

   if (category) {
    text += `*Kategori Majikan:* ${
        document.getElementById("category").options[
            document.getElementById("category").selectedIndex
        ].text
    }\n`;
}

if (industry) {
    text += `*Bidang Syarikat:* ${
        document.getElementById("industry").options[
            document.getElementById("industry").selectedIndex
        ].text
    }\n`;
}

if (company) {
    text += `*Majikan:* ${company}\n`;
}

if (position) {
    text += `*Jawatan:* ${position}\n`;
}

text += `*Status Jawatan:* ${
    document.getElementById("status").options[
        document.getElementById("status").selectedIndex
    ].text
}\n`;

if (service) {
    text += `*Tempoh Perkhidmatan:* ${
        document.getElementById("service").options[
            document.getElementById("service").selectedIndex
        ].text
    }\n`;
}

text += `*Tempoh Operasi:* ${
    document.getElementById("operation").options[
        document.getElementById("operation").selectedIndex
    ].text
}\n`;
   
text += `*Gaji Pokok:* RM ${Number(basic).toLocaleString("en-MY")}\n`;

if (allowance && Number(allowance) > 0) {
    text += `*Elaun Tetap:* RM ${Number(allowance).toLocaleString("en-MY")}\n`;
}

text += `
━━━━━━━━━━━━━━━━━━

Saya telah membuat semakan awal melalui laman web dan ingin mendapatkan semakan lanjut.

Terima kasih.
`;

    window.open(

        `https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(text)}`,

        "_blank"

    );

}
