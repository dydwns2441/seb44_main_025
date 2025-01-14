import SearchIcon from '../../icons/SearchIcon';
import TicketIcon from '../../icons/TicketIcon';
import { useNavigate } from 'react-router-dom';
import PreviousIcon from '../../icons/PreviousIcon';
import { Styled_Header } from './Header.styled';
import NoTicketModal from '../modal/NoTicket';
import TicketModal from '../modal/Ticket';
import { isStyledComponent } from 'styled-components';
import { useState } from 'react';

interface OwnProps {
  precious?: boolean;
}

const Header = ({ precious }: OwnProps) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => {
    setIsOpen(true);
  };
  const handleModalClose = () => {
    setIsOpen(false);
  };
  const handleModalClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      handleModalClose();
    }
  };

  return (
    <>
      <Styled_Header.Header>
        <Styled_Header.Nav>
          {precious ? (
            <Styled_Header.PreviousS
              onClick={() => {
                navigate(-1);
              }}
            >
              <PreviousIcon />
            </Styled_Header.PreviousS>
          ) : (
            <>
              <span style={{ color: 'white' }}>로고들어갈자리</span>
              <Styled_Header.Div>
                <Styled_Header.SearchS>
                  <SearchIcon />
                </Styled_Header.SearchS>
                <Styled_Header.TicketS onClick={handleModalOpen}>
                  <TicketIcon />
                </Styled_Header.TicketS>
              </Styled_Header.Div>
            </>
          )}
        </Styled_Header.Nav>
      </Styled_Header.Header>
      {/* 멤버가 예약한 공연이 있으면 */}
      {isOpen && <NoTicketModal onClick={handleModalClick} />}
    </>
  );
};

export default Header;
