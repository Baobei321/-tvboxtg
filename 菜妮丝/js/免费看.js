// 永久网址 https://mfkys.com/

var rule = {
	title:'免费看',
	host:'https://qzy998-1.ysgq.xyz',
	// url:'/index.php/vod/show/id/fyclass/page/fypage.html',
	url:'/index.php/vod/show/id/fyclassfyfilter.html',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.area}}{{fl.by}}{{fl.lang}}{{fl.letter}}/page/fypage{{fl.year}}',
	filter:{
		"1":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"剧情","v":"/class/剧情"},{"n":"喜剧","v":"/class/喜剧"},{"n":"动作","v":"/class/动作"},{"n":"爱情","v":"/class/爱情"},{"n":"科幻","v":"/class/科幻"},{"n":"动画","v":"/class/动画"},{"n":"悬疑","v":"/class/悬疑"},{"n":"惊悚","v":"/class/惊悚"},{"n":"警匪","v":"/class/警匪"},{"n":"恐怖","v":"/class/恐怖"},{"n":"犯罪","v":"/class/犯罪"},{"n":"同性","v":"/class/同性"},{"n":"音乐","v":"/class/音乐"},{"n":"歌舞","v":"/class/歌舞"},{"n":"传记","v":"/class/传记"},{"n":"历史","v":"/class/历史"},{"n":"战争","v":"/class/战争"},{"n":"西部","v":"/class/西部"},{"n":"奇幻","v":"/class/奇幻"},{"n":"冒险","v":"/class/冒险"},{"n":"灾难","v":"/class/灾难"},{"n":"武侠","v":"/class/武侠"},{"n":"古装","v":"/class/古装"},{"n":"纪录","v":"/class/纪录"},{"n":"运动","v":"/class/运动"},{"n":"偶像","v":"/class/偶像"},{"n":"都市","v":"/class/都市"},{"n":"情景","v":"/class/情景"},{"n":"经典","v":"/class/经典"},{"n":"网络","v":"/class/网络"},{"n":"其他","v":"/class/其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"中国香港","v":"/area/中国香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰国","v":"/area/泰国"},{"n":"印度","v":"/area/印度"},{"n":"西班牙","v":"/area/西班牙"},{"n":"新加坡","v":"/area/新加坡"},{"n":"马来西亚","v":"/area/马来西亚"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"加拿大","v":"/area/加拿大"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"澳大利亚","v":"/area/澳大利亚"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"法语","v":"/lang/法语"},{"n":"德语","v":"/lang/德语"},{"n":"意大利语","v":"/lang/意大利语"},{"n":"泰语","v":"/lang/泰语"},{"n":"西班牙语","v":"/lang/西班牙语"},{"n":"葡萄牙语","v":"/lang/葡萄牙语"},{"n":"印地语","v":"/lang/印地语"},{"n":"泰米尔语","v":"/lang/泰米尔语"},{"n":"俄语","v":"/lang/俄语"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
		"2":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"剧情","v":"/class/剧情"},{"n":"喜剧","v":"/class/喜剧"},{"n":"动作","v":"/class/动作"},{"n":"爱情","v":"/class/爱情"},{"n":"科幻","v":"/class/科幻"},{"n":"动画","v":"/class/动画"},{"n":"悬疑","v":"/class/悬疑"},{"n":"惊悚","v":"/class/惊悚"},{"n":"警匪","v":"/class/警匪"},{"n":"恐怖","v":"/class/恐怖"},{"n":"犯罪","v":"/class/犯罪"},{"n":"同性","v":"/class/同性"},{"n":"音乐","v":"/class/音乐"},{"n":"歌舞","v":"/class/歌舞"},{"n":"传记","v":"/class/传记"},{"n":"历史","v":"/class/历史"},{"n":"战争","v":"/class/战争"},{"n":"西部","v":"/class/西部"},{"n":"奇幻","v":"/class/奇幻"},{"n":"冒险","v":"/class/冒险"},{"n":"灾难","v":"/class/灾难"},{"n":"武侠","v":"/class/武侠"},{"n":"古装","v":"/class/古装"},{"n":"纪录","v":"/class/纪录"},{"n":"运动","v":"/class/运动"},{"n":"偶像","v":"/class/偶像"},{"n":"都市","v":"/class/都市"},{"n":"情景","v":"/class/情景"},{"n":"经典","v":"/class/经典"},{"n":"网络","v":"/class/网络"},{"n":"军旅","v":"/class/军旅"},{"n":"历险","v":"/class/历险"},{"n":"商战","v":"/class/商战"},{"n":"宫延","v":"/class/宫延"},{"n":"家庭","v":"/class/家庭"},{"n":"江湖","v":"/class/江湖"},{"n":"玄幻","v":"/class/玄幻"},{"n":"其他","v":"/class/其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"中国香港","v":"/area/中国香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰国","v":"/area/泰国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"马来西亚","v":"/area/马来西亚"},{"n":"印度","v":"/area/印度"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"澳大利亚","v":"/area/澳大利亚"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"法语","v":"/lang/法语"},{"n":"德语","v":"/lang/德语"},{"n":"意大利语","v":"/lang/意大利语"},{"n":"泰语","v":"/lang/泰语"},{"n":"西班牙","v":"/lang/西班牙"},{"n":"语葡萄牙语","v":"/lang/语葡萄牙语"},{"n":"印地语","v":"/lang/印地语"},{"n":"泰米尔语","v":"/lang/泰米尔语"},{"n":"俄语","v":"/lang/俄语"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
		"3":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"选秀","v":"/class/选秀"},{"n":"情感","v":"/class/情感"},{"n":"访谈","v":"/class/访谈"},{"n":"播报","v":"/class/播报"},{"n":"旅游","v":"/class/旅游"},{"n":"音乐","v":"/class/音乐"},{"n":"美食","v":"/class/美食"},{"n":"纪实","v":"/class/纪实"},{"n":"曲艺","v":"/class/曲艺"},{"n":"生活","v":"/class/生活"},{"n":"游戏互动","v":"/class/游戏互动"},{"n":"财经","v":"/class/财经"},{"n":"求职","v":"/class/求职"},{"n":"搞笑","v":"/class/搞笑"},{"n":"晚会","v":"/class/晚会"},{"n":"演唱会","v":"/class/演唱会"},{"n":"真人秀","v":"/class/真人秀"},{"n":"竞技","v":"/class/竞技"},{"n":"网综","v":"/class/网综"},{"n":"脱口秀","v":"/class/脱口秀"},{"n":"其他综艺","v":"/class/其他综艺"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"中国香港","v":"/area/中国香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰国","v":"/area/泰国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"马来西亚","v":"/area/马来西亚"},{"n":"印度","v":"/area/印度"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"澳大利亚","v":"/area/澳大利亚"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"法语","v":"/lang/法语"},{"n":"德语","v":"/lang/德语"},{"n":"意大利语","v":"/lang/意大利语"},{"n":"泰语","v":"/lang/泰语"},{"n":"西班牙","v":"/lang/西班牙"},{"n":"语葡萄牙语","v":"/lang/语葡萄牙语"},{"n":"印地语","v":"/lang/印地语"},{"n":"泰米尔语","v":"/lang/泰米尔语"},{"n":"俄语","v":"/lang/俄语"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
		"4":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"冒险","v":"/class/冒险"},{"n":"少女","v":"/class/少女"},{"n":"恋爱","v":"/class/恋爱"},{"n":"推理","v":"/class/推理"},{"n":"机战","v":"/class/机战"},{"n":"校园","v":"/class/校园"},{"n":"治愈","v":"/class/治愈"},{"n":"泡面","v":"/class/泡面"},{"n":"灵异","v":"/class/灵异"},{"n":"热血","v":"/class/热血"},{"n":"爆笑","v":"/class/爆笑"},{"n":"科幻","v":"/class/科幻"},{"n":"穿越","v":"/class/穿越"},{"n":"竞技","v":"/class/竞技"},{"n":"耽美","v":"/class/耽美"},{"n":"魔幻","v":"/class/魔幻"},{"n":"格斗","v":"/class/格斗"},{"n":"情感","v":"/class/情感"},{"n":"搞笑","v":"/class/搞笑"},{"n":"萝莉","v":"/class/萝莉"},{"n":"动作","v":"/class/动作"},{"n":"运动","v":"/class/运动"},{"n":"战争","v":"/class/战争"},{"n":"少年","v":"/class/少年"},{"n":"社会","v":"/class/社会"},{"n":"原创","v":"/class/原创"},{"n":"亲子","v":"/class/亲子"},{"n":"益智","v":"/class/益智"},{"n":"励志","v":"/class/励志"},{"n":"其他","v":"/class/其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/中国大陆"},{"n":"中国香港","v":"/area/中国香港"},{"n":"中国台湾","v":"/area/中国台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰国","v":"/area/泰国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"马来西亚","v":"/area/马来西亚"},{"n":"印度","v":"/area/印度"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"澳大利亚","v":"/area/澳大利亚"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"法语","v":"/lang/法语"},{"n":"德语","v":"/lang/德语"},{"n":"意大利语","v":"/lang/意大利语"},{"n":"泰语","v":"/lang/泰语"},{"n":"西班牙","v":"/lang/西班牙"},{"n":"语葡萄牙语","v":"/lang/语葡萄牙语"},{"n":"印地语","v":"/lang/印地语"},{"n":"泰米尔语","v":"/lang/泰米尔语"},{"n":"俄语","v":"/lang/俄语"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
		"5":[{"key":"class","name":"类型","value":[{"n":"全部","v":""},{"n":"人物","v":"/class/人物"},{"n":"军事","v":"/class/军事"},{"n":"历史","v":"/class/历史"},{"n":"探索","v":"/class/探索"},{"n":"文化","v":"/class/文化"},{"n":"科技","v":"/class/科技"},{"n":"自然","v":"/class/自然"},{"n":"解密","v":"/class/解密"},{"n":"其他","v":"/class/其他"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":""},{"n":"大陆","v":"/area/大陆"},{"n":"香港","v":"/area/香港"},{"n":"台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰国","v":"/area/泰国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"马来西亚","v":"/area/马来西亚"},{"n":"印度","v":"/area/印度"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"其它","v":"/area/其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":""},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"}]},{"key":"lang","name":"语言","value":[{"n":"全部","v":""},{"n":"国语","v":"/lang/国语"},{"n":"英语","v":"/lang/英语"},{"n":"粤语","v":"/lang/粤语"},{"n":"闽南语","v":"/lang/闽南语"},{"n":"韩语","v":"/lang/韩语"},{"n":"日语","v":"/lang/日语"},{"n":"法语","v":"/lang/法语"},{"n":"德语","v":"/lang/德语"},{"n":"意大利语","v":"/lang/意大利语"},{"n":"泰语","v":"/lang/泰语"},{"n":"西班牙","v":"/lang/西班牙"},{"n":"语葡萄牙语","v":"/lang/语葡萄牙语"},{"n":"印地语","v":"/lang/印地语"},{"n":"泰米尔语","v":"/lang/泰米尔语"},{"n":"俄语","v":"/lang/俄语"},{"n":"其它","v":"/lang/其它"}]},{"key":"letter","name":"字母","value":[{"n":"全部","v":""},{"n":"A","v":"/letter/A"},{"n":"B","v":"/letter/B"},{"n":"C","v":"/letter/C"},{"n":"D","v":"/letter/D"},{"n":"E","v":"/letter/E"},{"n":"F","v":"/letter/F"},{"n":"G","v":"/letter/G"},{"n":"H","v":"/letter/H"},{"n":"I","v":"/letter/I"},{"n":"J","v":"/letter/J"},{"n":"K","v":"/letter/K"},{"n":"L","v":"/letter/L"},{"n":"M","v":"/letter/M"},{"n":"N","v":"/letter/N"},{"n":"O","v":"/letter/O"},{"n":"P","v":"/letter/P"},{"n":"Q","v":"/letter/Q"},{"n":"R","v":"/letter/R"},{"n":"S","v":"/letter/S"},{"n":"T","v":"/letter/T"},{"n":"U","v":"/letter/U"},{"n":"V","v":"/letter/V"},{"n":"W","v":"/letter/W"},{"n":"X","v":"/letter/X"},{"n":"Y","v":"/letter/Y"},{"n":"Z","v":"/letter/Z"},{"n":"0-9","v":"/letter/0-9"}]},{"key":"by","name":"排序","value":[{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}]
	},
	searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
	searchable: 2,//是否启用全局搜索,
	quickSearch: 1,//是否启用快速搜索,
	headers: {
		'User-Agent': 'MOBILE_UA',
	},
	class_parse:'.nav-channel&&.main-nav;a&&Text;a&&href;/(\\d+).html',
	play_parse: true,
	lazy:'js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=="1"){url=unescape(url)}else if(html.encrypt=="2"){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}',
	limit: 6,
	推荐:'*',
	一级:'.vodlist .pack-ykpack;a&&title;.eclazy&&data-original;.pack-prb&&Text;a&&href',
	二级:{
		"title":"h1&&Text;.item-director--span&&Text",
		"img":".g-playicon&&img&&src",
		"desc":".s-top-info-title span&&Text;;;.item-type--span&&Text;.item-actor--span:eq(2)&&Text",
		"content":".ec-palytcji span&&Text",
		"tabs":".swiper-wrapper .channelname",
		"tab_text":"body--i&&Text",
		"lists":".content_playlist:eq(#id) li"
	},
	搜索:'.ec-search li;*;*;*;*',
}