import { Layout } from "./components/Layout";
import "./App.css";

/**
 * App 컴포넌트
 * - 전체 애플리케이션의 루트 컴포넌트
 * - Layout으로 모든 페이지를 감싸서 일관된 구조 유지
 */
function App() {
  return (
    <Layout showHeader={true} showFooter={true}>
      {/* 메인 콘텐츠 영역 */}
      <div className="space-y-8">
        {/* 히어로 섹션 */}
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to TRENDNARC
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Discover and analyze the latest trends in real-time
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-200">
            Get Started
          </button>
        </section>

        {/* 기능 소개 섹션 */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Real-time Analytics", desc: "Get instant insights" },
              { title: "Data Visualization", desc: "Beautiful charts" },
              { title: "Easy Integration", desc: "Simple API" },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg shadow p-6"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default App;
