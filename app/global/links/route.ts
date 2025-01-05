import { resInit } from "@/app/globals";
import { NextResponse } from "next/server";

const supportEmail = "support@mafazaa.com";

const links: LinksDataType = {
	socialLinks: [
		{
			href: "https://whatsapp.com/channel/0029VakgzRJ5kg7BkQFSJK36",
			src: process.env.HOST + "/icons/whatsapp.svg",
			text: "whatsapp",
		},
		{
			href: "https://facebook.com/mafazaa.org",
			src: process.env.HOST + "/icons/facebook.svg",
			text: "facebook",
		},
		{
			href: "https://youtube.com/@mafazaa_official",
			src: process.env.HOST + "/icons/youtube.svg",
			text: "youtube",
		},

		{
			href: `mailto:${supportEmail}`,
			src: process.env.HOST + "/icons/mail.svg",
			text: "mail",
		},
		{
			href: "https://github.com/mafazaa-org/",
			src: process.env.HOST + "/icons/github-mark-white.svg",
			text: "github logo",
		},
	],
	support: supportEmail,
	importantLinks: [
		{ href: "/#projects", text: "مشاريعنا" },
		{ href: "/contact", text: "تواصل معنا" },
		{ href: "/idea", text: "فكرة المشروع" },
		{ href: "/join", text: "انضم إلينا" },
		{ href: "/", text: "الرئيسية" },
	].map((v) => ({ href: process.env.MAIN_WEBSITE + v.href, text: v.text })),
};

export async function GET() {
	return NextResponse.json(links, resInit);
}

export async function OPTIONS() {
	return NextResponse.json("", resInit);
}

type LinksDataType = {
	socialLinks: SocialLink[];
	support: string;
	importantLinks: Link[];
};

interface Link {
	text: string;
	href: string;
}

interface SocialLink extends Link {
	src: string;
}
