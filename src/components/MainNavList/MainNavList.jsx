import { NavList, StyledLink } from './MainNavList.styled';

const MainNavList = () => {
  return (
    <NavList>
      <li>
        <StyledLink to={'/'} title="Home">
          <span>Home</span>
        </StyledLink>
      </li>
      <li>
        <StyledLink to={'about'} title="About">
          <span>About</span>
        </StyledLink>
      </li>
      <li>
        <StyledLink to={'works'} title="Works">
          <span>Works</span>
        </StyledLink>
      </li>
      <li>
        <StyledLink to={'contacts'} title="Contacts">
          <span>Contacts</span>
        </StyledLink>
      </li>
    </NavList>
  );
};

export default MainNavList;
