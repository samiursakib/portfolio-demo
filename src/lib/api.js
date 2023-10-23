export const sendContactForm = async (data) => {
  await fetch("/api/send", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  });
}