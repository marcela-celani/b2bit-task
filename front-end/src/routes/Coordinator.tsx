type NavigateFunction = (path: string) => void;

export const goToLogin = (navigate: NavigateFunction) => {
  navigate("/");
};

export const goToProfile = (navigate: NavigateFunction) => {
  navigate("/profile");
};

export const goToError = (navigate: NavigateFunction) => {
  navigate("*");
};
