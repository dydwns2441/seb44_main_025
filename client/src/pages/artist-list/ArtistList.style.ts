import { styled } from 'styled-components';

export const Heading1 = styled.h1`
  margin-right: auto;
  margin-left: 15px;
  color: white;
  font-size: var(--heading1-font-size);
  font-weight: var(--heading1-font-weight);
  line-height: var(--heading1-line-height);
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
`;
export const Main = styled.main`
  width: 390px;
  min-height: calc(100vh - 100px);
  background-color: var(--theme-background-color);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const TitleButtonFlex = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  & > h1 {
    margin-left: 0;
  }
  & > button {
    stroke: white;
    cursor: pointer;
  }
`;
export const CategoryContainer = styled.div`
  margin-top: 20px;
  display: flex;
  min-width: 360px;
  justify-content: flex-start;
  align-items: center;
  & > button:not(:first-child) {
    margin-left: 13px;
  }
  & > button {
    min-width: 40px;
    padding: 0px 5px;
    width: fit-content;
  }
`;
export const ButtonContainer = styled.div`
  min-width: 360px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
`;
export const ArtistContainer = styled.div`
  width: 360px;
  & div {
    margin: 8px 0px;
  }
`;
