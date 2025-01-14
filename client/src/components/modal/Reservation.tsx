import { styled } from 'styled-components';
import { ButtonHighlight, ButtonWhite } from '../buttons/Buttons';
import { postReservation } from '../../api/fetchAPI';
import { PerformanceType } from '../../model/Performance';

export default function ReservationModal(
  props: PerformanceType & { closeModal: () => void }
) {
  const body = {
    performanceId: 1,
    seatValue: 5,
  };
  return (
    <S.ModalOverlay>
      <S.TicketModal>
        <S.TicketImg src={props.imageUrl} />
        <S.TicketDetail>
          <S.TicketTitle>{props.title}</S.TicketTitle>
          {/* TODO: 아티스트명 받아오기 */}
          <S.Ticketcontent>아티스트명</S.Ticketcontent>
          <S.Ticketcontent>{props.place}</S.Ticketcontent>
          {/* TODO: 날짜, 숫자 형식 함수 만들기 */}
          <S.Ticketcontent>
            {new Date(props.date).toLocaleString()}
          </S.Ticketcontent>
          <S.Ticketcontent>₩{props.price.toLocaleString()}</S.Ticketcontent>
          <S.TicketMessage>예약하시겠습니까?</S.TicketMessage>
        </S.TicketDetail>
        <S.TicketButtons>
          <ButtonHighlight onClick={() => props.closeModal()}>
            취소
          </ButtonHighlight>
          <ButtonWhite
            onClick={() => {
              postReservation(props?.performanceId, body);
            }}
          >
            예약
          </ButtonWhite>
        </S.TicketButtons>
      </S.TicketModal>
    </S.ModalOverlay>
  );
}

const S = {
  ModalOverlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  TicketModal: styled.div`
    width: 300px;
    height: 500px;
    background-color: var(--font-mid-color);
    transform: translate(-50%, -50%);
    background-color: var(--theme-background-color);
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  `,
  TicketImg: styled.img`
    width: 150px;
    height: 200px;
  `,
  TicketDetail: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  TicketTitle: styled.header`
    font-size: var(--heading6-font-size);
    line-height: var(--heading6-line-height);
    font-weight: var(--heading6-font-weight);
    color: var(--font-white-color);
  `,
  Ticketcontent: styled.p`
    font-size: var(--p-small-medium-font-size);
    font-weight: var(--p-small-medium-font-weight);
    line-height: var(--p-small-medium-line-height);
    color: var(--font-light-white-color);
  `,
  TicketMessage: styled.p`
    margin-top: 20px;
    font-size: var(--heading6-font-size);
    line-height: var(--heading6-line-height);
    font-weight: var(--heading6-font-weight);
    color: var(--font-white-color);
  `,
  TicketButtons: styled.div`
    width: 250px;
    display: flex;
    justify-content: space-evenly;
  `,
};
