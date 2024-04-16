import type { CardProcess, IntroContent, Product } from "./defination";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone, faMessage } from "@fortawesome/free-solid-svg-icons";

export const listLinks = [
    {
        name: "Trang chủ",
        link: "/",
    },
    {
        name: "Giới thiệu",
        link: "/info",
    },
    {
        name: "Sản phẩm",
        link: "/product",
    },
    {
        name: "Liên hệ tư vấn",
        link: "/booking",
    },
];

export const listProduct = [
    {
        name: "Sơ mi",
        link: "shirt",
        linkImg: "/product-shirt.jpg"

    },
    {
        name: "Quần Tây",
        link: "trousers",
        linkImg: "/product-trousers.jpg"
    },
    {
        name: "Suit",
        link: "suit",
        linkImg: "/product-suit.jpg"

    },
    {
        name: "Polo",
        link: "polo",
        linkImg: "/product-polo.jpg"

    },
]

export const listCarousel = () => {
    let lenght: number[] = [];
    for (let i = 1; i <= 4; i++) {
        lenght = [...lenght, i];
    }
    let listLink = lenght.map((value) => {
        return { linkImg: `/carousel/carousel-${value}.jpg`, des: `Hentori Slide Image ${value}` }
    })

    return listLink;
}

export const listProcess: CardProcess[] = [
    {
        name: "Bước 1: Tư vấn",
        imagePath: "/process/process-1.jpg",
        content: `Việc đầu tiên khi sử dụng dịch vụ may đo tại Tiệm may Đỏ là nhận tư vấn và đưa ra lựa chọn mã vải cho bộ đồ của bạn - mỗi mã vải quy định 1 loại chất liệu và màu sắc riêng biệt, không trùng lặp. Để chuẩn bị trước, quý khách hàng nên lựa chọn chất liệu theo nhu cầu sử dụng`,
        imageDes: "Tư vấn tại Hentori Bespoke"
    },
    {
        name: "Bước 2: Lựa chọn kiểu dáng cấu trúc",
        imagePath: "/process/process-2.jpg",
        content: `Sau khi lựa chọn được màu sắc và chất liệu, tư vấn viên sẽ hướng dẫn khách 
        hàng lựa chọn kiểu dáng của từng món đồ. Những chất liệu, màu sắc khác nhau sẽ phù hợp với 
        những kiểu dáng, chi tiết trên bộ đồ khác nhau. Dịch vụ may đo cá nhân tại Hentori Bespoke cung 
        cấp tới khách hàng những lựa chọn phù hợp nhất cho một bộ âu phục`,
        imageDes: "Lựa chọn kiểu dáng tại Hentori Bespoke"
    },
    {
        name: "Bước 3: Lấy số đo cơ thể",
        imagePath: "/process/process-3.jpg",
        content: `Kỹ thuật viên sẽ tiến hành lấy số đo và nắm bắt đặc điểm cơ thể của quý khách hàng. Với mỗi khách hàng, có tới không dưới 30 số đo cơ thể được lưu giữ riêng tại Tiệm. Số đo của quý khách hàng sẽ được kỹ thuật viên kiểm tra và điều chỉnh sau mỗi lần tăng giảm cân nặng. Những số đo cá nhân này là của riêng mỗi khách hàng cũng như mỗi bộ đồ. Chúng tôi sẽ tiến hành cắt vải và may đồ thử cho khách hàng từ chính những số đo này.
        Sau khi lấy số đo, tư vấn viên sẽ kiểm tra lại với khách hàng về mã vải, kiểu dáng và chi tiết của bộ đồ`,
        imageDes: "Lấy số đo tại Hentori Bespoke"
    },
    {
        name: "Bước 4: Fitting/ Thử đồ lần 1",
        imagePath: "/process/process-4.jpg",
        content: `Vì may đo là trải nghiệm cá nhân, nên khách hàng và kỹ thuật viên sẽ cùng trao đổi để tìm ra độ vừa vặn, độ dài,… phù hợp với cơ thể khách hàng. Những thay đổi này cũng sẽ được chỉnh sửa trực tiếp vào số đo riêng được lưu giữ tại Tiệm của khách hàng. Nếu cần chỉnh sửa thêm, chúng tôi sẽ tiến hành chỉnh sửa trong vòng 4-10 ngày cho tới lần thử thứ 2`,
        imageDes: "fitting tại Hentori Bespoke"
    },
    {
        name: "Bước 5:Fitting/ Thử đồ lần 2",
        imagePath: "/process/process-5.jpg",
        content: `Khi tới tiệm fitting lần 2, quý khách hàng đã có thể thử bộ đồ hoàn thiện. Ở lần thử đồ thứ 2, trong trường hợp không cần chỉnh sửa gì thêm, kỹ thuật viên và khách hàng đều ưng ý với bộ đồ, khách hàng đã có thể lấy đồ và sử dụng ngay. Trong trường hợp cần tiếp tục chỉnh sửa bộ đồ, chúng tôi sẽ tiếp tục tiến hành chỉnh sửa bộ đồ trong vòng 5 - 7 ngày và tiến hành fitting các lần tiếp theo. Vậy sau từ 22 đến 25 ngày với tối thiểu 2 lần thử và 1 lần đo, quý khách sẽ có một bộ âu phục hoàn chỉnh được may đo và thiết kế hoàn toàn theo nhu cầu sử dụng, yêu cầu cũng như đặc điểm cơ thể của từng khách hàng`,
        imageDes: "fitting tại Hentori Bespoke"
    }
]

export const listCustomer = () => {
    let list: { imageUrl: string, id: number }[] = [];
    for (let index = 0; index < 12; index++) {
        list = [...list, { imageUrl: `/customers/customers-${index + 1}.jpg`, id: index }];
    }
    return list;
}

export const listProductDetail: Product[] = [
    {
        type: "shirt",
        listLinkImg: [
            {
                linkImg: "/product/shirt/shirt-1.jpg",
                des: "Hentori shirt"
            },
            {
                linkImg: "/product/shirt/shirt-2.jpg",
                des: "Hentori shirt"
            },
            {
                linkImg: "/product/shirt/shirt-3.jpg",
                des: "Hentori shirt"
            },
        ],
        name: "Áo sơ mi",
        price: "800.000.000",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque
        ipsam voluptate quasi cumque ducimus sed iste, perferendis nesciunt sint
        itaque, corporis iusto tenetur. Porro a error eaque consectetur
        voluptates?`,
        timeDescription: "Tùy vào vật liệu kiểu dáng thời gian để hoàn thành là 10 ngày"
    },
    {
        type: "polo",
        listLinkImg: [
            {
                linkImg: "/product/polo/polo-1.jpg",
                des: "Hentori polo"
            },
            {
                linkImg: "/product/polo/polo-2.jpg",
                des: "Hentori polo"
            },
            {
                linkImg: "/product/polo/polo-3.jpg",
                des: "Hentori polo"
            },
            {
                linkImg: "/product/polo/polo-4.jpg",
                des: "Hentori polo"
            },
            {
                linkImg: "/product/polo/polo-5.jpg",
                des: "Hentori polo"
            }
        ],
        name: "Áo Polo",
        price: "300.000.000",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque
        ipsam voluptate quasi cumque ducimus sed iste, perferendis nesciunt sint
        itaque, corporis iusto tenetur. Porro a error eaque consectetur
        voluptates?`,
        timeDescription: "Tùy vào vật liệu kiểu dáng thời gian để hoàn thành là 10 ngày"
    },
    {
        type: "suit",
        listLinkImg: [
            {
                linkImg: "/product/suit/suit-1.jpg",
                des: "Hentori suit"
            },
            {
                linkImg: "/product/suit/suit-2.jpg",
                des: "Hentori suit"
            },
            {
                linkImg: "/product/suit/suit-3.jpg",
                des: "Hentori suit"
            },
            {
                linkImg: "/product/suit/suit-4.jpg",
                des: "Hentori suit"
            },
            {
                linkImg: "/product/suit/suit-5.jpg",
                des: "Hentori suit"
            },
            {
                linkImg: "/product/suit/suit-6.jpg",
                des: "Hentori suit"
            }
        ],
        name: "Suit",
        price: "8.000.000",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque
        ipsam voluptate quasi cumque ducimus sed iste, perferendis nesciunt sint
        itaque, corporis iusto tenetur. Porro a error eaque consectetur
        voluptates?`,
        timeDescription: "Tùy vào vật liệu kiểu dáng thời gian để hoàn thành là 10 ngày"
    },
    {
        type: "trousers",
        listLinkImg: [
            {
                linkImg: "/product/trousers/trousers-1.jpg",
                des: "Hentori trousers"
            },
            {
                linkImg: "/product/trousers/trousers-2.jpg",
                des: "Hentori trousers"
            },
            {
                linkImg: "/product/trousers/trousers-3.jpg",
                des: "Hentori trousers"
            },
            {
                linkImg: "/product/trousers/trousers-4.jpg",
                des: "Hentori trousers"
            }
        ],
        name: "Quần tây",
        price: "1.000.000",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis atque
        ipsam voluptate quasi cumque ducimus sed iste, perferendis nesciunt sint
        itaque, corporis iusto tenetur. Porro a error eaque consectetur
        voluptates?`,
        timeDescription: "Tùy vào vật liệu kiểu dáng thời gian để hoàn thành là 10 ngày"

    }
]

export const infoLink = [
    {
        content: "Facebook",
        link: "https://www.facebook.com/Hentoribespoke.suitmaydo.thudaumot",
        icon: faSquareFacebook,
        type: "Facebook"
    },
    {
        content:
            "Số 39 đường Hoàng Văn Thụ, phường Chánh Nghĩa, thành phố Thủ Dầu Một, tỉnh Bình Dương",
        link: "https://maps.app.goo.gl/SaSxV3199EbSxuHj8",
        icon: faLocationDot,
        type: "Địa chỉ"
    },
    {
        content: "0388858682",
        link: "callto:0388858682",
        icon: faPhone,
        type: "Điện thoại"
    },
    {
        content: "Zalo",
        link: "https://zalo.me/0388858682",
        icon: faMessage,
        type: "Zalo"
    }
];

export const introConentList: IntroContent[] = [
    {
        title: "Giới Thiệu",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        accusantium cupiditate facilis at ullam eos maxime rerum, quasi
        aspernatur repellendus error nostrum a nesciunt. Inventore placeat
        exercitationem soluta aliquid? Nam.`,
        linkImg: {
            linkImg: "/intro/intro-1.jpg",
            des: "Giới thiệu Hentori Bespoke"
        }
    },
    {
        title: "Mục tiêu",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        accusantium cupiditate facilis at ullam eos maxime rerum, quasi
        aspernatur repellendus error nostrum a nesciunt. Inventore placeat
        exercitationem soluta aliquid? Nam.`,
        linkImg: {
            linkImg: "/intro/intro-2.jpg",
            des: "Giới thiệu Hentori Bespoke"
        }
    },
    {
        title: "Bla Bla",
        content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        accusantium cupiditate facilis at ullam eos maxime rerum, quasi
        aspernatur repellendus error nostrum a nesciunt. Inventore placeat
        exercitationem soluta aliquid? Nam.`,
        linkImg: {
            linkImg: "/intro/intro-3.jpg",
            des: "Giới thiệu Hentori Bespoke"
        }
    }
]