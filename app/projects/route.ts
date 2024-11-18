import { NextRequest, NextResponse } from "next/server";
import { resInit } from "../globals";

type Project = {
	title: string;
	en: string;
	description: string;
	image?: string;
};

const projects: Project[] = [
	{
		title: "عينا سلسبيلا",
		en: "ainaa",
		description:
			"مشروع يهدف ان شاء الله الى تنظيف النت من المحتوى الاباحي ثم كل ما يغضب الله عز و جل",
	},
	{
		title: "نباتا حسنا",
		en: "nabataa",
		description:
			"مشروع يهدف إلى إنشاء جيل صالح بإذن الله تعالى عبر توفير/تجميع محتوى كرتوني إسلامي هادف و غير ذلك من الطرق التي تغرس الدين القويم و شرع الله في الطفل.",
	},
	{
		title: "زدني علما",
		en: "elmaa",
		description:
			"مشروع يهدف إن شاء الله إلى تعريب المحتوى التعليمي الأجنبي أو إنشاء محتوى عالى الجودة حتى يصير لنا نفس الجودة التعليمية لدى الغرب",
	},
	{
		title: "رزقا حسنا",
		description:
			"مشروع يهدف إلى مساعدة الشباب على الكسب و العمل عن طريق توفير أو تسهيل أو إهداء فرص عمل في مجالات مختلفة أو توفير خدمات تسهل على الشباب بدء مشاريعهم الخاصة",
		en: "rezqaa",
	},
];

export async function GET(req: NextRequest) {
	return NextResponse.json(projects, resInit);
}
