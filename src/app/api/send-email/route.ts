import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const { email, subject, body } = await req.json(); // Manually parse the request body

  const emailData = {
    email,
    subject,
    body,
    timestamp: new Date().toISOString(),
  };

  console.log(emailData);
  // Generate a unique filename using the timestamp
  const timestamp = Date.now();
  const filePath = path.join(process.cwd(), `emails_${timestamp}.txt`);

  try {
    // Get the directory where emails are stored
    const emailDir = process.cwd();
    const files = fs
      .readdirSync(emailDir)
      .filter((file) => file.startsWith("emails_"));

    // If there are more than 20 email files, delete the oldest ones
    if (files.length >= 20) {
      // Sort files by creation time
      files.sort((a, b) => {
        const aTime = fs.statSync(path.join(emailDir, a)).ctime.getTime(); // Convert to timestamp
        const bTime = fs.statSync(path.join(emailDir, b)).ctime.getTime(); // Convert to timestamp
        return aTime - bTime;
      });

      // Delete the oldest files
      for (let i = 0; i <= files.length - 20; i++) {
        fs.unlinkSync(path.join(emailDir, files[i]));
      }
    }

    fs.writeFileSync(filePath, JSON.stringify(emailData) + "\n");
    return new NextResponse(
      JSON.stringify({ message: "Email saved successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error writing file:", error);
    return new NextResponse(JSON.stringify({ message: "Error writing file" }), {
      status: 400,
    });
  }
}
