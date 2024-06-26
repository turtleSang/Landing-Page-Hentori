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
        link: "/gioi-thieu",
    },
    {
        name: "Sản phẩm",
        link: "/san-pham",
    },
    {
        name: "Liên hệ tư vấn",
        link: "/lien-he",
    },
];

export const listProduct = [
    {
        name: "Sơ mi",
        link: "so-mi",
        linkImg: "/product-shirt.jpg"

    },
    {
        name: "Quần Tây",
        link: "quan",
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
    for (let index = 0; index < 9; index++) {
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
        price: "1.450.000",
        description: `Áo sơ mi may đo không chỉ đơn thuần là một trang phục, mà còn là biểu tượng cho sự tinh tế, 
        sang trọng và đẳng cấp của người đàn ông. Khác với những chiếc áo sơ mi mua sẵn được sản xuất hàng loạt, 
        áo sơ mi may đo được thiết kế và hoàn thiện dựa trên số đo cơ thể và sở thích cá nhân của từng khách hàng, 
        mang đến sự vừa vặn hoàn hảo và tôn lên vóc dáng một cách tối ưu nhất`,
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
        price: "860.000",
        description: `Áo thun Polo không chỉ là một item thời trang basic quen thuộc mà còn là biểu tượng cho sự trẻ trung,
         năng động và cá tính. Tuy nhiên, để sở hữu một chiếc áo Polo thực sự vừa vặn, thoải mái và tôn lên vóc dáng, 
         việc lựa chọn may đo là giải pháp hoàn hảo nhất?`,
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
        price: "12.000.000",
        description: `Suit không chỉ là trang phục dành cho những dịp quan trọng mà còn là biểu tượng cho sự thành công, 
        đẳng cấp và quyền lực của người đàn ông. Tuy nhiên, để sở hữu một bộ Suit thực sự vừa vặn, 
        tôn dáng và thể hiện đẳng cấp, việc lựa chọn may đo là giải pháp hoàn hảo nhất.`,
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
        price: "1.450.000",
        description: `Quần tây là một item không thể thiếu trong tủ đồ của mỗi quý ông. Tuy nhiên, 
        để sở hữu một chiếc quần tây thực sự vừa vặn, tôn dáng và đẳng cấp, việc lựa chọn may đo 
        là giải pháp hoàn hảo nhất.`,
        timeDescription: "Tùy vào vật liệu kiểu dáng thời gian để hoàn thành là 10 ngày"

    }
]

export const infoLink = [
    {
        content: "Hentori Bespoke",
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
        link: "tel:0388858682",
        icon: faPhone,
        type: "Điện thoại"
    },
    {
        content: "0388858682",
        link: "https://zalo.me/0388858682",
        icon: faMessage,
        type: "Zalo"
    }
];

export const introConentList: IntroContent[] = [
    {
        title: "Nơi khơi nguồn phong cách quý ông đích thực",
        content: `Từ năm 2017, Hentori Bespoke đã khẳng định vị thế thương hiệu âu phục may đo cao cấp tại Bình Dương. 
        Chúng tôi mang đến cho quý khách hàng những bộ suit hoàn hảo, được may đo tỉ mỉ theo từng đường cắt, từng chi tiết, 
        tôn vinh sự sang trọng và đẳng cấp của phái mạnh`,
        linkImg: {
            linkImg: "/intro/intro-1.jpg",
            des: "Giới thiệu Hentori Bespoke"
        }
    },
    {
        title: "Thiết kế tinh tế",
        content: `Đội ngũ thợ may lành nghề của chúng tôi sở hữu tay nghề cao cùng gu thẩm mỹ tinh tế, tạo nên những bộ suit hoàn hảo, phù hợp với mọi vóc dáng và phong cách`,
        linkImg: {
            linkImg: "/intro/intro-2.jpg",
            des: "Giới thiệu Hentori Bespoke"
        }
    },
    {
        title: "Được tư vấn chuyên nghiệp",
        content: `Đội ngũ chuyên viên giàu kinh nghiệm sẽ giúp bạn lựa chọn chất liệu, kiểu dáng, màu sắc phù hợp nhất với vóc dáng và phong cách cá nhân`,
        linkImg: {
            linkImg: "/intro/intro-3.jpg",
            des: "Giới thiệu Hentori Bespoke"
        }
    }
]