import { useState } from "react";
import { Progress, Result, Button, Flex, Spin } from "antd";
import {
  CheckOutlined,
  LoadingOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { surveyData } from "../constants/SurveyData";
import { useSurveyStore } from "../stores/SurveyStore";
import SurveyItem from "./SurveyItem";

export default function SurveyList() {
  const [selected, setSelected] = useState(0);
  const [percent, setPercent] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const { isLoading, isError, sendSurvey } = useSurveyStore();

  const colors = {
    "0%": "#5100a1",
    "100%": "#67317a",
  };

  function handlePrev() {
    setPercent((prev) => ((prev -= 100 / surveyData.length) < 0 ? 0 : prev));
    setSelected((prev) => --prev);
  }

  function handleNext() {
    setPercent((prev) =>
      (prev += 100 / surveyData.length) > 100 ? 100 : prev
    );
    setSelected((prev) => ++prev);
  }

  function handleSubmit() {
    setPercent((prev) =>
      (prev += 100 / surveyData.length) > 100 ? 100 : prev
    );
    setIsSubmit(true);
    sendSurvey();
  }

  return (
    <>
      <Progress
        className="progress"
        showInfo={false}
        percent={percent}
        strokeColor={colors}
        strokeLinecap="square"
        size={["", 5]}
      />
      {isSubmit &&
        (isLoading == true ? (
          isError ? (
            <Flex className="section" align="center" justify="center">
              <Result
                icon={<CloseOutlined style={{ color: "#67317a" }} />}
                status="error"
                title="Что то пошло не так"
                extra={[
                  <Button key="Home" href="/">
                    На главную
                  </Button>,
                  <Button key="Try" type="primary" onClick={handleSubmit}>
                    Повторить
                  </Button>,
                ]}
              />
            </Flex>
          ) : (
            <Flex className="section" align="center" justify="center">
              <Result
                icon={<CheckOutlined style={{ color: "#67317a" }} />}
                status="success"
                title="Спасибо за участие в опросе!"
                extra={[
                  <Button key="Home" type="primary" href="/">
                    На главную
                  </Button>,
                ]}
              />
            </Flex>
          )
        ) : (
          <Flex align="center" justify="center">
            <Spin indicator={<LoadingOutlined spin />} size="large" />
          </Flex>
        ))}
      {surveyData.map(
        (item, i) =>
          selected === i && (
            <SurveyItem
              key={i}
              id={i}
              title={item.question}
              answers={item.answers}
              isMultiple={item.isMultiple}
              customAnswer={item.customAnswer}
              isFinal={surveyData.length - 1 === i}
              onPrev={handlePrev}
              onNext={handleNext}
              onSubmit={handleSubmit}
            />
          )
      )}
    </>
  );
}
