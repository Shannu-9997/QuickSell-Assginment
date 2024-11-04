export const getTickets = async () => {
  const response = await fetch(
    "https://api.quicksell.co/v1/internal/frontend-assignment"
  );
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  return response.json();
};
