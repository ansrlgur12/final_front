import React, { useContext, useEffect, useState } from "react";
import { MarkerContext } from "../../context/MarkerInfo";
import styled from "@emotion/styled";
import Header from "../../main/header";
import SmallKakaoMap from "./SmallKakao";
import LocationSelect from "./locationSelect";
import AxiosApi from "../../API/TestAxios";
import { storage } from '../../firebase/firebaseConfig';

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
  const [dho, setDho] = useState('ALL');
  const [sigungu, setSigungu] = useState('시.군.구');
  const [spotNm, setSpotNm] = useState("");
  const [spotDiff, setSpotDiff] = useState(1);
  const [spotDesc, setSpotDesc] = useState("");
  const [mapX, setMapX] = useState("");
  const [mapY, setMapY] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [downloadUrls, setDownloadUrls] = useState([]);
  const selectedRadiosString = selectedRadios.join(', ');
  const selectedUrlsString = downloadUrls.join(', ');
  const addr1 = `${dho} ${sigungu}`;

  const handleDhoChange = (event) => {
    setDho(event.target.value);
    setSigungu("시.군.구")
  };

    const handleSigunguChange = (event) => {
    setSigungu(event.target.value);
    };

    const handleResetClick = () => {
        setDho("ALL");
        setSigungu("시.군.구");
    }

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
    setMapY(isLatlng.Ma);
    setMapX(isLatlng.La);
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
  const onChangeSpotNm = (e) => {
    setSpotNm(e.target.value);
  }
  const onChangeDiff = (e) => {
    setSpotDiff(e.target.value);
  }
  const onChangeSpotDesc = (e) => {
    setSpotDesc(e.target.value);
  }
  const onClickSubmit = () => {
    console.log("넘길 자료들");
    console.log(mapX);
    console.log(mapY);
    console.log(selectedRadiosString);
    console.log(dho);
    console.log(sigungu);
    console.log(spotNm);
    console.log(spotDiff);
    console.log(spotDesc);
    console.log(addr1);
    console.log(selectedUrlsString);
    submit();
  }
  const submit = async() => {
    const rsp = await AxiosApi.onojiCampData(mapX, mapY, selectedRadiosString, dho, sigungu, spotNm, spotDiff, spotDesc, addr1, selectedUrlsString);
    console.log(rsp)
    if(rsp.request.status === 200){
        console.log("정상등록되었습니다.")
    }
    else{
        console.log("등록 실패")
    }
  }

  const handleFileChange = (event) => {
    const files = event.target.files;
    const filesArray = Array.from(files);
    setSelectedFiles([...selectedFiles, ...filesArray]);
  };

  const handleUpload = async () => {
    try {
      const uploadPromises = selectedFiles.map(async (file) => {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        return fileRef.getDownloadURL();
      });

      const urls = await Promise.all(uploadPromises);
      setDownloadUrls(urls);
    } catch (error) {
      console.log(error);
      throw new Error('이미지 업로드에 실패하였습니다.');
    }
  };
  return (
    <>
      <Header />
      <WriteContainer>
        <h2>캠핑 마커 신청하기</h2>
        <Option>
          <label>스팟 이름 : </label>
          <input type="text" onChange={onChangeSpotNm}/>
        </Option>
        <Option>
          <label>야영 난이도</label>
          <select value={spotDiff} onChange={onChangeDiff}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </Option>
        <Option>
        <LocationSelect dho={dho} sigungu={sigungu} onDhoChange={handleDhoChange} onSigunguChange={handleSigunguChange} onResetClick={handleResetClick} />
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
          <input type="text" onChange={onChangeSpotDesc}/>
        </Option>
        <Option>
            <div>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload}>등록</button>
            </div>
            <div className="preview-container">
                {selectedFiles.map((file) => (
                <img
                    key={file.name}
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    style={{ maxWidth: "200px", maxHeight: "200px" }}
                    className="preview-image"
                />
                ))}
            </div>
        </Option>
        <button onClick={onClickSubmit}>등록</button>
      </WriteContainer>
    </>
  );
};

export default WriteNewMarker;
