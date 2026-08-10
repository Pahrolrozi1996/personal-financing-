console.log("Personal Financing Premium Loaded");
/* =====================================================
   AUTO WHATSAPP (OLD VERSION)
=====================================================

if(form){

    form.addEventListener("submit",function(e){

        e.preventDefault();

        const nama = document.getElementById("nama").value;

        const tarikhLahir = document.getElementById("tarikhLahir").value;

        const sektor = document.getElementById("sektor").value;

        const today = new Date();
const birth = new Date(tarikhLahir);

let umur = today.getFullYear() - birth.getFullYear();

const m = today.getMonth() - birth.getMonth();

if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    umur--;
}

        const text =
`Assalamualaikum.

Saya ingin membuat semakan awal kelayakan pembiayaan.

Nama : ${nama}
Umur : ${umur}
Sektor : ${sektor}`;

        window.open(

`https://wa.me/${CONFIG.phone}?text=${encodeURIComponent(text)}`,

"_blank"

);

    });

}

*/

/* =====================================================
   SMART FORM
===================================================== */

const sektorSelect = document.getElementById("sektor");
const dynamicFields = document.getElementById("dynamicFields");

if (sektorSelect) {

    sektorSelect.addEventListener("change", function () {

        const sektor = this.value;

        dynamicFields.innerHTML = "";

        if (sektor === "kerajaan") {
            loadKerajaan();
        } else if (sektor === "berkanun") {
            loadBerkanun();
        } else if (sektor === "glc") {
            loadGLC();
        } else if (sektor === "professional") {
            loadProfessional();
        } else if (sektor === "swasta") {
            loadSwasta();
        }

    });

}

function loadKerajaan(){

dynamicFields.innerHTML = `

<div class="form-group">

<label>Nama Jabatan / Kementerian *</label>

<input type="text" id="company">

</div>

<div class="form-group">

<label>Jawatan *</label>

<input type="text" id="position" required>

</div>

<div class="form-group">

<label>Status Jawatan *</label>

<select id="status" required>

<option value="">Sila Pilih</option>

<option value="tetap">Tetap (Permanent & Confirmed)</option>

<option value="kontrak">Kontrak</option>

<option value="percubaan">Percubaan</option>

</select>

</div>

<div class="form-group">

<label>Tempoh Perkhidmatan *</label>

<select id="service" required>

<option value="">Sila Pilih</option>

<option value="lt3">Kurang 3 Bulan</option>

<option value="3to6">3 hingga kurang 6 Bulan</option>

<option value="6to12">6 hingga kurang 12 Bulan</option>

<option value="1to2">1 hingga kurang 2 Tahun</option>

<option value="2plus">2 Tahun dan ke atas</option>

</select>

</div>

<div class="form-group">

<label>Gaji Pokok (RM)</label>

<input type="number" id="basic" required>

</div>

<div class="form-group">

<label>Elaun Tetap (RM)</label>

<input type="number" id="allowance">

</div>

`;

}

function loadBerkanun() {

    loadKerajaan();
    loadKerajaan("Nama Jabatan / Kementerian");
loadKerajaan("Nama Jabatan / Agensi");

}

function loadGLC() {

    loadCompanyForm("Nama Syarikat");

}

function loadProfessional() {

    dynamicFields.innerHTML = `

    <div class="form-group">

        <label>Profesion *</label>

        <select id="profession" required>

            <option value="">Sila Pilih</option>

            <option value="accountant">Accountant</option>
            <option value="engineer">Engineer</option>
            <option value="lecturer">Lecturer</option>
            <option value="vet">Veterinary Doctor</option>
            <option value="optometrist">Optometrist</option>
            <option value="qs">Quantity Surveyor</option>
            <option value="actuary">Actuary</option>
            <option value="doctor">Medical Doctor</option>
            <option value="dentist">Dentist</option>

        </select>

        <small class="form-note">

            Nota: Jika profesion anda tidak tersenarai, sila pilih <strong>"Syarikat Swasta"</strong> pada bahagian Sektor Pekerjaan untuk meneruskan semakan awal.

        </small>

    </div>

    <div class="form-group">

        <label>Nama Majikan *</label>

        <input type="text" id="company" required>

    </div>

    <div class="form-group">

        <label>Status Jawatan *</label>

        <select id="status" required>

            <option value="">Sila Pilih</option>
            <option value="tetap">Permanent & Confirmed</option>
            <option value="kontrak">Kontrak</option>
            <option value="percubaan">Probation</option>

        </select>

    </div>

    <div class="form-group">

        <label>Tempoh Perkhidmatan *</label>

        <select id="service" required>

            <option value="">Sila Pilih</option>
            <option value="lt6">Kurang 6 Bulan</option>
            <option value="6plus">6 Bulan dan ke atas</option>

        </select>

    </div>

    <div class="form-group">

        <label>Gaji Pokok (RM) *</label>

        <input type="number" id="basic" min="0" required>

    </div>

    <div class="form-group">

        <label>Elaun Tetap (RM)</label>

        <input type="number" id="allowance" min="0">

    </div>

    `;

}


function loadCompanyForm(label) {

    dynamicFields.innerHTML = `

    <div class="form-group">

        <label>${label} *</label>

        <input type="text" id="company" required>

    </div>

    <div class="form-group">

        <label>Jawatan *</label>

        <input type="text" id="position" required>

    </div>

    <div class="form-group">

        <label>Status Jawatan *</label>

        <select id="status" required>

            <option value="">Sila Pilih</option>

            <option value="tetap">Permanent & Confirmed</option>

            <option value="kontrak">Kontrak</option>

            <option value="percubaan">Probation</option>

        </select>

    </div>

    <div class="form-group">

        <label>Tempoh Perkhidmatan *</label>

        <select id="service" required>

            <option value="">Sila Pilih</option>

            <option value="lt6">Kurang 6 Bulan</option>

            <option value="6plus">6 Bulan dan ke atas</option>

            <option value="2plus">2 Tahun dan ke atas</option>

        </select>

    </div>

    <div class="form-group">

        <label>Gaji Pokok (RM) *</label>

        <input type="number" id="basic" min="0" required>

    </div>

    <div class="form-group">

        <label>Elaun Tetap (RM)</label>

        <input type="number" id="allowance" min="0">

    </div>

    `;

}

function loadSwasta() {

    dynamicFields.innerHTML = `

<div class="form-group">

    <label>Kategori Majikan *</label>

    <select id="category" required>

        <option value="">Sila Pilih</option>

        <option value="plc_mnc">
            Public Listed Company / Multinational Company (MNC)
        </option>

        <option value="prominent">
            Prominent Company
        </option>

        <option value="private">
            Syarikat Swasta Biasa
        </option>

    </select>

</div>

    <div class="form-group">

        <label>Bidang Syarikat *</label>

        <select id="industry" required>

            <option value="">Sila Pilih</option>

            <option value="automotive">Automotive Manufacturing</option>

            <option value="food">Food Manufacturing</option>

            <option value="pharma">Pharmaceutical</option>

            <option value="medical">Medical Equipment</option>

            <option value="semi">Semiconductor</option>

            <option value="manufacturing">Manufacturing</option>

            <option value="transport">Transportation</option>

            <option value="construction">Construction</option>

            <option value="others">Lain-lain</option>

        </select>

        <small class="form-note">

        Nota: Pilih bidang syarikat yang paling hampir dengan bidang perniagaan syarikat anda. Jika tiada dalam senarai, sila pilih "Lain-lain".

        </small>

    </div>

    <div id="companyExtra"></div>

    `;

    document
        .getElementById("category")
        .addEventListener("change", renderSwastaFields);

}

function renderSwastaFields() {

    const category = document.getElementById("category").value;

    const extra = document.getElementById("companyExtra");

    let operationField = "";

 if (category === "prominent" || category === "private"){

        operationField = `

        <div class="form-group">

            <label>Tempoh Operasi Syarikat *</label>

            <select id="operation">

                <option value="">Sila Pilih</option>

                <option value="under5">Kurang 5 Tahun</option>

                <option value="over5">5 Tahun dan ke atas</option>

            </select>

        </div>

        `;

    }

    extra.innerHTML = `

    <div class="form-group">

        <label>Nama Syarikat *</label>

        <input type="text" id="company">

    </div>

    <div class="form-group">

        <label>Jawatan *</label>

        <input type="text" id="position" required>

    </div>

    <div class="form-group">

        <label>Status Jawatan *</label>

        <select id="status" required>

            <option value="">Sila Pilih</option>

            <option value="tetap">Permanent & Confirmed</option>

            <option value="kontrak">Kontrak</option>

            <option value="probation">Probation</option>

        </select>

    </div>

    <div class="form-group">

        <label>Tempoh Perkhidmatan *</label>

        <select id="service" required>

            <option value="">Sila Pilih</option>

            <option value="lt6">Kurang 6 Bulan</option>

            <option value="6plus">6 Bulan dan ke atas</option>

            <option value="2plus">2 Tahun dan ke atas</option>

        </select>

    </div>

    ${operationField}

    <div class="form-group">

        <label>Gaji Pokok (RM) *</label>

        <input type="number" id="basic" required>

    </div>

    <div class="form-group">

        <label>Elaun Tetap (RM)</label>

        <input type="number" id="allowance">

    </div>

    `;

}

/* =====================================================
   CHECK ELIGIBILITY
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const checkButton = document.getElementById("checkEligibility");

if (checkButton) {

    checkButton.addEventListener("click", () => {

        const form = document.getElementById("eligibilityForm");

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        validate();

    });

}

});

/* ==========================================
   RULES POPUP DATA
========================================== */

const RULES_POPUP = {


    kerajaan: `

        <h2>🏛 Kerajaan</h2>

        <h4>Tetap</h4>

        <p>✔ Basic + Elaun Tetap minimum <strong>RM2,000</strong></p>

        <hr>

        <h4>Kontrak</h4>

        <p>✔ Tempoh Perkhidmatan <strong>2 Tahun dan ke atas</strong></p>

        <p>✔ Basic + Elaun Tetap minimum <strong>RM3,000</strong></p>
<hr>

<small>
* Tertakluk kepada penilaian kredit, polisi semasa serta terma dan syarat yang berkuat kuasa.
</small>
    `,

    berkanun: `

        <h2>🏛 Badan Berkanun</h2>

        <h4>Tetap</h4>

        <p>✔ Basic + Elaun Tetap minimum <strong>RM2,000</strong></p>

        <hr>

        <h4>Kontrak</h4>

        <p>✔ Tempoh Perkhidmatan <strong>2 Tahun dan ke atas</strong></p>

        <p>✔ Basic + Elaun Tetap minimum <strong>RM3,000</strong></p>
<hr>

<small>
* Tertakluk kepada penilaian kredit, polisi semasa serta terma dan syarat yang berkuat kuasa.
</small>
    `,

    glc: `

        <h2>🏢 GLC / PANEL COMPANY</h2>

        <p>✔ Permanent & Confirmed</p>

        <p>✔ Tempoh Perkhidmatan minimum <strong>6 Bulan</strong></p>

        <p>✔ Gaji Pokok minimum <strong>RM2,000</strong></p>
<hr>

<small>
* Tertakluk kepada penilaian kredit, polisi semasa serta terma dan syarat yang berkuat kuasa.
</small>
    `,
    

professional332: `

<h2>👨‍⚕️ Professional</h2>

<h4>Profesion Yang Layak</h4>

<p>✔ Accountant</p>
<p>✔ Engineer</p>
<p>✔ Lecturer</p>
<p>✔ Veterinary Doctor</p>
<p>✔ Optometrist</p>
<p>✔ Quantity Surveyor</p>
<p>✔ Actuary</p>
<p>✔ Medical Doctor</p>
<p>✔ Dentist</p>

<hr>

<h4>Syarat Kelayakan</h4>

<p>✔ Mempunyai Professional Certification / Professional Qualification yang diiktiraf.</p>

<p>✔ Permanent & Confirmed</p>

<p>✔ Tempoh Perkhidmatan minimum <strong>6 Bulan</strong></p>

<p>✔ Gaji Pokok minimum <strong>RM2,000</strong></p>

<hr>

<small>
* Tertakluk kepada penilaian kredit, polisi semasa serta terma dan syarat yang berkuat kuasa.
</small>

`,

professional585: `

<h2>👨‍⚕️ Professional</h2>

<h4>Profesion Yang Layak</h4>

<p>✔ Accountant</p>
<p>✔ Engineer</p>
<p>✔ Lecturer</p>
<p>✔ Veterinary Doctor</p>
<p>✔ Optometrist</p>
<p>✔ Quantity Surveyor</p>
<p>✔ Actuary</p>

<hr>

<h4>Syarat Kelayakan</h4>

<p>✔ Mempunyai Professional Certification / Professional Qualification yang diiktiraf.</p>

<p>✔ Permanent & Confirmed</p>

<p>✔ Tempoh Perkhidmatan minimum <strong>6 Bulan</strong></p>

<p>✔ Gaji Pokok minimum <strong>RM2,000</strong></p>

<hr>

<small>
* Tertakluk kepada penilaian kredit, polisi semasa serta terma dan syarat yang berkuat kuasa.
</small>

`,

doctor362: `

<h2>🩺 Doctor & Dentist</h2>

<h4>Profesion Yang Layak</h4>

<p>✔ Medical Doctor</p>

<p>✔ Dentist</p>

<hr>

<h4>Syarat Kelayakan</h4>

<p>✔ Mempunyai Professional Certification / Professional Qualification yang diiktiraf.</p>

<p>✔ Permanent & Confirmed</p>

<p>✔ Tempoh Perkhidmatan minimum <strong>6 Bulan</strong></p>

<p>✔ Gaji Pokok minimum <strong>RM2,000</strong></p>

<hr>

<small>
* Tertakluk kepada penilaian kredit, polisi semasa serta terma dan syarat yang berkuat kuasa.
</small>

`,

swasta721: `

<h2>🏭 Salary Transfer (7.21% p.a.)</h2>

<h4>Public Listed Company (PLC) / Multinational Company (MNC)</h4>

<p>✔ Permanent & Confirmed</p>
<p>✔ Tempoh Perkhidmatan minimum <strong>6 Bulan</strong></p>
<p>✔ Gaji Pokok minimum <strong>RM2,000</strong></p>

<hr>

<h4>Syarikat Swasta</h4>

<p>✔ Permanent & Confirmed</p>
<p>✔ Tempoh Perkhidmatan minimum <strong>2 Tahun</strong></p>
<p>✔ Syarikat beroperasi minimum <strong>5 Tahun</strong></p>
<p>✔ Gaji Pokok minimum <strong>RM2,000</strong></p>

<hr>

<small>
* Tertakluk kepada penilaian kredit, polisi semasa serta terma dan syarat yang berkuat kuasa.
</small>

`,

swasta899: `

<h2>🏭 Standing Instruction (8.99% p.a.)</h2>

<h4>Public Listed Company (PLC) / Multinational Company (MNC)</h4>

<p>✔ Permanent & Confirmed</p>

<p>✔ Tempoh Perkhidmatan minimum <strong>6 Bulan</strong></p>

<p>✔ Gaji Pokok minimum <strong>RM5,000</strong></p>

<hr>

<small>
* Tertakluk kepada penilaian kredit, polisi semasa serta terma dan syarat yang berkuat kuasa.
</small>

`,

swasta1162: `

<h2>🏭 Standing Instruction (11.62% p.a.)</h2>

<h4>Public Listed Company (PLC) / Multinational Company (MNC)</h4>

<p>✔ Gaji Pokok <strong>RM5,000 ke bawah</strong></p>
<p>✔ Gaji Pokok minimum <strong>RM2,000</strong></p>

<hr>

<h4>Syarikat Swasta</h4>

<p>✔ Semua kategori gaji pokok</p>
<p>✔ Gaji Pokok minimum <strong>RM2,000</strong></p>

<hr>

<small>
* Tertakluk kepada penilaian kredit, polisi semasa serta terma dan syarat yang berkuat kuasa.
</small>



 
`,


};

/* ==========================================
   RULE POPUP
========================================== */

const ruleModal = document.getElementById("ruleModal");

const ruleContent = document.getElementById("ruleContent");

document.addEventListener("click", function(e){

    const button = e.target.closest(".view-rule");

    if(!button) return;

    e.preventDefault();

    const category = button.dataset.category;

    ruleContent.innerHTML = RULES_POPUP[category];

    ruleModal.style.display = "flex";

});

/* ==========================================
   CLOSE RULE POPUP
========================================== */

document.querySelector(".close-rule").addEventListener("click", () => {

    ruleModal.style.display = "none";

});

window.addEventListener("click", (e) => {

    if (e.target === ruleModal) {

        ruleModal.style.display = "none";

    }

});

/* =====================================================
   PRICING TAB
===================================================== */

const PRICING = {

package: `

<div class="pricing-card">

    <h3>🏛 Package Government</h3>

    <div class="rate">2.88% <span>p.a.</span></div>

    <div class="rate-tenure">
        ⭐ Tempoh Pembiayaan • 10 Tahun
</div>
<a href="#"
class="view-rule"
data-category="kerajaan"

    <i class="fa-solid fa-circle-exclamation"></i>

Lihat Syarat

</a>

<a href="asset/pdf/gov-2.88.pdf"
target="_blank"
class="download-rate">

    <i class="fa-solid fa-file-pdf"></i>
    Jadual Kadar Pembiayaan

</a>

    <a href="#semakan" class="apply-btn">

        Semak Kelayakan

    </a>

</div>

<div class="pricing-card">

    <h3>🏢 Package Company</h3>

    <div class="rate">2.93% <span>p.a.</span></div>

    <div class="rate-tenure">
    ⭐ Tempoh Pembiayaan • 10 Tahun
</div>
<a href="#"
class="view-rule"
data-category="glc"

    <i class="fa-solid fa-circle-exclamation"></i>

Lihat Syarat

</a>

<a href="asset/pdf/professional-3.62.pdf"
target="_blank"
class="download-rate">

    <i class="fa-solid fa-file-pdf"></i>

    Jadual Kadar Pembiayaan

</a>

    <a href="#semakan" class="apply-btn">

        Semak Kelayakan

    </a>

</div>

`,

professional: `

<div class="pricing-card">

<h3>👨‍⚕️ Salary Transfer</h3>

<div class="rate">3.32% <span>p.a.</span></div>

<div class="rate-tenure">
⭐ Tempoh Pembiayaan • 10 Tahun
</div>
<a href="#"
class="view-rule"
data-category="professional332"

    <i class="fa-solid fa-circle-exclamation"></i>

Lihat Syarat
</a>

<a href="asset/pdf/professional-3.32.pdf"
target="_blank"
class="download-rate">

    <i class="fa-solid fa-file-pdf"></i>

    Jadual Kadar Pembiayaan

</a>

<a href="#semakan" class="apply-btn">

Semak Kelayakan

</a>

</div>

<div class="pricing-card">

<h3>🩺 Doctor & Dentist</h3>

<div class="rate">3.62% <span>p.a.</span></div>

<div class="rate-tenure">
⭐ Tempoh Pembiayaan • 10 Tahun
</div>
<a href="#"
class="view-rule"
data-category="doctor362"

    <i class="fa-solid fa-circle-exclamation"></i>

Lihat Syarat
</a>

<a href="asset/pdf/professional-3.62.pdf"
target="_blank"
class="download-rate">

    <i class="fa-solid fa-file-pdf"></i>

    Jadual Kadar Pembiayaan

</a>

<a href="#semakan" class="apply-btn">

    Semak Kelayakan

</a>

</div>

<div class="pricing-card">

<h3>🎓 Standing Instruction</h3>

<div class="rate">5.85% <span>p.a.</span></div>

<div class="rate-tenure">
⭐ Tempoh Pembiayaan • 10 Tahun
</div>
<a href="#"
class="view-rule"
data-category="professional585"

   <i class="fa-solid fa-circle-exclamation"></i>

Lihat Syarat

</a>

<a href="asset/pdf/professional-5.85.pdf"
target="_blank"
class="download-rate">

    <i class="fa-solid fa-file-pdf"></i>

    Jadual Kadar Pembiayaan

</a>

<a href="#semakan" class="apply-btn">

Semak Kelayakan

</a>

</div>

`,

nonpackage: `

<div class="pricing-card">

<h3>🏢 Salary Transfer</h3>

<div class="rate">7.21% <span>p.a.</span></div>

<div class="rate-tenure">
⭐ Tempoh Pembiayaan • 10 Tahun
</div>
<a href="#"
class="view-rule"
data-category="swasta721"

   <i class="fa-solid fa-circle-exclamation"></i>

Lihat Syarat

</a>

<a href="asset/pdf/swasta-7.21.pdf"
target="_blank"
class="download-rate">

<i class="fa-solid fa-file-pdf"></i>

Jadual Kadar Pembiayaan

</a>

<a href="#semakan" class="apply-btn">

Semak Kelayakan

</a>

</div>

<div class="pricing-card">

<h3>🏢 Standing Instruction </h3>


<div class="rate">8.99% <span>p.a.</span></div>

<div class="rate-tenure">
⭐ Tempoh Pembiayaan • 10 Tahun
</div>
<a href="#"
class="view-rule"
data-category="swasta899"

    <i class="fa-solid fa-circle-exclamation"></i>

Lihat Syarat

</a>

<a href="asset/pdf/swasta-8.99.pdf"
target="_blank"
class="download-rate">

<i class="fa-solid fa-file-pdf"></i>

Jadual Kadar Pembiayaan

</a>

<a href="#semakan" class="apply-btn">

Semak Kelayakan

</a>

</div>

<div class="pricing-card">

<h3>🏢 Standing Instruction</h3>


<div class="rate">11.62% <span>p.a.</span></div>

<div class="rate-tenure">
⭐ Tempoh Pembiayaan • 10 Tahun
</div>
<a href="#"
class="view-rule"
data-category="swasta1162"

   <i class="fa-solid fa-circle-exclamation"></i>

Lihat Syarat

</a>

<a href="asset/pdf/swasta-11.62.pdf"
target="_blank"
class="download-rate">

<i class="fa-solid fa-file-pdf"></i>

Jadual Kadar Pembiayaan

</a>

<a href="#semakan" class="apply-btn">

Semak Kelayakan

</a>

</div>

`

};

document.addEventListener("DOMContentLoaded",()=>{

const content=document.getElementById("pricingContent");

const tabs=document.querySelectorAll(".pricing-tab");

content.innerHTML=PRICING.package;

tabs.forEach(tab=>{

tab.addEventListener("click",()=>{

tabs.forEach(t=>t.classList.remove("active"));

tab.classList.add("active");

content.innerHTML=PRICING[tab.dataset.tab];

});

});

});

/* ==========================================
   RATE INFO POPUP
========================================== */

const rateModal = document.getElementById("rateModal");

const rateBtn = document.getElementById("rateInfoBtn");

const closeRate = document.querySelector(".close-rate");

if (rateBtn && rateModal) {

    rateBtn.addEventListener("click", function (e) {

        e.preventDefault();

        rateModal.style.display = "flex";

    });

}

if (closeRate) {

    closeRate.addEventListener("click", function () {

        rateModal.style.display = "none";

    });

}

window.addEventListener("click", function (e) {

    if (e.target === rateModal) {

        rateModal.style.display = "none";

    }

});

/* ==========================================
   FAQ ACCORDION
========================================== */

document.querySelectorAll(".faq-question").forEach(button => {

    button.addEventListener("click", function () {

        const faqItem = this.parentElement;
        const answer = faqItem.querySelector(".faq-answer");

        // Tutup FAQ lain
        document.querySelectorAll(".faq-item").forEach(item => {

            if (item !== faqItem) {

                item.classList.remove("active");
                item.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

        faqItem.classList.toggle("active");

        if (faqItem.classList.contains("active")) {

            answer.style.maxHeight = answer.scrollHeight + "px";

        } else {

            answer.style.maxHeight = null;

        }

    });

});

/* ==========================================
MOBILE MENU
========================================== */

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active");

menuToggle.classList.toggle("active");

});

}

document.querySelectorAll(".nav-menu a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

menuToggle.classList.remove("active");

});

});

/* ==========================================
   FLOATING WHATSAPP
========================================== */

const floatingWA = document.querySelector(".floating-wa");

if(floatingWA){

floatingWA.style.opacity="0";

floatingWA.style.transform="translateY(30px)";

window.addEventListener("scroll",()=>{

if(window.scrollY>350){

floatingWA.style.opacity="1";

floatingWA.style.transform="translateY(0)";

}else{

floatingWA.style.opacity="0";

floatingWA.style.transform="translateY(30px)";

}

});

}

flatpickr("#tarikhLahir", {
    dateFormat: "d/m/Y",
    altInput: true,
    altFormat: "d/m/Y",
    maxDate: "today",
    disableMobile: true,
    allowInput: false,

    onChange: function(selectedDates) {

        if (!selectedDates.length) return;

        const birth = selectedDates[0];
        const today = new Date();

        let age = today.getFullYear() - birth.getFullYear();

        const monthDiff = today.getMonth() - birth.getMonth();

        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birth.getDate())
        ) {
            age--;
        }

        document.getElementById("umur").value = age + " Tahun";

    }
});

