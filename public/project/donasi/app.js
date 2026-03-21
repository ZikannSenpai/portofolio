const STATIC_QRIS =
    "00020101021126610014COM.GO-JEK.WWW01189360091433235676600210G3235676600303UMI51440014ID.CO.QRIS.WWW0215ID10264726415900303UMI5204899953033605802ID5925DANDI EKA SAPUTRA, Digita6006BANTUL61055576362070703A01630460EC";

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
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const val = btn.getAttribute("data").replace(/\./g, "");
        selectedNominal = parseInt(val);

        input.value = selectedNominal;
        terpilih.textContent = "Rp " + selectedNominal.toLocaleString("id-ID");
    });
});

// klik buat qr
const canvas = document.getElementById("qrisCanvas");

submit.addEventListener("click", () => {
    const nominal = input.value || selectedNominal;

    if (!nominal || nominal <= 0) {
        statusQR.textContent = "nominal lu kosong goblok";
        return;
    }

    const qris = generateQrisDynamic(parseInt(nominal));

    if (!qris) {
        statusQR.textContent = "gagal bikin QR 🥀";
        return;
    }

    statusQR.textContent = "QR siap 😎";

    // render jadi gambar
    QRCode.toCanvas(
        canvas,
        qris,
        {
            width: 220
        },
        function (err) {
            if (err) {
                statusQR.textContent = "error render 😭";
            }
        }
    );
});
