"use server";

import { put } from "@vercel/blob";

export async function uploadImageAction(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      return { success: false, error: "No file provided" };
    }

    // A. Check if Vercel Blob token is set (Production mode)
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      const blob = await put(file.name, file, { access: "public" });
      return { success: true, url: blob.url };
    }

    // B. Local Fallback Mode: Read as Base64 data URL
    // Convert File to buffer on the server
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString("base64");
    const mimeType = file.type || "image/jpeg";
    const dataUrl = `data:${mimeType};base64,${base64}`;

    return { success: true, url: dataUrl };
  } catch (error) {
    console.error("Image upload failure:", error);
    return { success: false, error: String(error) };
  }
}
