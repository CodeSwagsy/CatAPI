export async function getData(url) {
  let headersList = {
    "x-api-key":
      "live_3DeYXwBNGf2qUPxJuHlpBZnI0e93JVgUXtEmJ26o1DvkMU12M46DUmVwviO4RdH0",
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headersList,
    });

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}
