import SuspenseClientComponent from "@/components/SuspenseClient";

const SuspensePage = async () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">서버 및 클라이언트 컴포넌트</h1>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">서버 컴포넌트</h2>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-semibold">클라이언트 컴포넌트</h2>

        <SuspenseClientComponent />
      </div>
    </div>
  );
};

export default SuspensePage;
