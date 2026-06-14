export function WorkForm() {
  return (
    <section className="rounded-xl border border-gray-200 p-4">
      <h2 className="text-lg font-bold text-gray-900">作ったもの</h2>

      <div className="mt-4 space-y-4">
        <div className="rounded-lg border border-gray-200 p-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">
              タブ / カテゴリ
            </span>
            <select className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900">
              <option value="">確認後に決定</option>
              <option value="team">チーム制作</option>
              <option value="internal">社内開発</option>
              <option value="personal">個人制作</option>
            </select>
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-gray-700">作品タイトル</span>
            <input
              type="text"
              placeholder="作品タイトルを入力"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
            />
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-gray-700">説明</span>
            <textarea
              placeholder="作品の説明を入力"
              rows={3}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
            />
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-gray-700">使用技術</span>
            <input
              type="text"
              placeholder="例：Next.js / Supabase"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
            />
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-gray-700">担当したこと</span>
            <textarea
              placeholder="担当範囲を入力"
              rows={3}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
            />
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-gray-700">URL</span>
            <input
              type="url"
              placeholder="https://example.com"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
            />
          </label>

          <button
            type="button"
            className="mt-4 rounded-lg border border-red-300 px-4 py-2 text-sm font-bold text-red-600"
          >
            削除
          </button>
        </div>

        <button
          type="button"
          className="rounded-lg border border-blue-300 px-4 py-2 text-sm font-bold text-blue-600"
        >
          ＋ 作ったものを追加
        </button>
      </div>
    </section>
  );
}