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
    return { ok: false, error: "Name is required." };
  }

  if (!input.email.includes("@")) {
    return { ok: false, error: "Valid email is required." };
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
    return { ok: false, error: "Failed to create profile." };
  }
}
