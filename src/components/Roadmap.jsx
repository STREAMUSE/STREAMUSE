import { Flex, Typography } from "antd";
import RoadmapItem from "../widgets/RoadmapItem";
import "../styles/Roadmap.scss";

export default function Roadmap() {
  return (
    <Flex vertical align="center" justify="center">
      <Typography.Title>Roadmap</Typography.Title>
      <div className="line-h" />
      <div className="line-v" />
      <RoadmapItem title={"fdsfds"} />
      <div className="line-v" />
      <RoadmapItem title={"fdsfds"} />
    </Flex>
  );
}
