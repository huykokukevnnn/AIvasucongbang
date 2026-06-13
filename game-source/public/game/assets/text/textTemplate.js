const english = {
    // texts displayed in the html
    header: {
        title: 'Survival of the Best Fit',
        subtitle: 'Cách AI tuyển dụng giống con người',
    },
    about: {
        aboutBody: 'Survival of the Best Fit là một trò chơi để chứng minh làm thế nào việc sử dụng AI một cách mù quáng trong tuyển dụng có thể tiếp tục kéo dài những thiên vị của con người. Trong mô phỏng này, người dùng sẽ đóng vai trò là nhà tuyển dụng tại một công ty phát triển nhanh. Để giảm chi phí và tối đa hóa sản lượng, họ sẽ sử dụng một hệ thống AI mới mẻ để thay thế con người, chỉ để nhận ra rằng điều này tạo ra một chuỗi các vấn đề.\nĐây là dự án của Gabor Csapo, Jihyun Kim, Miha Klasinc, và Alia ElKattan',
    },
 
    //resources page
 
    resources: {
        title: 'Máy móc, Thiên vị và Sự công bằng',
        aboutBiasTitle: 'Thiên vị máy móc hoạt động như thế nào?',
        aboutBias: 'xx\n xxx',
    },
 
    // texts displayed during the game
    titleStage: {
        header: 'Chúc mừng!',
        instruction: 'Bạn vừa nhận được khoản đầu tư 1 triệu đô la từ quỹ Orange Valley Ventures. Bạn đã sẵn sàng phát triển startup mới của mình chưa?',
        responses: [
            'Bắt Đầu Chơi',
        ],
    },
    instructions: {
        manual: {
            click: 'Nhấp vào ứng viên để xem CV của họ',
            eval: 'Nhấp Chấp nhận (Accept) để tuyển ứng viên, hoặc Loại bỏ (Reject) để xem thêm người mới.',
        },
        ml: {
 
        },
    },
 
    smallOfficeStage: {
        subject: 'Khoản đầu tư của chúng tôi vào startup của bạn',
        messageFromVc: 'Chúng tôi rất hào hứng khi thấy bạn phát triển startup này. Đây là một thị trường cạnh tranh nên hãy chỉ tuyển những người giỏi nhất.',
        responses: ['Bắt đầu tuyển dụng thôi'],
        hiringGoal: 3,
    },
 
    mediumOfficeStage: {
        subject: 'Khởi đầu tốt đấy',
        messageFromVc: 'Tuy nhiên, để có thêm vốn, bạn sẽ cần tuyển dụng nhanh hơn, vì vậy hãy chú ý đến đồng hồ!',
        responses: [
            'Tôi sẽ tuyển nhanh hơn.',
            'Hmm, được thôi.',
        ],
        hiringGoal: 5,
        duration: 45
    },
 
    largeOfficeStage: {
        subject: 'Vòng gọi vốn tiếp theo...',
        messageFromVc: 'Nỗ lực tốt đấy, nhưng bạn cần tuyển nhanh hơn nữa để nhận thêm vốn. Bạn có làm được không?',
        responses: [
            'Tất nhiên rồi!',
            'Tôi hơi bị quá tải một chút.',
        ],
        hiringGoal: 8,
        previousStageFailed: 'Bạn đã hết thời gian. Các nhà đầu tư muốn thấy kết quả, bạn sẽ phải tuyển thêm nhiều người hơn nữa vào tháng tới!',
        duration: 45
 
    },
 
    mlTransition: {
        subject: 'Sử dụng AI?',
        messageFromVc: 'Cạnh tranh ở Thung lũng Orange đang quá khốc liệt... Bạn có thể bảo các kỹ sư phần mềm của mình đẩy nhanh tốc độ lên được không? Tôi nghe nói dạo này AI giải quyết được mọi vấn đề đấy.',
        responses: [
            'Chắc chắn rồi, chúng ta có thể tự động hóa nó!',
            'Hmm, tôi sẽ email cho các kỹ sư.',
        ],
        previousStageFailed: 'Cách làm hiện tại rõ ràng không ổn. Hãy trao đổi với các kỹ sư phần mềm xem họ có thể đẩy nhanh tốc độ không. Có lẽ AI là giải pháp.',
    },
    // add transition here. e-mail from INVESTOR says:  We’ve made good progress, but the faster we grow, the more profit we’ll make. I suggest you use an automated program to help with hiring. Check with the software development team?
 
    // email from SOFTWARE ENGINEER
    conversation: [
        {
            dialogue_step: 1,
            text: 'Bạn đã hỏi chúng tôi cách để tuyển dụng nhanh hơn. Vì vậy, chúng tôi đã xây dựng một thuật toán tuyển dụng bằng <i>học máy (machine learning)</i>. Về cơ bản, chúng ta sẽ dạy máy tính cách tuyển người giống như bạn, nhưng nhanh hơn rất nhiều!',
            answer_choice: [
                {
                    text: 'Nó hoạt động thế nào?',
                    response: '',
                },
                {
                    text: 'Tuyệt quá.',
                    response: 'Hoàn hảo! ',
 
                },
            ],
        },
        {
            dialogue_step: 2,
            text: 'Đầu tiên, thuật toán sẽ đọc qua CV của các ứng viên trước đây và xem họ có được nhận hay không. Sau đó nó sẽ học cách phân biệt ứng viên tốt và xấu bằng cách <u>sao chép quá trình ra quyết định của bạn</u>!',
            answer_choice: [
                {
                    text: 'Một cỗ máy sẽ suy nghĩ giống tôi sao?',
                    response: 'Suy nghĩ là một từ hơi quá. ',
                },
                {
                    text: 'Nghe hợp lý đấy',
                    response: 'Dù vậy chúng ta vẫn phải cẩn thận.',
                },
            ],
        },
        {
            dialogue_step: 3,
            text: 'Chương trình không thể tự biết ứng viên nào tốt hay xấu nếu không có con người chỉ dẫn - đầu tiên chúng ta cần cung cấp cho nó <u>rất nhiều dữ liệu</u> để học.',
            answer_choice: [
                {
                    text: 'Chúng ta lấy dữ liệu ở đâu?',
                    response: '',
                },
                {
                    text: 'Bao nhiêu là rất nhiều?',
                    response: '',
                },
            ],
        },
        {
            dialogue_step: 4,
            text: 'Tôi cần bạn giúp: bạn có thể gửi cho tôi CV của tất cả những ứng viên mà bạn đã đánh giá từ trước đến nay không? <u><b>Nhấn</b> vào tệp tin</u> tên là <i>"cv_all.zip"</i> <span class="desktop__folder-icon"></span> trên màn hình của bạn',
            file_drag: true,
            answer_choice: [],
        },
        {
            dialogue_step: 5,
            text: 'Cảm ơn! Thuật toán học máy sẽ chính xác hơn khi có nhiều dữ liệu, vì vậy chúng ta sẽ làm thế này: sử dụng dữ liệu của các công ty công nghệ lớn. Họ có hồ sơ ứng viên khổng lồ, nên chúng ta có thể gộp CV của mình với của họ để huấn luyện mô hình! \n <u>Hãy chọn một công ty</u> mà bạn cho là chuyên tuyển những người thông minh.',
            dataset_choice: true,
            answer_choice: [
                'Google',
                'Amazon',
                'Facebook',
            ],
        },
        {
            dialogue_step: 6,
            text: 'Vậy là xong! Bây giờ chúng ta có thể huấn luyện thuật toán với rất nhiều dữ liệu trong quá khứ và đưa nó vào sử dụng!',
            answer_choice: [
                {
                    text: 'Tuyệt, hãy huấn luyện nó!',
                },
            ],
        },
    ],

        stats_conversation: [
        {
            dialogue_step: 1,
            text: 'Chúng ta đang cố gắng tìm ra thuật toán bị lỗi ở đâu.',
            answer_choice: [
                {
                    text: 'Hãy thử chia nhỏ quyết định của nó theo màu cam và xanh?',
                    response: '',
                },
            ],
        },
        {
            dialogue_step: 2,
            text: 'Đây rồi; bạn nghĩ sao?',
            stats: true,
            answer_choice: [
                {
                    text: 'Chúng ta đang loại bỏ nhiều người màu xanh hơn.',
                    response: '',
                },
                {
                    text: 'Điều này không phải là thiên vị.',
                    response: 'Nếu bạn nhìn kỹ, chúng ta có số lượng ứng viên xanh và cam giỏi ngang nhau, nhưng thuật toán lại nhận nhiều người cam hơn hẳn. ',
                },
            ],
        },
        {
            dialogue_step: 3,
            text: 'Hãy tìm hiểu xem tại sao! Bạn có nhớ cách chúng ta huấn luyện thuật toán lúc đầu không?',
            answer_choice: [
                {
                    text: 'Tôi đã gửi các quyết định của mình để thuật toán bắt chước.',
                    response: 'Chính xác. ',
                },
                {
                    text: 'Tôi không quan tâm, hãy sửa nó đi!',
                    response: 'Cỗ máy được tạo ra dựa trên quyết định của bạn, nên tôi cần bạn giúp. ',
                },
            ],
        },
        // {
        //     dialogue_step: 4,
        //     text: 'Let\'s analyze your decisions.',
        //     answer_choice: [
        //         {
        //             text: 'Ok',
        //             response: '',
        //         },
        //         {
        //             text: 'Sure, but I wasn\'t biased',
        //             response: 'You might\'ve not been, but maybe your applicant pool was. ',
        //         },
        //     ],
        // },
        {
            dialogue_step: 5,
            text: 'Nhìn vào dữ liệu tuyển dụng thủ công của chúng ta này: ',
            stats: true,
            manualStats: true,
            answer_choice: [
                {
                    text: 'Tôi đã nhận nhiều người màu cam hơn.',
                    response: 'Thuật toán cố gắng sao chép các quyết định trong quá khứ của chúng ta, vì vậy nếu bạn nhận nhiều người màu cam hơn, nó sẽ "học" cách ưu ái họ. ',
                },
                {
                    text: 'Tôi chắc chắn mình không thiên vị!',
                    response: 'Tôi tin bạn có ý tốt, nhưng chúng ta có rất ít ứng viên xanh ở vòng đầu, và số được nhận lại càng ít hơn. Thuật toán đã hiểu nhầm rằng họ là những ứng viên kém.',
                },
            ],
        },
        {
            dialogue_step: 6,
            text: ' ',
            answer_choice: [
                {
                    text: 'Đáng lẽ chúng ta phải kiểm tra kỹ dữ liệu.',
                    response: 'Đúng vậy, tôi đang đọc thấy rằng chúng ta cần phải cẩn thận hơn về nguồn gốc và phân tích thống kê của dữ liệu',
                },
                {
                    text: 'Nhưng trên CV đâu có ghi màu sắc!',
                    response: 'Nó có thể học gián tiếp từ các yếu tố khác phân biệt người Cam và Xanh, ví dụ: người Cam thường học Đại học Orange Valley còn người Xanh học Đại học Bluetown. ',
                },
            ],
        },
        {
            dialogue_step: 7,
            text: 'Đáng lẽ chúng ta cũng phải kiểm tra chất lượng tập dữ liệu của công ty lớn mà bạn gửi cho tôi nữa! Làm sao tôi có thể hiểu được các quyết định tuyển dụng cơ chứ? Tôi chỉ là kỹ sư phần mềm thôi!',
            answer_choice: [
                {
                    text: 'Lẽ ra chúng ta nên hợp tác chặt chẽ và cẩn thận hơn...',
                    response: '',
                },
                // {
                //     text: 'We should have worked more together.',
                //     response: '',
                // },
            ],
        },
    ],
 
    mlLabStage: {       
        narration: [
            {
                news: [
                    'Cách tốt nhất để cắt giảm chi phí: dùng học máy trong mọi việc',
                    'Tham vọng được cho là đặc điểm quan trọng nhất của nhân viên',
                    'Khéo léo hay hiếu chiến? Những cách mô tả khác nhau về người màu xanh',
                ],
            },
            {
                messageFromVc: 'Bạn đã tuyển dụng nhanh gấp 10 lần trước đây VÀ cắt giảm được chi phí! Làm tốt lắm, thuật toán có vẻ đang hoạt động hiệu quả',
                responses: [
                    'Thật tuyệt khi nghe điều đó!',
                ],
                news: [
                    'Tạp chí Orange Valley: Tương lai tuyển dụng nằm ở AI?',
                    'Tech Junkies: Thuật toán tuyển dụng là xu hướng tiếp theo',
                ],
            },
            {
                launchCVInspector: true,
                messageFromVc: 'Tôi vừa nhận được khiếu nại từ một ứng viên cũ tên là <u>Elvan Yang</u> hỏi tại sao họ bị loại. Bạn có thể xem thử không?',
                responses: [
                    'Tôi sẽ tìm Elvan trong trình phân tích dữ liệu!',
                    'Được, tôi sẽ email cho bạn kết quả.',
                ],
                inspectQuestion: 'Vậy tại sao Elvan lại bị loại?',
                inspectResponses: [
                    'Tôi không biết nữa.',
                    'Có thể vì Elvan là người màu xanh?',
                ],
            },
            {
                breaking: true,
                messageFromVc: 'Này, vài phóng viên đang bàn tán về thiên vị trong tuyển dụng, nhưng bạn không liên quan vì giờ mọi thứ đã tự động hóa rồi phải không?',
                responses: [
                    'Máy móc thì làm sao mà thiên vị được, đúng không?',
                    'Không chắc nữa, tôi sẽ để mắt đến các quyết định của máy.',
                ],
                news: [
                    'Techountability: Nghiên cứu cho thấy thuật toán tuyển dụng có thể kế thừa định kiến của con người với thiểu số',
                    'Tech Junkies: Thuật toán tuyển dụng hoạt động ra sao?',
                ],
            },
            {
                launchMachineInspector: true,
                messageFromVc: 'Tôi nghe nói bạn có thể dính líu tới vụ thiên vị này. Báo chí đang đòi hỏi sự minh bạch. Hãy xem lại các chỉ số đánh giá của chúng ta để xem có thể công bố được không.',
                responses: [
                    'Để tôi nói chuyện lại với kỹ sư phần mềm!',
                    'Ừm, thực ra... Chúng ta có thể đang gặp rắc rối.',
                ],
                inspectQuestion: 'Một cuộc điều tra gần đây nói rằng chúng ta phân biệt đối xử với cư dân Blueville! Sao có thể thế được?',
                inspectResponses: [
                    'Chúng ta đã huấn luyện trên nhiều ứng viên giỏi màu cam hơn màu xanh. Điều đó khiến AI thiên vị màu cam.',
                    'Có thể tập dữ liệu của công ty công nghệ lớn chứa đầy thiên vị? Chúng ta lẽ ra nên xem kỹ dữ liệu huấn luyện của mình hơn.',
                ],
                news: [
                    'Báo Blueville: Cư dân Blueville bị đối xử bất công bởi thuật toán?',
                    'The justice: Đặc quyền màu Cam trong ngành công nghệ',
                ],
            },
            {
                messageFromVc: 'Đóng cửa công ty ngay!!! Tin tức đã lan truyền và bạn vừa bị kiện vì phân biệt đối xử trong tuyển dụng. Tất cả các nhà đầu tư đang rút vốn! Rốt cuộc chuyện quái gì đã xảy ra?',
                responses: [
                    'Hãy tổng kết lại chuyện gì đã xảy ra.',
                ],
                news: [
                    'Blueville Daily: Bê bối thuật toán tuyển dụng vượt tầm kiểm soát',
                    'The Justice: Các công ty công nghệ cần phải chịu trách nhiệm',
 
                ],
            },
        ],
    },
    selfPromoMessages: [
        'Tuyển tôi đi!',
        'Tôi là người giỏi nhất',
        'Giúp tôi nuôi gia đình với!',
        'Tôi là một chuyên gia!',
        'Giúp tôi trả nợ sinh viên với!',
        'Tôi rất cần một công việc!',
        'Hãy chọn tôi!',
        'Tôi là một người tốt!',
        'Tôi là người có tham vọng',
        'Đây là một startup tiềm năng',
        'Bạn có vẻ là một CEO tuyệt vời',
        'Tôi muốn làm việc cho bạn',
        'Tôi rất giỏi giao tiếp',
        'Tôi có thể làm tốt hơn những người này',
        'Tôi học hỏi rất nhanh!',
        'Tại sao bạn lại không tuyển tôi chứ?',
        'Tôi có hai đứa con',
        'Tôi từng thông minh nhất lớp'
    ]
};

const language = 'hungarian';

// exporting whatever is determined as the language.
// module.export is for pug, while the txt variable is just a global shatred variable holding all the texts and can be used in JS
// when loading in the ES6 application, there is no module provided so it is undefined
let txt;

// defining a global variable candidateClicked to access the ID globally without having to emit a value
let candidateClicked = 0;
let candidateInSpot = null;

function setLang(dictionary) {
    if (typeof module !== 'undefined') {
        module.exports = dictionary;
    } else {
        txt = dictionary;
    }
}

switch (language) {
case 'english':
    setLang(english);
    break;
case 'arabic':
    setLang(null);
    break;
default:
    setLang(english);
} 
