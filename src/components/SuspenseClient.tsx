export default async function SuspenseClientComponent() {
  const fetchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return "Server: 데이터 로드 완료!";
  };

  const data = await fetchData();
  return <div>{data}</div>;
}
