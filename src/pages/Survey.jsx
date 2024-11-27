import { ConfigProvider } from "antd";
import SurveyList from "../components/SurveyList";
import "../styles/Survey.scss";

export default function Survey() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            sizeUnit: 8,
          },
          Input: {
            colorText: "#ffffff",
            colorTextPlaceholder: "#ffffff",
            colorBgContainer: "#2e2e2e",
          },
        },
      }}
    >
      <SurveyList />
    </ConfigProvider>
  );
}
