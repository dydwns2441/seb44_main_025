import S from './MyPage.style';
import { styled } from 'styled-components';
import Header from '../../components/header/Header';
import {
  ButtonPrimary75px,
  ButtonWithArrowDark,
} from '../../components/buttons/Buttons';
import EditIcon from '../../icons/EditIcon';
import Concertpreview from '../../components/concert-preview/ConcertPreview';
import ArtistreviewContainer from '../../components/artist/artistreviewcontainer';
import Review from '../../components/review/Review';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/nav/Navbar';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { removeCookie, getCookie } from '../../utils/Cookie';
import {
  useGetMember,
  useGetMemberPerformance,
  useGetMemberPerformanced,
  useGetMemberReview,
} from '../../api/useFetch';
import { H1Title } from '../../utils/SlideUp';

export default function Mypage() {
  const navigate = useNavigate();
  const { memberId } = useParams();
  const memberData = useGetMember();
  const reservationData = useGetMemberPerformance(memberId);
  const pastReservationData = useGetMemberPerformanced(memberId);
  const reviewData = useGetMemberReview(memberId);

  /** 로그아웃 및 main으로 페이지 이동 */
  const logoutHandler = () => {
    removeCookie('accessToken');
    removeCookie('refreshToken');
    removeCookie('userInfo');
    alert('[로그아웃 성공] 로그아웃 되었습니다');
    navigate('/');
  };

  return (
    <>
      <Header />
      <S.Main>
        <S.Section>
          <S.Title>
            <H1Title.H1span>마이페이지</H1Title.H1span>
          </S.Title>

          <S.ButtonWarppar>
            <ButtonPrimary75px onClick={logoutHandler}>
              로그아웃
            </ButtonPrimary75px>
          </S.ButtonWarppar>
          <S.SubTitleWrappar>
            <S.SubTitle>나의 정보</S.SubTitle>
            <S.UserEditButtonWrappar>
              <Link to="/editmypage">
                <EditIcon />
              </Link>
            </S.UserEditButtonWrappar>
          </S.SubTitleWrappar>
          <S.ProfileWarppar>
            <S.UserDetail>
              <S.UserNickname>{memberData?.email}</S.UserNickname>
              <S.UserNickname>{memberData?.nickname}</S.UserNickname>
            </S.UserDetail>
          </S.ProfileWarppar>
          {/* 아티스트 미등록 사용자는 아티스트 등록 버튼 */}
          {/* 아티스트를 등록한 사용자는 아티스트 페이지 버튼 */}
          {memberData?.hasArtist === true ? (
            <S.ButtonWarppar>
              <Link
                to={`/artist/${getCookie('userInfo').artistId}`}
                style={{ textDecoration: 'none' }}
              >
                <ButtonWithArrowDark
                  text={'아티스트 페이지'}
                ></ButtonWithArrowDark>
              </Link>
            </S.ButtonWarppar>
          ) : (
            <S.ButtonWarppar>
              <Link to="/artistregist" style={{ textDecoration: 'none' }}>
                <ButtonWithArrowDark
                  text={'아티스트 등록'}
                ></ButtonWithArrowDark>
              </Link>
            </S.ButtonWarppar>
          )}
          <S.SubTitle>예약 중인 공연</S.SubTitle>
          {reservationData ? (
            reservationData.map(reservationData => {
              return (
                <Concertpreview
                  performanceId={reservationData.performanceId}
                  key={reservationData.performanceId}
                  posterImg={reservationData.imageUrl}
                  title={reservationData.title}
                  artistName={reservationData.artistName}
                  category={reservationData.category}
                  price={reservationData.price}
                  date={reservationData.date}
                />
              );
            })
          ) : (
            <S.EmptyContainer>
              <S.EmptyWrapper>
                <S.EmptyTitle>현재 예약중인 공연이 없습니다.</S.EmptyTitle>
                <ConcertEmptyButton>
                  <ButtonWithArrowDark text="공연예약"></ButtonWithArrowDark>
                </ConcertEmptyButton>
              </S.EmptyWrapper>
            </S.EmptyContainer>
          )}

          <S.SubTitle>내가 관람한 공연</S.SubTitle>
          <S.ArtistreviewContainerWrappar>
            {pastReservationData ? (
              pastReservationData.map(pastReservationData => {
                return (
                  <ArtistreviewContainer
                    key={pastReservationData?.performanceId}
                    imageUrl={pastReservationData?.imageUrl}
                    content="후기등록"
                  />
                );
              })
            ) : (
              <S.EmptyContainer>
                <S.EmptyWrapper>
                  <S.EmptyTitle>아직 관람한 공연이 없습니다.</S.EmptyTitle>
                  <ConcertEmptyButton>
                    <ButtonWithArrowDark text="공연예약"></ButtonWithArrowDark>
                  </ConcertEmptyButton>
                </S.EmptyWrapper>
              </S.EmptyContainer>
            )}
          </S.ArtistreviewContainerWrappar>
          <S.MyreviewContainer>
            <S.SubTitle>내가 작성한 후기</S.SubTitle>
            {reviewData ? (
              reviewData.map(reviewData => {
                return (
                  <S.ReviewWrapper key={reviewData?.memberId}>
                    <Review
                      nickname={reviewData?.nickName}
                      createdAt={reviewData?.createdAt}
                      reviewTitle={reviewData?.reviewTitle}
                      content={reviewData?.content}
                    />
                  </S.ReviewWrapper>
                );
              })
            ) : (
              <S.EmptyContainer>
                <S.EmptyWrapper>
                  <S.EmptyTitle>아직 관람한 공연이 없습니다.</S.EmptyTitle>
                  <ConcertEmptyButton>
                    <ButtonWithArrowDark text="공연예약"></ButtonWithArrowDark>
                  </ConcertEmptyButton>
                </S.EmptyWrapper>
              </S.EmptyContainer>
            )}
          </S.MyreviewContainer>
          <Footer />
        </S.Section>
      </S.Main>
      <Navbar />
    </>
  );
}

const ConcertEmptyButton = styled(S.ButtonWarppar)`
  display: flex;
  align-self: flex-end;
  padding-bottom: 5px;
`;
