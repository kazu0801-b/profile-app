"use client";

import { useState } from "react";

type LearningItem = {
  id: number;
  title: string;
  description: string;
};

export function LearningForm() {
  const [learnings, setLearnings] = useState<LearningItem[]>([
    {
      id: 1,
      title: "",
      description: "",
    },
  ]);

  const handleAddLearning = () => {
    setLearnings([
      ...learnings,
      {
        id: Date.now(),
        title: "",
        description: "",
      },
    ]);
  };

  const handleDeleteLearning = (id: number) => {
    if (learnings.length === 1) {
      return;
    }

    setLearnings(learnings.filter((learning) => learning.id !== id));
  };

  const handleChangeLearning = (
    id: number,
    field: "title" | "description",
    value: string
  ) => {
    setLearnings(
      learnings.map((learning) =>
        learning.id === id ? { ...learning, [field]: value } : learning
      )
    );
  };

  return (
    <section className="rounded-xl border border-gray-200 p-4">
      <h2 className="text-lg font-bold text-gray-900">学習してきたこと</h2>

      <div className="mt-4 space-y-4">
        {learnings.map((learning, index) => (
          <div key={learning.id} className="rounded-lg border border-gray-200 p-4">
            <p className="mb-4 text-sm font-bold text-gray-700">
              学習内容 {index + 1}
            </p>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                学習タイトル
              </span>
              <input
                type="text"
                value={learning.title}
                onChange={(event) =>
                  handleChangeLearning(learning.id, "title", event.target.value)
                }
                placeholder="例：Next.jsを学習"
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
              />
            </label>

            <label className="mt-4 block">
              <span className="text-sm font-medium text-gray-700">説明</span>
              <textarea
                value={learning.description}
                onChange={(event) =>
                  handleChangeLearning(
                    learning.id,
                    "description",
                    event.target.value
                  )
                }
                placeholder="学習内容の説明を入力"
                rows={3}
                className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
              />
            </label>

            <button
              type="button"
              onClick={() => handleDeleteLearning(learning.id)}
              disabled={learnings.length === 1}
              className="mt-4 rounded-lg border border-red-300 px-4 py-2 text-sm font-bold text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
            >
              削除
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddLearning}
          className="rounded-lg border border-blue-300 px-4 py-2 text-sm font-bold text-blue-600"
        >
          ＋ 学習内容を追加
        </button>
      </div>
    </section>
  );
}