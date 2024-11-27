import { ConfigProvider, Button, Flex } from "antd";
import { useState, useEffect } from "react";
import { MenuOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import "../styles/Header.scss";

export default function Header({ setIsShow }) {
  Header.propTypes = {
    setIsShow: PropTypes.func,
  };

  const [position, setPosition] = useState(scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const moving = scrollY;
      const isScrollUp = position > moving || position <= 0;
      const isScrollDown = position < moving || position <= innerHeight * 2;

      setVisible(isScrollUp && isScrollDown);
      setPosition(moving);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header className={visible ? "visible" : "hidden"}>
      <Flex align="center" justify="space-between">
        <Button type="link" size="small">
          STREAMUSE
        </Button>
        <Flex
          className="desktop-nav"
          align="center"
          justify="center"
          gap="middle"
        >
          <Button type="link" size="small">
            Главная
          </Button>
          <Button type="link" size="small">
            Кто мы?
          </Button>
          <Button type="link" size="small">
            Почему мы?
          </Button>
          <Button type="link" size="small">
            Road map
          </Button>
          <Button type="link" size="small">
            О нас
          </Button>
          <ConfigProvider
            theme={{
              components: {
                Button: {
                  sizeUnit: 6,
                },
              },
            }}
          >
            <Button className="btn-gradient" type="primary" href="/survey">
              Опрос
            </Button>
            {/* <Button>Подписка</Button> */}
          </ConfigProvider>
        </Flex>
        <Button
          className="mobile-nav"
          type="link"
          icon={<MenuOutlined />}
          onClick={setIsShow}
        />
      </Flex>
    </header>
  );
}
