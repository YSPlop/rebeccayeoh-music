import { NextResponse } from "next/server";
import "dotenv/config"
import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function POST(request: Request, response: Response) {
    const secretKey = process.env.RECAPTCHA_SERVER_SECRET_KEY;

    const postData = await request.json();
    const { gRecaptchaToken } = postData;

    // Construct form data for reCAPTCHA verification
    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

    let res;
    try {
        // Send verification request to Google's reCAPTCHA API
        res = await axios.post(
            "https://www.google.com/recaptcha/api/siteverify",
            formData,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }
        );
    } catch (e) {
        console.log(e);
        return NextResponse.json({ success: false });
    }

    // Validate reCAPTCHA response and score
    if (res && res.data?.success && res.data?.score > 0.5) {
        return NextResponse.json({ success: true, score: res.data.score });
    } else {
        return NextResponse.json({ success: false });
    }
}
