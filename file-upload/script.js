const processSingleImage=(event)=>{
const files=event.target.files;
console.log(files);
const image=files[0];
console.log(image);

const tempImageSrc=URL.createObjectURL(image);
console.log(tempImageSrc);

imageDom.src=tempImageSrc;
imageName.textContent=`File name:${image.name}`;
imageSize.textContent=`File size: ${image.size}`;
singleImageContainer.classList.toggle("hide");
// singleImageContainer.classList;
// console.log(singleImageContainer.classList);
}
const processMultipleImages = (event) => {
    const files = event.target.files;
    console.log(files);
    let tempDom = "";

    for (let i = 0; i < files.length; i++) {
        const image = files[i];
        console.log(image);

        const sizeInKB = +((image.size / 1024).toFixed());
        console.log(sizeInKB);
        tempDom += `
            <div class="container">
                <img src="${URL.createObjectURL(image)}" width="200" alt="${image.name}"/>
                <p>Image name: ${image.name}</p>
                <p>Image size: ${sizeInKB} KB</p>
            </div>
        `;

    }

    multipleImageContainer.innerHTML = tempDom;
    console.log(tempDom);
};

