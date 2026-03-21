const STATIC_QRIS =
    "00020101021126610014COM.GO-JEK.WWW01189360091431506835490210G1506835490303UMI51440014ID.CO.QRIS.WWW0215ID10254320909220303UMI5204866153033605802ID5912Zikann Store6013JAKARTA PUSAT61051011062070703A0163049C54";

function crc16(s) {
    let crc = 0xffff;
    for (let i = 0; i < s.length; i++) {
        crc ^= s.charCodeAt(i) << 8;
        for (let j = 0; j < 8; j++) {
            crc = (crc & 0x8000) !== 0 ? (crc << 1) ^ 0x1021 : crc << 1;
        }
    }
    return (crc & 0xffff).toString(16).toUpperCase().padStart(4, "0");
}

function convertCRC16(str) {
    return str + crc16(str);
}

function generateQrisDynamic(nominal) {
    if (!STATIC_QRIS.trim()) return "";

    try {
        const qrisNoCRC = STATIC_QRIS.slice(0, -4);
        const dynamicQRIS = qrisNoCRC.replace("010211", "010212");

        const split = dynamicQRIS.split("5802ID");
        if (split.length < 2) return "";

        const amount = nominal.toString();
        const tag54 = "54" + amount.length.toString().padStart(2, "0") + amount;

        const finalStr = split[0] + tag54 + "5802ID" + split[1] + "6304";
        return convertCRC16(finalStr);
    } catch {
        return "";
    }
}

const input = document.getElementById("number");
const submit = document.getElementById("submit");
const terpilih = document.getElementById("terpilih");
const statusQR = document.getElementById("statusQR");
const buttons = document.querySelectorAll(".cat-btn");

let selectedNominal = 0;

// klik nominal cepat
input.addEventListener("input", () => {
    const val = parseInt(input.value) || 0;

    selectedNominal = val;

    terpilih.textContent = "Rp " + val.toLocaleString("id-ID");

    statusQR.textContent = val > 0 ? "Siap Dibuat" : "Belum dibuat";
    statusQR.classList.toggle("cyellow", val > 0);
    statusQR.classList.toggle("cred", val <= 0);
    statusQR.classList.remove("cgreen");
});

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const val = btn.getAttribute("data").replace(/\./g, "");
        selectedNominal = parseInt(val);

        input.value = selectedNominal;
        input.dispatchEvent(new Event("input"));
    });
});

// klik buat qr
const canvas = document.getElementById("qrisCanvas");

submit.addEventListener("click", () => {
    const nominal = input.value || selectedNominal;

    if (!nominal || nominal <= 0) {
        statusQR.textContent = "nominal tidak boleh kosong";
        statusQR.classList.add("cred");
        statusQR.classList.remove("cyellow");
        statusQR.classList.remove("cgreen");
        return;
    }
    const qris = generateQrisDynamic(parseInt(nominal));

    if (!qris) {
        statusQR.textContent = "gagal bikin QR 🥀";
        statusQR.classList.add("cred");
        statusQR.classList.remove("cyellow");
        statusQR.classList.remove("cgreen");
        return;
    }

    statusQR.textContent = "Sudah Dibuat";
    statusQR.classList.add("cgreen");
    statusQR.classList.remove("cred");
    statusQR.classList.remove("cyellow");
    // render jadi gambar
    QRCode.toCanvas(
        canvas,
        qris,
        {
            width: 220
        },
        function (err) {
            if (err) {
                statusQR.textContent = "error render";
                statusQR.classList.add("cred");
                statusQR.classList.remove("cyellow");
                statusQR.classList.remove("cgreen");
            }
        }
    );
});
