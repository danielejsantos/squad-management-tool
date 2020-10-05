import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background-image: linear-gradient(230deg, #532d8c 0%, #f2295b 100%);
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px -2px #888888;

  @media (max-width: 1280px) {
    display: flex;
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 40px;
    height: 40px;
    margin-left: 40px;

    @media (max-width: 1280px) {
      margin-left: 20px;
    }
  }

  > span {
    color: #fff;
    font-weight: bold;
    margin-left: 15px;

    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;

  > span {
    color: #fff;
    font-size: 13px;
    margin-right: 5px;

    @media (max-width: 400px) {
      display: none;
    }
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #f6f6f6;
  margin-right: 40px;

  @media (max-width: 1280px) {
    margin-right: 20px;
  }

  > span {
    color: #2b2b2b;
    font-weight: bold;
    font-size: 15px;
  }
`;
