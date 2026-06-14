"use client";

import { useState } from "react";

export function ImageUpload() {
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreviewUrl(imageUrl);
  };

  return (
    <section className="rounded-xl border border-gray-200 p-4">
      <h2 className="text-lg font-bold text-gray-900">プロフィール画像</h2>

      <div className="mt-4">
        <input type="file" accept="image/*" onChange={handleChange} />

        {previewUrl && (
          <div className="mt-4">
            <img
              src={previewUrl}
              alt="プロフィール画像プレビュー"
              className="h-32 w-32 rounded-full border object-cover"
            />

            <button
              type="button"
              onClick={() => setPreviewUrl("")}
              className="mt-3 rounded-lg border border-red-300 px-4 py-2 text-sm font-bold text-red-600"
            >
              画像を削除
            </button>
          </div>
        )}
      </div>
    </section>
  );
}