import type { ProfileFormData } from "@/types/profile";

type ProfileFormProps = {
  profile: ProfileFormData;
  onChangeProfile: (field: keyof ProfileFormData, value: string) => void;
};

export function ProfileForm({
  profile,
  onChangeProfile,
}: ProfileFormProps) {
  return (
    <section className="rounded-xl border border-gray-200 p-4">
      <h2 className="text-lg font-bold text-gray-900">基本情報</h2>

      <div className="mt-4 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-gray-700">名前</span>
          <input
            type="text"
            value={profile.name}
            onChange={(event) =>
              onChangeProfile("name", event.target.value)
            }
            placeholder="名前を入力"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">
              誕生日（月）
            </span>
            <input
              type="number"
              value={profile.birthMonth}
              onChange={(event) =>
                onChangeProfile("birthMonth", event.target.value)
              }
              placeholder="例：1"
              min="1"
              max="12"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">
              誕生日（日）
            </span>
            <input
              type="number"
              value={profile.birthDay}
              onChange={(event) =>
                onChangeProfile("birthDay", event.target.value)
              }
              placeholder="例：15"
              min="1"
              max="31"
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">血液型</span>
          <select
            value={profile.bloodType}
            onChange={(event) =>
              onChangeProfile("bloodType", event.target.value)
            }
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
          >
            <option value="">選択してください</option>
            <option value="A">A型</option>
            <option value="B">B型</option>
            <option value="O">O型</option>
            <option value="AB">AB型</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">MBTI</span>
          <select
            value={profile.mbti}
            onChange={(event) =>
              onChangeProfile("mbti", event.target.value)
            }
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
          >
            <option value="">選択してください</option>
            <option value="INTJ">INTJ</option>
            <option value="INTP">INTP</option>
            <option value="ENTJ">ENTJ</option>
            <option value="ENTP">ENTP</option>
            <option value="INFJ">INFJ</option>
            <option value="INFP">INFP</option>
            <option value="ENFJ">ENFJ</option>
            <option value="ENFP">ENFP</option>
            <option value="ISTJ">ISTJ</option>
            <option value="ISFJ">ISFJ</option>
            <option value="ESTJ">ESTJ</option>
            <option value="ESFJ">ESFJ</option>
            <option value="ISTP">ISTP</option>
            <option value="ISFP">ISFP</option>
            <option value="ESTP">ESTP</option>
            <option value="ESFP">ESFP</option>
          </select>
        </label>

        <label className="block">
          <span className="text-sm font-medium text-gray-700">自己紹介</span>
          <textarea
            value={profile.bio}
            onChange={(event) =>
              onChangeProfile("bio", event.target.value)
            }
            placeholder="自己紹介を入力"
            rows={4}
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900"
          />
        </label>
      </div>
    </section>
  );
}