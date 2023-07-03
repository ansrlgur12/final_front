import React, { useContext, useEffect, useState } from "react";
import { MarkerContext } from "../../context/MarkerInfo";
import styled from "@emotion/styled";
import Header from "../../main/header";
import SmallKakaoMap from "./SmallKakao";

const WriteContainer = styled.div`
    margin-left: 5vw;
`;
  
const Option = styled.div`
  margin: 5vw;
  label {
    margin-right: 0.5em;
  }
`;

const Radio = styled.div`
  margin: 1vw;

  label {
    margin-right: 0.5em;
  }
`;

const TextInput = ({ label }) => (
  <Option>
    <label>{label} : </label>
    <input type="text" />
  </Option>
);

const SelectInput = ({ label, options }) => (
  <Option>
    <label>{label} : </label>
    <select name="" id="">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </Option>
);

const WriteNewMarker = () => {
  const context = useContext(MarkerContext);
  const { isLatlng } = context;
  const [selectedRadios, setSelectedRadios] = useState([]); // 선택된 라디오 버튼의 상태를 저장할 배열


  const radioOptions = [
    "주변 수돗물",
    "주변 개수대",
    "승용차 출입",
    "주변 공중화장실",
    "소형 트레일러 접근가능",
    "캠핑카 접근가능",
    "카라반 접근가능",
    "등산로",
    "주변 전기",
    "주변 물놀이",
  ];

  useEffect(() => {
    console.log(isLatlng.La);
    console.log(selectedRadios);
  }, [isLatlng, selectedRadios]);

  function handleRadioChange(option) {
    if (selectedRadios.includes(option)) {
      // 이미 선택된 상태인 경우 선택 해제
      setSelectedRadios((prevSelected) =>
        prevSelected.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      // 선택되지 않은 상태인 경우 선택 추가
      setSelectedRadios((prevSelected) => [...prevSelected, option]);
    }
  }

  return (
    <>
      <Header />
      <WriteContainer>
        <h2>캠핑 마커 신청하기</h2>
        <Option>
          <TextInput label="스팟 이름" />
        </Option>
        <Option>
          <SelectInput label="야영 난이도" options={[1, 2, 3, 4, 5]} />
        </Option>
        {radioOptions.map((option) => (
        <Radio key={option}>
          <label>
            {option}
            <input
              type="checkbox"
              checked={selectedRadios.includes(option)} // 선택된 상태인지 확인
              onChange={() => handleRadioChange(option)} // 선택 상태 업데이트
            />
          </label>
        </Radio>
      ))}
        <Option>
          <h2>위치 설정</h2>
          <div className="App">
            <div id="wrap" style={{ width: "40vw", height: "40vw" }}>
              <SmallKakaoMap />
              <p>취소하려면 마커를 한번 더 클릭해 주세요</p>
            </div>
          </div>
        </Option>
        <Option>
          <p>선택한 좌표</p>
          <p>{isLatlng.La}</p>
          <p>{isLatlng.Ma}</p>
        </Option>
        <Option>
          <label>스팟 소개 : </label>
          <input type="text" />
        </Option>
        <button>등록</button>
      </WriteContainer>
    </>
  );
};

export default WriteNewMarker;
