import { redirect } from "next/navigation";

export async function GET() {
	redirect(process.env.MAIN_WEBSITE);
}
