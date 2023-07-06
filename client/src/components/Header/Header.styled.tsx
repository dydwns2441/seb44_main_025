import { styled } from 'styled-components';
const S = {
  Body: styled.body`
    display: flex;
    justify-content: center;
  `,
  Nav: styled.nav`
    width: 390px;
    height: 50px;
    background-color: var(--theme-background-color);
    border-bottom: 2px solid var(--button-white-border-color);
    padding: 0px 12px 0px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Div: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60px;
  `,
  PreviousS: styled.div`
    cursor: pointer;
  `,
  SearchS: styled.div`
    cursor: pointer;
  `,
  TicketS: styled.div`
    cursor: pointer;
  `,
};

export default S;
