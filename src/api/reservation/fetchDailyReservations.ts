import apiClient from "../core/apiClient";
import errorHandler from "../core/errorHandler";

export default async function fetchDailyReservations(day: string) {
  try {
    const response = await apiClient.get(
      "/api/reservation/getDailyReservations",
      {
        params: { day },
      }
    );
    return response.data;
  } catch (error: unknown) {
    const errorMessage = errorHandler(error);
    throw new Error(errorMessage);
  }
}
