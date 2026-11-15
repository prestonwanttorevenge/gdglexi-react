export const STATS = [
  { value: '12.500+', label: 'Học viên đã hoàn thành khóa học từ 2019' },
  { value: '96,4%', label: 'Đạt mục tiêu IELTS 6.5+ hoặc VSTEP B1–C1' },
  { value: '8.5', label: 'Điểm IELTS trung bình của đội ngũ giảng viên' },
  { value: '10 người', label: 'Sĩ số tối đa trong một lớp học' },
];

export const NOVEMBER_SCHEDULE = [
  {
    code: 'IELTS-INT',
    title: 'IELTS Intensive 6.5 – 7.5+',
    detail: 'Khai giảng 18/11 • Tối 2-4-6 (19:00)',
    seats: '08 / 10',
    urgent: false,
  },
  {
    code: 'VSTEP-B12',
    title: 'VSTEP B1 – B2 Chuẩn Bộ GD&ĐT',
    detail: 'Khai giảng 20/11 • Tối 3-5-7 (19:30)',
    seats: '07 / 10',
    urgent: false,
  },
  {
    code: 'VSTEP-C1',
    title: 'VSTEP C1 Cấp tốc 5 tuần',
    detail: 'Khai giảng 24/11 • 4 buổi/tuần',
    seats: '07 / 08 Sắp đầy',
    urgent: true,
  },
  {
    code: 'IELTS-FND',
    title: 'IELTS Foundation 4.5 – 5.5',
    detail: 'Khai giảng 25/11 • Trực tiếp & Live Online',
    seats: '06 / 10',
    urgent: false,
  },
];

export const COURSE_CATEGORIES = [
  { id: 'all', label: 'Tất cả' },
  { id: 'ielts', label: 'IELTS' },
  { id: 'vstep', label: 'VSTEP' },
  { id: 'intensive', label: 'Cấp tốc' },
  { id: 'foundation', label: 'Nền tảng' },
];

export const COURSES = [
  {
    id: 'ielts-foundation',
    code: 'IELTS-FND',
    title: 'IELTS Foundation 4.5 – 5.5',
    tags: ['ielts', 'foundation'],
    badge: 'Mới bắt đầu',
    level: 'Cơ bản',
    target: 'Đầu ra IELTS 5.5+',
    duration: '12 tuần (36 buổi)',
    schedule: 'Tối 2-4-6 hoặc 3-5-7 (19:00 – 21:00)',
    format: 'Trực tiếp tại ĐH Bách Khoa Đà Nẵng hoặc Live Online',
    price: '5.900.000đ',
    instructor: 'Cô Minh Anh (IELTS 8.5, chứng chỉ TESOL)',
    suitableFor:
      'Sinh viên năm 1–3 hoặc người mới làm quen với IELTS, đọc hiểu chậm và hay sai ngữ pháp cơ bản khi viết câu.',
    summary:
      'Hệ thống lại ngữ pháp viết câu, sửa lỗi phát âm âm cuối thường gặp và rèn phản xạ 4 kỹ năng cho người mới bắt đầu.',
    curriculum: [
      'Tuần 1–4: Sửa phát âm âm cuối (-s, -ed, trọng âm), củng cố cấu trúc câu đơn/câu ghép và luyện nghe chép đoạn ngắn.',
      'Tuần 5–8: Đọc hiểu theo đoạn văn học thuật, làm quen các dạng câu hỏi Listening Part 1–2 và viết mô tả biểu đồ Task 1.',
      'Tuần 9–12: Viết đoạn văn lập luận Task 2 hoàn chỉnh, luyện nói Part 1–2 theo cặp và thi thử 2 lần đánh giá tiến độ.',
    ],
    highlights: [
      'Ôn tập 12 chủ điểm ngữ pháp hay dùng trong Writing và Speaking',
      'Luyện nghe chép chính tả và kỹ thuật tìm ý chính khi đọc bài dài',
      'Thực hành Speaking Part 1 và viết biểu đồ Task 1 hằng tuần',
      'Ký hợp đồng cam kết đầu ra; học lại miễn phí nếu đi học đủ buổi nhưng chưa đạt band',
    ],
  },
  {
    id: 'ielts-master-7',
    code: 'IELTS-INT',
    title: 'IELTS Intensive 6.5 – 7.5+',
    tags: ['ielts', 'intensive'],
    badge: 'Lớp trọng tâm',
    level: 'Trung cấp – Nâng cao',
    target: 'Đầu ra IELTS 7.0 – 7.5+',
    duration: '10 tuần (30 buổi)',
    schedule: 'Tối 2-4-6 hoặc Cuối tuần',
    format: 'Lớp tối đa 10 học viên',
    price: '8.400.000đ',
    instructor: 'Thầy Hoàng Nam (IELTS 8.5 Overall)',
    suitableFor:
      'Người đã có nền tảng khoảng 5.5–6.0, cần điểm 7.0+ để xét học bổng, du học hoặc miễn thi tiếng Anh đầu ra.',
    summary:
      'Tập trung sửa thói quen viết lan man kiểu dịch từ tiếng Việt sang trong Task 2 và cách mở rộng ý mạch lạc ở Speaking Part 3.',
    curriculum: [
      'Tuần 1–3: Phân tích đề bài Writing Task 1–2, cách lập dàn ý nhanh trong 5 phút và xử lý bẫy True/False/Not Given.',
      'Tuần 4–7: Luyện viết 2 bài/tuần có giảng viên sửa từng câu, kết hợp phản xạ trả lời Speaking Part 2–3 dưới áp lực thời gian.',
      'Tuần 8–10: Giải trọn bộ đề thi trên máy tính, rà soát lỗi mất điểm cá nhân và thi thử Speaking 1:1 theo phòng thi thật.',
    ],
    highlights: [
      'Giảng viên chấm và sửa chi tiết 16 bài Writing theo 4 tiêu chí chấm thi',
      'Thi thử Speaking 1:1 mỗi 2 tuần theo đúng cấu trúc phòng thi thật',
      'Học từ vựng theo 14 chủ đề học thuật thường gặp trong đề thi',
      'Cấp tài khoản làm đề thi thử trên máy tính giống giao diện IDP/BC',
    ],
  },
  {
    id: 'vstep-b1-b2',
    code: 'VSTEP-B12',
    title: 'VSTEP B1 – B2 Chuẩn Bộ GD&ĐT',
    tags: ['vstep', 'foundation'],
    badge: 'Chuẩn đầu ra ĐH',
    level: 'Sơ cấp – Trung cấp',
    target: 'Đạt chứng chỉ VSTEP B1 / B2',
    duration: '8 tuần (24 buổi)',
    schedule: 'Tối 3-5-7 (19:30 – 21:30)',
    format: 'Live Online hoặc Trực tiếp tại ĐH Bách Khoa Đà Nẵng',
    price: '3.800.000đ',
    instructor: 'Cô Thu Hà (Thạc sĩ Ngôn ngữ Anh, 9 năm dạy VSTEP)',
    suitableFor:
      'Sinh viên ĐH Bách Khoa Đà Nẵng cần bằng B1/B2 xét tốt nghiệp, học viên cao học và ứng viên thi công chức.',
    summary:
      'Ôn tập bám sát cấu trúc đề thi VSTEP 4 kỹ năng trên máy tính, giúp bạn quản lý thời gian làm bài và tránh mất điểm ở phần Viết – Nói.',
    curriculum: [
      'Tuần 1–3: Làm quen cấu trúc 4 phần thi máy tính, luyện nghe hội thoại ngắn và công thức viết thư phản hồi (Task 1).',
      'Tuần 4–6: Luyện viết bài luận nêu quan điểm (Task 2), xử lý bài đọc dài 4 đoạn và thực hành Speaking 3 phần.',
      'Tuần 7–8: Thi thử trọn vẹn trên phần mềm mô phỏng giao diện thi tại trường ĐH và sửa lỗi từng học viên trước ngày thi.',
    ],
    highlights: [
      'Luyện cấu trúc viết thư (Task 1) và bài luận (Task 2) đúng yêu cầu đề',
      'Thực hành trả lời Speaking 3 phần theo các nhóm chủ đề hay ra thi',
      'Làm bài thi thử trên phần mềm mô phỏng giao diện thi tại trường ĐH',
      'Hướng dẫn thủ tục đăng ký lịch thi tại các điểm thi được cấp phép',
    ],
  },
  {
    id: 'vstep-c1-sprint',
    code: 'VSTEP-C1',
    title: 'VSTEP C1 Cấp Tốc 5 Tuần',
    tags: ['vstep', 'intensive'],
    badge: 'Cấp tốc 5 tuần',
    level: 'Đã có nền tảng B2',
    target: 'Đạt VSTEP C1 (8.5+/10)',
    duration: '5 tuần (20 buổi)',
    schedule: '4 buổi/tuần (Ca tối linh hoạt)',
    format: 'Lớp nhỏ 6–8 học viên',
    price: '4.900.000đ',
    instructor: 'Thầy Quốc Bảo (Tiến sĩ Ngôn ngữ học ứng dụng)',
    suitableFor:
      'Giảng viên, nghiên cứu sinh, giáo viên tiếng Anh hoặc sinh viên đã vững B2 cần thi lên bậc 5 (C1) trong thời gian gấp.',
    summary:
      'Cường độ 4 buổi/tuần tập trung vào phần Reading suy luận bậc C1 và nâng cấp cấu trúc câu viết luận, trả lời phỏng vấn.',
    curriculum: [
      'Tuần 1–2: Xử lý câu hỏi suy luận, hàm ý tác giả trong Reading C1 và kỹ thuật nghe bài giảng học thuật dài.',
      'Tuần 3–4: Viết bài luận Task 2 theo hướng phản biện hai chiều, nộp bài hằng ngày để nhận sửa lỗi trong 24 giờ.',
      'Tuần 5: Tổng ôn bộ đề thi gần đây và thi thử Speaking 1:1 với áp lực thời gian thật.',
    ],
    highlights: [
      'Luyện kỹ năng đọc suy luận và xử lý câu hỏi nhiễu trong đề Reading C1',
      'Sửa cách dùng từ và cấu trúc câu học thuật để kéo điểm Writing & Speaking',
      'Chấm bài viết hằng ngày và trả nhận xét trong vòng 24 giờ',
      'Tổng hợp bộ đề ôn tập sát với các đợt thi gần đây',
    ],
  },
  {
    id: 'ielts-writing-speaking-lab',
    code: 'IELTS-LAB',
    title: 'IELTS Writing & Speaking Lab',
    tags: ['ielts', 'intensive'],
    badge: 'Chuyên 2 kỹ năng',
    level: 'Đã có nền tảng 5.5+',
    target: 'Tăng +1.0 đến +1.5 band W/S',
    duration: '6 tuần (18 buổi)',
    schedule: 'Thứ 7 & Chủ nhật hoặc Tối 3-5',
    format: 'Thực hành tại lớp + Sửa bài 1:1',
    price: '4.500.000đ',
    instructor: 'Cô Lan Phương (IELTS 8.5, Writing 8.5)',
    suitableFor:
      'Người đã đạt Listening/Reading từ 6.5 trở lên nhưng bị kẹt nhiều lần ở mức 5.5–6.0 Writing hoặc Speaking.',
    summary:
      'Không dạy lại lý thuyết nghe đọc. Toàn bộ 18 buổi dành để bóc tách lỗi lập luận khi viết và sửa phát âm, ngữ điệu trực tiếp khi nói.',
    curriculum: [
      'Tuần 1–2: Chẩn đoán nguyên nhân kẹt band ở từng học viên (lỗi logic đoạn văn, dùng từ sai ngữ cảnh hoặc nói ngắt quãng).',
      'Tuần 3–4: Thực hành viết câu chủ đề rõ ý, nối mạch đoạn văn Task 2 và kéo dài câu trả lời Part 3 không bị lạc đề.',
      'Tuần 5–6: Chấm chữa bài thi thử hoàn chỉnh và luyện phản xạ với các câu hỏi khó hay gặp trong quý.',
    ],
    highlights: [
      'Phân tích vì sao bài viết bị chững điểm ở tiêu chí mạch lạc và từ vựng',
      'Sửa phát âm, ngắt nghỉ và cách triển khai ý cho câu hỏi Part 3',
      'Mỗi buổi đều có thời gian nói trực tiếp với giảng viên để sửa lỗi tại chỗ',
      'Hỏi đáp bài tập ngoài giờ cùng trợ giảng IELTS 8.0+',
    ],
  },
  {
    id: 'academic-foundation',
    code: 'PRE-ACAD',
    title: 'Pre-Academic English (Phát âm & Ngữ pháp)',
    tags: ['foundation'],
    badge: 'Lấy lại gốc',
    level: 'Mới bắt đầu lại',
    target: 'Đủ nền tảng để vào IELTS / VSTEP',
    duration: '8 tuần (24 buổi)',
    schedule: 'Tối 2-4-6 (18:30 – 20:30)',
    format: 'Trực tiếp tại ĐH Bách Khoa Đà Nẵng hoặc Live Online',
    price: '3.200.000đ',
    instructor: 'Thầy Đức Minh (IELTS 8.0, chứng chỉ CELTA)',
    suitableFor:
      'Sinh viên khối kỹ thuật bỏ tiếng Anh nhiều năm, chưa nắm chắc thì cơ bản hoặc ngại đọc thành tiếng vì sợ sai phát âm.',
    summary:
      'Bắt đầu lại từ bảng phiên âm IPA, cách ghép câu đúng trật tự từ tiếng Anh và thói quen nghe – đọc tài liệu ngắn mỗi ngày.',
    curriculum: [
      'Tuần 1–3: Học lại 44 âm IPA, trọng âm từ và luyện đọc câu ngắn đúng ngữ điệu.',
      'Tuần 4–6: Làm chủ 6 thì dùng nhiều nhất trong giao tiếp – học thuật và cách đặt câu hỏi, câu phủ định không dịch ngược.',
      'Tuần 7–8: Đọc hiểu bài viết kỹ thuật/đời sống ngắn và làm bài kiểm tra đầu vào chuyển tiếp lên lớp VSTEP hoặc IELTS.',
    ],
    highlights: [
      'Luyện phát âm chuẩn 44 âm IPA và trọng âm từ phổ biến',
      'Học 800+ từ vựng thông dụng gắn với ngữ cảnh đặt câu thực tế',
      'Tạo thói quen nghe – nói ngắn mỗi ngày có người kèm cặp sửa lỗi',
      'Kiểm tra đánh giá cuối khóa để chuyển tiếp lên lớp IELTS hoặc VSTEP',
    ],
  },
];

export const METHODOLOGY_STEPS = [
  {
    step: 'Bước 1',
    title: 'Làm bài đánh giá đầu vào 30 phút',
    description:
      'Giảng viên kiểm tra phát âm, ngữ pháp nền và khả năng đọc hiểu để xếp đúng lớp, tránh học lại những phần bạn đã biết.',
  },
  {
    step: 'Bước 2',
    title: 'Học theo nhóm nhỏ tối đa 10 người',
    description:
      'Giảm thời gian nghe giảng lý thuyết một chiều; phần lớn thời lượng trên lớp dành cho thực hành nói và viết tại chỗ.',
  },
  {
    step: 'Bước 3',
    title: 'Chấm bài viết và sửa phát âm hằng tuần',
    description:
      'Bài Writing được sửa trực tiếp từng câu về lập luận và từ vựng; bài Speaking được ghi âm và góp ý riêng sau mỗi buổi.',
  },
  {
    step: 'Bước 4',
    title: 'Thi thử trên máy tính trước kỳ thi thật',
    description:
      'Làm quen giao diện phòng thi và áp lực thời gian thực tế để tự điều chỉnh tốc độ làm bài.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Nguyễn Khánh Linh',
    achievement: 'IELTS 7.5 Overall (Writing 7.0)',
    course: 'IELTS Intensive 6.5 – 7.5+',
    quote:
      'Mình từng thi 2 lần nhưng Writing vẫn dừng ở 5.5 vì viết dài mà thiếu ý chính. Sau 10 tuần được cô gạch sửa từng đoạn mở bài và thân bài mỗi tuần, điểm Writing lên 7.0 đúng lúc nộp hồ sơ học bổng.',
  },
  {
    name: 'Trần Quang Huy',
    achievement: 'Đạt VSTEP B2 sau 6 tuần',
    course: 'VSTEP B1 – B2 Chuẩn Bộ GD&ĐT',
    quote:
      'Ban ngày đi làm nên mình chỉ học được ca tối 19:30. Giáo trình đi thẳng vào dạng thư và bài luận hay gặp, cộng thêm thi thử trên máy nên lúc vào phòng thi thật làm khá thoải mái.',
  },
  {
    name: 'Phạm Thảo Vy',
    achievement: 'VSTEP C1 (8.5/10)',
    course: 'VSTEP C1 Cấp Tốc 5 Tuần',
    quote:
      'Lớp chỉ có 7 người nên buổi nào cũng bị gọi trả lời Speaking Part 3. Nhờ thầy sửa cách diễn đạt cho gọn lại mà mình giữ được nhịp nói tự nhiên khi thi thật.',
  },
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'Mất gốc tiếng Anh lâu năm thì nên bắt đầu từ lớp nào?',
    answer:
      'Bạn nên làm bài kiểm tra đầu vào miễn phí (30 phút) để giảng viên xem lại nền tảng ngữ pháp và phát âm hiện tại. Đa số người học lâu ngày chưa dùng tiếng Anh sẽ bắt đầu từ lớp Pre-Academic English hoặc IELTS Foundation 4.5 – 5.5.',
  },
  {
    id: 'faq-2',
    question: 'Lớp Live Online khác gì so với học video quay sẵn?',
    answer:
      'Lớp Live Online học trực tiếp cùng giảng viên theo lịch cố định, sĩ số tối đa 10 người. Bạn vẫn tương tác hai chiều, vào phòng nhỏ luyện nói theo cặp và được chấm bài viết 1:1 như lớp học trực tiếp. Bản ghi buổi học được lưu lại để xem lại khi cần ôn bài.',
  },
  {
    id: 'faq-3',
    question: 'Chính sách học lại khi chưa đạt cam kết đầu ra hoạt động ra sao?',
    answer:
      'Học viên tham gia tối thiểu 85% số buổi học và nộp đủ bài tập sẽ được ghi nhận cam kết đầu ra trong hợp đồng đào tạo. Nếu kết quả thi chính thức chưa đạt band đã thỏa thuận, bạn được xếp vào lớp tương đương để học lại mà không đóng thêm học phí.',
  },
  {
    id: 'faq-4',
    question: 'Nên thi IELTS hay VSTEP nếu chỉ cần bằng tốt nghiệp đại học hoặc cao học?',
    answer:
      'Nếu bạn cần xét tốt nghiệp đại học, nộp hồ sơ cao học hoặc thi công chức trong nước với lệ phí thi thấp và thời gian ôn ngắn (5–8 tuần), VSTEP B1/B2/C1 là lựa chọn phù hợp. Nếu bạn có kế hoạch du học hoặc làm việc ở môi trường quốc tế, nên chọn IELTS.',
  },
  {
    id: 'faq-5',
    question: 'Học phí niêm yết đã bao gồm tài liệu và thi thử chưa?',
    answer:
      'Mức học phí trên trang đã bao gồm giáo trình bản in hoặc PDF, tài khoản làm đề thi thử trên máy tính và toàn bộ lượt chấm bài 1:1 trong khóa học. Bạn không phải đóng thêm tiền tài liệu.',
  },
];
