

const QRapi = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data";
const text = document.querySelector("input");
const QR_div = document.querySelector(".QR");

async function QR(params) {
        try{
            const result = await fetch(`${QRapi}=${text.value}`);
        
        if(!result){
            throw new Error("Invild text");
        }
        // const qr_img = document.createElement("img");
        // qr_img.src = result;
        // QR_div.append(qr_img);
        console.log(result);
    }
     catch (error) {
        console.error(" fetch failed:", error.message);
    }

}