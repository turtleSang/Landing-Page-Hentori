export type CardProcess = {
    name: string;
    imagePath: string;
    content: string;
    imageDes: string;
}

export type CardCustomer = {
    imageUrl: string,
}

export type Product = {
    type: string,
    listLinkImg: LinkImg[],
}

export type LinkImg = {
    linkImg: string,
    des: string
}