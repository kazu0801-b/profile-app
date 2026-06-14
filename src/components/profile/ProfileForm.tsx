export function ProfileForm() {
  return (
    <section className="rounded-xl border border-gray-200 p-4">
      <h2 className="text-lg font-bold text-gray-900">基本情報</h2>

      <div className="mt-4 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">名前</span>
          <input
            type="text"
            placeholder="名前を入力"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">誕生日（月）</span>
            <input
              type="number"
              placeholder="例：1"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">誕生日（日）</span>
            <input
              type="number"
              placeholder="例：15"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">血液型</span>
          <select className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900">
            <option value="">選択してください</option>
            <option value="A">A型</option>
            <option value="B">B型</option>
            <option value="O">O型</option>
            <option value="AB">AB型</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">MBTI</span>
          <input
            type="text"
            placeholder="例：INFJ"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">自己紹介</span>
          <textarea
            placeholder="自己紹介を入力"
            rows={4}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
          />
        </label>
      </div>
    </section>
  );
}