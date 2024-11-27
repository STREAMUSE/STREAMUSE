import { Flex, Typography } from "antd";
import propTypes from "prop-types";
import roadmap_circle from "../assets/roadmap-circle.svg";
import "../styles/RoadmapItem.scss";

export default function RoadmapItem({ title }) {
  RoadmapItem.propTypes = {
    title: propTypes.string,
  };

  return (
    <Flex className="roadmap-item" align="center" justify="center">
      <img src={roadmap_circle} />
      <Typography.Text className="roadmap-item-title">{title}</Typography.Text>
    </Flex>
  );
}
