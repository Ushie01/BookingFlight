export const getFlightByLocation = async (payload) => {
  try {
    const response = await fetch(
      "https://booking-com15.p.rapidapi.com/api/v1/flights/searchDestination",
      {
        method: "GET",
        params: { query: payload },
        headers: {
          "X-RapidAPI-Key":
            "d9dfbd2b30mshd1fb113fbbc301ep1fb14djsn7b419ddfb617",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    data.statusCode = response.status;
    return data;
  } catch (error) {
    console.error("An error occurred during the API request:", error);
    return { statusCode: 500, error: "Internal Server Error" };
  }
};
