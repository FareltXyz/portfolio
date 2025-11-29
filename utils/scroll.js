export const ScollToSection = (id) => {
    if (typeof document !== "undefined") {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }
}