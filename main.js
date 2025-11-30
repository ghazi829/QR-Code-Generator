
    let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText");
    let downloadLink = document.getElementById("downloadLink");


    function generateQRCode() {

        if(qrText.value.length > 0){
            qrImage.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= "+qrText.value;
            imgBox.classList.add("show-img");
            downloadLink.href = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= "+qrText.value;
            downloadLink.style.display = "block";
        }
        else{
            qrText.classList.add("error");
            setTimeout(() => {
                qrText.classList.remove("error");
            }, 1000);
            downloadLink.style.display = "none";
        }

    }
