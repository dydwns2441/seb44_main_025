import { useNavigate } from 'react-router-dom';
import Previous from '../../icons/PreviousIcon';
import S from './Header.styled';

const HeaderOnlyP = () => {
  const navigate = useNavigate();
  return (
    <S.Body>
      <S.Nav>
        <S.PreviousS
          onClick={() => {
            navigate(-1);
          }}
        >
          <Previous />
        </S.PreviousS>
      </S.Nav>
    </S.Body>
  );
};

export default HeaderOnlyP;