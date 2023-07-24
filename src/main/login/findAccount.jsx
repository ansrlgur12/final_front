import React, { useState } from 'react';
import styled from 'styled-components';
import AxiosApi from '../../API/TestAxios';
import { Modal, Button, Input } from 'antd';
import { Link, unstable_HistoryRouter } from 'react-router-dom';
import introLogo from "../../images/CAMO로고.png"
import { Refresh } from '@mui/icons-material';

const FindAccountStyle = styled.div`
    box-sizing: border-box;
    background-color: #FFFFFF;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .accountCtn{
        width: 320px;
        margin: 0 auto;
        padding: 20px;
        background-color: #f2f2f2;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .logo{
        width: 100%;
        height: 100px;
        background-size: contain;
    }
    .findForm * {
        box-sizing: border-box;
        margin: 5px;
    }
    .form-group {
        display: flex;
        flex-direction: column;
    }
    .textInput {
        width: 100%;
        height: 2rem;
        border: 1px solid #ccc;
        border-radius: 3px;
    }
    .submitBtn {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .submitBtn button{
        width: 120px;
        height: 40px;
        padding: 10px 15px;
        background-color: #2D6247;
        color: #fff;
        border: none;
        border-radius: 3px;
        text-align: center;
        cursor: pointer;
        white-space: nowrap
    }
    .submitBtn button:hover {
        background-color: #45a049;
    }
`

const StyledButton = styled.button`
    width: 120px;
    height: 30px;
    padding: 20px 15px;
    background-color: #2D6247;
    color: #fff;
    border: none;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    margin-right: 10px;
    font-size: 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    &:hover {
        background-color: #45a049;
    }
`;

const StyledLink = styled(Link)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 30px;
    padding: 20px 15px;
    background-color: #2D6247;
    color: #fff;
    text-align: center;
    text-decoration: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        background-color: #45a049;
    }
`;

const FindAccount = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    const logo = {
        backgroundImage : `url(${introLogo})`,
        backgroundSize : 'contain',
        backgroundRepeat: 'no-repeat',
    };

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async() => {
        try {
            const response = await AxiosApi.newPassEmail(email);
            console.log(response)
            if (response.status === 200) {
                setModalVisible(true);
            }
        } catch (error) {
            alert("이메일 전송 중 오류가 발생했습니다. 다시 시도해주세요.");
        }
    };
    const backAccount = () => {
        window.location.reload();
    }

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            <FindAccountStyle>
                <div className="accountCtn">
                    <div className="logo" style={logo}></div>
                    <div className="findForm">
                        <div className="form-group">
                            <label htmlFor="username">닉네임:</label>
                            <Input
                                type="text"
                                value={userName}
                                onChange={handleUserNameChange}
                                required
                                className='textInput'
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">이메일:</label>
                            <Input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                                className='textInput'
                            />
                        </div>
                        <div className="submitBtn">
                            <StyledButton onClick={handleSubmit}>찾기</StyledButton>
                            <StyledLink onClick={backAccount}>뒤로 가기</StyledLink>
                        </div>
                    </div>
                </div>
                <Modal
                    visible={modalVisible}
                    onCancel={closeModal}
                    footer={null}
                >
                    <h3>찾기 완료</h3>
                    <p>임시 비밀번호가 이메일로 전송되었습니다.</p>
                    <StyledLink to="/intro" onClick={closeModal}>확인</StyledLink>
                </Modal>
            </FindAccountStyle>
        </>
    );
};

export default FindAccount;
