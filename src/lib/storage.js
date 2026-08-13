import { translate } from "../i18n/translations";

export const MODE_KEY = "mode";
export const LANG_KEY = "lang";
export const USERS_KEY = "users";
export const LOGGED_USER_KEY = "logged_in_user";

function defaultUserFields() {
  return {
    aboutMe: translate(getInitialLanguage(), "profile.defaultAboutMe"),
    age: "35",
    location: "Toshkent shahar, Chilonzor tumani, 8-mavze, 22-uy",
    profileUrl: "/photo_2025-11-21_19-33-24.jpg",
  };
}

export function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function upsertUser(user) {
  const users = getUsers();
  const nextUsers = users.some((item) => item.email === user.email)
    ? users.map((item) => (item.email === user.email ? user : item))
    : [...users, user];

  saveUsers(nextUsers);
  return user;
}

export function createUser(payload) {
  const users = getUsers();
  const existingUser = users.find((user) => user.email === payload.email);

  if (existingUser) {
    return {
      ok: false,
      messageKey: "auth.userExists",
    };
  }

  const user = {
    id: crypto.randomUUID(),
    ...defaultUserFields(),
    ...payload,
  };

  saveUsers([...users, user]);

  return { ok: true, user };
}

export function loginUser(email, password) {
  const users = getUsers();
  const user = users.find((item) => item.email === email);

  if (!user) {
    return { ok: false, messageKey: "auth.userNotFound" };
  }

  if (user.password !== password) {
    return {
      ok: false,
      messageKey: "auth.wrongPassword",
    };
  }

  localStorage.setItem(LOGGED_USER_KEY, user.email);
  return { ok: true, user };
}

export function logoutUser() {
  localStorage.removeItem(LOGGED_USER_KEY);
}

export function getLoggedInUser() {
  const email = localStorage.getItem(LOGGED_USER_KEY);
  if (!email) return null;
  return getUsers().find((user) => user.email === email) || null;
}

export function updateCurrentUser(patch) {
  const currentUser = getLoggedInUser();
  if (!currentUser) return null;

  const nextUser = { ...currentUser, ...patch };
  upsertUser(nextUser);
  return nextUser;
}

export function getInitialTheme() {
  return localStorage.getItem(MODE_KEY) === "true";
}

export function saveTheme(isDark) {
  localStorage.setItem(MODE_KEY, String(isDark));
}

export function getInitialLanguage() {
  return localStorage.getItem(LANG_KEY) === "en" ? "en" : "uz";
}

export function saveLanguage(lang) {
  localStorage.setItem(LANG_KEY, lang);
}
