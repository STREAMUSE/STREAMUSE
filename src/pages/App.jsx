import { ConfigProvider, Typography, Button, Flex } from "antd";
import { useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import WallParallax from "../components/WallParallax";
// import Roadmap from "../components/Roadmap";
import "../styles/App.scss";

export default function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Header setIsShow={() => setIsShow(!isShow)} />
      <Menu isShow={isShow} setIsShow={() => setIsShow(!isShow)} />
      <Flex
        className="section parallax"
        vertical
        align="center"
        justify="center"
        gap="large"
      >
        <WallParallax />
        <div className="circle" />
        <ConfigProvider
          theme={{
            token: {
              fontSize: 24,
            },
            components: {
              Button: {
                algorithm: false,
              },
            },
          }}
        >
          <Typography.Title>STREAMUSE</Typography.Title>
        </ConfigProvider>
        <ConfigProvider
          theme={{
            components: {
              Button: {
                sizeUnit: 8,
              },
            },
          }}
        >
          <Button type="primary" size="large" href="/survey">
            Опрос
          </Button>
        </ConfigProvider>
      </Flex>
      {/* <Roadmap />
      <Flex className="section" align="center" justify="center" gap="large">
				<Button size="large">gfg</Button>
			</Flex>
			<Flex className="section" align="center" justify="center" gap="large">
				<Button size="large">gfg</Button>
			</Flex> */}
    </>
  );
}
