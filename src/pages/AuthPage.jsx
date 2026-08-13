import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser, loginUser } from "../lib/storage";
import { useLanguage } from "../hooks/LanguageContext";

export default function AuthPage({ mode }) {
  const isRegister = mode === "register";
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [messageKey, setMessageKey] = useState("");

  const authBenefits = [t("auth.benefit1"), t("auth.benefit2"), t("auth.benefit3")];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageKey("");

    if (!form.email.trim() || !form.password.trim() || (isRegister && !form.name.trim())) {
      setMessageKey("auth.fillAllFields");
      return;
    }

    if (isRegister) {
      const result = createUser({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password.trim(),
      });

      if (!result.ok) {
        setMessageKey(result.messageKey);
        return;
      }

      navigate("/login");
      return;
    }

    const result = loginUser(form.email.trim(), form.password.trim());

    if (!result.ok) {
      setMessageKey(result.messageKey);
      return;
    }

    navigate("/profile");
  };

  return (
    <div className="auth-shell px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto grid min-h-[calc(100vh-32px)] max-w-6xl overflow-hidden rounded-[40px] bg-white/8 auth-card lg:grid-cols-[1.05fr_0.95fr]">
        <section className="hidden flex-col justify-between bg-slate-950/30 px-8 py-10 text-white lg:flex">
          <div>
            <p className="text-sm uppercase tracking-[0.45em] text-cyan-300">
              {t("auth.secureAccess")}
            </p>
            <h1 className="mt-6 max-w-md text-5xl font-black leading-tight">
              {isRegister ? t("auth.createIdentity") : t("auth.welcomeBack")}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-200">
              {t("auth.sidePanelDesc")}
            </p>
          </div>

          <div className="space-y-4">
            {authBenefits.map((item) => (
              <div key={item} className="rounded-[28px] bg-white/10 px-5 py-4 backdrop-blur">
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex items-center justify-center bg-white/90 px-5 py-8 text-slate-900 md:px-8">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <Link
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
                to="/"
              >
                <i className="fa-solid fa-arrow-left" />
                {t("auth.backToPortfolio")}
              </Link>
              <p className="mt-6 text-sm uppercase tracking-[0.35em] text-teal-700">
                {t("auth.portfolioAccess")}
              </p>
              <h2 className="mt-3 text-4xl font-black">
                {isRegister ? t("auth.createAccount") : t("auth.signIn")}
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-500">
                {isRegister ? t("auth.registerDesc") : t("auth.loginDesc")}
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {isRegister ? (
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-600">
                    {t("auth.nameLabel")}
                  </span>
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("auth.namePlaceholder")}
                  />
                </label>
              ) : null}

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-600">
                  {t("auth.emailLabel")}
                </span>
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("auth.emailPlaceholder")}
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-600">
                  {t("auth.passwordLabel")}
                </span>
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder={t("auth.passwordPlaceholder")}
                />
              </label>

              {messageKey ? (
                <div className="rounded-2xl bg-amber-50 px-4 py-3 text-sm text-amber-700">
                  {t(messageKey)}
                </div>
              ) : null}

              <button
                className="w-full cursor-pointer rounded-2xl bg-slate-950 px-4 py-3 font-semibold text-white transition hover:bg-slate-800"
                type="submit"
              >
                {isRegister ? t("auth.createAccountBtn") : t("auth.loginBtn")}
              </button>

              <p className="text-center text-sm text-slate-500">
                {isRegister ? t("auth.hasAccount") : t("auth.noAccount")}{" "}
                <Link
                  className="font-semibold text-teal-700 underline-offset-4 hover:underline"
                  to={isRegister ? "/login" : "/register"}
                >
                  {isRegister ? t("auth.loginLink") : t("auth.registerLink")}
                </Link>
              </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
