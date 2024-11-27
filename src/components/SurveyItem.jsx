import { Typography, Radio, Button, Flex, Space, Input, Checkbox } from "antd";
import { useState } from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import PropTypes from "prop-types";
import gsap from "gsap";
import { useSurveyStore } from "../stores/SurveyStore";

export default function SurveyItem({
  id,
  title,
  answers,
  isMultiple,
  customAnswer,
  isFinal,
  onPrev,
  onNext,
  onSubmit,
}) {
  SurveyItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    answers: PropTypes.array,
    isMultiple: PropTypes.bool,
    customAnswer: PropTypes.string,
    isFinal: PropTypes.bool,
    onPrev: PropTypes.func,
    onNext: PropTypes.func,
    onSubmit: PropTypes.func,
  };

  const refContainer = useRef();
  const [value, setValue] = useState(0);
  const [multiple, setMultiple] = useState([]);
  const [customValue, setCustomValue] = useState("");
  const [tl, setTl] = useState(true);
  const { pushSurvey } = useSurveyStore();

  useGSAP(
    () => {
      const from = "+100vw";
      const to = "-100vw";

      tl
        ? gsap
            .timeline()
            .from(".title", {
              x: from,
            })
            .from(".answers", {
              x: from,
            })
            .from(".btn-container", {
              x: from,
            })
            .duration(1)
        : gsap
            .timeline()
            .to(".title", {
              x: to,
            })
            .to(
              ".answers",
              {
                x: to,
              },
              "-=0.4"
            )
            .to(
              ".btn-container",
              {
                x: to,
              },
              "-=0.5"
            )
            .duration(1);
    },
    { dependencies: [tl], scope: refContainer }
  );

  function handleClick(action) {
    pushSurvey(
      id,
      title,
      customValue === "" ? (value != 0 ? value : multiple) : customValue
    );
    setTl(!tl);
    setTimeout(() => {
      action();
    }, 1000);
  }

  return (
    <Flex
      ref={refContainer}
      className="section survey"
      align="center"
      justify="space-evenly"
      gap={50}
      vertical
    >
      <Typography.Title className="title">{title}</Typography.Title>
      <Radio.Group
        className="answers"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {answers &&
          (isMultiple ? (
            <Checkbox.Group
              style={{
                gap: "19px",
                flexDirection: "column",
              }}
              options={answers.map((item, i) => ({
                label: item,
                value: i + 1,
              }))}
              onChange={setMultiple}
            />
          ) : (
            <Space size="large" direction="vertical">
              {answers.map((item, i) => (
                <Radio key={i} value={i + 1}>
                  {item}
                </Radio>
              ))}
            </Space>
          ))}
        {customAnswer !== undefined && (
          <Flex className="custom-answer" align="center" justify="center">
            <Input.TextArea
              rows={8}
              placeholder="..."
              value={customValue}
              onChange={(e) => setCustomValue(e.target.value)}
            />
          </Flex>
        )}
      </Radio.Group>
      <Flex className="btn-container" align="center" gap={100} justify="center">
        {id !== 0 && <Button onClick={() => handleClick(onPrev)}>Назад</Button>}
        {isFinal ? (
          <Button
            type="primary"
            disabled={value == 0 && customValue === ""}
            onClick={() => handleClick(onSubmit)}
          >
            Отправить
          </Button>
        ) : (
          <Button
            type="primary"
            disabled={value == 0 && multiple.length == 0 && !customValue}
            onClick={() => handleClick(onNext)}
          >
            Далее
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
