import React from 'react';
import Tablet from '../Tablet';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled } from '@mui/material/styles';

// Styled Back Button (ONLY THIS IS RESPONSIVE)
const BackButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  fontSize: '16px',
  padding: '8px 16px',
  borderRadius: '8px',
  fontWeight: 'bold',
  minWidth: '100px',
  position:'absolute',
  top:'1%',
  left:'2%',
  width: 'auto',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
    padding: '6px 12px',
    minWidth: '80px',
  },
}));

function ListPage({ subListHead, totalList, BackBtn }) {
  return (
    <div
      className="TheBoxs"
      style={{
        height: '70vh',
        position: 'absolute',
        top: '25%',
        left: '50%',
        transform: 'translate(-50%, 0%)',
       
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBlock: '5px' }}>
        {/* Only Back Button is Responsive */}
        <BackButton onClick={BackBtn} variant="contained" color="primary" startIcon={<ArrowBackIcon />}>
          Back
        </BackButton>

        <p className="BoxSubHead" style={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>
          {subListHead}
        </p>
      </div>

      <div className="ListTable">
        <Tablet name={totalList} />
      </div>
    </div>
  );
}

export default ListPage;
