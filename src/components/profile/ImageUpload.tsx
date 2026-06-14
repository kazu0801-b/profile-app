"use client";

import { useRef, useState } from "react";

export function ImageUpload() {
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreviewUrl(imageUrl);
  };

  const handleDeleteImage = () => {
    setPreviewUrl("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section className="rounded-xl border border-gray-200 p-4">
      <h2 className="text-lg font-bold text-gray-900">プロフィール画像</h2>

      <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-gray-100">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="プロフィール画像プレビュー"
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="text-sm text-gray-500">画像なし</span>
          )}
        </div>

        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="block text-sm text-gray-700"
          />

          <p className="mt-2 text-xs text-gray-500">
            画像を選択すると、ここにプレビュー表示されます。
          </p>

          {previewUrl && (
            <button
              type="button"
              onClick={handleDeleteImage}
              className="mt-3 rounded-lg border border-red-300 px-4 py-2 text-sm font-bold text-red-600"
            >
              画像を削除
            </button>
          )}
        </div>
      </div>
    </section>
  );
}