// Zodiac Data
const zodiacData = [
    {
        id: 'aries',
        nameVi: 'Bạch Dương',
        nameEn: 'Aries',
        symbol: '♈',
        startDate: { month: 3, day: 21 },
        endDate: { month: 4, day: 19 },
        description: 'Bạch Dương là cung hoàng đạo đầu tiên, tượng trưng cho sự khởi đầu, năng lượng và lòng dũng cảm. Người Bạch Dương thường nhiệt huyết, quyết đoán và không ngại thử thách.',
        traits: 'Dũng cảm, tự tin, nhiệt huyết, độc lập, có thể nóng tính và thiếu kiên nhẫn.'
    },
    {
        id: 'taurus',
        nameVi: 'Kim Ngưu',
        nameEn: 'Taurus',
        symbol: '♉',
        startDate: { month: 4, day: 20 },
        endDate: { month: 5, day: 20 },
        description: 'Kim Ngưu là người yêu thích sự ổn định và an toàn. Họ đáng tin cậy, kiên nhẫn và có khả năng tài chính tốt. Kim Ngưu cũng rất yêu cái đẹp và sự thoải mái.',
        traits: 'Đáng tin cậy, kiên nhẫn, thực tế, trung thành, có thể cố chấp và vật chất.'
    },
    {
        id: 'gemini',
        nameVi: 'Song Tử',
        nameEn: 'Gemini',
        symbol: '♊',
        startDate: { month: 5, day: 21 },
        endDate: { month: 6, day: 20 },
        description: 'Song Tử là những người giao tiếp xuất sắc, thông minh và tò mò. Họ linh hoạt, thích nghi tốt và luôn muốn học hỏi điều mới mẻ. Song Tử có hai mặt tính cách khác nhau.',
        traits: 'Thông minh, giao tiếp tốt, linh hoạt, tò mò, có thể thiếu tập trung và hay thay đổi.'
    },
    {
        id: 'cancer',
        nameVi: 'Cự Giải',
        nameEn: 'Cancer',
        symbol: '♋',
        startDate: { month: 6, day: 21 },
        endDate: { month: 7, day: 22 },
        description: 'Cự Giải là những người rất tình cảm và quan tâm đến gia đình. Họ nhạy cảm, trực giác tốt và có khả năng chăm sóc người khác. Cự Giải thường gắn bó với quá khứ.',
        traits: 'Tình cảm, trực giác tốt, bảo vệ, trung thành, có thể quá nhạy cảm và hay lo lắng.'
    },
    {
        id: 'leo',
        nameVi: 'Sư Tử',
        nameEn: 'Leo',
        symbol: '♌',
        startDate: { month: 7, day: 23 },
        endDate: { month: 8, day: 22 },
        description: 'Sư Tử là những người tự tin, hào phóng và có khả năng lãnh đạo tự nhiên. Họ yêu thích sự chú ý, sáng tạo và luôn muốn trở thành trung tâm. Sư Tử rất trung thành với người thân.',
        traits: 'Tự tin, hào phóng, sáng tạo, lãnh đạo, có thể kiêu ngạo và thích thể hiện.'
    },
    {
        id: 'virgo',
        nameVi: 'Xử Nữ',
        nameEn: 'Virgo',
        symbol: '♍',
        startDate: { month: 8, day: 23 },
        endDate: { month: 9, day: 22 },
        description: 'Xử Nữ là người cầu toàn, chăm chỉ và chú ý đến chi tiết. Họ thực tế, phân tích tốt và luôn muốn giúp đỡ người khác. Xử Nữ có khả năng tổ chức và quản lý xuất sắc.',
        traits: 'Cẩn thận, thực tế, chăm chỉ, phân tích, có thể quá cầu toàn và hay lo âu.'
    },
    {
        id: 'libra',
        nameVi: 'Thiên Bình',
        nameEn: 'Libra',
        symbol: '♎',
        startDate: { month: 9, day: 23 },
        endDate: { month: 10, day: 22 },
        description: 'Thiên Bình tìm kiếm sự cân bằng và hòa hợp trong cuộc sống. Họ công bằng, hòa nhã và có khả năng ngoại giao tốt. Thiên Bình yêu cái đẹp và sự hài hòa trong các mối quan hệ.',
        traits: 'Công bằng, hòa nhã, giao tiếp tốt, yêu cái đẹp, có thể do dự và tránh xung đột.'
    },
    {
        id: 'scorpio',
        nameVi: 'Bọ Cạp',
        nameEn: 'Scorpio',
        symbol: '♏',
        startDate: { month: 10, day: 23 },
        endDate: { month: 11, day: 21 },
        description: 'Bọ Cạp là những người mạnh mẽ, đam mê và bí ẩn. Họ sâu sắc, trực giác nhạy bén và quyết tâm cao. Bọ Cạp rất trung thành nhưng cũng có thể ganh tị và muốn kiểm soát.',
        traits: 'Đam mê, quyết tâm, trung thành, sâu sắc, có thể ganh tị và bí ẩn.'
    },
    {
        id: 'sagittarius',
        nameVi: 'Nhân Mã',
        nameEn: 'Sagittarius',
        symbol: '♐',
        startDate: { month: 11, day: 22 },
        endDate: { month: 12, day: 21 },
        description: 'Nhân Mã là những người tự do, lạc quan và yêu phiêu lưu. Họ có tầm nhìn rộng, thích khám phá và học hỏi. Nhân Mã thẳng thắn, trung thực và luôn tìm kiếm ý nghĩa trong cuộc sống.',
        traits: 'Lạc quan, tự do, phiêu lưu, trung thực, có thể thiếu trách nhiệm và bốc đồng.'
    },
    {
        id: 'capricorn',
        nameVi: 'Ma Kết',
        nameEn: 'Capricorn',
        symbol: '♑',
        startDate: { month: 12, day: 22 },
        endDate: { month: 1, day: 19 },
        description: 'Ma Kết là những người có tham vọng, kỷ luật và trách nhiệm. Họ kiên nhẫn, chăm chỉ và luôn hướng tới mục tiêu dài hạn. Ma Kết đáng tin cậy và có khả năng lãnh đạo tốt.',
        traits: 'Tham vọng, kỷ luật, kiên nhẫn, trách nhiệm, có thể bi quan và nghiêm khắc.'
    },
    {
        id: 'aquarius',
        nameVi: 'Bảo Bình',
        nameEn: 'Aquarius',
        symbol: '♒',
        startDate: { month: 1, day: 20 },
        endDate: { month: 2, day: 18 },
        description: 'Bảo Bình là những người độc lập, sáng tạo và nhân đạo. Họ có tư duy tiến bộ, yêu thích tự do và quan tâm đến xã hội. Bảo Bình độc đáo, thông minh và luôn muốn thay đổi thế giới.',
        traits: 'Độc lập, sáng tạo, nhân đạo, trí tuệ, có thể xa cách và cứng đầu.'
    },
    {
        id: 'pisces',
        nameVi: 'Song Ngư',
        nameEn: 'Pisces',
        symbol: '♓',
        startDate: { month: 2, day: 19 },
        endDate: { month: 3, day: 20 },
        description: 'Song Ngư là những người nhạy cảm, giàu trí tưởng tượng và từ bi. Họ nghệ sĩ, trực giác tốt và thấu hiểu cảm xúc của người khác. Song Ngư mơ mộng và có khả năng sáng tạo cao.',
        traits: 'Nhạy cảm, từ bi, sáng tạo, trực giác, có thể quá mơ mộng và dễ bị tổn thương.'
    }
];

// Lucky Colors Data
const luckyColors = [
    { name: 'Đỏ', hex: '#E74C3C', viName: 'Đỏ' },
    { name: 'Xanh Dương', hex: '#3498DB', viName: 'Xanh Dương' },
    { name: 'Vàng', hex: '#F1C40F', viName: 'Vàng' },
    { name: 'Xanh Lá', hex: '#2ECC71', viName: 'Xanh Lá' },
    { name: 'Tím', hex: '#9B59B6', viName: 'Tím' },
    { name: 'Cam', hex: '#E67E22', viName: 'Cam' },
    { name: 'Hồng', hex: '#E91E63', viName: 'Hồng' },
    { name: 'Xanh Ngọc', hex: '#1ABC9C', viName: 'Xanh Ngọc' },
    { name: 'Bạc', hex: '#BDC3C7', viName: 'Bạc' },
    { name: 'Vàng Kim', hex: '#FFD700', viName: 'Vàng Kim' },
    { name: 'Xanh Navy', hex: '#34495E', viName: 'Xanh Navy' },
    { name: 'Trắng', hex: '#ECF0F1', viName: 'Trắng' }
];

// Compatibility Data (percentage and descriptions)
const compatibilityMatrix = {
    'aries-aries': { percent: 75, desc: 'Hai người Bạch Dương cùng nhau tạo nên một cặp đôi đầy năng lượng và nhiệt huyết. Tuy nhiên, cả hai đều muốn dẫn dắt nên có thể xảy ra xung đột.', advice: 'Học cách lắng nghe và thỏa hiệp với nhau.' },
    'aries-taurus': { percent: 60, desc: 'Bạch Dương năng động và Kim Ngưu ổn định có thể bổ sung cho nhau, nhưng cũng dễ xảy ra bất đồng về tốc độ sống.', advice: 'Tôn trọng sự khác biệt và tìm điểm chung.' },
    'aries-gemini': { percent: 85, desc: 'Đây là cặp đôi tuyệt vời với sự hòa hợp cao. Cả hai đều yêu thích phiêu lưu, năng động và có nhiều điểm chung.', advice: 'Hãy tiếp tục khám phá và học hỏi cùng nhau.' },
    'aries-cancer': { percent: 50, desc: 'Bạch Dương mạnh mẽ và Cự Giải nhạy cảm có thể gặp khó khăn trong việc hiểu nhau. Cần nhiều nỗ lực để duy trì.', advice: 'Học cách thấu hiểu cảm xúc của nhau.' },
    'aries-leo': { percent: 90, desc: 'Cặp đôi hoàn hảo! Cả hai đều tự tin, nhiệt huyết và có khả năng lãnh đạo. Mối quan hệ đầy đam mê và thú vị.', advice: 'Chia sẻ ánh đèn sân khấu và cùng tỏa sáng.' },
    'aries-virgo': { percent: 55, desc: 'Bạch Dương bốc đồng và Xử Nữ cẩn thận có cách tiếp cận khác nhau. Cần thời gian để hiểu và điều chỉnh.', advice: 'Tìm sự cân bằng giữa tự phát và kế hoạch.' },
    'aries-libra': { percent: 70, desc: 'Hai cung đối diện có thể thu hút lẫn nhau mạnh mẽ. Bạch Dương quyết đoán và Thiên Bình hòa nhã bổ sung cho nhau.', advice: 'Học cách từ quan điểm của đối phương.' },
    'aries-scorpio': { percent: 65, desc: 'Cả hai đều mạnh mẽ và đam mê. Mối quan hệ có thể rất sâu sắc nhưng cũng có thể căng thẳng.', advice: 'Xây dựng lòng tin và tôn trọng không gian riêng.' },
    'aries-sagittarius': { percent: 88, desc: 'Cặp đôi tuyệt vời với tinh thần phiêu lưu chung. Cả hai yêu thích tự do và khám phá những điều mới mẻ.', advice: 'Cùng nhau chinh phục những thử thách mới.' },
    'aries-capricorn': { percent: 58, desc: 'Bạch Dương tự phát và Ma Kết kỷ luật có thể học hỏi từ nhau, nhưng cần kiên nhẫn.', advice: 'Cân bằng giữa hành động và kế hoạch.' },
    'aries-aquarius': { percent: 80, desc: 'Cả hai đều độc lập và yêu thích sự tự do. Mối quan hệ thú vị với nhiều ý tưởng sáng tạo.', advice: 'Tôn trọng không gian cá nhân của nhau.' },
    'aries-pisces': { percent: 62, desc: 'Bạch Dương mạnh mẽ và Song Ngư nhạy cảm tạo nên sự đối lập. Cần nhiều thấu hiểu.', advice: 'Bảo vệ và chăm sóc cảm xúc của nhau.' },
    
    'taurus-taurus': { percent: 80, desc: 'Hai người Kim Ngưu cùng nhau tạo nên mối quan hệ ổn định và đáng tin cậy. Cả hai đều trung thành và yêu thích sự thoải mái.', advice: 'Tránh quá cố chấp, hãy linh hoạt hơn.' },
    'taurus-gemini': { percent: 55, desc: 'Kim Ngưu ổn định và Song Tử thay đổi có thể gặp khó khăn. Cần nỗ lực để hiểu nhau.', advice: 'Tìm điểm cân bằng giữa ổn định và thay đổi.' },
    'taurus-cancer': { percent: 85, desc: 'Cặp đôi tuyệt vời! Cả hai đều coi trọng gia đình, an toàn và tình cảm. Mối quan hệ sâu sắc và lâu dài.', advice: 'Cùng xây dựng tổ ấm hạnh phúc.' },
    'taurus-leo': { percent: 65, desc: 'Kim Ngưu ổn định và Sư Tử hào nhoáng có thể bổ sung cho nhau, nhưng cả hai đều cố chấp.', advice: 'Học cách thỏa hiệp và chia sẻ.' },
    'taurus-virgo': { percent: 90, desc: 'Cặp đôi hoàn hảo! Cả hai đều thực tế, chăm chỉ và có mục tiêu rõ ràng. Mối quan hệ ổn định và hài hòa.', advice: 'Đừng quên tận hưởng cuộc sống.' },
    'taurus-libra': { percent: 70, desc: 'Cả hai đều yêu cái đẹp và sự hài hòa. Kim Ngưu ổn định và Thiên Bình hòa nhã tạo nên sự cân bằng.', advice: 'Chia sẻ niềm đam mê về nghệ thuật và cái đẹp.' },
    'taurus-scorpio': { percent: 75, desc: 'Hai cung đối diện thu hút mạnh mẽ. Mối quan hệ đam mê và sâu sắc, nhưng cần xây dựng lòng tin.', advice: 'Trung thực và mở lòng với nhau.' },
    'taurus-sagittarius': { percent: 50, desc: 'Kim Ngưu yêu ổn định và Nhân Mã yêu tự do có thể gặp khó khăn. Cần nhiều thỏa hiệp.', advice: 'Tôn trọng nhu cầu của nhau.' },
    'taurus-capricorn': { percent: 88, desc: 'Cặp đôi tuyệt vời với cùng giá trị và mục tiêu. Cả hai đều chăm chỉ và trách nhiệm.', advice: 'Cùng nhau xây dựng tương lai vững chắc.' },
    'taurus-aquarius': { percent: 58, desc: 'Kim Ngưu truyền thống và Bảo Bình tiến bộ có thể học hỏi từ nhau, nhưng khá khác biệt.', advice: 'Mở rộng tầm nhìn và chấp nhận sự khác biệt.' },
    'taurus-pisces': { percent: 78, desc: 'Kim Ngưu thực tế và Song Ngư mơ mộng bổ sung cho nhau. Mối quan hệ ấm áp và chăm sóc.', advice: 'Cân bằng giữa mơ ước và thực tế.' },
    
    'gemini-gemini': { percent: 72, desc: 'Hai người Song Tử cùng nhau tạo nên mối quan hệ thú vị và đa dạng. Không bao giờ buồn chán!', advice: 'Học cách tập trung và cam kết.' },
    'gemini-cancer': { percent: 60, desc: 'Song Tử lý trí và Cự Giải cảm xúc có cách tiếp cận khác nhau. Cần thời gian để thấu hiểu.', advice: 'Kết hợp trí tuệ và cảm xúc.' },
    'gemini-leo': { percent: 82, desc: 'Cặp đôi vui vẻ và đầy năng lượng. Song Tử thông minh và Sư Tử tự tin tạo nên sự hòa hợp.', advice: 'Tiếp tục khám phá và vui chơi cùng nhau.' },
    'gemini-virgo': { percent: 68, desc: 'Cả hai đều do Thủy chi phối, nhưng có cách biểu đạt khác nhau. Có thể học hỏi nhiều từ nhau.', advice: 'Tôn trọng cách suy nghĩ của nhau.' },
    'gemini-libra': { percent: 90, desc: 'Cặp đôi hoàn hảo! Cả hai đều thông minh, giao tiếp tốt và yêu thích xã hội. Mối quan hệ hài hòa.', advice: 'Cùng nhau khám phá thế giới.' },
    'gemini-scorpio': { percent: 55, desc: 'Song Tử nhẹ nhàng và Bọ Cạp sâu sắc khá khác biệt. Cần nỗ lực để hiểu nhau.', advice: 'Học cách cân bằng độ sâu và rộng.' },
    'gemini-sagittarius': { percent: 85, desc: 'Hai cung đối diện bổ sung hoàn hảo. Cả hai đều yêu thích học hỏi và khám phá.', advice: 'Cùng nhau phiêu lưu và học hỏi.' },
    'gemini-capricorn': { percent: 52, desc: 'Song Tử linh hoạt và Ma Kết kỷ luật có cách tiếp cận rất khác. Cần nhiều điều chỉnh.', advice: 'Tìm điểm chung giữa tự do và kỷ luật.' },
    'gemini-aquarius': { percent: 88, desc: 'Cặp đôi tuyệt vời với tư duy sáng tạo chung. Cả hai đều thông minh và yêu thích sự tự do.', advice: 'Cùng nhau tạo ra những điều kỳ diệu.' },
    'gemini-pisces': { percent: 63, desc: 'Song Tử lý trí và Song Ngư cảm xúc có thể bổ sung nhưng cũng dễ hiểu lầm.', advice: 'Lắng nghe và thấu hiểu cảm xúc của nhau.' },
    
    'cancer-cancer': { percent: 80, desc: 'Hai người Cự Giải cùng nhau tạo nên mối quan hệ đầy tình cảm và chăm sóc. Rất thấu hiểu nhau.', advice: 'Tránh quá nhạy cảm và lo lắng.' },
    'cancer-leo': { percent: 68, desc: 'Cự Giải nhạy cảm và Sư Tử tự tin có thể bổ sung cho nhau. Cả hai đều trung thành.', advice: 'Cân bằng giữa chăm sóc và độc lập.' },
    'cancer-virgo': { percent: 85, desc: 'Cặp đôi hài hòa! Cả hai đều chăm sóc, thực tế và coi trọng gia đình. Mối quan hệ ổn định.', advice: 'Cùng xây dựng cuộc sống hạnh phúc.' },
    'cancer-libra': { percent: 65, desc: 'Cự Giải cảm xúc và Thiên Bình lý trí cần thời gian để hiểu nhau. Có thể bổ sung.', advice: 'Học cách cân bằng cảm xúc và lý trí.' },
    'cancer-scorpio': { percent: 92, desc: 'Cặp đôi hoàn hảo! Cả hai đều sâu sắc, trung thành và thấu hiểu cảm xúc. Mối quan hệ mạnh mẽ.', advice: 'Tin tưởng và chia sẻ mọi thứ.' },
    'cancer-sagittarius': { percent: 55, desc: 'Cự Giải yêu nhà và Nhân Mã yêu phiêu lưu khá khác biệt. Cần nhiều thỏa hiệp.', advice: 'Tìm cách cân bằng giữa ở nhà và khám phá.' },
    'cancer-capricorn': { percent: 78, desc: 'Hai cung đối diện có thể bổ sung tốt. Cự Giải chăm sóc và Ma Kết bảo vệ tạo nên sự ổn định.', advice: 'Cùng nhau xây dựng tương lai.' },
    'cancer-aquarius': { percent: 58, desc: 'Cự Giải cảm xúc và Bảo Bình lý trí có cách biểu đạt khác nhau. Cần thấu hiểu.', advice: 'Tôn trọng cách cảm nhận của nhau.' },
    'cancer-pisces': { percent: 90, desc: 'Cặp đôi tuyệt vời! Cả hai đều nhạy cảm, trực giác và từ bi. Mối quan hệ sâu sắc và ấm áp.', advice: 'Bảo vệ và chăm sóc nhau.' },
    
    'leo-leo': { percent: 75, desc: 'Hai người Sư Tử cùng nhau tạo nên mối quan hệ rực rỡ và đầy tự tin. Cần chia sẻ ánh đèn sân khấu.', advice: 'Học cách thỏa hiệp và chia sẻ.' },
    'leo-virgo': { percent: 62, desc: 'Sư Tử hào nhoáng và Xử Nữ khiêm tốn có cách tiếp cận khác nhau. Có thể bổ sung.', advice: 'Học hỏi từ phong cách của nhau.' },
    'leo-libra': { percent: 85, desc: 'Cặp đôi tuyệt vời! Cả hai đều xã hội, yêu cái đẹp và hài hòa. Mối quan hệ thú vị.', advice: 'Cùng nhau tỏa sáng và tận hưởng cuộc sống.' },
    'leo-scorpio': { percent: 70, desc: 'Cả hai đều mạnh mẽ và quyết tâm. Mối quan hệ đam mê nhưng có thể có xung đột quyền lực.', advice: 'Tôn trọng sức mạnh của nhau.' },
    'leo-sagittarius': { percent: 92, desc: 'Cặp đôi hoàn hảo! Cả hai đều lạc quan, nhiệt huyết và yêu thích phiêu lưu. Rất hợp nhau.', advice: 'Cùng nhau chinh phục thế giới.' },
    'leo-capricorn': { percent: 60, desc: 'Sư Tử tự phát và Ma Kết kỷ luật có mục tiêu khác nhau. Cần nỗ lực để hiểu nhau.', advice: 'Cân bằng giữa vui chơi và công việc.' },
    'leo-aquarius': { percent: 72, desc: 'Hai cung đối diện có thể thu hút nhau. Sư Tử cá nhân và Bảo Bình nhóm có thể bổ sung.', advice: 'Tôn trọng cách tiếp cận của nhau.' },
    'leo-pisces': { percent: 65, desc: 'Sư Tử mạnh mẽ và Song Ngư nhạy cảm có thể bổ sung, nhưng cần thấu hiểu.', advice: 'Bảo vệ và tôn trọng nhau.' },
    
    'virgo-virgo': { percent: 78, desc: 'Hai người Xử Nữ cùng nhau tạo nên mối quan hệ có tổ chức và hiệu quả. Rất hiểu nhau.', advice: 'Đừng quá cầu toàn, hãy thư giãn.' },
    'virgo-libra': { percent: 70, desc: 'Xử Nữ thực tế và Thiên Bình hài hòa có thể bổ sung cho nhau. Cả hai đều thông minh.', advice: 'Cân bằng giữa hoàn hảo và hài hòa.' },
    'virgo-scorpio': { percent: 82, desc: 'Cặp đôi tốt! Cả hai đều sâu sắc, trung thành và có mục tiêu rõ ràng. Mối quan hệ ổn định.', advice: 'Tin tưởng và hỗ trợ nhau.' },
    'virgo-sagittarius': { percent: 58, desc: 'Xử Nữ cẩn thận và Nhân Mã tự phát khá khác biệt. Cần thời gian để điều chỉnh.', advice: 'Học hỏi từ phong cách sống của nhau.' },
    'virgo-capricorn': { percent: 90, desc: 'Cặp đôi hoàn hảo! Cả hai đều thực tế, chăm chỉ và có kế hoạch rõ ràng. Rất hợp nhau.', advice: 'Cùng nhau đạt được mọi mục tiêu.' },
    'virgo-aquarius': { percent: 65, desc: 'Xử Nữ truyền thống và Bảo Bình tiến bộ có thể học hỏi từ nhau. Cần mở rộng tầm nhìn.', advice: 'Kết hợp thực tế và sáng tạo.' },
    'virgo-pisces': { percent: 75, desc: 'Hai cung đối diện bổ sung tốt. Xử Nữ thực tế và Song Ngư mơ mộng cân bằng nhau.', advice: 'Giúp nhau cân bằng mơ ước và thực tế.' },
    
    'libra-libra': { percent: 80, desc: 'Hai người Thiên Bình cùng nhau tạo nên mối quan hệ hài hòa và công bằng. Rất thấu hiểu.', advice: 'Học cách đưa ra quyết định nhanh hơn.' },
    'libra-scorpio': { percent: 68, desc: 'Thiên Bình nhẹ nhàng và Bọ Cạp sâu sắc có thể bổ sung, nhưng khá khác biệt.', advice: 'Tôn trọng độ sâu của nhau.' },
    'libra-sagittarius': { percent: 85, desc: 'Cặp đôi tuyệt vời! Cả hai đều xã hội, lạc quan và yêu thích khám phá. Mối quan hệ vui vẻ.', advice: 'Cùng nhau tận hưởng cuộc sống.' },
    'libra-capricorn': { percent: 62, desc: 'Thiên Bình xã hội và Ma Kết nghiêm túc có mục tiêu khác nhau. Cần thời gian thích nghi.', advice: 'Cân bằng giữa công việc và giải trí.' },
    'libra-aquarius': { percent: 90, desc: 'Cặp đôi hoàn hảo! Cả hai đều thông minh, xã hội và yêu thích tự do. Rất hợp nhau.', advice: 'Cùng nhau tạo ra những điều tuyệt vời.' },
    'libra-pisces': { percent: 72, desc: 'Thiên Bình lý trí và Song Ngư cảm xúc có thể bổ sung tốt. Cả hai đều yêu nghệ thuật.', advice: 'Chia sẻ niềm đam mê về cái đẹp.' },
    
    'scorpio-scorpio': { percent: 82, desc: 'Hai người Bọ Cạp cùng nhau tạo nên mối quan hệ rất sâu sắc và đam mê. Rất hiểu nhau.', advice: 'Xây dựng lòng tin và tránh ganh tị.' },
    'scorpio-sagittarius': { percent: 65, desc: 'Bọ Cạp sâu sắc và Nhân Mã nhẹ nhàng có cách tiếp cận khác nhau. Có thể bổ sung.', advice: 'Tôn trọng nhu cầu của nhau.' },
    'scorpio-capricorn': { percent: 88, desc: 'Cặp đôi tuyệt vời! Cả hai đều quyết tâm, trung thành và có mục tiêu rõ ràng. Rất hợp nhau.', advice: 'Cùng nhau chinh phục mọi thử thách.' },
    'scorpio-aquarius': { percent: 60, desc: 'Bọ Cạp cảm xúc và Bảo Bình lý trí khá khác biệt. Cần nhiều thấu hiểu.', advice: 'Học cách giao tiếp và thỏa hiệp.' },
    'scorpio-pisces': { percent: 92, desc: 'Cặp đôi hoàn hảo! Cả hai đều sâu sắc, trực giác và thấu hiểu cảm xúc. Mối quan hệ mạnh mẽ.', advice: 'Tin tưởng và bảo vệ nhau.' },
    
    'sagittarius-sagittarius': { percent: 78, desc: 'Hai người Nhân Mã cùng nhau tạo nên mối quan hệ tự do và phiêu lưu. Rất vui vẻ!', advice: 'Học cách cam kết và trách nhiệm.' },
    'sagittarius-capricorn': { percent: 58, desc: 'Nhân Mã tự do và Ma Kết kỷ luật khá khác biệt. Cần nỗ lực để hiểu nhau.', advice: 'Cân bằng giữa tự do và trách nhiệm.' },
    'sagittarius-aquarius': { percent: 85, desc: 'Cặp đôi tuyệt vời! Cả hai đều độc lập, sáng tạo và yêu thích tự do. Rất hợp nhau.', advice: 'Cùng nhau khám phá và sáng tạo.' },
    'sagittarius-pisces': { percent: 68, desc: 'Nhân Mã lạc quan và Song Ngư nhạy cảm có thể bổ sung, nhưng cần thấu hiểu.', advice: 'Bảo vệ cảm xúc và chia sẻ hy vọng.' },
    
    'capricorn-capricorn': { percent: 82, desc: 'Hai người Ma Kết cùng nhau tạo nên mối quan hệ vững chắc và đáng tin cậy. Rất hiểu nhau.', advice: 'Đừng quên thư giãn và vui chơi.' },
    'capricorn-aquarius': { percent: 62, desc: 'Ma Kết truyền thống và Bảo Bình tiến bộ có cách nhìn khác nhau. Có thể học hỏi.', advice: 'Mở rộng tầm nhìn và chấp nhận mới mẻ.' },
    'capricorn-pisces': { percent: 75, desc: 'Ma Kết thực tế và Song Ngư mơ mộng bổ sung tốt cho nhau. Mối quan hệ cân bằng.', advice: 'Giúp nhau đạt được ước mơ.' },
    
    'aquarius-aquarius': { percent: 80, desc: 'Hai người Bảo Bình cùng nhau tạo nên mối quan hệ độc đáo và sáng tạo. Rất thấu hiểu.', advice: 'Đừng quá xa cách, hãy gần gũi hơn.' },
    'aquarius-pisces': { percent: 70, desc: 'Bảo Bình lý trí và Song Ngư cảm xúc có thể bổ sung. Cả hai đều sáng tạo.', advice: 'Kết hợp trí tuệ và cảm xúc.' },
    
    'pisces-pisces': { percent: 85, desc: 'Hai người Song Ngư cùng nhau tạo nên mối quan hệ sâu sắc và giàu cảm xúc. Rất thấu hiểu nhau.', advice: 'Giữ chân trên mặt đất và thực tế hơn.' }
};

// State
let editingMessageId = null;

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    displayZodiacCards();
    displayLuckyColors();
    populateZodiacSelect();
    displayMessages();
    setupEventListeners();
    displayCurrentDate();
});

// Display Current Date
function displayCurrentDate() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const dateString = now.toLocaleDateString('vi-VN', options);
    document.getElementById('current-date').textContent = dateString;
}

// Display 12 Zodiac Cards
function displayZodiacCards() {
    const container = document.getElementById('zodiac-cards');
    container.innerHTML = '';
    
    zodiacData.forEach(zodiac => {
        const card = document.createElement('div');
        card.className = 'zodiac-card';
        card.innerHTML = `
            <div class="zodiac-symbol">${zodiac.symbol}</div>
            <h3>${zodiac.nameVi} (${zodiac.nameEn})</h3>
            <p class="zodiac-date">${zodiac.startDate.day}/${zodiac.startDate.month} - ${zodiac.endDate.day}/${zodiac.endDate.month}</p>
            <p class="zodiac-description">${zodiac.description.substring(0, 100)}...</p>
        `;
        card.addEventListener('click', () => showZodiacModal(zodiac));
        container.appendChild(card);
    });
}

// Show Zodiac Modal
function showZodiacModal(zodiac) {
    const modal = document.getElementById('zodiac-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div class="zodiac-symbol">${zodiac.symbol}</div>
        <h2>${zodiac.nameVi} (${zodiac.nameEn})</h2>
        <p><strong>Thời gian:</strong> ${zodiac.startDate.day}/${zodiac.startDate.month} - ${zodiac.endDate.day}/${zodiac.endDate.month}</p>
        <p><strong>Mô tả:</strong> ${zodiac.description}</p>
        <p><strong>Tính cách:</strong> ${zodiac.traits}</p>
    `;
    
    modal.style.display = 'block';
}

// Close Modal
document.addEventListener('click', function(e) {
    const modal = document.getElementById('zodiac-modal');
    if (e.target === modal || e.target.className === 'close') {
        modal.style.display = 'none';
    }
});

// Display Lucky Colors
function displayLuckyColors() {
    const container = document.getElementById('lucky-colors-grid');
    container.innerHTML = '';
    
    const today = new Date().getDate();
    
    zodiacData.forEach((zodiac, index) => {
        const colorIndex = (today + index) % luckyColors.length;
        const color = luckyColors[colorIndex];
        
        const card = document.createElement('div');
        card.className = 'lucky-color-card';
        card.innerHTML = `
            <h4>${zodiac.symbol} ${zodiac.nameVi}</h4>
            <div class="color-box" style="background-color: ${color.hex}"></div>
            <p class="color-name">${color.viName}</p>
        `;
        container.appendChild(card);
    });
}

// Populate Zodiac Select
function populateZodiacSelect() {
    const select = document.getElementById('message-zodiac');
    zodiacData.forEach(zodiac => {
        const option = document.createElement('option');
        option.value = zodiac.id;
        option.textContent = `${zodiac.symbol} ${zodiac.nameVi}`;
        select.appendChild(option);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    document.getElementById('message-form').addEventListener('submit', handleMessageSubmit);
    document.getElementById('cancel-edit').addEventListener('click', cancelEdit);
    document.getElementById('find-zodiac-form').addEventListener('submit', handleFindZodiac);
    document.getElementById('compatibility-form').addEventListener('submit', handleCompatibility);
}

// Handle Message Submit
function handleMessageSubmit(e) {
    e.preventDefault();
    
    const zodiacId = document.getElementById('message-zodiac').value;
    const text = document.getElementById('message-text').value.trim();
    
    if (!zodiacId || !text) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }
    
    const messages = getMessages();
    
    if (editingMessageId !== null) {
        // Edit existing message
        const index = messages.findIndex(m => m.id === editingMessageId);
        if (index !== -1) {
            messages[index] = { id: editingMessageId, zodiacId, text };
        }
        editingMessageId = null;
        document.getElementById('form-button-text').textContent = 'Thêm Thông Điệp';
        document.getElementById('cancel-edit').style.display = 'none';
    } else {
        // Add new message
        const message = {
            id: Date.now(),
            zodiacId,
            text
        };
        messages.push(message);
    }
    
    saveMessages(messages);
    displayMessages();
    
    document.getElementById('message-form').reset();
}

// Cancel Edit
function cancelEdit() {
    editingMessageId = null;
    document.getElementById('message-form').reset();
    document.getElementById('form-button-text').textContent = 'Thêm Thông Điệp';
    document.getElementById('cancel-edit').style.display = 'none';
}

// Get Messages from LocalStorage
function getMessages() {
    const messages = localStorage.getItem('zodiacMessages');
    return messages ? JSON.parse(messages) : [];
}

// Save Messages to LocalStorage
function saveMessages(messages) {
    localStorage.setItem('zodiacMessages', JSON.stringify(messages));
}

// Display Messages
function displayMessages() {
    const container = document.getElementById('messages-list');
    const messages = getMessages();
    
    if (messages.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #d1c4e9;">Chưa có thông điệp nào. Hãy thêm thông điệp mới!</p>';
        return;
    }
    
    container.innerHTML = '';
    
    messages.forEach(message => {
        const zodiac = zodiacData.find(z => z.id === message.zodiacId);
        if (!zodiac) return;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message-item';
        messageDiv.innerHTML = `
            <div class="message-header">
                <span class="message-zodiac-name">${zodiac.symbol} ${zodiac.nameVi}</span>
                <div class="message-actions">
                    <button class="btn btn-edit" onclick="editMessage(${message.id})">Sửa</button>
                    <button class="btn btn-delete" onclick="deleteMessage(${message.id})">Xóa</button>
                </div>
            </div>
            <p class="message-text">${message.text}</p>
        `;
        container.appendChild(messageDiv);
    });
}

// Edit Message
function editMessage(id) {
    const messages = getMessages();
    const message = messages.find(m => m.id === id);
    
    if (message) {
        editingMessageId = id;
        document.getElementById('message-zodiac').value = message.zodiacId;
        document.getElementById('message-text').value = message.text;
        document.getElementById('form-button-text').textContent = 'Cập Nhật Thông Điệp';
        document.getElementById('cancel-edit').style.display = 'inline-block';
        
        // Scroll to form
        document.getElementById('messages').scrollIntoView({ behavior: 'smooth' });
    }
}

// Delete Message
function deleteMessage(id) {
    if (confirm('Bạn có chắc muốn xóa thông điệp này?')) {
        let messages = getMessages();
        messages = messages.filter(m => m.id !== id);
        saveMessages(messages);
        displayMessages();
    }
}

// Find Zodiac Sign from Birth Date
function getZodiacSign(day, month) {
    for (let zodiac of zodiacData) {
        const start = zodiac.startDate;
        const end = zodiac.endDate;
        
        // Handle year-crossing signs (Capricorn)
        if (start.month > end.month) {
            if ((month === start.month && day >= start.day) || 
                (month === end.month && day <= end.day) ||
                month > start.month || month < end.month) {
                return zodiac;
            }
        } else {
            if ((month === start.month && day >= start.day) || 
                (month === end.month && day <= end.day) ||
                (month > start.month && month < end.month)) {
                return zodiac;
            }
        }
    }
    return null;
}

// Handle Find Zodiac
function handleFindZodiac(e) {
    e.preventDefault();
    
    const name = document.getElementById('find-name').value.trim();
    const day = parseInt(document.getElementById('find-day').value);
    const month = parseInt(document.getElementById('find-month').value);
    
    if (!name || !day || !month || day < 1 || day > 31 || month < 1 || month > 12) {
        alert('Vui lòng nhập thông tin hợp lệ!');
        return;
    }
    
    const zodiac = getZodiacSign(day, month);
    
    if (zodiac) {
        const resultDiv = document.getElementById('find-zodiac-result');
        resultDiv.innerHTML = `
            <div class="zodiac-symbol">${zodiac.symbol}</div>
            <h3>${name}</h3>
            <p><strong>Cung hoàng đạo:</strong> ${zodiac.nameVi} (${zodiac.nameEn})</p>
            <p><strong>Ngày sinh:</strong> ${day}/${month}</p>
            <p><strong>Thời gian:</strong> ${zodiac.startDate.day}/${zodiac.startDate.month} - ${zodiac.endDate.day}/${zodiac.endDate.month}</p>
            <p>${zodiac.description}</p>
        `;
    } else {
        alert('Không tìm thấy cung hoàng đạo phù hợp!');
    }
}

// Handle Compatibility Check
function handleCompatibility(e) {
    e.preventDefault();
    
    const person1Name = document.getElementById('person1-name').value.trim();
    const person1Day = parseInt(document.getElementById('person1-day').value);
    const person1Month = parseInt(document.getElementById('person1-month').value);
    
    const person2Name = document.getElementById('person2-name').value.trim();
    const person2Day = parseInt(document.getElementById('person2-day').value);
    const person2Month = parseInt(document.getElementById('person2-month').value);
    
    if (!person1Name || !person1Day || !person1Month || !person2Name || !person2Day || !person2Month) {
        alert('Vui lòng nhập đầy đủ thông tin cho cả hai người!');
        return;
    }
    
    const zodiac1 = getZodiacSign(person1Day, person1Month);
    const zodiac2 = getZodiacSign(person2Day, person2Month);
    
    if (!zodiac1 || !zodiac2) {
        alert('Thông tin ngày tháng không hợp lệ!');
        return;
    }
    
    const compatibility = getCompatibility(zodiac1.id, zodiac2.id);
    
    const resultDiv = document.getElementById('compatibility-result');
    resultDiv.innerHTML = `
        <div class="compatibility-symbols">
            <span>${zodiac1.symbol}</span>
            <span>💕</span>
            <span>${zodiac2.symbol}</span>
        </div>
        <h2>${person1Name} & ${person2Name}</h2>
        <h3>${zodiac1.nameVi} & ${zodiac2.nameVi}</h3>
        <div class="compatibility-percentage">${compatibility.percent}%</div>
        <p class="compatibility-description">${compatibility.desc}</p>
        <div class="compatibility-advice">
            <strong>💡 Lời khuyên:</strong> ${compatibility.advice}
        </div>
    `;
}

// Get Compatibility
function getCompatibility(zodiac1Id, zodiac2Id) {
    // Create a key for lookup
    const key1 = `${zodiac1Id}-${zodiac2Id}`;
    const key2 = `${zodiac2Id}-${zodiac1Id}`;
    
    // Check if we have data for this combination
    if (compatibilityMatrix[key1]) {
        return compatibilityMatrix[key1];
    } else if (compatibilityMatrix[key2]) {
        return compatibilityMatrix[key2];
    }
    
    // Default compatibility for missing combinations
    return {
        percent: 70,
        desc: 'Hai cung hoàng đạo này có thể tạo nên một mối quan hệ thú vị. Mỗi người đều có điểm mạnh riêng và có thể bổ sung cho nhau.',
        advice: 'Hãy giao tiếp cởi mở và tôn trọng sự khác biệt của nhau để xây dựng mối quan hệ bền vững.'
    };
}

// Make functions global for inline event handlers
window.editMessage = editMessage;
window.deleteMessage = deleteMessage;
