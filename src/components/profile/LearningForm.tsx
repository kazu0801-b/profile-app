export function LearningForm() {
  return (
    <section className="rounded-xl border border-gray-200 p-4">
      <h2 className="text-lg font-bold text-gray-900">学習してきたこと</h2>

      <div className="mt-4 space-y-4">
        <div className="rounded-lg border border-gray-200 p-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">学習タイトル</span>
            <input
              type="text"
              placeholder="例：Next.jsを学習"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
            />
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-medium text-gray-700">説明</span>
            <textarea
              placeholder="学習内容の説明を入力"
              rows={3}
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
          ＋ 学習内容を追加
        </button>
      </div>
    </section>
  );
}