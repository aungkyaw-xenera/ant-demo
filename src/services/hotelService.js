export const fetchHotels = async () => {
  const res = await fetch("http://localhost:5000/hotels");
  return res.json();
};