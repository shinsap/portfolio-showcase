type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

type UserProfileInput = {
  name: string;
  email: string;
};

type UserProfile = UserProfileInput & {
  id: string;
  createdAt: string;
};

export async function createUserProfile(
  input: UserProfileInput,
): Promise<Result<UserProfile>> {
  if (!input.name.trim()) {
    return { ok: false, error: "名前は必須です。" };
  }

  if (!input.email.includes("@")) {
    return { ok: false, error: "有効なメールアドレスを入力してください。" };
  }

  try {
    const profile: UserProfile = {
      id: crypto.randomUUID(),
      name: input.name.trim(),
      email: input.email.trim().toLowerCase(),
      createdAt: new Date().toISOString(),
    };

    return { ok: true, data: profile };
  } catch {
    return { ok: false, error: "プロフィール作成に失敗しました。" };
  }
}
