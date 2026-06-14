"use client";

import { useState } from "react";
import { ImageUpload } from "@/components/profile/ImageUpload";
import { LearningForm } from "@/components/profile/LearningForm";
import { ProfileForm } from "@/components/profile/ProfileForm";
import { WorkForm } from "@/components/profile/WorkForm";
import type {
  LearningItem,
  ProfileFormData,
  WorkItem,
} from "@/types/profile";

export default function ProfileEditPage() {
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [profile, setProfile] = useState<ProfileFormData>({
    name: "",
    birthMonth: "",
    birthDay: "",
    bloodType: "",
    mbti: "",
    bio: "",
  });

  const [learnings, setLearnings] = useState<LearningItem[]>([
    {
      id: "1",
      title: "",
      description: "",
    },
  ]);

  const [works, setWorks] = useState<WorkItem[]>([
    {
      id: "1",
      category: "",
      title: "",
      description: "",
      technologies: "",
      role: "",
      url: "",
    },
  ]);

  const handleChangeProfile = (
    field: keyof ProfileFormData,
    value: string
  ) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const handleAddLearning = () => {
    setLearnings((prevLearnings) => [
      ...prevLearnings,
      {
        id: String(Date.now()),
        title: "",
        description: "",
      },
    ]);
  };

  const handleDeleteLearning = (id: string) => {
    if (learnings.length === 1) {
      return;
    }

    setLearnings((prevLearnings) =>
      prevLearnings.filter((learning) => learning.id !== id)
    );
  };

  const handleChangeLearning = (
    id: string,
    field: keyof Omit<LearningItem, "id">,
    value: string
  ) => {
    setLearnings((prevLearnings) =>
      prevLearnings.map((learning) =>
        learning.id === id
          ? {
              ...learning,
              [field]: value,
            }
          : learning
      )
    );
  };

  const handleAddWork = () => {
    setWorks((prevWorks) => [
      ...prevWorks,
      {
        id: String(Date.now()),
        category: "",
        title: "",
        description: "",
        technologies: "",
        role: "",
        url: "",
      },
    ]);
  };

  const handleDeleteWork = (id: string) => {
    if (works.length === 1) {
      return;
    }

    setWorks((prevWorks) => prevWorks.filter((work) => work.id !== id));
  };

  const handleChangeWork = (
    id: string,
    field: keyof Omit<WorkItem, "id">,
    value: string
  ) => {
    setWorks((prevWorks) =>
      prevWorks.map((work) =>
        work.id === id
          ? {
              ...work,
              [field]: value,
            }
          : work
      )
    );
  };

  const handleSave = () => {
    console.log("プロフィール画像:", imageFile);
    console.log("プロフィール情報:", profile);
    console.log("学習してきたこと:", learnings);
    console.log("作ったもの:", works);
  };

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
          <ImageUpload
            imageFile={imageFile}
            onChangeImageFile={setImageFile}
          />

          <ProfileForm
            profile={profile}
            onChangeProfile={handleChangeProfile}
          />

          <LearningForm
            learnings={learnings}
            onAddLearning={handleAddLearning}
            onDeleteLearning={handleDeleteLearning}
            onChangeLearning={handleChangeLearning}
          />

          <WorkForm
            works={works}
            onAddWork={handleAddWork}
            onDeleteWork={handleDeleteWork}
            onChangeWork={handleChangeWork}
          />
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={handleSave}
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-bold text-white"
          >
            保存する
          </button>
        </div>
      </div>
    </main>
  );
}