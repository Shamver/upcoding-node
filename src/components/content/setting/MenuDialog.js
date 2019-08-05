import React from 'react';
import * as PropTypes from 'prop-types';
import {
  DialogTitle, TextField, MenuItem, Button, Divider, Dialog, ListItem, List,
} from '@material-ui/core';
import styled from 'styled-components';

const TextFieldW = styled(TextField)`
  width: 450px;
  max-width: 100%;
  margin: 20px !important;
  margin-top: 0px !important;
`;

const ListItemFlex = styled(ListItem)`
  flex-direction: column;
`;

const DialogF = styled(Dialog)`
  margin : 0px;
   & .MuiDialog-paper {
    margin : 20px;
  }
`;

const ButtonH = styled(Button)`
  height : 100%;
`;

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const YN = [
  {
    value: 'Y',
    label: '예',
  },
  {
    value: 'N',
    label: '아니오',
  },
];

const menuGroup = [
  {
    value: '1',
    label: '메뉴 그룹',
  },
  {
    value: '2',
    label: '메뉴',
  },
];

const MenuDialog = (props) => {
  const { onClose, selectedValue, open } = props;

  function handleClose() {
    onClose(selectedValue);
  }

  return (
    <DialogF onClose={handleClose} open={open}>
      <List>
        <DialogTitle>
          메뉴 추가
        </DialogTitle>
        <Divider />
        <ListItemFlex>
          <TextFieldW label="메뉴구분" select>
            {menuGroup.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextFieldW>
          <TextFieldW label="메뉴명" />
          <TextFieldW label="메뉴 URL" helperText="/로 시작, /로 끝날수 없음 | ex) /setting" />
          <TextFieldW label="상위 메뉴" select>
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextFieldW>
          <TextFieldW label="아이콘" helperText="아이콘 종류 + _ + 아이콘 클래스 | ex) fas_cog" />
          <TextFieldW label="사용 여부" helperText="메뉴에 표시 여부" select>
            {YN.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextFieldW>
          <TextFieldW label="관리자 권한 필요 여부" helperText="관리자만 표시하시겠습니까?" select>
            {YN.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextFieldW>
        </ListItemFlex>
      </List>
      <ButtonH variant="contained" color="primary">추가</ButtonH>
    </DialogF>
  );
};

MenuDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MenuDialog;
