const qrtext = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const GenerateBtn = document.getElementById('GenerateBtn');
const DownloadBtn = document.getElementById('DownloadBtn');
const qrcontainer = document.querySelector('.qr-body');

let size = sizes.value;
GenerateBtn.addEventListener('click',(e) => {
    e.preventDefault();
    genrateQRcode();
});

function genrateQRcode() {
    new QRCode(qrcontainer, {
        Text:qrtext.value,
        height: size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",

    });
}