-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2016-05-17 17:30:15
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `new`
--

-- --------------------------------------------------------

--
-- 表的结构 `entertainment`
--

CREATE TABLE `entertainment` (
  `newsid` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `img` varchar(200) NOT NULL,
  `content` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='娱乐';

--
-- 转存表中的数据 `entertainment`
--

INSERT INTO `entertainment` (`newsid`, `title`, `img`, `content`) VALUES
(1, '现在的窦靖童 还只是个偶像', 'http://t10.baidu.com/it/u=http://www.ycwb.com/ePaper/ycwb/images/2016-05/08/B02/res14_attpic_brief.jpg&fm=36', ''),
(2, '朴实无华的坚守', 'http://t12.baidu.com/it/u=http://www.ycwb.com/ePaper/ycwb/images/2016-05/08/B02/res26_attpic_brief.jpg&fm=36', '即使不是和《美国队长3》同天上映，《百鸟朝凤》的票房或许也好不了多少，尽管大半个华语电影圈都在...');

-- --------------------------------------------------------

--
-- 表的结构 `hundred`
--

CREATE TABLE `hundred` (
  `newsid` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `img` varchar(200) NOT NULL,
  `content` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='百家';

--
-- 转存表中的数据 `hundred`
--

INSERT INTO `hundred` (`newsid`, `title`, `img`, `content`) VALUES
(1, '人工智能想取得突破，需认知科学和工程学联姻', 'http://a.hiphotos.baidu.com/news/w%3D638/sign=41579f9a9f22720e7bcee1f943ca0a3a/b7003af33a87e9507d8ac99417385343faf2b4ac.jpg', ''),
(2, '独家！全国最大的ktv加盟店要造唱吧的反？！', 'http://a.hiphotos.baidu.com/news/w%3D638/sign=7697d34bae773912c4268662c0188675/0bd162d9f2d3572c914b092a8d13632763d0c39f.jpg', ''),
(3, '苹果开发自主GPU是希望在VR行业称雄', 'http://h.hiphotos.baidu.com/news/w%3D638/sign=5839e960de33c895a67e9b78e9127397/728da9773912b31be74c53de8118367adab4e121.jpg', ''),
(4, '波幅指数：我知道你们有多害怕', 'http://g.hiphotos.baidu.com/news/w%3D638/sign=50dff5fe5443fbf2c52ca520887fca1e/7aec54e736d12f2e2fbb7e9648c2d5628435688e.jpg', '其实这属于指数的正常波动范畴，我们可以通过一个特殊的工具指数——波幅指数来判断。'),
(5, '林书豪长微博总结赛季，他要跳出合同身价几何？', 'http://d.hiphotos.baidu.com/news/w%3D638/sign=b3ed4fda4634970a4773132cadcbd1c0/a5c27d1ed21b0ef400eb1fabdac451da80cb3ec7.jpg', ''),
(6, '微信支付这么牛，为何留不住总经理?', 'http://b.hiphotos.baidu.com/news/crop%3D0%2C33%2C600%2C360%3Bw%3D638/sign=fe4800f40d55b31988b6d8357e99ae15/d788d43f8794a4c22c95abde09f41bd5ac6e3994.jpg', ''),
(7, '亨利 福特：一位时代英雄的悲剧性落幕', '', '福特公司这个庞然大物又是如何被拥有复杂多变个性的创始人撵到悬崖边缘的。'),
(8, '好玩至极，迪斯尼用AR技术开发了3D动画填色本', 'http://f.hiphotos.baidu.com/news/w%3D638/sign=ee4cd876ceea15ce41eee30a8e013a25/77094b36acaf2edd4ebbff1a8a1001e9380193ff.jpg', ''),
(9, '沪指微涨剑指3000点能否突破？', '', '上午9：50开始冲高，然后节节败退，到11：15分创出全天最低点沪指2977.4，跌幅0.46%。'),
(10, '国网的未来会是死路一条', 'http://a.hiphotos.baidu.com/news/crop%3D21%2C81%2C475%2C285%3Bw%3D638/sign=ea09d06ca30f4bfb989fc4143e7d49dc/79f0f736afc37931625e39daecc4b74543a9110a.jpg', '工信部今天确认，中国广电已经提交基础电信业务经营许可申请材料，申请在国内开展互联网数据传送、通...');

-- --------------------------------------------------------

--
-- 表的结构 `local`
--

CREATE TABLE `local` (
  `newsid` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `img` varchar(200) NOT NULL,
  `content` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='本地';

--
-- 转存表中的数据 `local`
--

INSERT INTO `local` (`newsid`, `title`, `img`, `content`) VALUES
(0, '北京首家非赢利群众性文化体育组织成立', 'http://t11.baidu.com/it/u=http://www.chinanews.com/tp/2016/05-08/U661P4T8D7862370F107DT20160508122340.jpg&fm=36', ''),
(1, '北京下周阴晴多变降雨三次', '', '连日的北风为京城带来了湛蓝的天空和清新的空气，这个双休日将在风和日丽中度过。'),
(2, '北京新机场高速全长约35公里 预计2018年底竣工', '', '新机场高速位于北京南部地区，京开高速和京台高速之间，南北走向。'),
(3, '4月第四周北京二手房成交均价环比下降1%', '', '北京市二手住宅网签量为6803套，环比上升了6.2%，成交均价为39986元/平方米，环比下降1%。'),
(5, '北京最荒凉地铁站 杂草丛生少有人下车更显荒凉', 'http://t12.baidu.com/it/u=http://himg2.huanqiu.com/attachment2010/2016/0506/20160506094303455.png&amp;fm=36', ''),
(6, '网民最爱北京踏青地排名出炉古北水镇居首位', '', '北京密云区、古北、水镇排名首位，怀柔区的、响水湖、神堂峪自然风景区分列二三位。');

-- --------------------------------------------------------

--
-- 表的结构 `recomment`
--

CREATE TABLE `recomment` (
  `newsid` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `img` varchar(200) NOT NULL,
  `content` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='推荐';

--
-- 转存表中的数据 `recomment`
--

INSERT INTO `recomment` (`newsid`, `title`, `img`, `content`) VALUES
(1, '习近平对福建滑坡抢险救援工作作出重要指示', 'http://g.hiphotos.baidu.com/news/crop%3D58%2C63%2C502%2C400/sign=a90864f777cf3bc7fc4f97acec35828d/7aec54e736d12f2e7739369a48c2d56285356808.jpg', ''),
(2, '蔡崇信：马云背后的男人', 'http://t10.baidu.com/it/u=http://images.haiwainet.cn/2016/0507/20160507110751430.jpeg&fm=36', ''),
(3, '互联网理财水有多深 我为什么不担心鲸鱼宝跑路', '', '这让一只脚才刚刚迈进互联网金融的投资者们心生畏惧了，互联网理财水太深，投资者们到底应该何去何从。'),
(4, '吕秀莲赴泰国参加会议被拒签', 'http://t10.baidu.com/it/u=http://img5.cache.netease.com/3g/2016/5/7/201605071559223cb91.jpg&amp;fm=36', '她原本5日要去泰国参加某研讨会议，预定7日发表演说，但泰国却不发给她签证。'),
(5, '曝唐十八陵石刻被清洗 陕西文物局称自然现象', 'http://t10.baidu.com/it/u=http://inews.gtimg.com/newsapp_ls/0/285751709_150120/0&amp;fm=36', ''),
(7, '传雷军千万元买下送人的maiche.com 已搭建了买车网', '', '可以看出，该平台正是木仓科技旗下的网站，所以可以证实，姜英豪与雷军的车市场合作真的落实了。'),
(8, '千万富翁吹罚欧冠决赛 他执法马德里双雄均不败', 'http://t10.baidu.com/it/u=http://img04.imgcdc.com/grab/img/20160507/48951462611738.png&amp;fm=36', ''),
(9, '撒贝宁今日武汉办婚礼 “宁得一人心白首莫相离” ', 'http://t12.baidu.com/it/u=http://img.ycwb.com/news/attachement/jpg/site2/20160507/448a5bb32da01897f30236.jpg&amp;fm=36', ''),
(12, 'a', '', 'aaa');

-- --------------------------------------------------------

--
-- 表的结构 `society`
--

CREATE TABLE `society` (
  `newsid` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `img` varchar(200) NOT NULL,
  `content` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='社会';

--
-- 转存表中的数据 `society`
--

INSERT INTO `society` (`newsid`, `title`, `img`, `content`) VALUES
(1, '“棉被奶奶”触网开店', 'http://t11.baidu.com/it/u=http://pic.gansudaily.com.cn/0/12/52/46/12524649_302082.jpg&fm=36', ''),
(2, '男子千里投奔老同学被逼搞传销 被拘禁11天机智逃脱', 'http://t10.baidu.com/it/u=http://images5.m.china.com.cn/newschina/2016_05_09/11/79b337830cbb8e4f_600_9999.jpg&fm=36', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `entertainment`
--
ALTER TABLE `entertainment`
  ADD PRIMARY KEY (`newsid`);

--
-- Indexes for table `hundred`
--
ALTER TABLE `hundred`
  ADD PRIMARY KEY (`newsid`);

--
-- Indexes for table `local`
--
ALTER TABLE `local`
  ADD PRIMARY KEY (`newsid`);

--
-- Indexes for table `recomment`
--
ALTER TABLE `recomment`
  ADD PRIMARY KEY (`newsid`);

--
-- Indexes for table `society`
--
ALTER TABLE `society`
  ADD PRIMARY KEY (`newsid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `entertainment`
--
ALTER TABLE `entertainment`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- 使用表AUTO_INCREMENT `hundred`
--
ALTER TABLE `hundred`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- 使用表AUTO_INCREMENT `recomment`
--
ALTER TABLE `recomment`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- 使用表AUTO_INCREMENT `society`
--
ALTER TABLE `society`
  MODIFY `newsid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
