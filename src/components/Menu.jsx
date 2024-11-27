import { Button, Flex } from "antd";
import PropTypes from "prop-types";
import "../styles/Menu.scss";

export default function Menu({ isShow, setIsShow }) {
  Menu.propTypes = {
    isShow: PropTypes.bool,
    setIsShow: PropTypes.func,
  };

  return (
    <>
      <section className={isShow ? "menu" : "menu-hide"}>
        <Flex className="block" vertical justify="space-between">
          <Flex vertical align="flex-end" gap="small">
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
              Roadmap
            </Button>
            <Button type="link" size="small">
              О нас
            </Button>
          </Flex>
          <Flex vertical gap="small">
            <Button
              className="btn-gradient"
              type="primary"
              href="/survey"
              block
            >
              Опрос
            </Button>
            {/* <Button block>Подписка</Button> */}
          </Flex>
        </Flex>
      </section>
      <div className={isShow ? "bg" : "bg-hide"} onClick={setIsShow} />
    </>
  );
}
