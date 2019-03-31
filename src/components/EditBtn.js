import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaEdit } from 'react-icons/fa';

const A = styled.a`
  display: block;
  text-align: center;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.green};
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const EditIcon = styled(FaEdit)`
  padding: 0 ${({ theme }) => theme.scale(-8)} 0 0;
`;

const getEditLink = fileAbsolutePath => {
  const path = fileAbsolutePath.split('/src/')[1];
  return `https://github.com/hugomn/hugomn/blob/master/src/${path}`;
};

const getLabel = () => ({
  en: 'Edit',
  nl: 'Aanpassen',
});

const EditBtn = ({ fileAbsolutePath, currentLangKey }) => (
  <A href={getEditLink(fileAbsolutePath)} target="_blank">
    <EditIcon />
    {getLabel()[currentLangKey]}
  </A>
);

EditBtn.propTypes = {
  fileAbsolutePath: PropTypes.string,
  currentLangKey: PropTypes.string,
};

export default EditBtn;
