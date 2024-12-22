document.getElementById('convertButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput').files[0];
    const format = document.getElementById('formatSelect').value;

    if (fileInput) {
        const reader = new FileReader();
        reader.readAsDataURL(fileInput);

        reader.onload = function (event) {
            const img = new Image();
            img.src = event.target.result;

            img.onload = function () {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                const link = document.getElementById('downloadLink');
                link.href = canvas.toDataURL(`image/${format}`);
                link.download = `convertido.${format}`;
                link.style.display = 'block';
                link.textContent = 'Baixar Imagem Convertida';
            };
        };

        reader.onerror = function (error) {
            console.error('Erro: ', error);
        };
    } else {
        alert('Por favor, selecione um arquivo WEBP primeiro.');
    }
});
