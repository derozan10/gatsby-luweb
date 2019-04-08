import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Be from './flags/Be';
import Us from './flags/Us';

const Nav = styled.nav``;

const Ul = styled.ul``;

const Li = styled.li`
  display: inline-block;
  padding: ${props => props.theme.i18n.selectLanguage.li.padding};
  margin: ${props => props.theme.i18n.selectLanguage.li.margin};
  font-size: ${props => props.theme.i18n.selectLanguage.li.fontSize};
  cursor: pointer;
  border-radius: ${props => props.theme.i18n.selectLanguage.li.borderRadius};
  transition: 0.3s;
  background-color: ${props =>
    props.selected ? props.theme.i18n.selectLanguage.li.selected.backgroundColor : `transparent`};

  &:hover {
    background-color: ${props => props.theme.i18n.selectLanguage.li.selected.backgroundColor};
    transition: 0.3s;
  }
`;

const getIcon = langKey => {
  switch (langKey) {
    case 'en':
      return <Us />;
    case 'nl':
      return <Be />;
    default:
      return null;
  }
};

const SelectLanguage = props => {
  const { langs } = props;
  const links = langs.map(lang => (
    <Li key={lang.langKey} selected={lang.selected}>
      <Link to={lang.link}>{getIcon(lang.langKey)}</Link>
    </Li>
  ));

  return (
    <Nav>
      <Ul>{links}</Ul>
    </Nav>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array,
};

export default SelectLanguage;
