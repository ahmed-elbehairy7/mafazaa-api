import { resInit } from "@/app/globals";
import { NextResponse } from "next/server";

const supportEmail = "support@mafazaa.com";

const links: LinksDataType = {
	socialLinks: [
		{
			href: "https://whatsapp.com/channel/0029VakgzRJ5kg7BkQFSJK36",
			src: process.env.HOST + "/icons/whatsapp.svg",
			alt: "whatsapp",
		},
		{
			href: "https://facebook.com/mafazaa.org",
			src: process.env.HOST + "/icons/facebook.svg",
			alt: "facebook",
		},
		{
			href: "https://youtube.com/@mafazaa_official",
			src: process.env.HOST + "/icons/youtube.svg",
			alt: "youtube",
		},

		{
			href: `mailto:${supportEmail}`,
			src: process.env.HOST + "/icons/mail.svg",
			alt: "mail",
		},
		{
			href: "https://github.com/mafazaa-org/",
			src: process.env.HOST + "/icons/github-mark-white.svg",
			alt: "github logo",
		},
	],
	support: supportEmail,
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
};

type SocialLink = {
	href: string;
	src: string;
	alt: string;
};
