import { ImageUpload } from "@/components/profile/ImageUpload";
import { LearningForm } from "@/components/profile/LearningForm";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { WorkForm } from "@/components/profile/WorkForm";

export default function ProfileEditPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow">
        <h1 className="text-2xl font-bold text-gray-900">
          プロフィール編集
        </h1>

        <p className="mt-2 text-sm text-gray-600">
          プロフィール情報、学習してきたこと、作ったものを編集します。
        </p>

        <div className="mt-8 space-y-8">
          <ImageUpload />
          <ProfileForm />
          <LearningForm />
          <WorkForm />
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-bold text-white"
          >
            保存する
          </button>
        </div>
      </div>
    </main>
  );
}