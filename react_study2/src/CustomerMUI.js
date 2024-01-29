import React, {useState, useEffect} from "react";
import axios from "axios";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const CustomerMUI = ()=> {


    const [data, setData] = useState(null);
    const allCustomer = () => {
        axios.get('http://localhost:8090/test/api/customer/all').then(res=> {
          console.log(res['data']);
          setData(res.data);
        });
    }
    useEffect(()=>{
        allCustomer();
    },[]);
    return (
        <>
            <div style={{width:'800px', margin:'0 auto'}}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>고객 ID</StyledTableCell>
                            <StyledTableCell align="right">고객 이름</StyledTableCell>
                            <StyledTableCell align="right">생일</StyledTableCell>
                            <StyledTableCell align="right">연락처</StyledTableCell>
                            <StyledTableCell align="right">이메일</StyledTableCell>
                            <StyledTableCell align="right">생성일</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data && data.map((c, i) => (
                            <StyledTableRow key={c['ID']}>
                                <StyledTableCell component="th" scope="row" onClick={()=> console.log(c.CUSTOMER_ID)}>
                                    {c['CUSTOMER_ID']}
                                </StyledTableCell>
                                <StyledTableCell align="right">{c['CUSTOMER_NAME']}</StyledTableCell>
                                <StyledTableCell align="right">{c['BIRTH']}</StyledTableCell>
                                <StyledTableCell align="right">{c['PHONE_NUMBER']}</StyledTableCell>
                                <StyledTableCell align="right">{c['EMAIL']}</StyledTableCell>
                                <StyledTableCell align="right">{c['FIRST_REG_DATE']}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </>
    )
}
export default CustomerMUI;