import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getLoggedInUser, logoutUser, updateCurrentUser } from "../lib/storage";
import { useTheme } from "../hooks/useTheme";

const fallbackProfile = {
  aboutMe:
    "To create innovative solutions in the field of web development and become a professional developer through continuous practice.",
  age: "35",
  location: "Toshkent shahar, Chilonzor tumani, 8-mavze, 22-uy",
  profileUrl: "/photo_2025-11-21_19-33-24.jpg",
};

export default function ProfilePage() {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const [user, setUser] = useState(() => getLoggedInUser());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({
    aboutMe: "",
    age: "",
    location: "",
  });

  useEffect(() => {
    const currentUser = getLoggedInUser();
    if (!currentUser) {
      navigate("/login", { replace: true });
      return;
    }

    const mergedUser = { ...fallbackProfile, ...currentUser };
    setUser(mergedUser);
    setEditForm({
      aboutMe: mergedUser.aboutMe,
      age: mergedUser.age,
      location: mergedUser.location,
    });
  }, [navigate]);

  if (!user) return null;

  const handleLogout = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const nextUser = updateCurrentUser({ profileUrl: reader.result });
      if (nextUser) {
        setUser({ ...fallbackProfile, ...nextUser });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = (event) => {
    event.preventDefault();

    if (!editForm.aboutMe.trim() || !editForm.age.trim() || !editForm.location.trim()) {
      return;
    }

    const nextUser = updateCurrentUser({
      aboutMe: editForm.aboutMe.trim(),
      age: editForm.age.trim(),
      location: editForm.location.trim(),
    });

    if (nextUser) {
      setUser({ ...fallbackProfile, ...nextUser });
      setIsModalOpen(false);
    }
  };

  return (
    <div className="dashboard-shell px-5 py-6 md:px-8">
      <div className="container">
        <header className="dashboard-panel rounded-[32px] px-6 py-5">
          <section className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex items-center gap-4">
              <img className="logo h-[88px] w-[176px]" src="/logo.png" alt="Logo" />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">
                  Personal Dashboard
                </p>
                <h1 className="text-2xl font-black md:text-3xl">{user.name}</h1>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link to="/" className="rounded-full border border-slate-300/40 px-5 py-3 font-semibold transition hover:bg-white/40">
                Portfolio
              </Link>
              <button
                type="button"
                onClick={toggleTheme}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg)]"
                aria-label="Toggle theme"
              >
                <img
                  src={isDark ? "/Sun_mode.svg" : "/Dark_mode.svg"}
                  alt="Mode icon"
                  className="h-6 w-6"
                />
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-3 rounded-full bg-[var(--login-color)] px-6 py-3 font-semibold text-white"
              >
                Logout
                <i className="fa-solid fa-right-from-bracket" />
              </button>
            </div>
          </section>
        </header>

        <main className="mt-8 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-6">
            <section className="dashboard-panel rounded-[32px] p-5">
              <img
                className="h-[320px] w-full rounded-[28px] object-cover"
                src={user.profileUrl || fallbackProfile.profileUrl}
                alt={user.name}
              />

              <label className="mt-5 flex cursor-pointer items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-3 font-semibold text-white transition hover:bg-sky-600">
                Upload Image
                <i className="fa-solid fa-cloud-arrow-up" />
                <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
              </label>
            </section>

            <section className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              <div className="metric-card rounded-[28px] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-600">Role</p>
                <p className="mt-3 text-2xl font-black">Frontend</p>
              </div>
              <div className="metric-card rounded-[28px] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-600">Projects</p>
                <p className="mt-3 text-2xl font-black">Live Portfolio</p>
              </div>
              <div className="metric-card rounded-[28px] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-600">Theme</p>
                <p className="mt-3 text-2xl font-black">{isDark ? "Dark" : "Light"}</p>
              </div>
            </section>
          </aside>

          <section className="space-y-6">
            <section className="dashboard-panel rounded-[32px] px-7 py-8">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-500">Overview</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Hello, {user.name}!</h2>
              <p className="profile-copy mt-5 max-w-3xl text-lg leading-8">
                Bu sahifa endi oddiy profile page emas, balki portfolio ichidagi
                boshqaruv paneli sifatida ishlaydi. Ma&apos;lumotlarni yangilash,
                rasm qo‘shish va shaxsiy brandingni boshqarish shu yerdan amalga oshadi.
              </p>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <article className="dashboard-panel rounded-[32px] px-6 py-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-3xl font-bold">About me</p>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(true)}
                    className="rounded-full bg-[var(--login-color)] px-5 py-3 text-sm font-semibold text-white"
                  >
                    Edit Profile
                  </button>
                </div>
                <p className="profile-copy mt-5 text-lg leading-8">
                  {user.aboutMe || fallbackProfile.aboutMe}
                </p>
              </article>

              <article className="dashboard-panel rounded-[32px] px-6 py-7">
                <p className="text-3xl font-bold">Details</p>
                <div className="mt-5 space-y-5 text-lg">
                  <p>
                    <b>Name:</b>
                    <br />
                    <span>{user.name}</span>
                  </p>
                  <p>
                    <b>Age:</b>
                    <br />
                    <span>{user.age || fallbackProfile.age}</span>
                  </p>
                  <p>
                    <b>Location:</b>
                    <br />
                    <i>{user.location || fallbackProfile.location}</i>
                  </p>
                </div>
              </article>
            </section>

            <section className="dashboard-panel rounded-[32px] px-6 py-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-3xl font-bold">Social Links</p>
                  <p className="profile-copy mt-2 text-base">
                    Ish beruvchilar yoki mijozlar siz bilan shu yerlar orqali bog‘lana oladi.
                  </p>
                </div>
                <div className="flex gap-4 text-3xl">
                  <a href="https://t.me/Jama_9133" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-telegram" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jamshiddin-babajonov-168705382/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin" />
                  </a>
                  <a href="https://github.com/jama050690" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-square-github" />
                  </a>
                </div>
              </div>
            </section>
          </section>
        </main>
      </div>

      {isModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-md rounded-[28px] bg-white p-6 text-slate-900 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-xl text-white"
            >
              &times;
            </button>

            <h3 className="text-2xl font-semibold">Edit Profile</h3>

            <form className="mt-5 space-y-4" onSubmit={handleSave}>
              <label className="block">
                <span className="mb-2 block font-medium">About</span>
                <textarea
                  className="min-h-28 w-full rounded-2xl border border-slate-200 px-4 py-3"
                  value={editForm.aboutMe}
                  onChange={(event) =>
                    setEditForm((current) => ({
                      ...current,
                      aboutMe: event.target.value,
                    }))
                  }
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-medium">Age</span>
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                  value={editForm.age}
                  onChange={(event) =>
                    setEditForm((current) => ({ ...current, age: event.target.value }))
                  }
                />
              </label>

              <label className="block">
                <span className="mb-2 block font-medium">Location</span>
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3"
                  value={editForm.location}
                  onChange={(event) =>
                    setEditForm((current) => ({
                      ...current,
                      location: event.target.value,
                    }))
                  }
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}
